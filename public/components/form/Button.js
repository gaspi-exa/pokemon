import useStyles from "../../utils/useStyle.js";

class Button {
  $button = document.createElement("button");
  $type;
  $text;

  constructor() {
    useStyles(this.$button, button);
    this.setAttributes();
  }

  setAttributes = () => {
    this.$button.type = this.$type;
    this.$button.innerHTML = this.$text;
  };

  setType = (type) => {
    this.$type = type;
    this.setAttributes();
  };

  setText = (text) => {
    this.$text = text;
    this.setAttributes();
  };

  getButton = () => {
    return this.$button;
  };
}

const button = {
  height: "50px",
  background: "rgba(0, 0, 0, .5)",
  border: "1px solid gray",
  outline: "none",
  textAlign: "center",
  fontSize: "1.5em",
  padding: ".5em",
  cursor: "pointer",
  transform: "translateY(0%) rotate(-6deg)",
};

export default Button;
