function pro(){
    let name=document.getElementById("name")
    let password=document.getElementById("password")
    if (name.value===""){
        let para=document.getElementById("para")
        para.textContent="Enter Your Name"
        para.style.color="red"
        // para.style.backgroundColor="red"

    }
    else if(password.value===""){
        let para=document.getElementById("para")
        para.textContent="Enter Your Password"
        para.style.color="blue"
        // para.style.backgroundColor="red"
    }
    else{
        let para=document.getElementById("para")
        para.textContent="Summit Sucessfully"
        para.style.color="green"
        // para.style.backgroundColor="green"
    }

    
}