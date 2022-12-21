import dayjs, { extend } from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
extend(localizedFormat);

export function dateFormat (date: string) {
  const currentYear = dayjs().year();
  const dateYear = dayjs(date).year();

  return currentYear === dateYear
    ? dayjs(date).format("MMM DD")
    : dayjs(date).format("MMM DD, YYYY");
}

export function unique (arr: []) {
  return arr.length > 0 ? new Set(arr) : arr;
}

export function findIndex<T> (arr: T[], target: T) {
  return arr.findIndex(el => el === target);
}
