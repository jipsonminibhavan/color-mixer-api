changeColor();
function changeColor() {
  const red = document.querySelector("#red").value;
  const green = document.querySelector("#green").value;
  const blue = document.querySelector("#blue").value;
  const color = rgbToHex(parseInt(red), parseInt(green), parseInt(blue));
  document.body.style.backgroundColor = color;
  document.querySelector("#color-value").innerText = " " + color;
}
changeColor();
document.querySelector("#red").addEventListener("input", changeColor);
document.querySelector("#green").addEventListener("input", changeColor);
document.querySelector("#blue").addEventListener("input", changeColor);

function rgbToHex(red, green, blue) {
  let hexRed = red.toString(16);
  let hexGreen = green.toString(16);
  let hexBlue = blue.toString(16);

  return "#" + prefixHex(hexRed) + prefixHex(hexGreen) + prefixHex(hexBlue);
}
function prefixHex(hex) {
  if (hex.length < 2) {
    return "0" + hex;
  } else {
    return hex;
  }
}

document.querySelector("#btn-rndm-clr").addEventListener("click", getRandomColor);

function getRandomColor() {
    fetch("https://dummy-apis.netlify.app/api/color")
    .then(response => response.json())
    .then((data) => {
        console.log(data.color);

        setColor(data.rgb);
        document.body.style.backgroundColor = data.color;
        document.querySelector("#color-value").innerText = "" + data.color;

    });
}
function setColor({r, g, b}) {
    document.querySelector("#red").value = r;
    document.querySelector("#green").value = g;
    document.querySelector("#blue").value = b;
}
