const btn = document.querySelector('#btn')
const inp = document.querySelector('#inp')
const ul = document.querySelector('#ul')

btn.addEventListener("click", ()=>{
    const li = document.createElement("li");
    const del = document.createElement("button");
    del.innerText = "X";
    li.appendChild(del);
    li.innerText = inp.value;
    ul.appendChild(li);
    inp.value = "";
});