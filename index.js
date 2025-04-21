const i1 = document.getElementById("i1");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const answer = document.getElementById("answer");

let temp;

function mysubmit(event){
    event.preventDefault(); 
    

    temp = Number(i1.value);
    if(r1.checked){
        temp = temp*9/5+32;
        answer.textContent = temp.toFixed(1) +" degrees Fahrenheit";        
    }

    else if(r2.checked){
        temp = (temp-32)*5/9;
        answer.textContent = temp.toFixed(1) +" degrees Celsius";        
    }
    else{
        answer.textContent = "Please Select a Unit";
    }
}
