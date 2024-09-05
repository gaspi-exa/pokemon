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
  $method;

  $inputs = [];
  $inputsQuantity = 0;
  $buttons = [];

  constructor(userStatus, isRegistered) {
    this.$userStatus = userStatus;
    this.$isRegistered = isRegistered;
    this.$inputsQuantity = this.$isRegistered ? 2 : 4;
    this.createForm();
  }

  createForm = () => {
    useStyles(this.$form, form);
    if (this.$userStatus === EUserStatus.LOGGED_OUT) {
      for (let i = 0; i < this.$inputsQuantity; i++) {
        this.$inputs.push(new Input());
      }
      this.$inputs.map((input, index) => {
        switch (index) {
          case 0:
            input.setPlaceholder("USER");
            input.setName("name");
            break;
          case 1:
            input.setPlaceholder("EMAIL");
            input.setType("email");
            input.setName("email");
            break;
          case 2:
            input.setPlaceholder("PASSWORD");
            input.setType("password");
            input.setName("password");
            break;
          case 3:
            input.setPlaceholder("REPEAT PASSWORD");
            input.setType("password");
            break;
        }
        input.getInput().oninput = (event) => {
          if (!input.isValid()) {
            input.setValid(true);
            input.getInput().value = event;
          }
        };
        this.$form.appendChild(input.getInput());
      });

      const buttonsSection = document.createElement("section");
      this.$buttons.push(new Button());
      this.$buttons.push(new Button());
      this.$buttons.map((button, index) => {
        if (index === 0) {
          button.setType("submit");
          button.setText(!this.$isRegistered ? "CREATE USER" : "LOG IN");
        } else if (index === 1) {
          button.setText(!this.$isRegistered ? "LOG IN" : "SIGN UP");
          button.setMode("secondary");
        }
        buttonsSection.classList.add("btn-container");
        buttonsSection.appendChild(button.getButton());
      });
      this.$form.appendChild(buttonsSection);

      // this.$form.onsubmit = (event) => {
      //   this.$isRegistered ? this.onLogIn(event) : this.onSignUp(event);
      // };
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

  // onSignUp = (event) => {
  //   // event.preventDefault();
  //   console.log(event);
  //   if (this.isValidForm()) {
  //     // window.open(EModules.ADMIN, "_self");
  //     // window.open("verify", "_self");
  //   }
  // };

  onLogIn = (event) => {
    event.preventDefault();
    if (this.isValidForm()) {
      window.open(EModules.ADMIN, "_self");
    }
  };

  onLogOut = (event) => {
    event.preventDefault();
    window.open(EModules.ADMIN, "_self");
  };

  isValidForm = () => {
    let isValid = true;

    this.$inputs.forEach((input) => {
      if (!input.isValid() || !input.getInput().value.trim()) {
        input.setErrors(["Este campo es obligatorio"]);
        isValid = false;
      }
    });

    return isValid;
  };

  setAction = (action) => {
    this.$action = action;
    this.$form.action = this.$action;
  };

  setMethod = (method) => {
    this.$method = method;
    this.$form.method = this.$method;
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
