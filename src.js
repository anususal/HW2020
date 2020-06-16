let tasks=[];

function renderEditor(){
    console.log("hi");
    let inputE1=document.querySelector(".addtask");
    let addE1=document.querySelector(".top >button");
    addE1.onclick=(e)=>{
        console.log("add click");
        let newTask={
            title:inputE1.value,
            done:false,
        }
        inputE1.value="";
        tasks.push(newTask);
        console.log("task:",tasks);
        renderTaskItems();

    }
    inputE1.onkeypress=(e)=>{
        console.log(e);
        if(e.key==="Enter"){
            let newTask={
                title:inputE1.value,
                done:false,
            }
            inputE1.value="";
            tasks.push(newTask);
            console.log("task:",tasks);   
            renderTaskItems();
        }
    }


}

function renderTaskItems(){
    let itemsE1=document.querySelector(".todo-input");

    itemsE1.querySelectorAll("div").forEach((node) =>node.remove());
    for(let i=0;i<tasks.length;i++){
        let task=tasks[i];
        let itemE1=document.createElement("div");
       // itemE1.className = "task";

        let doneE1=document.createElement("input");
        doneE1.type="checkbox";
       //doneE1.checked=task.done; 
        doneE1.onchange=(e) =>{
            task.done=e.target.checked;    
        }
        itemE1.append(doneE1);

        let titleE1=document.createElement("label");
        titleE1.innerText=task.title;
        itemE1.append(titleE1);

        let cancelE1=document.createElement("button");
        cancelE1.innerText="X";
        cancelE1.onclick=()=>{
            tasks.splice(i,1);
            renderTaskItems();
        }
        itemE1.append(cancelE1);

        itemsE1.append(itemE1);
    }
}







renderEditor();