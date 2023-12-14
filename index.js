const shortStory = document.querySelector("#short");
const longStory = document.querySelector("#long");
const expandButton = document.querySelector("#expand");

expandButton.addEventListener("click", () => {
  if (shortStory.hasAttribute("hidden")) {
    expandButton.textContent = "Expand the story";
    shortStory.removeAttribute("hidden");
    longStory.setAttribute("hidden", "");
  } else {
    expandButton.textContent = "Shrunk the story";
    shortStory.setAttribute("hidden", "");
    longStory.removeAttribute("hidden");
  }
});
