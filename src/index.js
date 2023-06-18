import "./less/index.less";

// Your code goes here!
console.log("Hello World");

//1-LOAD EVENT
window.onload = function (event) {
  console.log(`Event ${event.type} fired! Ready to go!`);

  const heading = document.querySelector("h1");
  heading.textContent = "READY TO GO";

  //2-COPY EVENT
  window.addEventListener("copy", () => {
    navigator.clipboard.readText().then((text) => {
      heading.textContent += text;
    });
  });

  //3-CLICK
  document.body.addEventListener("click", (event) => {
    event.target.classList.toggle("mirror");
  });

  //4-DblCLICK
  document.body.addEventListener("dblclick", (event) => {
    event.target.innerHTML = "";
  });

  //5-KEYDOWN
  window.addEventListener("keydown", (event) => {
    if (event.key == 6) {
      document.body.innerHTML = "<h1>YOU RAN ORDER 66</h1>";
    }
  });

  //6-MOUSEMOVE
  document.body.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    //console.log(`mouse is at ${clientX}, ${clientY}`);
  });

  //7=MOUSEENTER
  //8-MOUSELEAVE
  const destinations = document.querySelectorAll(".destination");
  for (let destination of destinations) {
    destination.addEventListener("mouseenter", (event) => {
      destination.style.fontWeight = "bold";
    });
    destination.addEventListener("mouseleave", (event) => {
      destination.style.fontWeight = "initial";
    });
  }
};
