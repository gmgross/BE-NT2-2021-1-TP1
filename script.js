const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let totalTarea = 0
let tareasPendientes = 0

function estaOnCheck(item){
  return item.checked
}

function cambioCheckbox() {
  if (estaOnCheck(this))
    tareasPendientes--
  else
    tareasPendientes++
  
  renderizarContadores()
}

function eliminarTodo(){
  const parent = this.parentNode
  const checkbox = parent.firstElementChild
  // const checkbox = parent.children.find(element => element.className == classNames.TODO_CHECKBOX)

  if (!estaOnCheck(checkbox)) {
    tareasPendientes--
  }
  totalTarea--  
  
  parent.remove()

  renderizarContadores()
}

function crearTarea(name) {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.onchange = cambioCheckbox
  // checkbox.onclick = cambioCheckbox
  checkbox.className = classNames.TODO_CHECKBOX


  const span = document.createElement('span')
  span.className = classNames.TODO_TEXT
  span.setAttribute('editable', true)
  span.innerHTML = name


  const eliminar = document.createElement('button')
  eliminar.className = classNames.TODO_DELETE
  eliminar.innerHTML = 'X'
  eliminar.onclick = eliminarTodo

  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(eliminar)

  console.log(li)

  return li

}

function renderizarContadores(){
  itemCountSpan.innerHTML = totalTarea.toString()
  uncheckedCountSpan.innerHTML = tareasPendientes.toString()
}


function addTodo() {

  let nombreTarea = prompt('Nombre de tarea')
  
  if (nombreTarea) {
    const todo = crearTarea(nombreTarea)
    if (todo){
      totalTarea++
      tareasPendientes++
    }
    list.appendChild(todo)
    renderizarContadores()
  }




}