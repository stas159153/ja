let a = document.querySelector(".box");
let b = document.querySelector(".block");
for(let i = 0;i < 1;i++){
b.addEventListener("click", (event) => {
  event.target.classList.add("box");
  event.target.classList.remove("block");
  a.classList.add("block");
  a.classList.remove("box");
});

a.addEventListener("click", (event) => {
  event.target.classList.add("box");
  event.target.classList.remove("block");
  b.classList.add("block");
  b.classList.remove("box");
});
}

