

   let userDB = JSON.parse(localStorage.getItem('users'))||[];
 
 let logInForm = document.querySelector('#login')

logInForm.addEventListener('submit',function(event){
  
    event.preventDefault();
    if(logInForm.lEmail.value === 'admin@abc.com'){
        if(logInForm.lPassword.value=='abc@123'){
            alert('login successfull!');
           
            window.location.assign('./admin.html')
        }
        else{
            alert('wrong credentials!')
        }
    }
    else{
        let count = 0;
        userDB.forEach(function(el){
            if(el.email == logInForm.lEmail.value){
                count++;
            }
        })
        if(count==0){
            alert('user not found!');
        }
        else{
            userDB.forEach(function(el){
            if(el.email == logInForm.lEmail.value){
                if(el.password===logInForm.lPassword.value){
                    alert("login successful!");
                    window.location.assign('./index.html');
                }
                else{
                    alert('wrong crendentials!')
                }
            }
        })
        }
    }
})



let createbtn = document.getElementById("create");
console.log(createbtn)
createbtn.addEventListener("click",function(){
    window.location.assign('./createAccount.html');
})