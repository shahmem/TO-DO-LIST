function add() {
  const inputValues = document.getElementById('box').value.trim(); // Trim whitespace
  if (inputValues === '') {
    alert("Please enter an item!");
    return;
  }

  const list = document.createElement("li");

  const indexSpan = document.createElement("span");
  indexSpan.className ="index";
  list.appendChild(indexSpan);

  const span = document.createElement("span");
  span.id = "span";
  span.textContent = inputValues;
  list.appendChild(span);

  // const checkbox =document.createElement("input");
  // checkbox.type = "checkbox";
  //     checkbox.id = "checkbox";
  //     list.appendChild(checkbox);

  const delBtn = document.createElement("button");
  const delimg = document.createElement("img");
  delimg.src = "img/delete.png";
  delBtn.appendChild(delimg);
  delBtn.className = "del";
  list.appendChild(delBtn);

  const editBtn = document.createElement("button");
  const editimg = document.createElement("img");
  editimg.src = "img/edit.png";
  editBtn.appendChild(editimg);
  editBtn.className = "edit";
  list.appendChild(editBtn);

  delBtn.onclick = function () {
    list.remove();
  indexnum();
  };

  editBtn.onclick = function () {
    const isEditing = editBtn.textContent === "save";
    if (!isEditing) {
      editBtn.textContent = "save";
      const changeBox = document.createElement("input");
      changeBox.type = "text";
      changeBox.id = "cbox";
      changeBox.placeholder = "Edit item...";
      changeBox.value = span.textContent;
      list.replaceChild(changeBox, span);
      changeBox.focus();

      changeBox.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          saveEdit(changeBox);
        }
      });

    } 
    else {
      const changeBox = document.getElementById("cbox");
      saveEdit(changeBox);
    }
  };

  function saveEdit(changeBox) {
    if (changeBox.value.trim() === '') {
      alert("Please enter an item!");
      return;
    }
    span.textContent = changeBox.value.trim();
    list.replaceChild(span , changeBox);
    
    editBtn.textContent = ""; 
    editBtn.appendChild(editimg);
  }

  document.getElementById('result').appendChild(list);
  document.getElementById('box').value = ''; 
  document.getElementById('box').focus(); 
  indexnum();
};
function KeyPress(event) {
    if (event.key === 'Enter') {
        add();
    }
};

function indexnum(){
    const listitems = document.querySelectorAll("#result li")
    listitems.forEach((item ,index) => {
        indexSpan = item.querySelector(".index");
        indexSpan.textContent =`${index+1}.`;
    });
}