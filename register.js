let form = document.getElementById('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    console.log(email);
    console.log(password);
    localStorage.setItem(email,password);
})
