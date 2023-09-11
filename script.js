const inputField = document.querySelector('#email');
const errorMssg = document.querySelector('#err');
const button = document.querySelector('#submit');

button.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('clicked');
  const formData = inputField.value;
  if (formData ==='') {
    inputField.style.borderColor = 'red'
    errorMssg.innerHTML = 'Please provide a valid email address';
    errorMssg.style.fontSize = '10px';
    errorMssg.style.color = 'red';
    errorMssg.style.fontStyle = 'italic';
    errorMssg.style.fontFamily = 'inherit';
  }
})