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
            <div><img className='MedidasFoto padding-left' src="https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/292302984_10166304005485721_5420656431707474164_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=vxEdnnJEukEAX82L-TO&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfCZ9_l-k61oE1B_CTnDMdAE6_3HAbCPmuwBykguplfG_A&oe=63946AC0"/> </div>

            <div><img className='MedidasFoto padding-right' src="https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/279560672_10166084942615721_317734557393731206_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=vPEBPHpQFlwAX_yTGIc&tn=AFdrkmzDv_07aR29&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfDJr24CF4mKzxV6PJvPojPBLWzZIU6UpmNsEaWJOtux7g&oe=63935525"/> </div>
            </div>
        </div>

        

        
        
    ) 

}

export default Home;