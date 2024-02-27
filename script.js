const openPopUp = document.querySelector('.open_popUp');
const closePopUp = document.querySelector('.popUp_close');
const popUp = document.querySelector('.popUp');
const btnPopUp = document.querySelector('.btn_popUp');
const btnSub = document.getElementById('btn_sub');


btnSub.addEventListener('click', (e) => {
  e.preventDefault();
});



openPopUp.addEventListener('click', function(e) {
  e.preventDefault()
  popUp.classList.add('active');
  btnPopUp.classList.add('open');
});

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
  btnPopUp.classList.remove('open');
});


// popUp.addEventListener('click', () => {
//   popUp.classList.remove('active');
// })
