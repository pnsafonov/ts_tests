
import isOdd = require("is-odd");

function test1_is_odd(): void {
    const r1 = isOdd(111);

    console.log(r1);
}

function run_tests_1(): boolean {

    test1_is_odd();

    return true;
}

export {
    run_tests_1
}
