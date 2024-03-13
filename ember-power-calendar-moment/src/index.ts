import {
  dependencySatisfies,
  macroCondition,
  importSync,
} from '@embroider/macros';
import type {
  NormalizeCalendarValue,
  NormalizeMultipleActionValue,
  NormalizeRangeActionValue,
  PowerCalendarDay,
} from 'ember-power-calendar/utils';
import * as momentNs from 'moment';
import type { Moment, DurationInputArg2, unitOfTime } from 'moment';

const moment: typeof momentNs = (() => {
  if (macroCondition(dependencySatisfies('moment-timezone', '*'))) {
    return (importSync('moment-timezone') as { default: typeof momentNs })
      .default;
  } else if (macroCondition(dependencySatisfies('moment', '*'))) {
    return (importSync('moment') as { default: typeof momentNs }).default;
  } else {
    throw new Error(
      `ember-power-calendar-moment was unable to detect either moment-timezone or moment. Please add one of those to your app.`,
    );
  }
})();

type TInclusivity = '()' | '[)' | '(]' | '[]';

export default {
  add,
  formatDate,
  startOf,
  endOf,
  weekday,
  isoWeekday,
  getWeekdaysShort,
  getWeekdaysMin,
  getWeekdays,
  isAfter,
  isBefore,
  isSame,
  isBetween,
  diff,
  normalizeDate,
  normalizeRangeActionValue,
  normalizeMultipleActionValue,
  normalizeCalendarDay,
  withLocale,
  normalizeCalendarValue,
  normalizeDuration,
  getDefaultLocale,
  localeStartOfWeek,
  startOfWeek,
  endOfWeek,
};

export function add(date: Date, quantity: number, unit: string): Date {
  return moment(date)
    .add(quantity, unit as DurationInputArg2)
    .toDate();
}

export function formatDate(
  date: Date,
  format: string,
  locale: string | null = null,
): string {
  if (locale) {
    return withLocale(locale, () => moment(date).format(format)) as string;
  } else {
    return moment(date).format(format);
  }
}

export function startOf(date: Date, unit: string): Date {
  return moment(date)
    .startOf(unit as unitOfTime.StartOf)
    .toDate();
}

export function endOf(date: Date, unit: string): Date {
  return moment(date)
    .endOf(unit as unitOfTime.StartOf)
    .toDate();
}

export function weekday(date: Date): number {
  return moment(date).weekday();
}

export function isoWeekday(date: Date): number {
  return moment(date).isoWeekday();
}

export function getWeekdaysShort(): string[] {
  return moment.weekdaysShort();
}

export function getWeekdaysMin(): string[] {
  return moment.weekdaysMin();
}

export function getWeekdays(): string[] {
  return moment.weekdays();
}

export function isAfter(date1: Date, date2: Date): boolean {
  return moment(date1).isAfter(date2);
}

export function isBefore(date1: Date, date2: Date): boolean {
  return moment(date1).isBefore(date2);
}

export function isSame(date1: Date, date2: Date, unit: string): boolean {
  return moment(date1).isSame(date2, unit as unitOfTime.StartOf);
}

export function isBetween(
  date: Date,
  start: Date,
  end: Date,
  unit?: string,
  inclusivity?: string,
): boolean {
  return moment(date).isBetween(
    start,
    end,
    unit as unitOfTime.StartOf,
    inclusivity as TInclusivity,
  );
}

export function diff(date1: Date, date2: Date): number {
  return moment(date1).diff(date2);
}

export function normalizeDate(dateOrMoment?: unknown): Date | undefined {
  if (dateOrMoment instanceof Date) {
    return dateOrMoment;
  } else if (moment.isMoment(dateOrMoment)) {
    return (dateOrMoment as Moment).toDate();
  }
}

export function normalizeRangeActionValue(val: {
  date: {
    start?: Date | null;
    end?: Date | null;
  };
}): NormalizeRangeActionValue {
  return {
    date: val.date,
    moment: {
      start: val.date.start ? moment(val.date.start) : val.date.start,
      end: val.date.end ? moment(val.date.end) : val.date.end,
    },
  };
}

export function normalizeMultipleActionValue(val: {
  date: Date[];
}): NormalizeMultipleActionValue {
  return {
    date: val.date,
    moment: val.date ? val.date.map((e) => moment(e)) : val.date,
  };
}

export function normalizeCalendarDay(day: PowerCalendarDay): PowerCalendarDay {
  day.moment = moment(day.date);
  day.number = moment(day.date).date();
  day.isCurrentMonth = moment(day.date).month() === moment().month();
  return day;
}

export function withLocale(locale: string, fn: () => unknown): unknown {
  let returnValue;
  if (locale) {
    const previousLocale = moment.locale();
    moment.locale(locale);
    returnValue = fn();
    moment.locale(previousLocale);
  } else {
    returnValue = fn();
  }
  return returnValue;
}

export function normalizeCalendarValue(value: {
  date: Date;
}): NormalizeCalendarValue {
  if (value) {
    return {
      date: value.date,
      moment: value.date ? moment(value.date) : undefined,
    };
  }
  return { date: undefined, moment: undefined };
}

export function normalizeDuration(value: unknown): number | null | undefined {
  if (value === null) {
    return null;
  }
  if (moment.isDuration(value)) {
    return value.asMilliseconds();
  }
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    // let [, quantity, units] = value.match(/(\d+)(.*)/);
    const matches = value.match(/(\d+)(.*)/) ?? [];
    const quantity = matches[1] ?? '';
    const units = (matches[2]?.trim() || 'days') as unitOfTime.Base;
    return moment.duration(parseInt(quantity, 10), units).asMilliseconds();
  }
}

export function getDefaultLocale(): string {
  return moment.locale();
}

export function localeStartOfWeek(locale: string): number {
  const now = new Date();
  const day = withLocale(locale, () =>
    formatDate(startOf(now, 'week'), 'dddd'),
  ) as string;
  const idx = (withLocale(locale, getWeekdays) as string[]).indexOf(day);
  return idx >= 0 ? idx : 0;
}

export function startOfWeek(day: Date, startOfWeek: number): Date {
  while (isoWeekday(day) % 7 !== startOfWeek) {
    day = add(day, -1, 'day');
  }
  return day;
}

export function endOfWeek(day: Date, startOfWeek: number): Date {
  const eow = (startOfWeek + 6) % 7;
  while (isoWeekday(day) % 7 !== eow) {
    day = add(day, 1, 'day');
  }
  return day;
}
