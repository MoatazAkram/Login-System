var usernameInput = document.getElementById('username')
var useremailInput = document.getElementById('useremail')
var userpasswordInput = document.getElementById('userpassword')

var userArray = []
var user;

let signUp = document.getElementById('signUp');

signUp.addEventListener('click', function(){

      userArray = JSON.parse(localStorage.getItem('usercontainer')) || []
     user = {
        name:usernameInput.value,
        email:useremailInput.value,
        password:userpasswordInput.value
    }

    if(emptyInputs()){
        document.querySelector('#success span').classList.remove('d-none')
    }
    if(emailExist()) return;

    userArray.push(user)
    localStorage.setItem('usercontainer',JSON.stringify(userArray))
    localStorage.setItem('currentuser',JSON.stringify(user))

    

})


function emptyInputs(){
    if(user.name == "" || user.email == "" || user.password == ""){
        document.querySelector('#empty span').classList.remove('d-none')
        document.querySelector('#exist span').classList.add('d-none')
        return false;
    }
    else{
        document.querySelector('#empty span').classList.add('d-none')
        return true;
    }
}

function emailExist(){

    if(user.email == "" || user.name == "" || user.password == ""){
        return false;
    }

    for(let i=0; i<userArray.length; i++){
        if(userArray[i].email == user.email){
            document.querySelector('#exist span').classList.remove('d-none')
            document.querySelector('#success span').classList.add('d-none')
            return true;
        }
    
    }
    document.querySelector('#exist span').classList.add('d-none')
            return false;

}

