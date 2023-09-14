export const MakeCardAnimation = () => {
  const elementos = document.querySelectorAll('.elemento-animar');

  elementos.forEach(function (elemento, index) {
    setTimeout(function () {
      elemento.classList.add('elemento-activo');
    }, index * 50);
  });
};
