import useStyles from "../utils/useStyle.js";

class Backdrop {
  $backdrop = document.createElement("div");

  constructor() {
    useStyles(this.$backdrop, styles);
    this.setOpacityAnimation();
  }

  setImage = (url) => {
    this.$backdrop.style.backgroundImage = `url(${url})`;
  };

  getbackdrop = () => {
    return this.$backdrop;
  };

  setOpacityAnimation = () => {
    requestAnimationFrame(() => {
      this.$backdrop.style.opacity = "1";
    });
  };
}

export default Backdrop;

const styles = {
  width: "100dvw",
  height: "100dvh",
  backgroundColor: "#000",
  position: "absolute",
  zIndex: -1,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0,
  transition: "opacity 2s ease-out",
};
