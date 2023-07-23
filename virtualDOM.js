let vDOM =[]; // global state storing the virtual dom
function createDomElements(existingDom, currentDOM ){


    const parentElements = document.getElementById("mainArea")

    let added = 0, updated = 0, deleted = 0;
  
    currentDOM.forEach((item)=>{
  
      existingChild = existingDom.find((child)=>{
       return  child.id === item.id
      })
  
      if(existingChild){
        updated++
        //updating dom
        let existingChild = document.querySelector(`[data-id='${item.id}']`);
        existingChild.children[0].innerText = item.title;
        existingChild.children[1].innerText = item.description
        
        currentChildren = existingDom.filter(item=> item !== existingChild)
      }else{
        added++;
        let newElement = document.createElement("div")
        newElement.dataset.id = item.id
  
        let childElement1 = document.createElement("span");
        childElement1.innerText  = item.title;
  
        let childElement2 = document.createElement("span");
        childElement2.innerText = item.description;
  
        newElement.appendChild(childElement1)
        newElement.appendChild(childElement2)
        
        parentElements.appendChild(newElement)
      }
      
    })
    existingDom.forEach(existingEle=>{
        if(!currentDOM.some(item => item.id === existingEle.id)){
            deleted++
            let childToRemoved = document.querySelector(`[data-id='${existingEle.id}']`)
            parentElements.removeChild(childToRemoved)
        }
    })
    console.log(added,'added')
    console.log(updated,'updated')
    console.log(deleted, 'deleted')
    
  }

  function updatedVirtualDom(data){
    let existingDom = [...vDOM]

    vDOM = data.map(item=>{
        return {
            id: item.id,
            title:item.title,
            description: item.description
        }

    })
    createDomElements(existingDom, vDOM)
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
    updatedVirtualDom(todos)
  }, 5000)
