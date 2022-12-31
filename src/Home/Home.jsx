import './Home.scss';

const Home = ()=>{
    return(

        <div className='colorFondo'> 
            <h1 className='TextoCentrado titulo padding-top'>¿Quienes Somos?</h1>
            <p className='TextoCentrado texto'>

                    En Mate y Bombilla contamos con 15 años de experiencia en el rubro.
                    Tenemos personal calificado para cumplir sus requerimientos y necesidades.


                    Ofrecemos la más amplia variedad de mates y bombillas en el país.
                    Con nosotros encontrarás todo lo referido al mate para todos los gustos y estilos,
                    de la más alta calidad y a precios competitivos.

                    Trabajamos con dedicación pensando en la satisfacción de nuestros clientes.

                    Estamos ubicados en la localidad de Palermo, nuestro personal está para atenderle.
                    ¡Lo esperamos!

            </p>


            <div className='dflex'>
            <div><img className='MedidasFoto padding-left' src="https://preview.redd.it/mlh8txqu1cg71.jpg?width=640&crop=smart&auto=webp&s=ebcfae989b81dd1bde728c4a04c9ac298797285a"/> </div>

            <div><img className='MedidasFoto padding-right' src="https://preview.redd.it/mqqtki5v1cg71.jpg?width=640&crop=smart&auto=webp&s=4b9c43d019d40aa6ce21164a9138f404e36d4299"/> </div>
            </div>
        </div>

        

        
        
    ) 

}

export default Home;