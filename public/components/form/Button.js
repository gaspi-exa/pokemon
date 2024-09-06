import useStyles from "../../utils/useStyle.js";

class Button {
  $button = document.createElement("button");
  $type = "button";
  $text;
  $mode = "primary";

  constructor() {
    useStyles(this.$button, button);
    this.setAttributes();
  }

  setAttributes = () => {
    this.$button.type = this.$type;
    this.$button.innerHTML = this.$text;
    this.$button.classList.add(this.$mode);
  };

  setType = (type) => {
    this.$type = type;
    this.setAttributes();
  };

  setText = (text) => {
    this.$text = text;
    this.setAttributes();
  };

  setMode = (mode) => {
    this.$mode = mode;
    this.setAttributes();
  };

  getButton = () => {
    return this.$button;
  };
}

const button = {
  height: "50px",
  background: "rgba(255, 255, 255, .8)",
  color: "black",
  border: "1px solid gray",
  outline: "none",
  textAlign: "center",
  fontSize: "1.5em",
  padding: ".5em",
  cursor: "pointer",
  transform: "translateY(0%) rotate(-6deg)",
};

export default Button;
