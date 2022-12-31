import ItemCount from "../ItemCount/ItemCount"

let Listado = []

function modificarCarrito(producto,cantidad){
    

    for (let item of Listado){
      if(item.producto.id == producto.id){
      item.cantidad = cantidad 

      return

      }
    }


    Listado.push({producto:producto, cantidad:cantidad})


    

  }


  


 
 
  const Carrito = { 

    Listado: Listado,
    modificarCarrito: modificarCarrito
    
    
    
    }




  export default Carrito




 