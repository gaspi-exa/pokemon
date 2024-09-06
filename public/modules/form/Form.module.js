import Form from "../../components/form/Form.js";
import EUserStatus from "../../constants/user-status.js";

class FormModule {
  $root;
  $userStatus;
  $isRegistered;

  constructor(root, userStatus) {
    this.$userStatus = userStatus;
    this.setRoot(root);
  }

  onInit = () => {
    let form;
    if (!this.$userStatus) {
      this.$userStatus = EUserStatus.LOGGED_OUT;
      form = new Form(this.$userStatus, false);
      form.setAction("login");
    } else if (this.$userStatus === EUserStatus.LOGGED_OUT) {
      form = new Form(this.$userStatus, true);
      form.setAction("home");
    } else if (this.$userStatus === EUserStatus.LOGGED_IN) {
      form = new Form(this.$userStatus, false);
      form.setAction("logout");
    }

    form.setMethod("post");
    this.$root.appendChild(form.getform());
  };

  setRoot(root) {
    this.$root = root;
  }
}

export default FormModule;
