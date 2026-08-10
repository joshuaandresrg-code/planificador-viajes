// =================================================================
// 1. BASE DE DATOS DE DESTINOS (18 Destinos: 6 Playa, 6 Ciudad, 6 Aventura)
// =================================================================
const destinosData = [
    // PLAYA (6)
    {
        id: 1,
        titulo: "Santorini, Grecia",
        categoria: "Playa",
        rating: 4.9,
        precio: 1299,
        duracion: "7 días",
        imagen: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600",
        resumen: "Cúpulas azules, casas blancas y atardeceres impresionantes sobre el Egeo.",
        detalles: "Disfruta de catas de vino local, recorridos por acantilados e islas volcánicas, alojamiento con vista al cráter de la caldera y cenas románticas frente al mar.",
        favorito: false
    },
    {
        id: 2,
        titulo: "Bora Bora, Polinesia Francesa",
        categoria: "Playa",
        rating: 5.0,
        precio: 2499,
        duracion: "6 días",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
        resumen: "Cabañas flotantes sobre aguas cristalinas color turquesa y arrecifes de coral.",
        detalles: "Vive la experiencia de lujo definitiva sumergiéndote con mantarrayas, nadando en lagunas privadas de arrecife y admirando la silueta del volcán Mount Otemanu.",
        favorito: false
    },
    {
        id: 3,
        titulo: "Playa del Carmen, México",
        categoria: "Playa",
        rating: 4.7,
        precio: 799,
        duracion: "5 días",
        imagen: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=600",
        resumen: "Mágicas playas caribeñas, cenotes sagrados y vibrante vida nocturna.",
        detalles: "Visita la famosa Quinta Avenida, explora cenotes de agua dulce escondidos en la selva maya y disfruta de auténtica comida caribeña en la playa.",
        favorito: false
    },
    {
        id: 4,
        titulo: "Las Maldivas",
        categoria: "Playa",
        rating: 4.9,
        precio: 2100,
        duracion: "8 días",
        imagen: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600",
        resumen: "Atolones de arena blanca deslumbrante y santuarios marinos bioluminiscentes.",
        detalles: "Experiencia de aislamiento exclusivo donde podrás hacer esnórquel nocturno con tiburones ballena e ilimitados tratamientos de spa con vista submarina.",
        favorito: false
    },
    {
        id: 5,
        titulo: "Phuket, Tailandia",
        categoria: "Playa",
        rating: 4.6,
        precio: 899,
        duracion: "9 días",
        imagen: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=600",
        resumen: "Isletas de piedra caliza, templos costeros y exquisita gastronomía local.",
        detalles: "Navega en barcos de cola larga hacia las Phi Phi Islands, explora mercados nocturnos de mariscos y relájate en calas escondidas rodeadas de acantilados.",
        favorito: false
    },
    {
        id: 6,
        titulo: "Maui, Hawái",
        categoria: "Playa",
        rating: 4.8,
        precio: 1650,
        duracion: "7 días",
        imagen: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=600",
        resumen: "Playas de arena dorada y roja, avistamiento de ballenas y surf legendario.",
        detalles: "Maneja a través de la escénica ruta hacia Hana, haz snorkel en el cráter sumergido Molokini y contempla amaneceres mágicos desde el cráter del volcán Haleakala.",
        favorito: false
    },

    // CIUDAD (6)
    {
        id: 7,
        titulo: "Tokio, Japón",
        categoria: "Ciudad",
        rating: 4.8,
        precio: 1899,
        duracion: "10 días",
        imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600",
        resumen: "Luces de neón, rascacielos futuristas, templos antiguos y cultura pop.",
        detalles: "Explora la intersección de Shibuya, camina por jardines tradicionales cerca del Palacio Imperial y degusta gastronomía Michelin junto con ramen en callejones secretos.",
        favorito: false
    },
    {
        id: 8,
        titulo: "París, Francia",
        categoria: "Ciudad",
        rating: 4.7,
        precio: 1450,
        duracion: "6 días",
        imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600",
        resumen: "La ciudad de la luz, arte de clase mundial, moda e icónica arquitectura.",
        detalles: "Sube a la Torre Eiffel, explora las galerías del Museo del Louvre, pasea por el bohemio barrio de Montmartre y disfruta de croissants frescos a orillas del Sena.",
        favorito: false
    },
    {
        id: 9,
        titulo: "Nueva York, EE. UU.",
        categoria: "Ciudad",
        rating: 4.8,
        precio: 1599,
        duracion: "5 días",
        imagen: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600",
        resumen: "La urbe que nunca duerme, con musicales de Broadway y horizontes imponentes.",
        detalles: "Recorre Central Park en bicicleta, asiste a un espectáculo en Broadway, cruza el emblemático puente de Brooklyn al atardecer y sube al Empire State Building.",
        favorito: false
    },
    {
        id: 10,
        titulo: "Londres, Reino Unido",
        categoria: "Ciudad",
        rating: 4.6,
        precio: 1390,
        duracion: "7 días",
        imagen: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600",
        resumen: "Historia real, museos fabulosos, arquitectura gótica y barrios cosmopolitas.",
        detalles: "Observa el cambio de guardia en Buckingham Palace, recorre las exposiciones del British Museum y disfruta del ambiente multicultural en Camden Market.",
        favorito: false
    },
    {
        id: 11,
        titulo: "Roma, Italia",
        categoria: "Ciudad",
        rating: 4.9,
        precio: 1150,
        duracion: "6 días",
        imagen: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=600",
        resumen: "Un museo al aire libre repleto de monumentos antiguos y pasta artesanal.",
        detalles: "Descubre los secretos del Coliseo y Foro Romano, lanza una moneda en la Fontana di Trevi, pasea por el Vaticano y deléitate con gelato tradicional italiano.",
        favorito: false
    },
    {
        id: 12,
        titulo: "Seúl, Corea del Sur",
        categoria: "Ciudad",
        rating: 4.8,
        precio: 1350,
        duracion: "8 días",
        imagen: "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=600",
        resumen: "Palacios reales centenarios combinados con tecnología punta y cultura K-Pop.",
        detalles: "Vístete con Hanbok para entrar gratis al Palacio Gyeongbokgung, compra cosmética de vanguardia en Myeongdong y disfruta de barbacoa surcoreana en Hongdae.",
        favorito: false
    },

    // AVENTURA (6)
    {
        id: 13,
        titulo: "Bali, Indonesia",
        categoria: "Aventura",
        rating: 4.7,
        precio: 999,
        duracion: "8 días",
        imagen: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600",
        resumen: "Templos rodeados de selva, exuberantes terrazas de arroz y cascadas.",
        detalles: "Realiza caminatas por el volcán activo Batur al amanecer, practica rafting en ríos de montaña, explora santuarios de monos y medita en retiros de yoga en Ubud.",
        favorito: false
    },
    {
        id: 14,
        titulo: "Machu Picchu, Perú",
        categoria: "Aventura",
        rating: 5.0,
        precio: 1100,
        duracion: "6 días",
        imagen: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=600",
        resumen: "La ciudad perdida de los Incas enclavada entre picos andinos místicos.",
        detalles: "Recorre el milenario Camino Inca, admira la ingeniería ancestral entre las nubes, explora Cusco colonial y viaja en el tren panorámico Vistadome.",
        favorito: false
    },
    {
        id: 15,
        titulo: "Queenstown, Nueva Zelanda",
        categoria: "Aventura",
        rating: 4.9,
        precio: 1780,
        duracion: "9 días",
        imagen: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=600",
        resumen: "La capital mundial de los deportes extremos y paisajes de película.",
        detalles: "Lánzate en bungeejumping desde el histórico puente Kawarau, haz lancha rápida jetboat por cañones estrechos y camina entre los glaciares alpinos.",
        favorito: false
    },
    {
        id: 16,
        titulo: "Banff, Canadá",
        categoria: "Aventura",
        rating: 4.9,
        precio: 1400,
        duracion: "7 días",
        imagen: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=600",
        resumen: "Lagos turquesa deslumbrantes y picos nevados en las Montañas Rocosas.",
        detalles: "Rema en kayak sobre las frías e impactantes aguas del Lake Louise, realiza senderismo entre bosques habitados por fauna silvestre y relájate en termas naturales.",
        favorito: false
    },
    {
        id: 17,
        titulo: "Monteverde, Costa Rica",
        categoria: "Aventura",
        rating: 4.8,
        precio: 850,
        duracion: "5 días",
        imagen: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?q=80&w=600",
        resumen: "Bosque nuboso con biodiversidad única, puentes colgantes y tirolesas.",
        detalles: "Vuela sobre las copas de los árboles en una de las tirolesas más largas de América, realiza caminatas nocturnas en la reserva y avista al esplendoroso quetzal.",
        favorito: false
    },
    {
        id: 18,
        titulo: "Reikiavik, Islandia",
        categoria: "Aventura",
        rating: 4.9,
        precio: 1950,
        duracion: "7 días",
        imagen: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=600",
        resumen: "Tierra de fuego y hielo, auroras boreales, géiseres y spas termales.",
        detalles: "Maneja por la famosa ruta del Círculo Dorado, explora cúpulas e interiores de glaciares, presencia erupciones de géiseres y báñate en la mágica Laguna Azul.",
        favorito: false
    }
];

