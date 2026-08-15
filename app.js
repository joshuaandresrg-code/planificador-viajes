// Base de datos completa con imágenes coherentes
const destinosData = [
    { id: 1, titulo: "Santorini, Grecia", categoria: "Playa", rating: 4.9, precio: 1299, duracion: "7 días", imagen: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800", resumen: "Cúpulas azules, casas blancas y atardeceres mágicos sobre el Mar Egeo.", detalles: "Disfruta de catas de vino local en acantilados volcánicos, recorridos en catamarán por la caldera y cenas románticas frente al mar en Oia.", favorito: false },
    { id: 2, titulo: "Bora Bora, Polinesia Francesa", categoria: "Playa", rating: 5.0, precio: 2499, duracion: "6 días", imagen: "https://images.unsplash.com/photo-1589979481223-deb893043163?q=80&w=800", resumen: "Bungalows sobre el agua, lagunas turquesas y el icónico Monte Otemanu.", detalles: "Vive la experiencia de lujo sumergiéndote con mantarrayas y disfrutando de desayunos llevados en canoa a tu villa privada.", favorito: false },
    { id: 3, titulo: "Playa del Carmen, México", categoria: "Playa", rating: 4.7, precio: 799, duracion: "5 días", imagen: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=800", resumen: "Playas caribeñas, cenotes ancestrales y la alegre Quinta Avenida.", detalles: "Visita cenotes en la selva maya, explora las ruinas en Tulum y relájate en exclusivos clubes de playa.", favorito: false },
    { id: 4, titulo: "Las Maldivas", categoria: "Playa", rating: 4.9, precio: 2100, duracion: "8 días", imagen: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800", resumen: "Atolones de arena blanca incandescente y aguas cristalinas.", detalles: "Aislamiento exclusivo en islas privadas con cenas submarinas y snorkel nocturno bioluminiscente.", favorito: false },
    { id: 5, titulo: "Phuket, Tailandia", categoria: "Playa", rating: 4.6, precio: 899, duracion: "9 días", imagen: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=800", resumen: "Islas de piedra caliza, templos costeros y rica cocina tailandesa.", detalles: "Navega hacia las Islas Phi Phi, explora mercados nocturnos y conoce santuarios éticos de elefantes.", favorito: false },
    { id: 6, titulo: "Maui, Hawái", categoria: "Playa", rating: 4.8, precio: 1650, duracion: "7 días", imagen: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=800", resumen: "Santuarios de arena dorada, acantilados volcánicos y avistamiento de ballenas.", detalles: "Recorre la carretera Road to Hana y observa el amanecer por encima de las nubes en el volcán Haleakala.", favorito: false },
    { id: 7, titulo: "Tokio, Japón", categoria: "Ciudad", rating: 4.8, precio: 1899, duracion: "10 días", imagen: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800", resumen: "Luces de neón hipnotizantes, rascacielos futuristas y templos milenarios.", detalles: "Atraviesa el cruce de Shibuya, explora el templo Senso-ji y prueba ramen en callejones tradicionales.", favorito: false },
    { id: 8, titulo: "París, Francia", categoria: "Ciudad", rating: 4.7, precio: 1450, duracion: "6 días", imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800", resumen: "La Ciudad de la Luz, arquitectura deslumbrante y gastronomía de autor.", detalles: "Sube a la Torre Eiffel, explora las obras maestras del Museo del Louvre y navega por el río Sena.", favorito: false },
    { id: 9, titulo: "Nueva York, EE. UU.", categoria: "Ciudad", rating: 4.8, precio: 1599, duracion: "5 días", imagen: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800", resumen: "La metrópoli mundial por excelencia: Times Square y Broadway.", detalles: "Pasea por Central Park, asiste a un musical en Broadway y cruza el icónico puente de Brooklyn.", favorito: false },
    { id: 10, titulo: "Londres, Reino Unido", categoria: "Ciudad", rating: 4.6, precio: 1390, duracion: "7 días", imagen: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800", resumen: "Elegancia victoriana, el Big Ben, museos de renombre y cultura.", detalles: "Observa el cambio de guardia en Buckingham, explora el Museo Británico y sube al London Eye.", favorito: false },
    { id: 11, titulo: "Roma, Italia", categoria: "Ciudad", rating: 4.9, precio: 1150, duracion: "6 días", imagen: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800", resumen: "Un museo a cielo abierto, el Coliseo, plazas barrocas y pasta genuina.", detalles: "Revive la historia en el Coliseo, pide un deseo en la Fontana di Trevi y visita los Museos Vaticanos.", favorito: false },
    { id: 12, titulo: "Seúl, Corea del Sur", categoria: "Ciudad", rating: 4.8, precio: 1350, duracion: "8 días", imagen: "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=800", resumen: "Palacios reales centenarios con vanguardia tecnológica y K-Culture.", detalles: "Explora el Palacio Gyeongbokgung con Hanbok tradicional y disfruta de la gastronomía en Myeongdong.", favorito: false },
    { id: 13, titulo: "Bali, Indonesia", categoria: "Aventura", rating: 4.7, precio: 999, duracion: "8 días", imagen: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800", resumen: "Templos en la selva, terrazas de arroz verde esmeralda y cascadas.", detalles: "Haz senderismo nocturno al volcán Batur, rafting en el río Ayung y conecta con la tranquilidad de Ubud.", favorito: false },
    { id: 14, titulo: "Machu Picchu, Perú", categoria: "Aventura", rating: 5.0, precio: 1100, duracion: "6 días", imagen: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800", resumen: "La deslumbrante ciudad perdida Inca entre imponentes cumbres andinas.", detalles: "Recorre el ancestral Camino Inca, explora la ciudad de Cusco y viaja en el tren panorámico del Valle Sagrado.", favorito: false },
    { id: 15, titulo: "Queenstown, Nueva Zelanda", categoria: "Aventura", rating: 4.9, precio: 1780, duracion: "9 días", imagen: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=800", resumen: "La capital de los deportes extremos rodeada de fiordos y alpes.", detalles: "Experimenta la adrenalina del bungy jumping, jetboat por cañones y explora los fiordos de Milford Sound.", favorito: false },
    { id: 16, titulo: "Banff, Canadá", categoria: "Aventura", rating: 4.9, precio: 1400, duracion: "7 días", imagen: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=800", resumen: "Lagos turquesa y picos nevados majestuosos en las Montañas Rocosas.", detalles: "Navega en canoa en Lake Louise, avista fauna silvestre como osos y sumérgete en aguas termales.", favorito: false },
    { id: 17, titulo: "Monteverde, Costa Rica", categoria: "Aventura", rating: 4.8, precio: 850, duracion: "5 días", imagen: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?q=80&w=800", resumen: "Bosque nuboso con impresionante biodiversidad y tirolesas épicas.", detalles: "Vuela sobre las copas de los árboles en canopy y camina por puentes colgantes entre la niebla mística.", favorito: false },
    { id: 18, titulo: "Reikiavik, Islandia", categoria: "Aventura", rating: 4.9, precio: 1950, duracion: "7 días", imagen: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=800", resumen: "Tierra de hielo y fuego: auroras boreales, géiseres y glaciares.", detalles: "Recorre la ruta del Círculo Dorado, explora cuevas de hielo azul y relájate en la Laguna Azul.", favorito: false }
];

let categoriaActiva = "Todo";
let listaEventos = [];
let tipoCambioUSD_CRC = 515;

const respuestasBot = [
    "¡Excelente elección! Recuerda verificar los requisitos de visado antes de viajar.",
    "Para este destino te recomiendo reservar el hospedaje con al menos 2 meses de anticipación.",
    "¡Ese lugar es asombroso! No olvides llevar una cámara para capturar los mejores momentos.",
    "¿Sabías que puedes guardar tus lugares preferidos haciendo clic en el corazón de 'Descubrir'?",
    "Revisa la calculadora de gastos en el Panel para mantener tu presupuesto controlado."
];

// Persistencia LocalStorage
function guardarEstadoEnLocalStorage() {
    try {
        localStorage.setItem('vibe_eventos', JSON.stringify(listaEventos));
        localStorage.setItem('vibe_favoritos', JSON.stringify(destinosData.map(d => ({ id: d.id, favorito: d.favorito }))));
    } catch (e) { console.warn("Error guardando datos", e); }
}

function cargarEstadoDeLocalStorage() {
    try {
        const evs = localStorage.getItem('vibe_eventos');
        if (evs) listaEventos = JSON.parse(evs);
        else listaEventos = [{ id: 101, nombre: "Paseo en góndola por el Gran Canal", ubicacion: "Venecia, Italia", descripcion: "Recorrido al atardecer.", hora: "09:00 AM", costo: 80.00 }];

        const favs = localStorage.getItem('vibe_favoritos');
        if (favs) {
            const favsMap = JSON.parse(favs);
            favsMap.forEach(item => {
                const dest = destinosData.find(d => d.id === item.id);
                if (dest) dest.favorito = item.favorito;
            });
        }
    } catch (e) { console.warn("Error cargando datos", e); }
}

// Notificaciones Toast
function mostrarToast(mensaje, tipo = 'info') {
    const contenedor = document.getElementById("toastContainer");
    if (!contenedor) return;
    const toast = document.createElement("div");
    let colorBg = tipo === 'exito' ? 'bg-emerald-500' : (tipo === 'eliminar' ? 'bg-rose-500' : 'bg-vibeCoral');
    toast.className = `${colorBg} text-white flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl text-xs font-semibold transform transition-all duration-300 translate-y-5 opacity-0`;
    toast.innerHTML = `<span>${mensaje}</span>`;
    contenedor.appendChild(toast);
    setTimeout(() => toast.classList.remove("translate-y-5", "opacity-0"), 10);
    setTimeout(() => { toast.classList.add("opacity-0"); setTimeout(() => toast.remove(), 300); }, 3000);
}

// Navegación
function cambiarPestaña(pestañaID) {
    document.querySelectorAll('.tab-content').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(b => b.className = "nav-btn px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 focus:outline-none");
    
    document.getElementById(`pes-${pestañaID}`)?.classList.remove('hidden');
    const btn = document.getElementById(`btn-${pestañaID}`);
    if (btn) btn.className = "nav-btn px-4 py-2 bg-gradient-to-r from-vibeCoral to-vibePurpura text-white shadow-md rounded-lg transition-all flex items-center gap-1.5 focus:outline-none";
    lucide.createIcons();
}

// Renderizado de Destinos
function renderizarDestinos() {
    const contenedor = document.getElementById("gridDestinos");
    const busqueda = document.getElementById("inputBusqueda").value.toLowerCase().trim();
    const orden = document.getElementById("selectOrdenPrecio")?.value || "defecto";

    let filtrados = destinosData.filter(d => {
        const catMatch = categoriaActiva === "Todo" || d.categoria === categoriaActiva;
        const textMatch = d.titulo.toLowerCase().includes(busqueda) || d.resumen.toLowerCase().includes(busqueda);
        return catMatch && textMatch;
    });

    if (orden === "asc") filtrados.sort((a,b) => a.precio - b.precio);
    if (orden === "desc") filtrados.sort((a,b) => b.precio - a.precio);

    contenedor.innerHTML = "";
    filtrados.forEach(dest => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="h-48 bg-slate-100 relative overflow-hidden">
                    <img src="${dest.imagen}" alt="${dest.titulo}" class="w-full h-full object-cover hover:scale-105 transition-all duration-500" loading="lazy">
                    <span class="absolute top-4 left-4 bg-vibeIndigo/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">${dest.categoria}</span>
                    <button onclick="toggleFavorito(${dest.id})" class="absolute top-4 right-4 p-2 rounded-full bg-slate-900/40 text-white hover:scale-110 transition-all">
                        <i data-lucide="heart" class="w-4 h-4 ${dest.favorito ? 'fill-rose-500 text-rose-500' : ''}"></i>
                    </button>
                </div>
                <div class="p-5 space-y-2">
                    <div class="flex justify-between items-center">
                        <h3 class="font-bold text-lg text-vibeIndigo">${dest.titulo}</h3>
                        <span class="text-xs font-bold text-amber-500 flex items-center gap-1"><i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500"></i> ${dest.rating}</span>
                    </div>
                    <p class="text-xs text-slate-400 line-clamp-2">${dest.resumen}</p>
                </div>
            </div>
            <div class="px-5 pb-5 pt-2 border-t border-slate-50 flex justify-between items-center text-xs">
                <div>
                    <span class="text-[10px] text-slate-400 font-bold block uppercase">Desde</span>
                    <span class="font-bold text-vibeCoral text-base">$${dest.precio} USD</span>
                </div>
                <button onclick="abrirModalDestino(${dest.id})" class="bg-vibeVerde text-white px-4 py-2 rounded-xl font-semibold hover:bg-emerald-500 transition-all">Ver</button>
            </div>
        `;
        contenedor.appendChild(card);
    });
    lucide.createIcons();
}

function seleccionarCategoria(cat) {
    categoriaActiva = cat;
    document.querySelectorAll('.btn-cat').forEach(b => b.className = "btn-cat bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full");
    document.getElementById(`cat-${cat}`).className = "btn-cat bg-vibeIndigo text-white px-4 py-2 rounded-full";
    renderizarDestinos();
}

function filtrarDestinos() { renderizarDestinos(); }

function toggleFavorito(id) {
    const dest = destinosData.find(d => d.id === id);
    if (dest) {
        dest.favorito = !dest.favorito;
        renderizarDestinos();
        actualizarPanel();
        guardarEstadoEnLocalStorage();
        mostrarToast(dest.favorito ? `'${dest.titulo}' guardado` : 'Removido de favoritos', dest.favorito ? 'exito' : 'info');
    }
}

// Modales y Operaciones
function abrirModalDestino(id) {
    const dest = destinosData.find(d => d.id === id);
    if (!dest) return;
    document.getElementById("modalDestinoContenido").innerHTML = `
        <div class="h-60 rounded-2xl bg-cover bg-center relative mb-4" style="background-image: url('${dest.imagen}');"></div>
        <h2 class="text-2xl font-bold text-vibeIndigo">${dest.titulo}</h2>
        <p class="text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100 my-3">${dest.detalles}</p>
        <div class="flex justify-between items-center bg-vibeCrema p-3 rounded-2xl">
            <span class="text-xl font-bold text-vibeCoral">$${dest.precio} USD</span>
            <span class="text-xs font-bold text-vibeIndigo">${dest.duracion}</span>
        </div>
    `;
    document.getElementById("modalDestino").classList.remove("hidden");
    lucide.createIcons();
}

function cerrarModalDestino() { document.getElementById("modalDestino").classList.add("hidden"); }

// Itinerario y Calculadora
function renderizarItinerario() {
    const contenedor = document.getElementById("listaEventos");
    contenedor.innerHTML = "";
    listaEventos.forEach(evt => {
        const card = document.createElement("div");
        card.className = "bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center border-l-4 border-l-vibeCoral";
        card.innerHTML = `
            <div>
                <h4 class="font-bold text-base text-vibeIndigo">${evt.nombre}</h4>
                <p class="text-xs text-slate-400">${evt.ubicacion} - ${evt.hora}</p>
                <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md mt-1 inline-block">$${evt.costo} USD</span>
            </div>
            <button onclick="confirmarEliminarEvento(${evt.id})" class="text-slate-400 hover:text-rose-500 p-2"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
        `;
        contenedor.appendChild(card);
    });
    lucide.createIcons();
    actualizarPanel();
}

function abrirModalEvento() { document.getElementById("modalEvento").classList.remove("hidden"); }
function cerrarModalEvento() { document.getElementById("modalEvento").classList.add("hidden"); }

function guardarEvento(e) {
    e.preventDefault();
    const nombre = document.getElementById("eventoNombre").value;
    const ubicacion = document.getElementById("eventoUbicacion").value;
    const hora = document.getElementById("eventoHora").value;
    const costo = parseFloat(document.getElementById("eventoCosto").value) || 0;

    listaEventos.push({ id: Date.now(), nombre, ubicacion, hora, costo });
    cerrarModalEvento();
    renderizarItinerario();
    guardarEstadoEnLocalStorage();
    mostrarToast("Actividad agregada con éxito", "exito");
}

function confirmarEliminarEvento(id) {
    listaEventos = listaEventos.filter(e => e.id !== id);
    renderizarItinerario();
    guardarEstadoEnLocalStorage();
    mostrarToast("Evento eliminado", "eliminar");
}

function actualizarPanel() {
    document.getElementById("panelNumFavoritos").innerText = destinosData.filter(d => d.favorito).length;
    document.getElementById("panelNumEventos").innerText = listaEventos.length;
    const totalUSD = listaEventos.reduce((s, e) => s + e.costo, 0);
    document.getElementById("panelCostoEventos").innerText = `$${totalUSD.toFixed(2)} USD`;
    calcularTodo();
}

function calcularTodo() {
    const viajeros = Math.max(1, parseInt(document.getElementById("inputPersonas")?.value) || 1);
    const presupuesto = parseFloat(document.getElementById("inputPresupuesto")?.value) || 0;
    const transporte = parseFloat(document.getElementById("gastoTransporte")?.value) || 0;
    const hospedaje = parseFloat(document.getElementById("gastoHospedaje")?.value) || 0;
    const comida = parseFloat(document.getElementById("gastoComida")?.value) || 0;

    const actividadesCRC = listaEventos.reduce((s, e) => s + e.costo, 0) * tipoCambioUSD_CRC;
    if (document.getElementById("gastoActividades")) document.getElementById("gastoActividades").value = Math.round(actividadesCRC);

    const totalCRC = transporte + hospedaje + comida + actividadesCRC;
    const balance = presupuesto - totalCRC;

    const fmt = new Intl.NumberFormat('es-CR', { style: 'currency', currency: 'CRC', maximumFractionDigits: 0 });
    document.getElementById("txtTotal").innerText = fmt.format(totalCRC);
    document.getElementById("txtIndividual").innerText = fmt.format(totalCRC / viajeros);

    const barra = document.getElementById("barraProgreso");
    if (barra) barra.style.width = Math.min(Math.max((totalCRC / (presupuesto || 1)) * 100, 0), 100) + "%";
    
    document.getElementById("txtBalance").innerText = balance >= 0 ? `Disponible: ${fmt.format(balance)}` : `Déficit: ${fmt.format(Math.abs(balance))}`;
}

function enviarMensaje() {
    const input = document.getElementById("inputMensaje");
    if (!input.value.trim()) return;
    const box = document.getElementById("chatBox");
    box.innerHTML += `<div class="text-right"><p class="bg-vibeCoral text-white p-2 rounded-xl inline-block">${input.value}</p></div>`;
    input.value = "";
    setTimeout(() => {
        const resp = respuestasBot[Math.floor(Math.random() * respuestasBot.length)];
        box.innerHTML += `<div class="text-left"><p class="bg-slate-100 text-slate-700 p-2 rounded-xl inline-block">${resp}</p></div>`;
        box.scrollTop = box.scrollHeight;
    }, 600);
}

window.onload = () => {
    cargarEstadoDeLocalStorage();
    renderizarDestinos();
    renderizarItinerario();
    actualizarPanel();
};
