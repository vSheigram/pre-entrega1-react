const Footer = () => {

    return (
        <footer className="bg-dark text-white w-100">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Sobre Nosotros</h5>
                        <p>Somos una empresa dedicada a ofrecer los mejores juegos de mesa para todas las edades.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Enlaces Útiles</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Inicio</a></li>
                            <li><a href="#productos" className="text-white productos" onClick={(e) => scrollToSection(e, "productos")}>Productos</a></li>
                            <li><a href="#contacto" className="text-white" onClick={(e) => scrollToSection(e, "contacto")}>Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4" id="contacto">
                        <h5>Contacto</h5>
                        <p>Email: info@amamosjugar.com.ar</p>
                        <p>Teléfono: +54 11 1234-5678</p>
                    </div>
                </div>
                <div className="text-center mt-3 mb-0">
                    <p>&copy; 2025 Amamos Jugar. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
