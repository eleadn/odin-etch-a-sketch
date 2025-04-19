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
        div.addEventListener("mouseenter", context => toggleHovered(context.target));
        div.addEventListener("mouseleave", context => toggleHovered(context.target))
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

function toggleHovered(element)
{
    element.classList.toggle("hovered");
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

