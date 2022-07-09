export const paintCards = () => {
  return document
    .querySelectorAll('.item')
    .forEach((elem, index) =>
      index % 2 ? elem : (elem.style.backgroundColor = 'red')
    );
};

export const findElement = () => {
  for (let elem of document.querySelector('li').nextElementSibling) {
    if (elem.matches('.likedItem')) {
      return (elem.style.backgroundColor = 'blue');
    }
  }
};
