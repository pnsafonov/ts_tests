
import isOdd = require("is-odd");
import {vsprintf} from "sprintf-js";

function test1_string_format_2(): void {
    // const msg = "a1 = {0}, a2 = {1}".format(1, 2);

    // const msg = sprintf()

    const a1 = "a11111";
    const a2 = 54224;
    const msg = vsprintf("a1 = %s, a2 = %d", [a1, a2]);

    console.log("msg = %s", msg);
}

function test1_string_format_1(): void {
    // const frmt1 = "result is r1 = %s, r2 = %d"
    // const msg1 = frmt1.format()

    const r1 = "something good";
    const r2 = 341;

    const msg = `r1 = ${r1} r2 = ${r2}`;
    console.log("msg = %s", msg);
}

function test1_is_odd(): void {
    const r1 = isOdd(111);

    console.log("r1 = %s, r1 = %d", r1, r1);
}

function run_tests_1(): boolean {

    test1_string_format_2();
    // test1_string_format_1();
    // test1_is_odd();

    return true;
}

export {
    run_tests_1
}
