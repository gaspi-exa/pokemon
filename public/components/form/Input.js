import useStyles from "../../utils/useStyle.js";

class Input {
  $input = document.createElement("input");
  $placeholder = "";
  $type = "text";
  $errors = [];
  $valid = true;
  $name;

  constructor() {
    useStyles(this.$input, input);
    this.setAttributes();
  }

  setAttributes = () => {
    this.$input.type = this.$type;
    this.$input.placeholder = this.$placeholder;
    this.$input.name = this.$name;
  };

  setType = (type) => {
    this.$type = type;
    this.setAttributes();
  };
  
  setName = (name) => {
    this.$name = name;
    this.setAttributes();
  };

  setPlaceholder = (placeholder) => {
    this.$placeholder = placeholder;
    this.setAttributes();
  };

  getInput = () => {
    return this.$input;
  };

  setErrors = (errors) => {
    this.$errors = errors;
    if (errors?.length) {
      this.$input.classList.add("error");
      this.setValid(false);
      return;
    }
    this.$input.classList.remove("error");
    this.setValid(true);
  };

  setValid = (valid) => {
    this.$valid = valid;
    if (!this.$valid) {
      this.$input.classList.add("error");
      return;
    }
    this.$input.classList.remove("error");
  };

  isValid = () => {
    return this.$valid;
  };
}

const input = {
  height: "50px",
  background: "rgba(0, 0, 0, .5)",
  outline: "none",
  marginBottom: "10px",
  textAlign: "center",
  fontSize: "2em",
  padding: ".5em 0",
  transform: "translateY(0%) rotate(-6deg)",
};

export default Input;
