const inputField = document.querySelector('#email');
const errorMssg = document.querySelector('#err');
const button = document.querySelector('#submit');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = inputField.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const wrongFormat = () => {
    inputField.style.borderColor = 'red'
    errorMssg.innerHTML = 'Please provide a valid email address';
    errorMssg.style.fontSize = '10px';
    errorMssg.style.color = 'red';
    errorMssg.style.fontStyle = 'italic';
    errorMssg.style.fontFamily = 'inherit';
    return false;
  }

  if (formData ==='') {
    wrongFormat();
  } else if (!emailRegex.test(formData)) {
    wrongFormat();
  } else {
    location.reload();
  }
  
})