import { refs } from "./elements";
import "../css/style.css";
const apiKey = "18624204-8f07c9501328e2a8f9ff8c349";
const baseUrl = "https://pixabay.com/api";
export default {
  _query: "cat",
  page: 1,
  perPage: 12,
  fetchImages() {
    let url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this._query}&page=${this.page}&per_page=12&key=${apiKey}`;
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => displayError(error));
  },
  setPage() {
    return (this.page += 1);
  },
  get query() {
    return this._query;
  },
  set query(newQuery) {
    this._query = newQuery;
  },
};
function displayError(error) {
  const heading = document.createElement("h2");
  heading.textContent = error;
  refs.body.prepend(error);
}

async fetchImages() {
const apiKey = `17634856-dc2baf9a1f19c64e21778`;
const params = `?image_type=photo&orientation=horizontal&q=${this}`
const url = baseUrl + params
console.log(url);

  const res = await fetch(url);
  const getResponse = await res.json();

  this.incrementPage();

  console.log(getResponse);
  return getResponse.hits;
}
