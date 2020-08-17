
import { defLogger } from "../../utils/log";

class HelloSome2 {

    say(): string {
        const msg = "HelloSome2: Hello!"
        defLogger.log(msg);
        return msg;
    }

}

export { HelloSome2 };
