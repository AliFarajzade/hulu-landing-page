const modalElement = document.getElementById('modal');
const closeButton = document.getElementById('close');
const loginButton = document.getElementById('log-in');
const formElement = document.querySelector('form');

const showModal = () => {
  modalElement.classList.remove('hidden');
};

const hideModal = () => {
  modalElement.classList.add('hidden');
};

loginButton.addEventListener('click', showModal);
closeButton.addEventListener('click', hideModal);

formElement.addEventListener('submit', e => {
  e.preventDefault();
  hideModal();
});
