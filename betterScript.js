
function domUpdated(data){

    let added = 0, updated = 0, deleted = 0;
    
    console.log(data,'data')
    const parentElements = document.getElementById("mainArea")
    
    let currentChildren = Array.from(parentElements.children)
  
    data.forEach((item)=>{
  
      existingChild = currentChildren.find((child)=>{
       return  child.dataset.id === item.id
      })
  
      if(existingChild){
        updated++
        //updating dom
        existingChild.children[0].innerText = item.title;
        existingChild.children[1].innerText = item.description
        
        currentChildren = currentChildren.filter(item=> item !== existingChild)
      }else{
        added++;
        let newElement = document.createElement("div")
        newElement.dataset.id = data.id
  
        let childElement1 = document.createElement("span");
        childElement1.innerText  = item.title;
  
        let childElement2 = document.createElement("span");
        childElement2.innerText = item.description;
  
        newElement.appendChild(childElement1)
        newElement.appendChild(childElement2)
        
        parentElements.appendChild(newElement)
      }
      
    })
    currentChildren.forEach(item=>{
      deleted++
      parentElements.removeChild(item)
    })
    console.log(added,'added')
    console.log(updated,'updated')
    console.log(deleted, 'deleted')
    
  }


  window.setInterval(() => {
    let todos = [];
    for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
      todos.push({
        title: "Go to gym",
        description: "Go to gym form 5",
        id: i + 1
      })
    }
    domUpdated(todos)
  }, 1000)