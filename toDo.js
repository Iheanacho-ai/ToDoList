let addTodo = document.querySelector(".addTodo");
let name = document.querySelector(".name");
let search = document.querySelector("#search");
let toDo;
let twoContainer = document.querySelector(".twoContainer");
let twoDiv = document.querySelector(".twoDiv");
let navBar;
let exit;
let Todo = [];
let anothertextNode;
let OGElement;
let breakfast;
let crayon;
let anotherElement;
let thirdElement;
let secondtextNode



let input = prompt("Good Day, what is your name?");
name.textContent = input;

addTodo.addEventListener("click", function(){
    search.style.visibility = "visible";
    if(search.value.length > 0){
        Todo.push(search.value);
        console.log(Todo);
        createToDo();
        
    }
 


});
search.addEventListener("keypress", function(event){
    if(search.value.length > 0 && event.which === 13){ 
        Todo.push(search.value);
        console.log(Todo);
        createToDo();
        
        

    }

  
})

function createToDo(){
    let createElement = document.createElement("button");
    let createTextNode = document.createTextNode(search.value);
    createElement.appendChild(createTextNode);
    twoContainer.appendChild(createElement);
    createElement.setAttribute("class", "crayon");
    search.value = "";
    
    crayon = document.querySelectorAll(".crayon");
     for (let i = 0; i < crayon.length; i++) {
         crayon[i].addEventListener("click", function(){
            twoDiv.innerHTML = '<button class = "navBar" onclick = "goBack()"><div class = "exit" id= "exitOne"></div><div class = "exit" id= "exitTwo"></div></button><h1 class= "Alina">'+this.innerHTML +'</h1><p class = "Topic"> Add Todo </p><div class="search-bar" ><input type="search" id="toDo"></div> '

            toDo = document.querySelector("#toDo");
            console.log(toDo);
            exit = document.querySelector(".exit");
            navBar = document.querySelector("#twoDiv > button");
            console.log(navBar);
            toDo.addEventListener("keypress",function(event){
                if(toDo.value.length > 0 && event.which === 13){ 
                    night();
 
                }
            })  
         })
         
     }
        
}


function goBack(){
    twoDiv.innerHTML ="";
    alert("Thank you for using this app!");
    

}




function night(){
        OGElement = document.createElement("div");
        OGElement.setAttribute("class", "Prettify");
        anotherElement = document.createElement("input");
        anotherElement.setAttribute("type", "checkbox");
        anotherElement.setAttribute("class", "checkbox");
        anothertextNode = document.createTextNode(toDo.value);
        thirdElement = document.createElement("button");
        thirdElement.setAttribute("class", "delete");
        secondtextNode = document.createTextNode("delete");
        thirdElement.appendChild(secondtextNode);
        OGElement.appendChild(anotherElement);
        OGElement.appendChild(anothertextNode);
        OGElement.appendChild(thirdElement);
        twoDiv.appendChild(OGElement);
        breakfast = document.createElement("br");
        twoDiv.appendChild(breakfast);
        toDo.value = "";

        
anotherElement.addEventListener("click", function(){
   OGElement.classList.toggle("style");
    console.log(anotherElement);
})
   
thirdElement.addEventListener("click", function(){
    OGElement.style.display = "none";
}) 
    
}







