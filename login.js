let form = document.getElementById('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    console.log(email);
    console.log(password);
    for(let i=0;i<localStorage.length;i++){
        if(email ===localStorage.key(i)){
            if(localStorage.getItem(email)===password){
                console.log(true);
            }
            else(false);
        }else console.log("email not found");
    }
})
