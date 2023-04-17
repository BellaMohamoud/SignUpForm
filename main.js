//select all the element
//selectors(class,id)
//or attribute
let firstName=document.querySelector("#firstName");
let lastName=document.querySelector("#LastName");
let password=document.querySelector("#Password");
let confirmPassword=document.querySelector("#ConfirmPassword");
let email=document.querySelector("#email");
let phone=document.querySelector("#phone");
let form=document.querySelector("#register");
let successalert=document.querySelector("#successAlert");
let dangerAlert=document.querySelector("#dangerAlert");
let paswordhelper=document.querySelector("#paswordhelper");
//submit event
form.addEventListener("submit",(event)=>{

    event.preventDefault();
    checemptyfield(firstName);
    checemptyfield(lastName);
    checemptyfield(password);
    checemptyfield(confirmPassword);
    checemptyfield(email);
    checemptyfield(phone);
    checemptyfield(dangerAlert);
     
});
function checemptyfield(field){
    if(field.value==""){
        field.classList.add("border","border-danger");
        
       
        return;
    }
    else{
      
        field.classList.remove("border","border-danger");
        
        return true;
    }
}
