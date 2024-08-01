import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import "./index.scss";
import { DashboardController } from "./app/components/dashboard/dashboard.controller";
import { AppController } from "./app/components/app/app.controller";
import { LoginController } from "./app/components/login/login.controller";

document.addEventListener("DOMContentLoaded", () => {
    new AppController();
    // new LoginController();
});
