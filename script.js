function tos() {
    document.getElementById("viewport").innerHTML = `
      <iframe src="0-1-0.html" width="75%" height="360">
    `;
    document.getElementById("sizeInput").innerHTML = `
      <a href="0-1-0.html" target="_blank"><button>Open in new window</button></a>
    `;
}

function lightMode() {
  document.getElementById("styles").innerHTML = `
    <link rel="stylesheet" href="light.css">
  `

  document.getElementById("dlMode").innerHTML = `
    <p class="small"><button onclick="darkMode()">Dark Mode</button></p>
  `
}

function darkMode() {
  document.getElementById("styles").innerHTML = `
    <link rel="stylesheet" href="dark.css">
  `
  document.getElementById("dlMode").innerHTML = `
    <p class="small"><button onclick="lightMode()">Light Mode</button></p>
  `
}