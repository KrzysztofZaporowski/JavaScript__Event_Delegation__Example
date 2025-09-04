const boxArea = document.querySelector(".box-area");
const addButton = document.querySelector("header button");

addButton.addEventListener("click", () => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
    <h3>Box #${boxArea.children.length + 1}</h3>
    <p>Click me to remove</p>
    `;
  boxArea.appendChild(box);
});

// Event delegation for removing boxes
boxArea.addEventListener("click", (e) => {
  const box = e.target.closest(".box");
  if (box) {
    console.log("Removing box");
    box.remove();
  }
});
