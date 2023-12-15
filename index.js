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

// const projects = [
//   {
//     title: "title",
//     img: "./images/messagingApp.webp",
//     description: "description",
//     techBadge: ["node", "react"],
//   },
// ];

// const projectCardContainer = document.querySelector("card-container");

// const projectCard = document.createElement("div");
// projectCard.classList.add("card");
// projectCard.classList.add("subtle-shadow");
// const projectTitle = document.createElement("h3");
// const projectImg = document.createElement("div");
// const projectDescripiton = document.createElement("p");
// const projectBadges = document.createElement("div");

// projects.forEach(project => {
//     projectTitle.textContent = project.title;

    
//     projectCardContainer.appendChild(projectCard);

// })