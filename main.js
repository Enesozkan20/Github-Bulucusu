import getData from "./api.js";
import { elements } from "./helpers.js";

elements.themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-body")
});

const handleSubmit = (e) => {
    e.preventDefault();
    let userName = e.target[0].value;
    getData(userName);
};
elements.form.addEventListener("submit", handleSubmit);