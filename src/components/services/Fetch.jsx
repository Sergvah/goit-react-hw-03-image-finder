// function fetchData(inputName, page) {
// //   const response = fetch(
// //     `https://pixabay.com/api/?q=${inputName}&page=${page}&key=30566822-5dd8c7f8088312f63e039c329&image_type=photo&orientation=horizontal&per_page=12`
// //   ).then(response => {
// //     return response;
// //   });

const response = (inputName, page) => {
  console.log(inputName, page);
  fetch(
    `https://pixabay.com/api/?q=${inputName}&page=${page}&key=30566822-5dd8c7f8088312f63e039c329&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    console.log(res);
    return res;
  });
};
export default response;

//   console.log(response);
//   return response;
// }
// const api = {
//   fetchData,
// };
// export default api;
