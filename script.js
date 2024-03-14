const button =document.querySelector("button");
button.addEventListener("click",()=>{
    if(button.innerHTML === "Send Request"){
        button.innerHTML = "Request Sent";
        button.style.backgroundColor="white";
        button.style.color="black";
    }
    else{
        button.innerHTML = "Send Request";
        button.style.backgroundColor="black";
        button.style.color="white";
    }
})