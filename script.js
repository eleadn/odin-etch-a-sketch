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

const containerDiv = document.querySelector(".container");
const resetButton = document.querySelector(".resetGrid");

createRows(16, 16, containerDiv);
window.prompt("test");