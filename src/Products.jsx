const Products = () => {
    const productos = [
        {
            nombre: "Memmes",
            precio: 17000,
            imagen: "./img/juegos/memmes/memmes1.png",
            descripcion: "Un juego de cartas para crear memes divertidos.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/memmes"
        },
        {
            nombre: "Cartas Salvajes",
            precio: 30000,
            imagen: "./img/juegos/cartasSalvajes/cartasSalvajes1.png",
            descripcion: "Juego de cartas con desafíos y preguntas salvajes.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/cartas-salvajes"


        },
        {
            nombre: "Dígalo con memes",
            precio: 29999.98,
            imagen: "./img/juegos/digaloConMemes/digaloConMemes1.png",
            descripcion: "Expresa frases famosas utilizando memes.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/digalo-con-memes"
        },
        {
            nombre: "Operación Signo",
            precio: 25500,
            imagen: "./img/juegos/operacionSigno/operacionSigno1.png",
            descripcion: "Juego de mesa para aprender y practicar signos.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/operacion-signo"
        },
        {
            nombre: "Memorias de Julio Verne",
            precio: 26000,
            imagen: "./img/juegos/memoriasDeJulioVerne/memoriasDeJulioVerne1.png",
            descripcion: "Juego de memoria basado en las aventuras de Julio Verne.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/memorias-de-julio-verne"
        },
        {
            nombre: "Teléfono descompuesto",
            precio: 44000,
            imagen: "./img/juegos/telefonoDescompuesto/telefonoDescompuesto1.png",
            descripcion: "Divertido juego donde los mensajes se distorsionan al pasar.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/telefono-descompuesto"
        },
        {
            nombre: "Mis amigas las emociones",
            precio: 17600,
            imagen: "./img/juegos/misAmigasLasEmociones/misAmigasLasEmociones1.png",
            descripcion: "Juego educativo para reconocer y expresar emociones.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/mis-amigas-las-emociones"
        },
        {
            nombre: "Pido la Palabra",
            precio: 24800,
            imagen: "./img/juegos/pidoLaPalabra/pidoLaPalabra1.png",
            descripcion: "Juego de oratoria para mejorar habilidades de comunicación.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/pido-la-palabra"
        },
        {
            nombre: "El cajón de la abuela",
            precio: 17600,
            imagen: "./img/juegos/elCajonDeLaAbuela/elCajonDeLaAbuela1.png",
            descripcion: "Juego de objetos ocultos y recuerdos familiares.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/el-cajon-de-la-abuela"
        },
        {
            nombre: "Originarios",
            precio: 23900,
            imagen: "./img/juegos/originarios/originarios1.png",
            descripcion: "Juego de mesa sobre pueblos originarios y su cultura.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/originarios"
        },
        {
            nombre: "Emociones en equilibrio",
            precio: 18900,
            imagen: "./img/juegos/emocionesEnEquilibrio/emocionesEnEquilibrio1.png",
            descripcion: "Juego para trabajar el equilibrio emocional.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/emociones-en-equilibrio"
        },
        {
            nombre: "Fulbo",
            precio: 30000,
            imagen: "./img/juegos/fulbo/fulbo1.png",
            descripcion: "Juego de cartas que simula un partido de fútbol.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/fulbo"
        },
        {
            nombre: "Blend",
            precio: 9500,
            imagen: "./img/juegos/blend/blend1.png",
            descripcion: "Animate a jugar con los sabores de tu té favorito. ¡Formá colecciones y sumá puntos!",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/blend"
        },
        {
            nombre: "Pez",
            precio: 16000,
            imagen: "./img/juegos/pez/pez1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/pez"
        },
        {
            nombre: "Shima",
            precio: 16000,
            imagen: "./img/juegos/shima/shima1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/shima"
        },
        {
            nombre: "Rio Profundo",
            precio: 12000,
            imagen: "./img/juegos/rioProfundo/rioProfundo1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/rio-profundo"
        },
        {
            nombre: "Depredadores",
            precio: 12000,
            imagen: "./img/juegos/depredadores/depredadores1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/depredadores"
        },
        {
            nombre: "Hormigas",
            precio: 15000,
            imagen: "./img/juegos/hormigas/hormigas1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/hormigas"
        },
        {
            nombre: "Gira gira",
            precio: 16000,
            imagen: "./img/juegos/giraGira/giraGira1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/gira-gira"
        },
        {
            nombre: "Recreo Arcano",
            precio: 25000,
            imagen: "./img/juegos/recreoArcano/recreoArcano1.png",
            descripcion: "Juego de estrategia y magia en una escuela encantada.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/recreo-arcano"
        },
        {
            nombre: "Conspiranoicos",
            precio: 11000,
            imagen: "./img/juegos/conspiranoicos/conspiranoicos1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/conspiranoicos"
        },
        {
            nombre: "Día de Playa",
            precio: 11000,
            imagen: "./img/juegos/diaDePlaya/diaDePlaya1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/dia-de-playa"
        },
        {
            nombre: "Una que pensemos todes",
            precio: 12000,
            imagen: "./img/juegos/unaQuePensemosTodes/unaQuePensemosTodes1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/una-que-pensemos-todxs"
        },
        {
            nombre: "Pica Pica",
            precio: 22000,
            imagen: "./img/juegos/picaPica/picaPica1.png",
            descripcion: "Party game donde debes evitar los picantes y juntar cartas del mismo color.",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/pica-pica"
        },
        {
            nombre: "Dables Lumi",
            precio: 19500,
            imagen: "./img/juegos/dablesLumi/dablesLumi1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/dables-lumi"
        },
        {
            nombre: "Dables Campeón Mundial",
            precio: 11000,
            imagen: "./img/juegos/dablesCampeonMundial/dablesCampeonMundial1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/dables-campeon-mundial"
        },
        {
            nombre: "Dables Latino",
            precio: 11000,
            imagen: "./img/juegos/dablesLatino/dablesLatino1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/dables-latino"
        },
        {
            nombre: "Zoombie Flip",
            precio: 19900,
            imagen: "./img/juegos/zoombieFlip/zoombieFlip1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/zoombie-flip"
        },
        {
            nombre: "Space Rocket",
            precio: 21000,
            imagen: "./img/juegos/spaceRocket/spaceRocket1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/space-rocket"
        },
        {
            nombre: "Me gusta jugar de Anthony Browne",
            precio: 10000,
            imagen: "./img/juegos/meGustaJugarDeAnthonyBrowne/meGustaJugarDeAnthonyBrowne1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/me-gusta-jugar-de-anthony-browne"
        },
        {
            nombre: "Listas las listas",
            precio: 10000,
            imagen: "./img/juegos/listasLasListas/listasLasListas1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/listas-las-listas"
        },
        {
            nombre: "Desafío Vocablos",
            precio: 10000,
            imagen: "./img/juegos/desafioVocablos/desafioVocablos1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/desafio-vocablos"
        },
        {
            nombre: "Palabrerio",
            precio: 10000,
            imagen: "./img/juegos/palabrerio/palabrerio1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/palabrerio"
        },
        {
            nombre: "Florifauna",
            precio: 13000,
            imagen: "./img/juegos/florifauna/florifauna1.jpg",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/florifauna"
        },
        {
            nombre: "Boo",
            precio: 17500,
            imagen: "./img/juegos/boo/boo1.jpg",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/boo"
        },
        {
            nombre: "Adiviná qué tengo",
            precio: 18000,
            imagen: "./img/juegos/adivinaQueTengo/adivinaQueTengo1.jpg",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/adivina-que-tengo"
        },
        {
            nombre: "Snacks",
            precio: 9500,
            imagen: "./img/juegos/snacks/snacks1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/snacks"
        },
        {
            nombre: "Pasaje Alelí",
            precio: 10000,
            imagen: "./img/juegos/pasajeAleli/pasajeAleli1.jpg",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/pasaje-aleli"
        },
        {
            nombre: "Pajaritos",
            precio: 18000,
            imagen: "./img/juegos/pajaritos/pajaritos1.jpg",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/pajaritos"
        },
        {
            nombre: "Dables Clásico",
            precio: 11000,
            imagen: "./img/juegos/dablesClasico/dablesClasico1.png",
            descripcion: "Agregar descripción",
            enlace: "https://amamosjugar.com.ar/juegos-de-mesa/dables-clasico"
        },
    ];

    return (
        <div id="productos" className="container text-center my-5">
            <h1>Nuestros Productos</h1>

            <div className="row text-dark g-4 mt-4">
                {productos.map((producto, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card h-100 border border-dark">
                            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                            <div className="card-body">
                                <h5 className="card-title fs-3">{producto.nombre}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p className="card-text fw-bold">Precio: ${producto.precio}</p>
                                <a href={producto.enlace} className="btn btn-danger" target="_blank" rel="noopener noreferrer">
                                    Más info
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;