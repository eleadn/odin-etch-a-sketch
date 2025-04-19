function createLine(lineCount, parent)
{
    if (!Number.isInteger(lineCount) || lineCount < 0)
    {
        return;
    }

    for (let i = 0; i < lineCount; ++i)
    {
        let div = document.createElement("div");
        div.classList.add("grid-column");
        div.style.opacity = 0;
        div.addEventListener("mouseenter", context => onMouseEnter(context.target));
        parent.appendChild(div);
    }
}

function createRows(rowCount, lineCount, container)
{
    if (!Number.isInteger(rowCount) || rowCount < 0)
    {
        return;
    }

    for (let i = 0; i < rowCount; ++i)
    {
        let div = document.createElement("div");
        div.classList.add("grid-line");
        createLine(lineCount, div);
        container.appendChild(div);
    }
}

function onMouseEnter(element)
{
    randomColor(element);
    addOpacity(element, 0.1);
}

function clamp(value, min, max)
{
    if (min > max)
    {
        let tmp = min;
        min = max;
        max = tmp;
    }

    return value < min ? min : value > max ? max : value;
}

function addOpacity(element, amount)
{
    element.style.opacity = clamp(Number.parseFloat(element.style.opacity) + amount, 0, 1);
}

function randomColor(element)
{
    let red = Math.floor(Math.random() * 255).toString(16);
    let green = Math.floor(Math.random() * 255).toString(16);
    let blue = Math.floor(Math.random() * 255).toString(16);

    element.style.backgroundColor = "#" + red + green + blue;
}

function removeAllChilds(container)
{
    while (container.firstElementChild)
    {
        container.removeChild(container.lastElementChild);
    }
}

function onButtonClick(containerTarget)
{
    const newGridSize = Number.parseInt(window.prompt("Choose the number of squares to display on a line (1 - 100) :"));

    if (!Number.isInteger(newGridSize))
    {
        alert("You have to enter a number.");
        return;
    }
    if (newGridSize <= 0 || newGridSize > 100)
    {
        alert("The number you enter must be between 1 and 100 (inclusive).")
        return;
    }

    removeAllChilds(containerTarget);
    createRows(newGridSize, newGridSize, containerTarget);
}

const containerDiv = document.querySelector(".container");
const resetButton = document.querySelector(".resetGrid");

resetButton.addEventListener("click", () => onButtonClick(containerDiv));

createRows(16, 16, containerDiv);

