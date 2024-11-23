import { formData } from "./data.js";
const submit = document.getElementById("form");
submit.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  formData.name = name;
  formData.email = email;
  formData.message = message;

  PNotify.success({
    text: "Data submitted!",
    delay: 2000,
    addClass: "custom-notification",
  });
});
console.log(formData);
