
import { defLogger } from "../../utils/log";

class HelloSome1 {

    say(): string {
        const msg = "HelloSome1: Hello!"
        defLogger.log(msg);
        return msg;
    }

}

export { HelloSome1 };
