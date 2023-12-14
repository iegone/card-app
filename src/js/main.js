function titleFunction() {
  let titleInput = document.getElementById("titleInput");

  let title = document.getElementById("title");
  title.innerText = titleInput.value;
}

function descriptionInputfunction() {
  let descriptionInput = document.getElementById("descriptionInput");

  let description = document.getElementById("description");
  description.innerText = descriptionInput.value;
}
let img = document.getElementById("img");
let imgInput = document.getElementById("imgInput");

imgInput.onchange = function () {
  img.src = URL.createObjectURL(imgInput.files[0]);
};
