const res = require("express/lib/response");
const { response } = require("../app");

function itemTemplate(item) {
  return `<li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-sm mr-1">
        O'zgartirish
      </button>
      <button
        data-id="${item._id}"
        class="delete-me btn btn-danger btn-sm"
      >
        O'chirish
      </button>
    </div>
  </li>`;
}

let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      // console.log(response);
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));

      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("ILtimos qaytadan harakat qiling");
    });
});

document.addEventListener("click", function (e) {
  // Delete operation
  // console.log(e.target);

  if (e.target.classList.contains("delete-me")) {
    // alert("Siz delete-me ni bosdizngiz");
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      //   alert("Yes deb javob berildi");
      //  } else {
      //     alert("No deb javob berildi");
      //   }
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("ILtimos qaytadan harakat qiling");
        });
    }
  }

  // Edit operation
  if (e.target.classList.contains("edit-me")) {
    alert("Siz edit-me ni bosdizngiz");
  }
});
