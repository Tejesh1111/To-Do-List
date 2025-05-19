const attbtn = document.getElementById("addbtn");
const taskinput = document.getElementById("taskinput");
const tasklist = document.getElementById("tasklist");

addbtn.addEventListener("click" ,function(){
    const tasktext = taskinput.value;
    if(tasktext === ""){
        alert("Please Enter a task!");
        return ;
    }
    const li = document.createElement("li");
    li.innerText = tasktext;
    
    const delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.addEventListener("click",function(){
        li.remove();
    });

    li.appendChild(delbtn);
    tasklist.appendChild(li);

    taskinput.value="";
})