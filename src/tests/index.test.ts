import { parseBusinessDate } from "../code/index";

test("Test parse business date", () => {
    const inputDate: string = "May 6,2019";
    const outputDate: string = "2019-05-06";
    expect(parseBusinessDate(inputDate)).toBe(outputDate)
})