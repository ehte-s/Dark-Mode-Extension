document.getElementById("toggle").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: toggleDarkMode
    });
});

function toggleDarkMode() {
    let darkModeStyle = document.getElementById("dark-mode-style");
    if (darkModeStyle) {
        darkModeStyle.remove();
    } else {
        let style = document.createElement("style");
        style.id = "dark-mode-style";
        style.innerHTML = `
            * { background-color: #121212 !important; color: #ffffff !important; }
            a { color: #bb86fc !important; }
        `;
        document.head.appendChild(style);
    }
}