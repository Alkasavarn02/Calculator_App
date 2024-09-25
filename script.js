const buttonSection = document.querySelector(".ButtonSection")
let evaluateSection = document.querySelector(".evaluateSection")

buttonSection.addEventListener("click",(e)=>{
    
    // If event type is button then it will be considered as input value
    if(e.target.localName === "button"){

        if(e.target.innerText === "RESET"){
            evaluateSection.value = ""
        }
        else if (e.target.innerText === "DEL"){
            evaluateSection.value = evaluateSection.value.slice(0,-1)    
        }
        else if(e.target.innerText === "="){
            evaluateSection.value = eval(evaluateSection.value)
        }
        else{  
            evaluateSection.value += e.target.innerText
        }

    }

})
