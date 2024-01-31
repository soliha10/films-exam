const elFilmList = document.querySelector(".js-film-list");
// console.log(elFilmList);
const filmItem = films;
console.log(filmItem);

for (const film of filmItem) {
  const newItem = document.createElement("li");
  const newItemImage = document.createElement("img");
  const newFilmName = document.createElement("h3");
  const newItemNumber = document.createElement("strong");
  const newGenre = document.createElement("li");
  const newWrapperDesc = document.createElement("div");
  const newDesc = document.createElement("p");
  newWrapperDesc.append(newFilmName, newDesc, newGenre);
  newFilmName.textContent = film.title;
  newItemNumber.textContent = film.id;
  newItemImage.src = film.poster;
  newItemImage.alt = newFilmName + " film";
  newGenre.textContent = film.genres.join(", ");
  newDesc.textContent = film.overview;

  newItem.classList.add("card", "pokemon-item", "film-item", "m-3", "border-2");
  newFilmName.classList.add("mb-3", "film-name");
  newItem.style.width = "300px";
  newItemImage.style.width = "300px";
  newItemImage.style.height = "320px";
  newItemImage.classList.add("item-pic");
  newDesc.classList.add("desc");
  newWrapperDesc.classList.add("desc-wrapper");
  newItemNumber.classList.add("item-number");
  newGenre.classList.add("item-genre")
  newItem.append(newItemImage, newWrapperDesc);
  elFilmList.appendChild(newItem);

}