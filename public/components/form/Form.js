import useStyles from "../../utils/useStyle.js";
import EUserStatus from "../../constants/user-status.js";
import Input from "./Input.js";
import Button from "./Button.js";
import EModules from "../../constants/modules.js";

class Form {
  $form = document.createElement("form");
  $userStatus;
  $isRegistered = false;
  $action;

  constructor(userStatus, isRegistered) {
    this.$userStatus = userStatus;
    this.$isRegistered = isRegistered;
    this.createForm();
  }

  createForm = () => {
    useStyles(this.$form, form);
    if (this.$userStatus === EUserStatus.LOGGED_OUT) {
      const input = new Input();
      input.setPlaceholder("USER");
      input.setErrors([""]);
      this.$form.appendChild(input.getInput());

      const input2 = new Input();
      input2.setPlaceholder("PASSWORD");
      input2.setType("password");
      this.$form.appendChild(input2.getInput());

      if (!this.$isRegistered) {
        const input3 = new Input();
        input3.setPlaceholder("REPEAT PASSWORD");
        input3.setType("password");
        this.$form.appendChild(input3.getInput());
      }

      const btn = new Button();
      btn.setType("submit");
      btn.setText(!this.$isRegistered ? "CREATE" : "LOG IN");
      this.$form.appendChild(btn.getButton());

      this.$form.onsubmit = (event) => {
        this.onLogIn(event);
      };
      return;
    }
    if (this.$userStatus === EUserStatus.LOGGED_IN) {
      const btn = new Button();
      btn.setType("submit");
      btn.setText("LOG OUT");
      this.$form.appendChild(btn.getButton());
      this.$form.onsubmit = (event) => {
        this.onLogOut(event);
      };
    }
  };

  onLogIn = (event) => {
    event.preventDefault();
    window.open(EModules.ADMIN, "_self");
  };

  onLogOut = (event) => {
    event.preventDefault();
    window.open(EModules.ADMIN, "_self");
  };

  setAction = (action) => {
    this.$action = action;
  };

  getform = () => {
    return this.$form;
  };
}

const form = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100dvh",
  background: "rgba(0, 0, 0, .5)",
};

export default Form;
