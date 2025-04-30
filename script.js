function tos() {
  document.getElementById("viewport").innerHTML = `
    <iframe src="0-1-0.html" width="75%" height="360"></iframe><br>
    <a href="0-1-0.html" target="_blank"><button>Open game</button></a>
    <a href="SpriteEditor.html" target="_blank"><button class="center">Open Icon Editor</button></a><br>
  `
  document.getElementById("AgreeToToS").innerHTML = `
    <a href="TermsOfService.txt" class="small" target="_blank">the terms of service</a>
  `

  document.getElementById("versions").innerHTML = `
    <button onclick="showVersions()" class="center">Show Versions</button>
  `}

// light mode toggle
function lightMode() {
  document.getElementById("styles").innerHTML = `
    <link rel="stylesheet" href="light.css">
  `

  document.getElementById("dlMode").innerHTML = `
    <p class="small"><button onclick="darkMode()">Dark Mode</button></p>
  `
}

// dark mode toggle
function darkMode() {
  document.getElementById("styles").innerHTML = `
    <link rel="stylesheet" href="dark.css">
  `
  document.getElementById("dlMode").innerHTML = `
    <p class="small"><button onclick="lightMode()">Light Mode</button></p>
  `
}

// shows Sprite Editor to the main window
function showSpriteEditor() {
    document.getElementById("spriteEditor").innerHTML = `
    <iframe src="SpriteEditor.html" width="75%" height="360"></iframe>
  `
}

function showVersions() {
  document.getElementById("versions").innerHTML = `
    <p class="small">Version 0.1.0 <a href="0-1-0.html" target="_blank"><button>Open game</button></a></p>
    <p class="small">Version 0.2.0 <a href="0-2-0.html" target="_blank"><button>Open game</button></a></p>
  `
}