import List from '../componentes/List'
import './Productos.scss';

const Productos = ()=>{


    const Producto = [{
        name: 'Mate Ceramica',
        id: 1 ,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_26521-1b6693be14985e7dd716670733258749-640-0.jpg',
        precio: 1500
        
    },
    {
        name: 'Mate Acero',
        id: 2,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_26041-878f5b929cc2bb77e216670699171115-640-0.jpg',
        precio: 2000
    },
    {
        name: 'Mate Calabaza',
        id: 3,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_26381-c034ce62780a702a9216670728330475-640-0.jpg',
        precio: 2500
    },
    {
        name: 'Bombilla Chata Acero Inoxidable',
        id: 4,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_25971-30f51d3a2daf88e5a816670685403021-640-0.jpg',
        precio: 900
    },
    {
        name: 'Bombilla Resorte Acero Inoxidable',
        id: 5,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_25921-3b33ef6dcdad94867516670683620784-640-0.jpg',
        precio: 1200
    },
    {
        name: 'Bombilla Pico Loro Acero Inoxidable',
        id: 6,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_25841-0bcb47a70f5f0b46d716670674556624-640-0.jpg',
        precio: 1500
     
    },
    {
        name: 'Termo Acero Inoxidable 1 Lts',
        id: 7,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_5230-21-654d300554ae496a0616671632582471-640-0.jpg',
        precio: 5000
    },
    {
        name: 'Termo Acero Inoxidable 1,5 Lts',
        id: 8,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_52501-5d629d8b032c60ac2e16671635549268-640-0.jpg',
        precio: 6500
    },
    {
        name: 'Termo Acero Inoxidable 1,2 Lts',
        id: 9,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_28541-f43449cf58dc4db8d016671616982293-640-0.jpg',
        precio: 5800
    },
    {
        name: 'Matera Canasta Simil Carpincho Suela',
        id: 10,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_51121-909cc018984378f57a16671569878681-640-0.jpg',
        precio: 8000
    },
    {
        name: 'Matera Canasta Simil Cuero Negra',
        id: 11,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_4958-21-b9a91b9911d5a810f316670688573907-640-0.jpg',
        precio: 9500
    },
    {
        name: 'Matera Canasta Simil Cuero Marron',
        id: 12,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_49591-1a5337868899ae504616670691222059-640-0.jpg',
        precio: 11000
    },
    {
        name: 'Azucarera y Yerbera Croco',
        id: 13,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_49181-ca8086f2e920c165be16670606037229-640-0.jpg',
        precio: 1100
    },
    {
        name: 'Azucarera y Yerbera Simil Cuero Negro',
        id: 14,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_49321-6ec84a5ec69847dc0416670656885879-640-0.jpg',
        precio: 800
    },
    {
        name: 'Azucarera y Yerbera Nordica Azul',
        id: 15,
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/433/091/products/img_25801-92fee646eeed68050316670669614853-640-0.jpg',
        precio: 1500
    },


    ]

    
    
     return <div className='colorFondo'>

        <h1 className='TextoCentrado titulo padding-top'>Nuestros Productos</h1>

        <List  listas={Producto}/>


   

     </div>
     

}

export default Productos;