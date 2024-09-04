const injectGlobalStyles = (() => {
  return () => {
    const keyframes = `
            @keyframes moveUp {
              from {
                transform: translateY(100%);
              }
              to {
                transform: translateY(-50%);
              }
            }
          `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
  };
})();

export default injectGlobalStyles;
