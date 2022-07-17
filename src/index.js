export const paintCards = () => {
  return document
    .querySelectorAll('.item')
    .forEach((elem, index) =>
      index % 2 ? elem : (elem.style.backgroundColor = 'red')
    );
};

export const findElement = () => {
  // for (let elem of document.getElementsByTagName('li')) {
  //   if (elem.matches('.likedItem')) {
  //     return (elem.style.backgroundColor = 'blue');
  //   }
  // }

  // Через nextElementSibling
  let elem = document.querySelector('li');
  while (elem) {
    if (elem.matches('.likedItem')) {
      elem.style.backgroundColor = 'blue';
      break;
    } else {
      elem = elem.nextElementSibling;
    }
  }
};
