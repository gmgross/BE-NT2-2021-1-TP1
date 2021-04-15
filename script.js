const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let contadorTareas = 0
let contadorTareasPorHacer = 0

itemCountSpan.innerHTML = contadorTareas
uncheckedCountSpan.innerHTML = contadorTareasPorHacer

function cambioCheckbox() {
  if (this.checked)
    contadorTareasPorHacer--
  else
    contadorTareasPorHacer++

  renderizaContadores()
}

function eliminarTodo(){
  
  const li = this.parentNode
  const checkbox = li.firstElementChild

  elementosHijos = li.children

  for (let index = 0; index < elementosHijos.length; index++) {
    const element = elementosHijos[index];
    if (element.className === classNames.TODO_CHECKBOX && !element.checked){
      contadorTareasPorHacer--
    }
    
  }
  
  contadorTareas--
  li.remove()
  renderizaContadores()
}

function createTarea(nombreTarea) {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = classNames.TODO_CHECKBOX
  // checkbox.onclick = 
  checkbox.onchange = cambioCheckbox

  const span = document.createElement('span')
  span.className = classNames.TODO_TEXT
  span.setAttribute('mi_atributo', true)
  span.innerHTML = nombreTarea

  const eliminar = document.createElement('button')
  eliminar.innerHTML = 'X'
  eliminar.onclick = eliminarTodo
  eliminar.className = classNames.TODO_DELETE

  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM

  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(eliminar)

  console.log(li);

  return li


}

function renderizaContadores() {
  itemCountSpan.innerHTML = contadorTareas
  uncheckedCountSpan.innerHTML = contadorTareasPorHacer
}

function addTodo() {
  // alert('Boton Add TODO clickeado!')
  let nombreTarea = prompt('Please, add the task!')

  if (nombreTarea) {
    const todo = createTarea(nombreTarea)
    contadorTareas++
    contadorTareasPorHacer++
    list.appendChild(todo)
    renderizaContadores()
  }


}