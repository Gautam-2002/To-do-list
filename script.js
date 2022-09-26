const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");
const ul = document.querySelector("#ul");

function swap(a, b) {
  var temp = a.innerText;
  a.innerText = b.innerText;
  b.innerText = temp;
}

btn.addEventListener("click", () => {
  if(inp.value === "")return;
  const li = document.createElement("li");

  const para = document.createElement("p");
  para.classList.add("para");

  const mydiv = document.createElement("div");
  mydiv.classList.add("mydiv");

  para.innerText = inp.value;
  mydiv.appendChild(para);

  const del = document.createElement("button");
  del.classList.add("del");
  del.innerText = "X";
  mydiv.insertBefore(del, mydiv.lastChild);

  const up = document.createElement("button");
  up.classList.add("up");
  up.innerText = "↑";
  mydiv.insertBefore(up, mydiv.lastChild);

  const down = document.createElement("button");
  down.classList.add("down");
  down.innerText = "↓";
  mydiv.insertBefore(down, mydiv.lastChild);

  li.appendChild(mydiv);
  ul.appendChild(li);
  inp.value = "";

  del.addEventListener("click", () => {
    li.remove();
  });
  up.addEventListener("click", () => {
    var curr = para.innerText;
    var litxt = document.querySelectorAll(".para");
    if (litxt.length <= 1 || curr === litxt[0].innerText) {
      console.log("up");
      return;
    }
    let idx = 0;
    for (; idx < litxt.length; idx++) {
      if (curr === litxt[idx].innerText) {
        break;
      }
    }
    swap(litxt[idx - 1], litxt[idx]);
  });
  down.addEventListener("click", () => {
    var curr = para.innerText;
    var litxt = document.querySelectorAll(".para");
    if (litxt.length <= 1 || curr === litxt[litxt.length - 1].innerText) {
      console.log("down");
      return;
    }
    let idx = 0;
    for (; idx < litxt.length; idx++) {
      if (curr === litxt[idx].innerText) {
        break;
      }
    }
    swap(litxt[idx + 1], litxt[idx]);
  });
});
