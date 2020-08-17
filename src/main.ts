
import { HelloSome1 } from "./some/some1/HelloSome1";
import { HelloSome2 } from "./some/some2/HelloSome2";

class HelloMain {

    say(): string {
        const msg = "HelloMain: Hello!"
        console.log(msg);
        return msg;
    }

}


function main() {
    const hm = new HelloMain();
    hm.say();

    const hs1 = new HelloSome1();
    hs1.say();

    const hs2 = new HelloSome2();
    hs2.say();

    console.log("main: done");
}

main()
