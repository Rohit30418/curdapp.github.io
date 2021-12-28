let rgname=document.querySelector("#rgname");
let rgmail=document.querySelector("#rgmail");
let rgpass=document.querySelector("#rgpass");
let rgcpass=document.querySelector("#rgcpass")
let rgaddress=document.querySelector("#rgaddress")
let signups=document.querySelector(".signupdiv");
let allip=signups.querySelectorAll("input");
var mailfor=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;





function seterror(iptype,msg) {
    iptype.style.border="1px solid red";
    let piptype=iptype.parentElement;
    let small=piptype.querySelector("small");
    small.innerHTML=msg;
    small.classList.add("showerr");
}
   

    function setsuccess(iptype) {
    iptype.style.border="1px solid green";
    let piptype=iptype.parentElement;
    let small=piptype.querySelector("small");
    small.classList.remove("showerr")
}

function signup(){
if(rgname.value==""){
    seterror(rgname,"name can't be blank");
}else if(rgname.value.length<3){
    seterror(rgname,"min 3 char");
}else{
    setsuccess(rgname);
}


if(rgmail.value=="") {
    seterror(rgmail,"mail can't be blankl");
 } else if(!mailfor.test(rgmail.value)){
         seterror(rgmail,"not a valid mail");
 }else{
    setsuccess(rgmail);
 }
  
 if(rgpass.value=="") {
    seterror(rgpass,"password can't be empty");
 } else if(rgpass.value.length<8) {
    seterror(rgpass,"password should be min 8 char");
     
 }else{
     setsuccess(rgpass);
 }


 if(rgcpass.value=="") {
    seterror(rgcpass,"password can't be empty");

 }else if(rgpass.value!=rgcpass.value) {
    seterror(rgcpass,"password did't match");

 }else{
    setsuccess(rgcpass);
 }

 

 if(rgaddress.value==""){
 seterror(rgaddress,"address can't be empty");
 }else{
 setsuccess(rgaddress);
}

addlocal();
}

function addlocal() {
        if(rgname.style.border=="1px solid green"&&rgmail.style.border=="1px solid green"&&rgpass.style.border=="1px solid green"&&rgcpass.style.border=="1px solid green"&&rgaddress.style.border=="1px solid green"){
            localStorage.setItem('data',JSON.stringify([rgmail.value,rgpass.value]));
            alert("successfully registerd")
        }
}

function validate() {
    let udata=JSON.parse(localStorage.getItem("data"));
    console.log(udata);
    let mail=document.getElementById("mail");
    let password=document.getElementById("password");
    if(udata==null||mail.value!=udata[0]&&password.value!=udata[1]) {
        alert("error! either your details are wrong or you are login without register");
    }else{
        alert("successfully logged in")
        window.location.href="hire.html";
    }
}