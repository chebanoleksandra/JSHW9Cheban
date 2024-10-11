let divList = document.querySelectorAll(".block");
for (const item of divList) {
    item.style.width = "1000px";
    item.style.padding = "20px 0 20px 0";
    item.style.height = "180px";
    item.style.marginLeft = "10px";
}

let block1 = document.getElementById("block1");
block1.style.borderBottom = "2px solid rgba(0, 0, 0, .3)";

let block2 = document.getElementById("block2");
block2.style.borderBottom = "2px solid rgba(0, 0, 0, .2)";

let block3 = document.getElementById("block3");
block3.style.borderBottom = "2px solid rgba(0, 0, 0, .1)";

let wrap = document.querySelectorAll(".wrapper");
for (const item of wrap) {
    item.style.width = "100%";
    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.style.alignItems = "baseline";
}

let titles = document.querySelectorAll("h2");
for (const item of titles) {
    item.style.fontFamily = "Roboto";
    item.style.fontWeight = "500";
    item.style.fontSize = "24px";
    item.style.height = "30px";
}

let buttons = document.querySelectorAll("button");
for (const item of buttons) {
    item.style.height = "24px";
    item.style.fontFamily = "Roboto";
    item.style.fontWeight = "400";
    item.style.fontSize = "16px";
}

let paragraphs = document.querySelectorAll("p");
for (const item of paragraphs) {
    item.style.fontFamily = "Roboto";
    item.style.fontWeight = "400";
    item.style.fontSize = "16px";
    item.style.height = "30px";
}