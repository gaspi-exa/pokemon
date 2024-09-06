import Form from "../../components/form/Form.js";
import EUserStatus from "../../constants/user-status.js";

class AuthModule {
  $root;
  $userStatus;
  $isRegistered;

  constructor(root, userStatus) {
    this.$userStatus = userStatus;
    this.setRoot(root);
  }

  onInit = () => {
    let form;
    switch (this.$userStatus) {
      case EUserStatus.UNREGISTERED:
        form = new Form(this.$userStatus, false);
        form.setAction("login");
        break;
      case EUserStatus.LOGGED_OUT:
        form = new Form(this.$userStatus, true);
        form.setAction("home");
        break;
      case EUserStatus.LOGGED_IN:
        form = new Form(this.$userStatus, false);
        form.setAction("logout");
        break;
    }

    form.setMethod("post");
    this.$root.appendChild(form.getform());
  };

  setRoot(root) {
    this.$root = root;
  }
}

export default AuthModule;
