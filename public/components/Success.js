import useStyles from "../utils/useStyle.js";

class Success {
  $success = document.createElement("div");
  $img = document.createElement("img");

  constructor() {
    useStyles(this.$success, container);
    useStyles(this.$img, img);
    this.setImgSource(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31543daa-4bc2-4b07-8d0c-e734fb4948f9/dfl8bfs-048688b0-52b2-4e59-96fd-45c88337abd1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxNTQzZGFhLTRiYzItNGIwNy04ZDBjLWU3MzRmYjQ5NDhmOVwvZGZsOGJmcy0wNDg2ODhiMC01MmIyLTRlNTktOTZmZC00NWM4ODMzN2FiZDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6W4maDC671100zj52pK2f_K4WDr8w8_9wpE5_2if0qU"
    );
    this.$success.appendChild(this.$img);
    this.setAnimation();
  }

  setImgSource(path) {
    this.$img.src = path;
  }

  getSuccess = () => {
    return this.$success;
  };

  setAnimation = () => {
    this.$img.style.animation = "moveUp 1s ease-out forwards";
    requestAnimationFrame(() => {
      this.$success.style.background = "#fff";
    });
  };
}

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100dvw",
  height: "100dvh",
  position: "absolute",
  background: "#000",
  transition: "background 2s ease-out",
};

const img = {
  height: "200px",
  transform: "translateY(100%)",
  position: "relative",
};

export default Success;
