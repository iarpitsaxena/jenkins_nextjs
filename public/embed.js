(function () {
    const button = document.createElement("button");
    button.innerHTML = "💡 Feedback?";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "12px 24px";
    button.style.borderRadius = "10px";
    button.style.backgroundColor = "#222";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.fontWeight = "bold";
    button.style.zIndex = "9999";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.gap = "8px";
    button.style.fontFamily = "system-ui, sans-serif";
    button.style.transition = "transform 0.2s";

    button.onmouseover = function () {
        button.style.transform = "scale(1.08)";
    };

    button.onmouseout = function () {
        button.style.transform = "scale(1)";
    };

    const boardId = document.currentScript.getAttribute("data-board-id");
    button.onclick = function () {
        window.open(`https://feebo.vercel.app/b/${boardId}`, "_blank");
    };

    document.body.appendChild(button);
})();
