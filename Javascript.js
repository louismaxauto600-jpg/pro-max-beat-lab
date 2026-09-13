"use strict";

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const frame =
      document.querySelector(".beat-lab-frame");

    if (!frame) {
      return;
    }

    const loadingMessage =
      document.createElement("div");

    loadingMessage.className =
      "loading-message";

    loadingMessage.textContent =
      "PRO-MAX Beat Lab ap ouvri...";

    document.body.appendChild(
      loadingMessage
    );

    frame.addEventListener(
      "load",
      () => {
        loadingMessage.textContent =
          "PRO-MAX Beat Lab pare.";

        window.setTimeout(
          () => {
            loadingMessage.classList.add(
              "hidden"
            );
          },
          1200
        );
      }
    );

    frame.addEventListener(
      "error",
      () => {
        loadingMessage.textContent =
          "Peze OUVRI BEAT LAB pou kontinye.";
      }
    );
  }
);
