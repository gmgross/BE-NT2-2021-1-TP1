const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  let cantidadItems = 0;
  let cantidadSinCheckear = 0;
  
  function addTodo() {
    //alert('Boton Add TODO clickeado!')
    let texto = prompt('Escriba el nombre del to-do')
    if(texto != null){
      if(texto != ''){
        agregarLinea(texto)
        actualizarNumeros(1,1)
      } else{
        alert('Valor vacio, no se agrega')
      }
    }
  }

  function agregarLinea(texto){
    let linea = document.createElement('li')
    let checkbox = document.createElement('input')
    let label = document.createElement('label')
    checkbox.type = "checkbox"
    checkbox.id = "Checkbox" + cantidadItems
    checkbox.onclick = function(id){cambiarEstado(id)}
    label.textContent = texto

    linea.appendChild(checkbox)
    linea.appendChild(label)

    list.appendChild(linea)
  }

  function actualizarNumeros(total,sinche){
    cantidadItems += total;
    cantidadSinCheckear += sinche;
    itemCountSpan.textContent = cantidadItems;
    uncheckedCountSpan.textContent = cantidadSinCheckear;
  }

  function cambiarEstado(id){
    let checkbox = document.getElementById(id.currentTarget.id)
    if (checkbox.checked == true) {
      actualizarNumeros(0,-1)
    } else {
      actualizarNumeros(0,1)
    }
  }