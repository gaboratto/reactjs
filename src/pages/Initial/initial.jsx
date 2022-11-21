import Layout from '../../componentes/Layout'
import Navbar from '../../componentes/Navbar'
import List from '../../componentes/List'


const Initial=() =>{
    const Menus = ['Inicio', 'Productos','Contacto']
    const Productos = ['Mate Madera','Mate Acero','Mate Calabaza','Bombilla Pico Loro Acero Inoxidable','Bombilla Resorte Acero Inoxidable','Bombilla Chata Acero Inoxidable','Filtro para Bombilla','Termo Acero Inoxidable 1 Lts','Termo Acero Inoxidable 1,5 Lts','Termo Acero Inoxidable 1,2 Lts']
    return(
        <Layout>
            <Navbar menus={Menus}></Navbar>
            <List listas={Productos}/>
        </Layout>


    )
} 

export default Initial;