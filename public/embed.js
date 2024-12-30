(function () {
    // Check if current URL contains '/b/' path
    if (window.location.pathname.includes("/b/")) {
        return; // Don't create the button on feedback pages
    }

    const script = document.currentScript;
    const button = document.createElement("button");

    // Get customization options from data attributes
    const buttonText = script.getAttribute("data-btn-text") || "💡 Feedback?";
    const backgroundColor = script.getAttribute("data-btn-bg") || "#222";
    const textColor = script.getAttribute("data-btn-color") || "#fff";
    const borderRadius = script.getAttribute("data-btn-radius") || "10";

    button.innerHTML = buttonText;
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "12px 24px";
    button.style.borderRadius = `${borderRadius}px`;
    button.style.backgroundColor = backgroundColor;
    button.style.color = textColor;
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

    const boardId = script.getAttribute("data-board-id");
    button.onclick = function () {
        window.open(`https://feebo.vercel.app/b/${boardId}`, "_blank");
    };

    document.body.appendChild(button);
})();
