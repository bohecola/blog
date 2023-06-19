import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
// eslint-disable-next-line import/no-named-as-default-member
dayjs.extend(localizedFormat);

export function dateFormat (date: string) {
  const currentYear = dayjs().year();
  const dateYear = dayjs(date).year();

  return currentYear === dateYear
    ? dayjs(date).format("MMM DD")
    : dayjs(date).format("MMM DD, YYYY");
}
