(function() {
    let style = document.createElement("style");
    style.id = "dark-mode-style";
    style.innerHTML = `
        * { background-color: #121212 !important; color: #ffffff !important; }
        a { color: #bb86fc !important; }
    `;
    document.head.appendChild(style);
})();