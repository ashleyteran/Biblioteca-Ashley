// AshleyTeran.js
// Proyecto Final - Sistema de Gestión de Biblioteca Empresarial
const prompt = require("prompt-sync")();

// --------------------------------------------------
// Punto 1: Estructura de Datos
// --------------------------------------------------
console.log("📚 Bienvenida al Sistema de Gestión de Biblioteca Empresarial - Desarrollado por Ashley Terán");
console.log("💼 Libros de desarrollo personal y autoayuda para líderes, emprendedores y empresarios.");
console.log("--------------------------------------------------------------------------\n");

let libros = [
  { id: 1, titulo: "Los 7 hábitos de la gente altamente efectiva", autor: "Stephen R. Covey", anio: 1989, genero: "Desarrollo Personal", disponible: true },
  { id: 2, titulo: "Piense y hágase rico", autor: "Napoleon Hill", anio: 1937, genero: "Autoayuda Financiera", disponible: false },
  { id: 3, titulo: "El poder del ahora", autor: "Eckhart Tolle", anio: 1997, genero: "Mindfulness", disponible: true },
  { id: 4, titulo: "La magia del orden", autor: "Marie Kondo", anio: 2011, genero: "Organización Personal", disponible: true },
  { id: 5, titulo: "Cómo ganar amigos e influir sobre las personas", autor: "Dale Carnegie", anio: 1936, genero: "Liderazgo", disponible: false },
  { id: 6, titulo: "Padre Rico, Padre Pobre", autor: "Robert Kiyosaki", anio: 1997, genero: "Educación Financiera", disponible: true },
  { id: 7, titulo: "Hábitos atómicos", autor: "James Clear", anio: 2018, genero: "Productividad", disponible: true },
  { id: 8, titulo: "El monje que vendió su Ferrari", autor: "Robin Sharma", anio: 1999, genero: "Autoayuda Espiritual", disponible: true },
  { id: 9, titulo: "Nunca te pares", autor: "Phil Knight", anio: 2016, genero: "Biografía Empresarial", disponible: true },
  { id: 10, titulo: "La estrategia del océano azul", autor: "W. Chan Kim", anio: 2005, genero: "Innovación", disponible: true }
];

let usuarios = [
  { id: 1, nombre: "Aitana Duarte", email: "aitana.duarte@empresa.com", librosPrestados: [2] },
  { id: 2, nombre: "Thiago Mena", email: "thiago.mena@startups.org", librosPrestados: [5] },
  { id: 3, nombre: "Isamar Vega", email: "isamar.vega@liderazgo.io", librosPrestados: [] },
  { id: 4, nombre: "Gael Zamora", email: "gael.zamora@mentores.net", librosPrestados: [] },
  { id: 5, nombre: "Milena Carvajal", email: "milena.carvajal@businesshub.com", librosPrestados: [] }
];

// --------------------------------------------------
// Punto 2: Funciones de gestión de libros
// --------------------------------------------------
function agregarLibro(id, titulo, autor, anio, genero) {
  libros.push({ id, titulo, autor, anio, genero, disponible: true });
  console.log("📘 Libro agregado con éxito.");
}

function buscarLibro(criterio, valor) {
  const resultado = libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
  console.log(resultado);
}

function ordenarLibros(criterio) {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - i - 1; j++) {
      if (libros[j][criterio] > libros[j + 1][criterio]) {
        let temp = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = temp;
      }
    }
  }
  console.log("📚 Libros ordenados por", criterio, ":\n", libros);
}

function borrarLibro(id) {
  libros = libros.filter(libro => libro.id !== id);
  console.log("📕 Libro eliminado.");
}

// --------------------------------------------------
// Punto 3: Gestión de usuarios
// --------------------------------------------------
function registrarUsuario(nombre, email) {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email,
    librosPrestados: []
  };
  usuarios.push(nuevoUsuario);
  console.log("👤 Usuario registrado con éxito.");
}

function mostrarTodosLosUsuarios() {
  console.log(usuarios);
}

function buscarUsuario(email) {
  const usuario = usuarios.find(u => u.email === email);
  console.log(usuario || "Usuario no encontrado.");
}

function borrarUsuario(nombre, email) {
  usuarios = usuarios.filter(u => u.nombre !== nombre || u.email !== email);
  console.log("👤 Usuario eliminado.");
}

// --------------------------------------------------
// Punto 4: Sistema de Préstamos
// --------------------------------------------------
function prestarLibro(idLibro, idUsuario) {
  const libro = libros.find(l => l.id === idLibro && l.disponible);
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (libro && usuario) {
    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);
    console.log("📚 Libro prestado con éxito.");
  } else {
    console.log("❌ No se pudo prestar el libro.");
  }
}

function devolverLibro(idLibro, idUsuario) {
  const libro = libros.find(l => l.id === idLibro);
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (libro && usuario) {
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
    console.log("📗 Libro devuelto con éxito.");
  } else {
    console.log("❌ No se pudo devolver el libro.");
  }
}

