import apiService from "../js/apiService";
import markupTempl from "../templates/markup.hbs";
import { refs } from "../js/elements";
import debounce from "lodash.debounce";
import modal from './modal';
console.log(refs);

function RenderItems(data) {
  const items = markupTempl(data);
  refs.list.insertAdjacentHTML("beforeend", items);
  if (refs.list.children) {
    // refs.body.insertAdjacentElement("beforeend", refs.btnLoad);
    refs.btnLoad.classList.add("is-open");
  } else {
    refs.btnLoad.classList.remove("is-open");
  }
}
refs.form.addEventListener(
  "input",
  debounce((event) => {
    event.preventDefault;
    apiService.query = event.target.value;
    renderApi();
    refs.input.value = "";
    refs.list.innerHTML = "";
  }, 500),
);
function renderApi() {
  apiService.fetchImages().then(({ hits }) => RenderItems(hits));
}
refs.btnLoad.addEventListener("click", () => {
  apiService.setPage();
  renderApi();
  console.dir(window)
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: "smooth"
});
});

function loadMore(){
  let currentStart = document.documentElement.offsetHeight;
  apiService.setPage()
  apiService.fetchImages().then(({hits}) => RenderImages (hits))
  window.scrollTo(100, 0)
}

