const moment = require("moment");
/**
 * This function will reformat datetime into YYYY-MM-DD
 * @param candidate A date time string
 */
export function parseBusinessDate(candidate: string): string {
    const date = Date.parse(candidate);
    console.log(date);
    return moment(date).format("YYYY-MM-DD");
}
