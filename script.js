const btn = document.querySelector('#btn')
const inp = document.querySelector('#inp')
const ul = document.querySelector('#ul')

btn.addEventListener("click", ()=>{
    const li = document.createElement("li");

    const mydiv = document.createElement("div");

    const txt = document.createTextNode(inp.value)
    mydiv.appendChild(txt);

    const del = document.createElement("button");
    del.innerText = "X";
    mydiv.insertBefore(del, mydiv.lastChild);

    const up = document.createElement("button");
    up.innerText = "↑";
    mydiv.insertBefore(up, mydiv.lastChild);

    const down = document.createElement("button");
    down.innerText = "↓";
    mydiv.insertBefore(down,mydiv.lastChild);
    
    li.appendChild(mydiv);
    ul.appendChild(li);
    inp.value = "";
});