// --------------------------------------------------
// Punto 5: Reportes
// --------------------------------------------------
function generarReporteLibros() {
  const totalLibros = libros.length;
  const prestados = libros.filter(l => !l.disponible).length;
  const librosPorGenero = libros.reduce((acc, libro) => {
    acc[libro.genero] = (acc[libro.genero] || 0) + 1;
    return acc;
  }, {});
  const masAntiguo = libros.reduce((a, b) => (a.anio < b.anio ? a : b));
  const masNuevo = libros.reduce((a, b) => (a.anio > b.anio ? a : b));

  console.log("📊 Reporte:");
  console.log("Total de libros:", totalLibros);
  console.log("Libros prestados:", prestados);
  console.log("Libros por género:", librosPorGenero);
  console.log("Libro más antiguo:", masAntiguo.titulo);
  console.log("Libro más nuevo:", masNuevo.titulo);
}

// --------------------------------------------------
// Punto 6: Libros con más de una palabra
// --------------------------------------------------
function librosConPalabrasEnTitulo() {
  const resultado = libros
    .filter(libro => /^[a-zA-Z\s]+$/.test(libro.titulo) && libro.titulo.trim().split(" ").length > 1)
    .map(libro => libro.titulo);
  console.log("📘 Libros con más de una palabra en el título:\n", resultado);
}

// --------------------------------------------------
// Punto 7: Estadísticas
// --------------------------------------------------
function calcularEstadisticas() {
  const promedio = libros.reduce((sum, l) => sum + l.anio, 0) / libros.length;
  const años = libros.map(l => l.anio);
  const añoFrecuente = años.sort((a,b) =>
    años.filter(v => v===a).length - años.filter(v => v===b).length
  ).pop();
  const diferencia = Math.max(...años) - Math.min(...años);

  console.log("📈 Estadísticas:");
  console.log("Promedio de años:", Math.round(promedio));
  console.log("Año más frecuente:", añoFrecuente);
  console.log("Diferencia entre libro más antiguo y más nuevo:", diferencia);
}

// --------------------------------------------------
// Punto 8: Manejo de Cadenas
// --------------------------------------------------
function normalizarDatos() {
  libros = libros.map(libro => ({
    ...libro,
    titulo: libro.titulo.toUpperCase(),
    autor: libro.autor.trim()
  }));

  usuarios = usuarios.map(usuario => ({
    ...usuario,
    email: usuario.email.toLowerCase()
  }));

  console.log("🔤 Datos normalizados.");
}

// --------------------------------------------------
// Punto 9: Menú por Consola
// --------------------------------------------------
function menuPrincipal() {
  let opcion;
  do {
    console.log("\n📚 Menú Principal:");
    console.log("1. Agregar libro");
    console.log("2. Buscar libro");
    console.log("3. Ordenar libros");
    console.log("4. Borrar libro");
    console.log("5. Registrar usuario");
    console.log("6. Mostrar usuarios");
    console.log("7. Buscar usuario");
    console.log("8. Borrar usuario");
    console.log("9. Prestar libro");
    console.log("10. Devolver libro");
    console.log("11. Generar reporte");
    console.log("12. Libros con títulos largos");
    console.log("13. Calcular estadísticas");
    console.log("14. Normalizar datos");
    console.log("0. Salir");

    opcion = prompt("Seleccione una opción: ");

    switch (opcion) {
      case "1":
        agregarLibro(
          parseInt(prompt("ID: ")),
          prompt("Título: "),
          prompt("Autor: "),
          parseInt(prompt("Año: ")),
          prompt("Género: ")
        );
        break;
      case "2":
        buscarLibro(prompt("¿Buscar por (titulo/autor/genero)?: "), prompt("Valor: "));
        break;
      case "3":
        ordenarLibros(prompt("¿Ordenar por (titulo/anio)?: "));
        break;
      case "4":
        borrarLibro(parseInt(prompt("ID del libro a borrar: ")));
        break;
      case "5":
        registrarUsuario(prompt("Nombre: "), prompt("Email: "));
        break;
      case "6":
        mostrarTodosLosUsuarios();
        break;
      case "7":
        buscarUsuario(prompt("Email: "));
        break;
      case "8":
        borrarUsuario(prompt("Nombre: "), prompt("Email: "));
        break;
      case "9":
        prestarLibro(parseInt(prompt("ID del libro: ")), parseInt(prompt("ID del usuario: ")));
        break;
      case "10":
        devolverLibro(parseInt(prompt("ID del libro: ")), parseInt(prompt("ID del usuario: ")));
        break;
      case "11":
        generarReporteLibros();
        break;
      case "12":
        librosConPalabrasEnTitulo();
        break;
      case "13":
        calcularEstadisticas();
        break;
      case "14":
        normalizarDatos();
        break;
      case "0":
        console.log("👋 Hasta luego!");
        break;
      default:
        console.log("❌ Opción no válida.");
    }
  } while (opcion !== "0");
}

menuPrincipal();

// --------------------------------------------------
// Punto 10: Comentarios listos por sección ✅
// --------------------------------------------------
