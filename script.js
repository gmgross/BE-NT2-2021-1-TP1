const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  function addTodo() {
    //alert('Boton Add TODO clickeado!')
    //itemCountSpan = 1;
    let texto = prompt('Escriba el nombre del to-do')
    if(texto != null){
      if(texto != ''){
        agregarLinea(texto)
      }
    }
  }

  function agregarLinea(texto){
    let linea = document.createElement('li')
    let texto = document.createTextNode(texto)
    texto.nodeType = "checkbox"
    linea.nodeType = "checkbox"
    linea.appendChild(texto)
    list.appendChild(linea)
  }