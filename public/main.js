import EModules from "./constants/modules.js";
import injectGlobalStyles from "./utils/globalStyles.js";
import HomeModule from "./modules/home/Home.module.js";
import AdminModule from "./modules/admin/Admin.module.js";

injectGlobalStyles();
document.addEventListener("DOMContentLoaded", () => new Main().onInit());

class Main {
  $root;

  onInit = () => {
    this.checkRoots();
    switch (this.$root.id) {
      case EModules.PUBLIC:
        new HomeModule(this.$root).onInit();
        break;
      case EModules.PRIVATE:
        new AdminModule(this.$root).onInit();
        break;
      case EModules.ADMIN:
        new AdminModule(this.$root).onInit();
        break;
    }
  };

  checkRoots = () => {
    const roots = [
      document.getElementById(EModules.PUBLIC),
      document.getElementById(EModules.ADMIN),
      document.getElementById(EModules.PRIVATE),
    ];
    this.$root = roots.find((root) => root !== null);
  };
}
