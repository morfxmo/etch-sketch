const container = document.querySelector(".container");
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
            newDiv.style["backgroundColor"] = "blue";
            newDiv.style["width"] = "3px";
            newDiv.style["height"] = "3px";

            newDiv.addEventListener("mouseenter" , () => {
                newDiv.style["backgroundColor"] = "red";
            })

            container.appendChild(newDiv);
        }
    }
}

function main() {
    let num = prompt("Enter the new number of squares in one row : ");

    while (num > 100) {
        num = prompt("This is too much to handle, enter lower value");
    }

    fillContainer(num);
}

fillContainer(16);
