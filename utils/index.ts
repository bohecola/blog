import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

export function dateFormat(date: string) {
	const currentYear = dayjs().year();
	const dateYear = dayjs(date).year();

	return currentYear === dateYear
		? dayjs(date).format("MMM DD")
		: dayjs(date).format("MMM DD, YYYY");
}
