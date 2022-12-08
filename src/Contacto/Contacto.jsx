import './Contacto.scss';

const Contacto = ()=>{
    return(
        <div className='colorFondo TextoCentrado padding-top'>
            <h1 className='titulo TextoCentrado'>Contacto</h1>
            <h3>Nos encontramos en</h3>
            <p>Thames 1861, Palermo Viejo
            CABA, Argentina</p>
            <h3>Email</h3>
            <p>info@todomates.com.ar</p>
            <h3>Llamanos al</h3>
            <p>011-4831-2721</p>


            <div className='maps'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6986313799207!2d-58.430603785087186!3d-34.58649136409318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb588c7b9714d%3A0x8542b337ec5800f1!2sTodo%20Mates!5e0!3m2!1ses-419!2sar!4v1670288782557!5m2!1ses-419!2sar" width="900" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>



        
        </div>
        
        
            

        



        
    ) 

}

export default Contacto;