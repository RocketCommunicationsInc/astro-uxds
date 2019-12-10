document.addEventListener("DOMContentLoaded", () => {
  // get the theme toggle element
  const themeSwitcher = Array.prototype.slice.call(
    document.getElementsByClassName("theme-toggle__input")
  );
  const samples = Array.prototype.slice.call(
    document.getElementsByClassName("live-sample")
  );
  let iframes = new Array();

  console.log("themeSwitcher", themeSwitcher);

  for (var iframe of samples) {
    iframes.push(iframe.getElementsByTagName("iframe")[0]);
  }

  // if it exists
  if (themeSwitcher.length) {
    for (let toggle of themeSwitcher) {
      // change event for dark/light theme
      toggle.addEventListener("change", event => {
        // ignore the event when triggered by setAll
        if (event.originalEvent !== undefined) return;

        // set the theme to use
        const message = event.target.checked ? "dark-theme" : "light-theme";

        document.body.classList.remove("light-theme", "dark-theme");
        if (message === "light-theme") {
          document.body.classList.add("light-theme");
          setAll(themeSwitcher, "light");
        } else {
          document.body.classList.add("dark-theme");
          setAll(themeSwitcher, "dark");
        }

        if (iframes.length) {
          iframes.forEach(iframe => {
            // production
            if (window.location.hostname === "localhost") {
              iframe.contentWindow.postMessage(
                message,
                "http://localhost:8080"
              );

              // dev
            } else {
              if (event.target.dataset.storybook) {
                iframe.contentWindow.postMessage(
                  message,
                  "https://astro-components.netlify.com"
                );
              } else {
                iframe.contentWindow.postMessage(
                  message,
                  "https://rocketcom.bitbucket.io"
                );
              }
            }
          });
        }
      });
    }
  }
});
