import type { NormalizeCalendarValue, NormalizeMultipleActionValue, NormalizeRangeActionValue, PowerCalendarDay } from 'ember-power-calendar/utils';
declare const _default: {
    add: typeof add;
    formatDate: typeof formatDate;
    startOf: typeof startOf;
    endOf: typeof endOf;
    weekday: typeof weekday;
    isoWeekday: typeof isoWeekday;
    getWeekdaysShort: typeof getWeekdaysShort;
    getWeekdaysMin: typeof getWeekdaysMin;
    getWeekdays: typeof getWeekdays;
    isAfter: typeof isAfter;
    isBefore: typeof isBefore;
    isSame: typeof isSame;
    isBetween: typeof isBetween;
    diff: typeof diff;
    normalizeDate: typeof normalizeDate;
    normalizeRangeActionValue: typeof normalizeRangeActionValue;
    normalizeMultipleActionValue: typeof normalizeMultipleActionValue;
    normalizeCalendarDay: typeof normalizeCalendarDay;
    withLocale: typeof withLocale;
    normalizeCalendarValue: typeof normalizeCalendarValue;
    normalizeDuration: typeof normalizeDuration;
    getDefaultLocale: typeof getDefaultLocale;
    localeStartOfWeek: typeof localeStartOfWeek;
    startOfWeek: typeof startOfWeek;
    endOfWeek: typeof endOfWeek;
};
export default _default;
export declare function add(date: Date, quantity: number, unit: string): Date;
export declare function formatDate(date: Date, format: string, locale?: string | null): string;
export declare function startOf(date: Date, unit: string): Date;
export declare function endOf(date: Date, unit: string): Date;
export declare function weekday(date: Date): number;
export declare function isoWeekday(date: Date): number;
export declare function getWeekdaysShort(): string[];
export declare function getWeekdaysMin(): string[];
export declare function getWeekdays(): string[];
export declare function isAfter(date1: Date, date2: Date): boolean;
export declare function isBefore(date1: Date, date2: Date): boolean;
export declare function isSame(date1: Date, date2: Date, unit: string): boolean;
export declare function isBetween(date: Date, start: Date, end: Date, unit?: string, inclusivity?: string): boolean;
export declare function diff(date1: Date, date2: Date): number;
export declare function normalizeDate(dateOrMoment?: unknown): Date | undefined;
export declare function normalizeRangeActionValue(val: {
    date: {
        start?: Date | null;
        end?: Date | null;
    };
}): NormalizeRangeActionValue;
export declare function normalizeMultipleActionValue(val: {
    date: Date[];
}): NormalizeMultipleActionValue;
export declare function normalizeCalendarDay(day: PowerCalendarDay): PowerCalendarDay;
export declare function withLocale(locale: string, fn: () => unknown): unknown;
export declare function normalizeCalendarValue(value: {
    date: Date;
}): NormalizeCalendarValue;
export declare function normalizeDuration(value: unknown): number | null | undefined;
export declare function getDefaultLocale(): string;
export declare function localeStartOfWeek(locale: string): number;
export declare function startOfWeek(day: Date, startOfWeek: number): Date;
export declare function endOfWeek(day: Date, startOfWeek: number): Date;
//# sourceMappingURL=index.d.ts.map