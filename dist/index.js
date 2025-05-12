import { macroCondition, dependencySatisfies, importSync } from '@embroider/macros';

const moment = (() => {
  if (macroCondition(dependencySatisfies('moment-timezone', '*'))) {
    return importSync('moment-timezone').default;
  } else if (macroCondition(dependencySatisfies('moment', '*'))) {
    return importSync('moment').default;
  } else {
    throw new Error(`ember-power-calendar-moment was unable to detect either moment-timezone or moment. Please add one of those to your app.`);
  }
})();
var index = {
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
  endOfWeek
};
function add(date, quantity, unit) {
  return moment(date).add(quantity, unit).toDate();
}
function formatDate(date, format, locale = null) {
  if (locale) {
    return withLocale(locale, () => moment(date).format(format));
  } else {
    return moment(date).format(format);
  }
}
function startOf(date, unit) {
  return moment(date).startOf(unit).toDate();
}
function endOf(date, unit) {
  return moment(date).endOf(unit).toDate();
}
function weekday(date) {
  return moment(date).weekday();
}
function isoWeekday(date) {
  return moment(date).isoWeekday();
}
function getWeekdaysShort() {
  return moment.weekdaysShort();
}
function getWeekdaysMin() {
  return moment.weekdaysMin();
}
function getWeekdays() {
  return moment.weekdays();
}
function isAfter(date1, date2) {
  return moment(date1).isAfter(date2);
}
function isBefore(date1, date2) {
  return moment(date1).isBefore(date2);
}
function isSame(date1, date2, unit) {
  return moment(date1).isSame(date2, unit);
}
function isBetween(date, start, end, unit, inclusivity) {
  return moment(date).isBetween(start, end, unit, inclusivity);
}
function diff(date1, date2) {
  return moment(date1).diff(date2);
}
function normalizeDate(dateOrMoment) {
  if (dateOrMoment instanceof Date) {
    return dateOrMoment;
  } else if (moment.isMoment(dateOrMoment)) {
    return dateOrMoment.toDate();
  }
}
function normalizeRangeActionValue(val) {
  return {
    date: val.date,
    moment: {
      start: val.date.start ? moment(val.date.start) : val.date.start,
      end: val.date.end ? moment(val.date.end) : val.date.end
    }
  };
}
function normalizeMultipleActionValue(val) {
  return {
    date: val.date,
    moment: val.date ? val.date.map(e => moment(e)) : val.date
  };
}
function normalizeCalendarDay(day) {
  day.moment = moment(day.date);
  day.number = moment(day.date).date();
  return day;
}
function withLocale(locale, fn) {
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
function normalizeCalendarValue(value) {
  if (value) {
    return {
      date: value.date,
      moment: value.date ? moment(value.date) : undefined
    };
  }
  return {
    date: undefined,
    moment: undefined
  };
}
function normalizeDuration(value) {
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
    const units = matches[2]?.trim() || 'days';
    return moment.duration(parseInt(quantity, 10), units).asMilliseconds();
  }
}
function getDefaultLocale() {
  return moment.locale();
}
function localeStartOfWeek(locale) {
  const now = new Date();
  const day = withLocale(locale, () => formatDate(startOf(now, 'week'), 'dddd'));
  const idx = withLocale(locale, getWeekdays).indexOf(day);
  return idx >= 0 ? idx : 0;
}
function startOfWeek(day, startOfWeek) {
  while (isoWeekday(day) % 7 !== startOfWeek) {
    day = add(day, -1, 'day');
  }
  return day;
}
function endOfWeek(day, startOfWeek) {
  const eow = (startOfWeek + 6) % 7;
  while (isoWeekday(day) % 7 !== eow) {
    day = add(day, 1, 'day');
  }
  return day;
}

export { add, index as default, diff, endOf, endOfWeek, formatDate, getDefaultLocale, getWeekdays, getWeekdaysMin, getWeekdaysShort, isAfter, isBefore, isBetween, isSame, isoWeekday, localeStartOfWeek, normalizeCalendarDay, normalizeCalendarValue, normalizeDate, normalizeDuration, normalizeMultipleActionValue, normalizeRangeActionValue, startOf, startOfWeek, weekday, withLocale };
//# sourceMappingURL=index.js.map
