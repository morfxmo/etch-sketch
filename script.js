const container = document.querySelector(".container");
let mouseIsDown = false;
window.addEventListener("mousedown", () => mouseIsDown = true);
window.addEventListener("mouseup", () => mouseIsDown = false);
container.addEventListener("dragstart", (event) => event.preventDefault());

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click" , resetContainer);

function resetContainer() {
    while (container.lastChild != null) {
        container.removeChild(container.lastChild);
    }
    main();
}

function fillContainer(num) {
    for (let i = 0 ; i < num ; i++) {
        for (let j = 0 ; j < num ; j++) {

            const newDiv = document.createElement("div");
            newDiv.style["width"] = `${(1000 / num)}px`;
            newDiv.style["height"] = `${(450 / num)}px`;
            newDiv.style["border"] = "1px solid black";
            newDiv.style["boxSizing"] = "border-box";

            newDiv.addEventListener("mousedown" , (event) => {
                event.preventDefault();
                if (mouseIsDown)
                    newDiv.style["backgroundColor"] = "black";
            })

            newDiv.addEventListener("mousemove" , () => {
                if (mouseIsDown)
                    newDiv.style["backgroundColor"] = "black";
            })

            container.appendChild(newDiv);
        }
    }
}

function main() {
    let num = prompt("Enter the new number of squares in one row : ");
    while (num > 85) {
        num = prompt("Too much to handle, enter a new value (1 ==> 85)");
    }
    fillContainer(num);
}

fillContainer(16);
