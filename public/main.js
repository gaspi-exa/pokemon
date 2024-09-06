import Route from "./constants/route.js";
import injectGlobalStyles from "./utils/globalStyles.js";
import HomeModule from "./modules/home/Home.module.js";
import AuthModule from "./modules/auth/Auth.module.js";
import AdminModule from "./modules/admin/Admin.module.js";
import EUserStatus from "./constants/user-status.js";

injectGlobalStyles();
document.addEventListener("DOMContentLoaded", () => new Main().onInit());

class Main {
  $root;

  onInit = () => {
    this.checkRoots();
    switch (this.$root.id) {
      case Route.SIGNUP:
        new AuthModule(this.$root, EUserStatus.UNREGISTERED).onInit();
        break;
      case Route.LOGIN:
        new AuthModule(this.$root, EUserStatus.LOGGED_OUT).onInit();
        break;
      case Route.LOGOUT:
        new AuthModule(this.$root, EUserStatus.LOGGED_IN).onInit();
        break;
      case Route.HOME:
        new HomeModule(this.$root).onInit();
        break;
      // case Route.PRIVATE:
      //   new HomeModule(this.$root).onInit();
      //   break;
      // case Route.ADMIN:
      //   new AdminModule(this.$root).onInit();
      //   break;
    }
  };

  checkRoots = () => {
    const roots = [
      document.getElementById(Route.SIGNUP),
      document.getElementById(Route.LOGIN),
      document.getElementById(Route.LOGOUT),
      document.getElementById(Route.HOME),

      document.getElementById(Route.ADMIN),
      document.getElementById(Route.PRIVATE),
    ];
    this.$root = roots.find((root) => root !== null);
  };
}