// Estado global de la aplicación
let categoriaActiva = "Todo";
let listaEventos = [
    {
        id: 101,
        nombre: "Paseo en góndola por el Gran Canal",
        ubicacion: "Venecia, Italia",
        descripcion: "Recorrido guiado al atardecer disfrutando del paisaje acuático histórico.",
        hora: "09:00 AM",
        costo: 80.00
    }
];

// =================================================================
// 2. MOTOR DE NAVEGACIÓN ENTRE PESTAÑAS
// =================================================================
function cambiarPestaña(pestañaID) {
    document.querySelectorAll('.tab-content').forEach(seccion => seccion.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.className = "nav-btn px-4 py-2 rounded-lg transition-all flex items-center gap-1.5";
    });

    document.getElementById(`pes-${pestañaID}`).classList.remove('hidden');
    document.getElementById(`btn-${pestañaID}`).className = "nav-btn px-4 py-2 bg-gradient-to-r from-vibeCoral to-vibePurpura text-white shadow-md rounded-lg transition-all flex items-center gap-1.5";
    
    // Inicializar iconos cuando se cambie la vista
    lucide.createIcons();
}

// =================================================================
// 3. APARTADO DESCUBRIR (BÚSQUEDA, CATEGORÍAS, FAVORITOS Y VER DETALLES)
// =================================================================
function renderizarDestinos() {
    const contenedor = document.getElementById("gridDestinos");
    const textoBusqueda = document.getElementById("inputBusqueda").value.toLowerCase().trim();

    // Filtrar por categoría y por texto de búsqueda
    const destinosFiltrados = destinosData.filter(dest => {
        const coincideCategoria = categoriaActiva === "Todo" || dest.categoria === categoriaActiva;
        const coincideTexto = dest.titulo.toLowerCase().includes(textoBusqueda) || dest.resumen.toLowerCase().includes(textoBusqueda);
        return coincideCategoria && coincideTexto;
    });

    contenedor.innerHTML = "";

    // Mensaje si el destino buscado no existe
    if (destinosFiltrados.length === 0) {
        contenedor.innerHTML = `
            <div class="col-span-full text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                <i data-lucide="search-x" class="w-12 h-12 text-vibeCoral mx-auto mb-3"></i>
                <h3 class="font-bold text-lg text-vibeIndigo">Destino no encontrado</h3>
                <p class="text-xs text-slate-400 mt-1">No tenemos el destino que buscas en nuestro catálogo actual. Intenta con otro término o categoría.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    // Renderizar tarjetas de destinos
    destinosFiltrados.forEach(dest => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col justify-between";
        
        const corazonColor = dest.favorito ? "text-rose-500 fill-rose-500" : "text-white/80 hover:text-white";

        card.innerHTML = `
            <div>
                <div class="h-48 bg-slate-100 relative overflow-hidden">
                    <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-500" style="background-image: url('${dest.imagen}');"></div>
                    <span class="absolute top-4 left-4 bg-vibeIndigo/80 text-white backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">${dest.categoria}</span>
                    
                    <!-- Botón de Favoritos (Corazón) -->
                    <button onclick="toggleFavorito(${dest.id})" class="absolute top-4 right-4 p-2 rounded-full bg-slate-900/40 backdrop-blur-md transition-all hover:scale-110">
                        <i data-lucide="heart" class="w-4 h-4 ${corazonColor}"></i>
                    </button>
                </div>
                <div class="p-5 space-y-2">
                    <div class="flex justify-between items-center">
                        <h3 class="font-bold text-lg">${dest.titulo}</h3>
                        <span class="flex items-center gap-1 text-xs font-bold text-amber-500">
                            <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500"></i> ${dest.rating}
                        </span>
                    </div>
                    <p class="text-xs text-slate-400 line-clamp-2">${dest.resumen}</p>
                </div>
            </div>
            <div class="px-5 pb-5 pt-2 border-t border-slate-50 flex justify-between items-center text-xs">
                <span class="font-bold text-vibeCoral text-base">$ ${dest.precio}</span>
                <span class="text-slate-400 flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${dest.duracion}</span>
                <button onclick="abrirModalDestino(${dest.id})" class="bg-vibeVerde text-white px-3.5 py-1.5 rounded-xl font-semibold hover:bg-emerald-500 transition-all shadow-sm">Ver</button>
            </div>
        `;
        contenedor.appendChild(card);
    });

    lucide.createIcons();
}

function seleccionarCategoria(cat) {
    categoriaActiva = cat;
    document.querySelectorAll('.btn-cat').forEach(btn => {
        btn.className = "btn-cat bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full hover:bg-slate-50 transition-all";
    });
    document.getElementById(`cat-${cat}`).className = "btn-cat bg-vibeIndigo text-white px-4 py-2 rounded-full transition-all";
    filtrarDestinos();
}

function filtrarDestinos() {
    renderizarDestinos();
}

function toggleFavorito(id) {
    const destino = destinosData.find(d => d.id === id);
    if (destino) {
        destino.favorito = !destino.favorito;
        renderizarDestinos();
        actualizarPanel();
    }
}

function abrirModalDestino(id) {
    const dest = destinosData.find(d => d.id === id);
    if (!dest) return;

    const modalContenido = document.getElementById("modalDestinoContenido");
    modalContenido.innerHTML = `
        <div class="h-56 rounded-2xl bg-cover bg-center relative mb-4" style="background-image: url('${dest.imagen}');">
            <span class="absolute top-3 left-3 bg-vibeIndigo/80 text-white backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full uppercase">${dest.categoria}</span>
        </div>
        <div class="space-y-3">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-bold text-vibeIndigo">${dest.titulo}</h2>
                <span class="flex items-center gap-1 text-sm font-bold text-amber-500"><i data-lucide="star" class="w-4 h-4 fill-amber-500"></i> ${dest.rating}</span>
            </div>
            <p class="text-xs text-slate-500 leading-relaxed">${dest.detalles}</p>
            <div class="flex justify-between items-center pt-3 border-t border-slate-100">
                <div>
                    <span class="text-[10px] text-slate-400 block font-bold uppercase">Precio Estimado</span>
                    <span class="text-xl font-bold text-vibeCoral">$ ${dest.precio} USD</span>
                </div>
                <div>
                    <span class="text-[10px] text-slate-400 block font-bold uppercase">Duración Recomendada</span>
                    <span class="text-sm font-bold text-vibeIndigo flex items-center gap-1"><i data-lucide="clock" class="w-4 h-4"></i> ${dest.duracion}</span>
                </div>
            </div>
        </div>
    `;
    document.getElementById("modalDestino").classList.remove("hidden");
    lucide.createIcons();
}

function cerrarModalDestino() {
    document.getElementById("modalDestino").classList.add("hidden");
}

// =================================================================
// 4. APARTADO ITINERARIO (EVENTOS Y PARÁMETROS EDITABLES)
// =================================================================
function renderizarItinerario() {
    const contenedor = document.getElementById("listaEventos");
    contenedor.innerHTML = "";

    if (listaEventos.length === 0) {
        contenedor.innerHTML = `
            <div class="p-8 bg-white rounded-2xl border border-slate-100 text-center">
                <p class="text-slate-400 text-xs font-semibold">No hay eventos planificados. Haz clic en el botón '+' para agregar uno.</p>
            </div>
        `;
        actualizarPanel();
        return;
    }

    const headerDía = document.createElement("div");
    headerDía.className = "flex items-center gap-3 mb-2";
    headerDía.innerHTML = `
        <span class="w-10 h-10 bg-vibeVerde text-white font-bold rounded-full flex items-center justify-center shadow-md">D1</span>
        <span class="font-bold text-sm text-slate-500">Día 1 - ${listaEventos.length} evento(s) planificado(s)</span>
    `;
    contenedor.appendChild(headerDía);

    listaEventos.forEach(evt => {
        const card = document.createElement("div");
        card.className = "bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center ml-5 border-l-4 border-l-vibeCoral hover:shadow-md transition-all";
        card.innerHTML = `
            <div class="space-y-1">
                <h4 class="font-bold text-base text-vibeIndigo">${evt.nombre}</h4>
                <p class="text-xs text-slate-400 flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${evt.ubicacion}</p>
                ${evt.descripcion ? `<p class="text-xs text-slate-500 pt-1">${evt.descripcion}</p>` : ''}
                <div class="flex gap-2 pt-1 text-[10px] font-bold">
                    <span class="bg-vibeVerde/10 text-vibeVerde px-2.5 py-1 rounded-md">${evt.hora}</span>
                    <span class="bg-vibeAmarillo/20 text-amber-700 px-2.5 py-1 rounded-md">$${parseFloat(evt.costo).toFixed(2)}</span>
                </div>
            </div>
            <div class="flex gap-2 text-slate-400">
                <button onclick="editarEvento(${evt.id})" class="hover:text-vibeCoral p-1.5 transition-all"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
                <button onclick="eliminarEvento(${evt.id})" class="hover:text-rose-500 p-1.5 transition-all"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
        `;
        contenedor.appendChild(card);
    });

    lucide.createIcons();
    actualizarPanel();
}

function abrirModalEvento() {
    document.getElementById("modalEventoTitulo").innerText = "Agregar Evento";
    document.getElementById("eventoId").value = "";
    document.getElementById("eventoNombre").value = "";
    document.getElementById("eventoUbicacion").value = "";
    document.getElementById("eventoDescripcion").value = "";
    document.getElementById("eventoHora").value = "";
    document.getElementById("eventoCosto").value = "";
    document.getElementById("modalEvento").classList.remove("hidden");
}

function cerrarModalEvento() {
    document.getElementById("modalEvento").classList.add("hidden");
}

function guardarEvento(event) {
    event.preventDefault();
    const id = document.getElementById("eventoId").value;
    const nombre = document.getElementById("eventoNombre").value.trim();
    const ubicacion = document.getElementById("eventoUbicacion").value.trim();
    const descripcion = document.getElementById("eventoDescripcion").value.trim();
    const hora = document.getElementById("eventoHora").value.trim();
    const costo = parseFloat(document.getElementById("eventoCosto").value) || 0;

    if (id) {
        // Editar
        const evt = listaEventos.find(e => e.id == id);
        if (evt) {
            evt.nombre = nombre;
            evt.ubicacion = ubicacion;
            evt.descripcion = descripcion;
            evt.hora = hora;
            evt.costo = costo;
        }
    } else {
        // Nuevo
        const nuevoEvento = {
            id: Date.now(),
            nombre,
            ubicacion,
            descripcion,
            hora,
            costo
        };
        listaEventos.push(nuevoEvento);
    }

    cerrarModalEvento();
    renderizarItinerario();
}

function editarEvento(id) {
    const evt = listaEventos.find(e => e.id === id);
    if (!evt) return;

    document.getElementById("modalEventoTitulo").innerText = "Editar Evento";
    document.getElementById("eventoId").value = evt.id;
    document.getElementById("eventoNombre").value = evt.nombre;
    document.getElementById("eventoUbicacion").value = evt.ubicacion;
    document.getElementById("eventoDescripcion").value = evt.descripcion || "";
    document.getElementById("eventoHora").value = evt.hora;
    document.getElementById("eventoCosto").value = evt.costo;

    document.getElementById("modalEvento").classList.remove("hidden");
}

function eliminarEvento(id) {
    listaEventos = listaEventos.filter(e => e.id !== id);
    renderizarItinerario();
}

function actualizarInfoItinerario() {
    actualizarPanel();
}

// =================================================================
// 5. APARTADO PANEL (ACTUALIZACIÓN DINÁMICA DE ESTADÍSTICAS)
// =================================================================
function actualizarPanel() {
    // 1. Número de favoritos
    const favCount = destinosData.filter(d => d.favorito).length;
    document.getElementById("panelNumFavoritos").innerText = favCount;

    // 2. Número de eventos
    document.getElementById("panelNumEventos").innerText = listaEventos.length;

    // 3. Costo total del itinerario
    const totalItinerario = listaEventos.reduce((sum, evt) => sum + evt.costo, 0);
    document.getElementById("panelCostoEventos").innerText = `$${totalItinerario.toFixed(2)}`;

    // 4. Sincronizar personas en la calculadora si se cambia en el itinerario
    const viajerosItinerario = parseInt(document.getElementById("itiViajeros").value) || 1;
    document.getElementById("inputPersonas").value = viajerosItinerario;

    calcularTodo();
}

// =================================================================
// 6. CONTROL MATEMÁTICO Y DISTRIBUCIÓN DE GASTOS
// =================================================================
function calcularTodo() {
    const viajeros = parseInt(document.getElementById("inputPersonas").value) || 1;
    const presupuesto = parseFloat(document.getElementById("inputPresupuesto").value) || 0;
    const transporte = parseFloat(document.getElementById("gastoTransporte").value) || 0;
    const hospedaje = parseFloat(document.getElementById("gastoHospedaje").value) || 0;
    const comida = parseFloat(document.getElementById("gastoComida").value) || 0;

    if (viajeros <= 0) return;

    const gastoTotal = transporte + hospedaje + comida;
    const porPersona = gastoTotal / viajeros;
    const balance = presupuesto - gastoTotal;

    const formatter = new Intl.NumberFormat('es-CR', { style: 'currency', currency: 'CRC' });

    document.getElementById("txtTotal").innerText = formatter.format(gastoTotal);
    document.getElementById("txtIndividual").innerText = formatter.format(porPersona);

    const barra = document.getElementById("barraProgreso");
    const txtBalance = document.getElementById("txtBalance");

    let porcentaje = presupuesto > 0 ? (gastoTotal / presupuesto) * 100 : 0;
    barra.style.width = Math.min(Math.max(porcentaje, 0), 100) + "%";

    if (balance >= 0) {
        barra.className = "bg-vibeVerde h-full transition-all duration-300";
        txtBalance.innerText = `Sobrante Disponible: ${formatter.format(balance)}`;
        txtBalance.className = "text-[11px] text-emerald-600 font-bold mt-1 text-center";
    } else {
        barra.className = "bg-vibeCoral h-full transition-all duration-300";
        txtBalance.innerText = `Déficit Grupal: ${formatter.format(Math.abs(balance))}`;
        txtBalance.className = "text-[11px] text-rose-500 font-bold mt-1 text-center";
    }
}

// =================================================================
// 7. CONTROL DEL CHAT SIMULADO
// =================================================================
function enviarMensaje() {
    const input = document.getElementById("inputMensaje");
    const mensaje = input.value.trim();
    if (!mensaje) return;

    const chatBox = document.getElementById("chatBox");
    const div = document.createElement("div");
    div.className = "text-right";
    div.innerHTML = `<span class="text-[11px] font-bold text-slate-400">Tú</span><p class="bg-vibeCoral text-white p-2 rounded-xl mt-0.5 inline-block max-w-[80%] text-xs">${mensaje}</p>`;
    
    chatBox.appendChild(div);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Inicialización de la aplicación al cargar
window.onload = () => {
    renderizarDestinos();
    renderizarItinerario();
    actualizarPanel();
};
