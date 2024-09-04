import Success from "../../components/Success.js";
import EModules from "../../constants/modules.js";

class AdminModule {
  $root;

  constructor(root) {
    this.setRoot(root);
  }

  onInit = () => {
    const success = new Success();
    this.$root.appendChild(success.getSuccess());
    this.$root.onclick = () => {
      window.open(EModules.PUBLIC, "_self");
    };
  };

  setRoot(root) {
    this.$root = root;
  }
}

export default AdminModule;
