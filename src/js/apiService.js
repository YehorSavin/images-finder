const apiKey = "18623840-47c80d0821ce75bcffab3aeb3";
const baseUrl = "https://pixabay.com/api/";
// let query = 'cat';
// let page = 1;
// let perPage = 12;
// const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}=${apiKey}';

export default {
  query: "cat",
  page: 1,
  perPage: 12,

  fetchImages() {
    let url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}=${apiKey}`;
    return fetch(url, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then(({ hits }) => {
        console.log(hits);
        return hits;
      });
  },
};
