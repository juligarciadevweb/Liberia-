const titulo = document.getElementByID('tit')
const listado = document.getElementByID('lis')

function guardar() 
{
  axios.post("https://localhost:3000/libros", 
  {titulo: titulo.value})
  .then(function(resp){
    alert("Guardado correctamente")
  })
  .catch((err) => {
    alert("Se produjo un error")
  })
}






