
const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  event.preventDefault();
  
  if (email === '' || password === '') {
    return alert('You must fill all the fields');
  }
  const formResult = {
    email,
    password
  }
  console.log(formResult);
  form.reset();

});