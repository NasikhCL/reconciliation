function renderDomElements(data) {
    console.log(data.length)
    let parentElement = document.getElementById("mainArea");
    parentElement.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      let childElement = document.createElement("div");
      let grandChildElement1 = document.createElement("span")
      grandChildElement1.innerText = data[i].title;
  
      let grandChildElement2 = document.createElement("span");
      grandChildElement2.innerText = data[i].description
  
      let grandChildElement3 = document.createElement("button");
      grandChildElement3.setAttribute("onClick", "deleteTodo(id)")
      grandChildElement3.innerText = "delete"
  
      childElement.appendChild(grandChildElement1);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);
  
      parentElement.appendChild(childElement);
  
  
    }
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
    renderDomElements(todos)
  }, 1000)
  
  