import { LoginView } from "./login.view";
import { LoginModel } from "./login.model";
import { AppView } from "../app/app.view";

export class LoginController {
    view = new LoginView();
    register = new LoginModel();
   

    constructor() {
        console.log("LoginController initialized");
    }
}
