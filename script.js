const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");
let mouseIsDown = false , allBlacked = false;
let blacked = 0;

window.addEventListener("mousedown", () => mouseIsDown = true);
window.addEventListener("mouseup", () => mouseIsDown = false);
container.addEventListener("dragstart", (event) => event.preventDefault());
resetBtn.addEventListener("click" , resetContainer);

function resetContainer() {
    container.innerHTML = "";
    blacked = 0;
    allBlacked = false;
    mouseIsDown = false;
    main();
}

function mark(newDiv , num) {
    if (mouseIsDown) {
        if (newDiv.style["backgroundColor"] !== "black") blacked++;
        newDiv.style["backgroundColor"] = "black";

        if (blacked === num * num && !allBlacked)
            setTimeout(alert("go touch some grass lil bro 🙏🏿") , 100) , allBlacked = true;
    }
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
                mark(newDiv , num);
            })
            newDiv.addEventListener("mousemove" , () => {mark(newDiv , num);});

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
