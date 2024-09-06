import EModules from "./constants/modules.js";
import injectGlobalStyles from "./utils/globalStyles.js";
import HomeModule from "./modules/home/Home.module.js";
import FormModule from "./modules/form/Form.module.js";
// import AdminModule from "./modules/admin/Admin.module.js";
import EUserStatus from "./constants/user-status.js";

injectGlobalStyles();
document.addEventListener("DOMContentLoaded", () => new Main().onInit());

class Main {
  $root;

  onInit = () => {
    this.checkRoots();
    switch (this.$root.id) {
      case EModules.SIGNUP:
        new FormModule(this.$root).onInit();
        break;
      case EModules.LOGIN:
        new FormModule(this.$root, EUserStatus.LOGGED_OUT).onInit();
        break;
      case EModules.PRIVATE:
        new HomeModule(this.$root).onInit();
        break;
      // case EModules.ADMIN:
      //   new AdminModule(this.$root).onInit();
      //   break;
    }
  };

  checkRoots = () => {
    const roots = [
      document.getElementById(EModules.SIGNUP),
      document.getElementById(EModules.LOGIN),
      // document.getElementById(EModules.ADMIN),
      // document.getElementById(EModules.PRIVATE),
    ];
    this.$root = roots.find((root) => root !== null);
  };
}
