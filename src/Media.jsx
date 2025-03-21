import './Media.css';

const Media = () => {
    return (
        <>
            <div className="social-icons d-none d-sm-block position-fixed" aria-label="Enlaces a nuestras redes sociales">
                <a href="https://www.instagram.com/amamosjugar" target="_blank" aria-label="Visitar nuestro Instagram (se abre en una nueva pestaña)">
                    <i className="bi bi-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://wa.me/5491141748779" target="_blank" rel="noopener noreferrer" aria-label="Contactanos a nuestro Whatsapp (se abre en una nueva pestaña)">
                    <i className="bi bi-whatsapp" aria-hidden="true"></i>
                </a>
                <a href="#" rel="noopener noreferrer" aria-label="Ir hacia arriba">
                    <i class="bi bi-arrow-up-circle"></i>
                </a>
            </div>
        </>
    );
}

export default Media;