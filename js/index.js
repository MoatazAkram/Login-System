var useremailInput = document.getElementById('useremail')
var userpasswordInput = document.getElementById('userpassword')

var userArray = JSON.parse(localStorage.getItem('usercontainer')) || [];
var user;

function login(){

    user = {
        email:useremailInput.value.trim(),
        password:userpasswordInput.value.trim()
    }

    if(!emptyInputs()) return;
    if(!checkdata()) return;
    
    let currentuser = checkdata();
    if(!currentuser) return;
    

    localStorage.setItem('currentuser',JSON.stringify(currentuser))
     window.location.href = "home.html";
    
}

function emptyInputs(){

    if(user.email == "" || user.password == ""){
        document.querySelector('#empty span').classList.remove('d-none')
        document.querySelector('#incorrect span').classList.add('d-none')
        return false;
    }
    else{
        document.querySelector('#empty span').classList.add('d-none')
        return true;
    }
}



function checkdata(){

     userArray = JSON.parse(localStorage.getItem('usercontainer')) || []

     for(let i =0; i<userArray.length; i++){
        if(userArray[i].email == user.email && userArray[i].password == user.password){
            document.querySelector('#incorrect span').classList.add('d-none')
            return userArray[i];
        }
     }
     document.querySelector('#incorrect span').classList.remove('d-none')
     return false;
}









