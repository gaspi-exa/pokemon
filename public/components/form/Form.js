import useStyles from "../../utils/useStyle.js";
import EUserStatus from "../../constants/user-status.js";
import Input from "./Input.js";
import Button from "./Button.js";

class Form {
  $form = document.createElement("form");
  $userStatus;
  $mode;
  $action;

  constructor(userStatus, mode) {
    this.$userStatus = userStatus;
    this.createForm();
  }

  createForm = () => {
    useStyles(this.$form, form);
    if (this.$userStatus === EUserStatus.LOGGED_OUT) {
      const input = new Input();
      const input2 = new Input();
      const btn = new Button();

      input.setPlaceholder("USER");
      input2.setPlaceholder("PASSWORD");
      input2.setType("password");
      btn.setType("submit");
      btn.setText("CREATE");

      this.$form.appendChild(input.getInput());
      this.$form.appendChild(input2.getInput());
      this.$form.appendChild(btn.getButton());

      this.$form.onsubmit = (event) => {
        this.onLogIn(event);
      };
    } else if (this.$userStatus === EUserStatus.LOGGED_IN) {
      const btn = new Button();
      btn.setType("submit");
      btn.setText("LOG OUT");
      this.$form.appendChild(btn);
      this.$form.onsubmit = (event) => {
        this.onLogOut(event);
      };
    }
  };

  onLogIn = (event) => {
    event.preventDefault();
  };

  onLogOut = (event) => {
    event.preventDefault();
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
