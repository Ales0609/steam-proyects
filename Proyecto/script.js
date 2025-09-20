// Lista de películas disponibles en el catálogo
const peliculas = [
    {
        titulo: "Inception",
        fecha: "16 de Julio 2010",
        imagen: "https://www.themoviedb.org/t/p/w1280/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        resumen: "Inception (2010), dirigida por Christopher Nolan, sigue a Dom Cobb, un ladrón especializado en robar secretos del subconsciente mientras las personas sueñan. Se le ofrece una misión inusual: implantar una idea en la mente de alguien, un proceso llamado origen. Para lograrlo, debe formar un equipo y navegar por sueños dentro de sueños, mientras enfrenta sus propios traumas del pasado."
    },
    {
        titulo: "Interstellar",
        fecha: "7 de Noviembre 2014",
        imagen: "https://es.web.img3.acsta.net/pictures/14/10/02/11/07/341344.jpg",
        resumen: "Interstellar (2014), dirigida por Christopher Nolan, cuenta la historia de un grupo de astronautas que viajan a través de un agujero de gusano en busca de un nuevo planeta habitable, ya que la Tierra está al borde del colapso. El piloto Cooper se une a la misión dejando atrás a su familia, enfrentando decisiones emocionales y desafíos científicos que pondrán a prueba los límites del tiempo, el espacio y la humanidad."
    },
    {
        titulo: "Matrix",
        fecha: "31 de Marzo 1999",
        imagen: "https://play-lh.googleusercontent.com/nTwxPFA8iFB3wrPrkMKtL2OL-XGWwuaRgWUdjkr4UvAKxu4ITuQvo5Mhn3CAPNdKrmPHmA",
        resumen: "Matrix (1999), dirigida por las hermanas Wachowski, sigue a Neo, un hacker que descubre que la realidad que conoce es una simulación creada por máquinas para controlar a la humanidad. Con la ayuda de Morpheus y Trinity, se une a la resistencia para liberar a los humanos del sistema virtual conocido como la Matrix."
    },
    {
        titulo: "Avatar",
        fecha: "18 de Diciembre 2009",
        imagen: "https://play-lh.googleusercontent.com/2RKyd1W-d1ZV6aEPri7I6bd4Ss-0QcgYb9NgaJDDUeJM3BX9g_wHRiFyiPl2EvJvVh-KrA",
        resumen: "Avatar (2009), dirigida por James Cameron, cuenta la historia de Jake Sully, un ex-marine parapléjico que es enviado al planeta Pandora, donde los humanos exploran un entorno alienígena habitado por los Na'vi. A través de un cuerpo avatar, Jake se infiltra entre ellos, pero acaba enfrentando un dilema entre obedecer órdenes humanas o defender el mundo que ha aprendido a amar."
    },
    {
        titulo: "F1",
        fecha: "26 de Junio 2025",
        imagen: "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/inline-images/f1-pelicula-poster.jpeg",
        resumen: "F1 (2025) sigue la historia de un veterano piloto que regresa a la Fórmula 1 para entrenar y competir junto a un joven talento en un equipo ficticio llamado APXGP. La película combina acción real grabada durante Grandes Premios oficiales con drama deportivo, mostrando la intensidad, el riesgo y la pasión del automovilismo de élite."
    },
    {
        titulo: "The Dark Knight",
        fecha: "18 de Julio 2008",
        imagen: "https://es.web.img2.acsta.net/medias/nmedia/18/66/74/01/20350623.jpg",
        resumen: "The Dark Knight (2008), dirigida por Christopher Nolan, muestra a Batman enfrentándose a su enemigo más peligroso: el Joker, un criminal caótico que busca sumir a Gotham en el caos. Mientras lucha por proteger la ciudad, Batman debe tomar decisiones difíciles que pondrán a prueba su moral y el verdadero costo de ser un héroe."
    },
    {
        titulo: "Titanic",
        fecha: "19 de Diciembre 1997",
        imagen: "https://es.web.img3.acsta.net/medias/nmedia/18/86/91/41/19870073.jpg",
        resumen: "Titanic (1997), dirigida por James Cameron, narra la historia de amor entre Jack, un joven artista, y Rose, una aristócrata comprometida, que se conocen a bordo del lujoso transatlántico RMS Titanic. Su romance se desarrolla mientras el barco se dirige a su trágico destino tras chocar con un iceberg."
    }
];

const catalogo = document.getElementById('catalogo');
const inputBusqueda = document.getElementById('busqueda');

// Función que genera y muestra las tarjetas de cada película
function mostrarPeliculas(lista) {
    catalogo.innerHTML = '';

// Recorre cada película de la lista
    lista.forEach(p => {
// Crea el contenedor principal de la tarjeta
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('pelicula');

// Crea el fondo con la imagen de la película
        const fondo = document.createElement('div');
        fondo.classList.add('fondo');
        fondo.style.backgroundImage = `url('${p.imagen}')`; // establece la imagen de fondo

// Contenedor de la información textual
        const info = document.createElement('div');
        info.classList.add('info');

// Título de la película
        const titulo = document.createElement('h2');
        titulo.textContent = p.titulo;

// Fecha de estreno de la película
        const fecha = document.createElement('p');
        fecha.textContent = p.fecha;

// Añade título y fecha al contenedor de info, y añade fondo e info al contenedor de tarjeta
        info.appendChild(titulo);
        info.appendChild(fecha);
        tarjeta.appendChild(fondo);
        tarjeta.appendChild(info);

// Guardar en localStorage y redirige al hacer clic en la tarjeta 
        tarjeta.addEventListener('click', () => {
            localStorage.setItem("peliculaSeleccionada", JSON.stringify(p));
            window.location.href = "detalles.html";
        });

// Añade la tarjeta al catálogo
        catalogo.appendChild(tarjeta);
    });
}

// Escucha cambios en el input de búsqueda, convierte el texto a minúscula, filtra según las coincidencias y muestra el resultado
inputBusqueda.addEventListener('input', () => {
    const filtro = inputBusqueda.value.toLowerCase();
    const filtradas = peliculas.filter(p =>
        p.titulo.toLowerCase().includes(filtro));
    mostrarPeliculas(filtradas);
});

// Muestra todas las películas al inicio
mostrarPeliculas(peliculas);

