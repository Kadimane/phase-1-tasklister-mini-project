const form= document.querySelector("form#create-task-form");
form.addEventListener("submit", (e) =>{
  console.log(e);
  e.preventDefault();
  console.log(e.target);
  const value = e.target.querySelector("#new-task-description").value
  console.log(value);
  const ul = document.getElementById("tasks");
  const li = document.createElement("li");
  console.log(li);
  li.textContent = value;
  ul.append(li)

})