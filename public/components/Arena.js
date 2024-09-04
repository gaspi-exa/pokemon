import useStyles from "../utils/useStyle.js";

class Arena {
  $arena = document.createElement("div");

  constructor() {
    useStyles(this.$arena, styles);
  }

  getArena = () => {
    return this.$arena;
  };
}

const styles = {
  width: "100%",
  height: "100dvh",
  background: "rgba(0, 0, 0, .5)",
};

export default Arena;