const inputBox = document.getElementById("input-box");
const containerList = document.getElementById("list-container");

const date = new Date(); 

let today = date.toLocaleDateString();

function addValue(){
    if(inputBox.value === ""){
        alert("Non funziona se non inserisci nulla!");
    }
    else if(isNaN(inputBox.value) == true){
        alert("Inserisci un numero!");   
    }
    else{
        let li = document.createElement("LI");
        containerList.appendChild(li); 
        li.innerHTML = today + ": ho fatto " + inputBox.value + " vasche.";
        let span = document.createElement("SPAN");
        li.appendChild(span); 
        span.innerHTML = "\u00d7";  
        if(inputBox.value >= 30){
            alert("brava! :)")
        }; 
    }
    
    inputBox.value = "";
    saveData();

    
}; 


containerList.addEventListener('click', function(e){

 if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

inputBox.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        addValue()
    }
});

function saveData(){
    localStorage.setItem("data", containerList.innerHTML);
} 

function showRows(){
    containerList.innerHTML = localStorage.getItem("data");
} 

showRows(); 
