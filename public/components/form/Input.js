import useStyles from "../../utils/useStyle.js";

class Input {
  $input = document.createElement("input");
  $placeholder = "";
  $type = "text";

  constructor() {
    useStyles(this.$input, input);
    this.setAttributes();
  }

  setAttributes = () => {
    this.$input.type = this.$type;
    this.$input.placeholder = this.$placeholder;
  };

  setType = (type) => {
    this.$type = type;
    this.setAttributes();
  };

  setPlaceholder = (placeholder) => {
    this.$placeholder = placeholder;
    this.setAttributes();
  };

  getInput = () => {
    return this.$input;
  };
}

const input = {
  height: "50px",
  background: "rgba(0, 0, 0, .5)",
  border: "none",
  outline: "none",
  marginBottom: "10px",
  textAlign: "center",
  fontSize: "2em",
  padding: ".5em 0",
  transform: "translateY(0%) rotate(-6deg)",
};

export default Input;
