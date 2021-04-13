const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  class TODO{
    constructor(titulo){
      this.titulo = titulo || 'Tarea sin titulo'
      this.checked = false
      this.element = null // Elemento HTML
      this.checkbox = null// this.checlbox es el elemento checkbox asociado

    }

    toggleCheckbox(){
      
    }


  }

  function crearTarea(tarea){
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.className = classNames.TODO_CHECKBOX
    // checkbox.onchange = cambioCheckbox
    checkbox.tareaRef = tarea

    const span = document.createElement('span')
    span.className = classNames.TODO_TEXT
    span.setAttribute('editable', true)
    span.innerHTML = tarea.titulo

    // const eliminar = document.createElement('button')
    // eliminar.className = classNames.TODO_DELETE
    // eliminar.innerHTML = "X"
    // eliminar.onclick = borrarItem

    const li = document.createElement('li')
    li.className = classNames.TODO_ITEM
    li.appendChild(checkbox)
    li.appendChild(span)
    // li.appendChild(eliminar)

    tarea.element = li
    tarea.checkbox = checkbox

    return li
  }

  function counter(array, fn){
    return array.reduce((elemento, next) => fn(next) ? elemento + 1 : elemento, 0)
  }
  
  function renderizarContadores(){
    itemCountSpan.innerHTML = tareas.length
    uncheckedCountSpan.innerHTML = counter(tareas, tarea => !tarea.checked)
  }

  function render(){
    //limpiar la lista
    list.innerHTML = ''

    tareas.map(crearTarea).forEach(li => {
      list.appendChild(li)
    })

    // tareas.map(tarea => {
    //   return crearTarea(tarea)
    // }).forEach(li => {
    //   list.appendChild(li)
    // })
    
  }


  const tareas = []
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  function addTodo() {
    

    const tarea = new TODO(`Tarea numero ${tareas.length + 1 }`)

    tareas.push(tarea)

    renderizarContadores()
    render()


  }