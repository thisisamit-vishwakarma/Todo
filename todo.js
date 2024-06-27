const div = document.querySelector("div");
const ol = document.querySelector("ol");
const btn = document.querySelector("button");
const ins = document.querySelector("input");

btn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = ins.value;
  li.style.marginBottom = "10px";
  ol.appendChild(li);

  const btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.style.marginLeft = "5px";
  li.appendChild(btn);

  btn.addEventListener("click", function () {
    li.remove();
  });
});
