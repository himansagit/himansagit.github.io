var addButton = document.getElementById("addButton");
var toDoList = document.getElementById("toDoList");
var todoInput = document.getElementById("todoInput");

function markAsDone(event){

    // event.target.parentElement.classList.add("markAsDone")
    this.parentNode.parentNode.style.background="#ff9999"
}
function deleteTodo(){
    this.parentNode.parentNode.remove();
    //   item.parentNode.removeChild(item)
}

function saveEdit(){
    toDoMain=this.parentNode.parentNode;
    // toDoMain.children[0].children[0].innerText=document.getElementById('edited').value;
    // toDoMain.children[0].appendChild(document.createTextNode(document.getElementById('edited').value));
    // toDoMain.children[0].innerText=document.getElementById('edited').value;
    toDoMain.children[0].innerText=toDoMain.children[4].children[0].value;
    toDoMain.children[4].children[0].value='';
    // toDoMain.children[0].display='block';
    for(var i=0;i<4;i++){
        toDoMain.children[i].style.display='block';
    }
    console.log(toDoMain.children.length)
    for(var i=4;i<6;i++){
        toDoMain.children[i].style.display='none';
    }
    // document.getElementById("saveButton").remove();
}

function editing(){
    toDoMain=this.parentNode.parentNode;
    // toDoMain.innerHTML='';
    // var subs=toDoMain.getElementsByClassName("sub");
    // console.log(subs.length);   
    // console.log(toDoMain.children[0].tagName);
    // console.log(toDoMain.length);
    for(var i=0;i<4;i++){
        toDoMain.children[i].style.display='none';
    }
    for(var i=4;i<6;i++){
        toDoMain.children[i].style.display='block';
    }
    
    // var editToDo=document.createElement('div');
    // var editfield=document.createElement('input')
    // editfield.id="edited";
    // editfield.maxLength="20";
    // editfield.placeholder="Enter Todo";
    // editToDo.appendChild(editfield);
    // toDoMain.appendChild(editToDo);

    // var saveToDo=document.createElement('div');
    // var saveButton=document.createElement('Button');
    // saveButton.id="saveButtton";
    // saveButton.innerHTML="Save";
    // saveButton.addEventListener('click',saveEdit);
    //
    // saveButton.addEventListener ("click", function() {
    //     saveEdit(saveButton.id);
        
    //   });
    // saveToDo.appendChild(saveButton);
    // toDoMain.appendChild(saveToDo);
}




// function addToDoListMod(){
//     // var toDoMain = document.createElement('div')
//     var toDoMain=this.parentNode.parentNode;
    
//     // toDoMain.id = String(Math.random());
//     // toDoMain.style.display="flex";
//     // toDoMain.style.padding="10px";

//     var todo = document.createElement('div');
//     var editInput = document.getElementById("edited");
//     todo.appendChild(document.createTextNode(editInput.value));
//     toDoMain.innerHTML='';
//     toDoMain.appendChild(todo);
    

//     var todoX = document.createElement('div');
//     var Xbutton=document.createElement("Button");
//     Xbutton.innerHTML="X";
//     Xbutton.addEventListener("click", deleteTodo);
//     todoX.appendChild(Xbutton);
//     toDoMain.appendChild(todoX);
 


//     var todoEdit = document.createElement('div');
//     var editButton=document.createElement('Button');
//     editButton.innerHTML="Edit";
//     editButton.addEventListener("click",editing);
//     todoEdit.appendChild(editButton);
//     toDoMain.appendChild(todoEdit);

//     var todoDone = document.createElement('div');
//     todoDone.appendChild(document.createTextNode('Done'));
//     toDoMain.appendChild(todoDone);
//     todoDone.addEventListener("click", markAsDone );


//     //toDoList.appendChild(toDoMain);
// }


function addToDoList(){
    var toDoMain = document.createElement('div')
    // toDoMain.background="black";
    toDoMain.id = String(Math.random());

    toDoMain.style.display="flex";
    toDoMain.style.padding="10px";
    toDoMain.style.position="relative";
    toDoMain.style.width="40%";
    // console.log(toDoMain.id)

    var todo = document.createElement('div');
    // todo.margin="10px";
    todo.style.position='relative';
    todo.style.width="200px";
    todo.style.border="2px solid #6fb3b8";
    todo.style.marginRight="10px";

    var Text=document.createTextNode(todoInput.value);
    // todo.innerHTML = todoInput.value;
    // Text.style.textColor="red";
    todo.appendChild(Text);
    todo.class="sub";
    toDoMain.appendChild(todo);

    var todoX = document.createElement('div');
    todoX.style.marginRight="5px";
    var Xbutton=document.createElement("Button");
    Xbutton.innerHTML="X";
    Xbutton.addEventListener("click", deleteTodo);
    todoX.appendChild(Xbutton);
    todoX.class="sub";
    toDoMain.appendChild(todoX);
 


    var todoEdit = document.createElement('div');
    todoEdit.style.marginRight="5px";
    var editButton=document.createElement('Button');
    editButton.innerHTML="Edit";
    editButton.addEventListener("click",editing);
    todoEdit.appendChild(editButton);
    todoEdit.class="sub";
    toDoMain.appendChild(todoEdit);

    var todoDone = document.createElement('div');
    var doneButton=document.createElement('button');
    doneButton.innerHTML="Done";
    doneButton.addEventListener("click", markAsDone);
    todoDone.appendChild(doneButton);
    // todoDone.appendChild(document.createTextNode('Done'));
    todoDone.class="sub";
    toDoMain.appendChild(todoDone);

//changes here
    var editToDo=document.createElement('div');
    editToDo.style.width="200px";
    editToDo.style.border="2px solid #6fb3b8";
    editToDo.style.marginRight="10px";
    editToDo.style.display='none';
    var editfield=document.createElement('input')
    editfield.innerHTML="Enter Todo";
    editfield.maxLength="20";
    editToDo.appendChild(editfield);
    toDoMain.appendChild(editToDo);

    var saveToDo=document.createElement('div');
    saveToDo.style.display='none';
    var saveButton=document.createElement('Button');
    saveButton.id="saveButtton";
    saveButton.innerHTML="Save";
    saveButton.addEventListener('click',saveEdit);
    saveToDo.appendChild(saveButton);
    toDoMain.appendChild(saveToDo);


//--------


    
    // todoDone.addEventListener("click", markAsDone );

    


    toDoList.appendChild(toDoMain);
}
var count=0;
addButton.addEventListener("click", addToDoList );