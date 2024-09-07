import useStyles from "../../utils/useStyle.js";
import EUserStatus from "../../constants/user-status.js";
import Input from "./Input.js";
import Button from "./Button.js";
import EModules from "../../constants/route.js";
import EPokemon from "../../constants/pokemon.js";
import PokemonService from "../../services/pokemon.service.js";

class Form {
  $form = document.createElement("form");
  $userStatus;
  $isRegistered = false;
  $action;
  $method;

  $inputs = [];
  $inputsQuantity = 0;
  $buttons = [];

  $service;
  $pokemonSelected;

  constructor(userStatus, isRegistered) {
    this.$service = new PokemonService();
    this.$userStatus = userStatus;
    this.$isRegistered = isRegistered;
    this.$inputsQuantity = this.$isRegistered ? 2 : 4;
    this.createForm();
  }

  createForm = () => {
    useStyles(this.$form, form);
    this.setBackground();
    if (
      this.$userStatus === EUserStatus.LOGGED_OUT ||
      this.$userStatus === EUserStatus.UNREGISTERED
    ) {
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
            if (this.$userStatus === EUserStatus.UNREGISTERED) {
              input.setPlaceholder("EMAIL");
              input.setType("email");
              input.setName("email");
            } else if (this.$userStatus === EUserStatus.LOGGED_OUT) {
              input.setPlaceholder("PASSWORD");
              input.setType("password");
              input.setName("password");
            }
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
      const buttons = [new Button(), new Button()];
      this.$buttons = [...buttons];
      this.$buttons.map((button, index) => {
        if (index === 0) {
          button.setType("submit");
          button.setText(!this.$isRegistered ? "CREATE USER" : "LOG IN");
        } else if (index === 1) {
          button.setMode("secondary");
          button.setText(!this.$isRegistered ? "LOG IN" : "SIGN UP");
          button.getButton().onclick = (e) => {
            e.preventDefault();
            window.open(!this.$isRegistered ? "login" : "signup", "_self");
          };
        }
        buttonsSection.classList.add("btn-container");
        buttonsSection.appendChild(button.getButton());
      });
      this.$form.appendChild(buttonsSection);

      this.$form.onsubmit = (event) => {
        this.$isRegistered ? this.onLogIn(event) : this.onSignUp(event);
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

  onSignUp = (event) => {
    event.preventDefault();
    if (this.isValidForm()) {
      this.$form.submit();
    }
  };

  onLogIn = (event) => {
    event.preventDefault();
    if (this.isValidForm()) {
      this.$form.submit();
      // window.open(EModules.ADMIN, "_self");
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

  setBackground = () => {
    this.$service.getPokemons().then((next) => {
      this.$pokemonSelected = next.find((pok) => pok.name === EPokemon.MEWTWO);
      this.$form.style.backgroundImage = `url(${this.$pokemonSelected?.url})`;
      this.$form.style.backgroundSize = "cover";
      this.$form.style.backgroundPosition = "center";
    });
  };
}

const form = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100dvh",
  // background: "rgba(0, 0, 0, .7)",
};

export default Form;
