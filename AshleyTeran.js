const prompt = require('prompt-sync')();

// ✅ 1. Estructura de datos
let libros = [
  { id: 1, titulo: "Hábitos Atómicos", autor: "James Clear", anio: 2018, genero: "Productividad", disponible: true },
  { id: 2, titulo: "Padre Rico, Padre Pobre", autor: "Robert Kiyosaki", anio: 1997, genero: "Finanzas", disponible: true },
  { id: 3, titulo: "El monje que vendió su Ferrari", autor: "Robin Sharma", anio: 1999, genero: "Autoayuda", disponible: true },
  { id: 4, titulo: "Piense y Hágase Rico", autor: "Napoleon Hill", anio: 1937, genero: "Motivación", disponible: true },
  { id: 5, titulo: "Los secretos de la mente millonaria", autor: "T. Harv Eker", anio: 2005, genero: "Mentalidad", disponible: true },
  { id: 6, titulo: "La magia del orden", autor: "Marie Kondo", anio: 2010, genero: "Organización", disponible: true },
  { id: 7, titulo: "Despierta tu héroe interior", autor: "Victor Hugo Manzanilla", anio: 2016, genero: "Liderazgo", disponible: true },
  { id: 8, titulo: "El poder de los hábitos", autor: "Charles Duhigg", anio: 2012, genero: "Productividad", disponible: true },
  { id: 9, titulo: "Reinicia", autor: "Jason Fried", anio: 2010, genero: "Empresarial", disponible: true },
  { id: 10, titulo: "Nunca pares", autor: "Phil Knight", anio: 2016, genero: "Biografía", disponible: true }
];

let usuarios = [
  { id: 1, nombre: "Aitana Duarte", email: "aitana@empresa.com", librosPrestados: [] },
  { id: 2, nombre: "Thiago Mena", email: "thiago@startup.org", librosPrestados: [] },
  { id: 3, nombre: "Zoe Martínez", email: "zoe@liderazgo.net", librosPrestados: [] },
  { id: 4, nombre: "Gael Rodríguez", email: "gael@negocios.io", librosPrestados: [] },
  { id: 5, nombre: "Ivanna Salas", email: "ivanna@emprende.com", librosPrestados: [] }
];

// ✅ 2. Funciones de gestión de libros
function agregarLibro() {
  const titulo = prompt("Título del libro: ");
  const autor = prompt("Autor: ");
  const anio = parseInt(prompt("Año: "));
  const genero = prompt("Género: ");
  const id = libros.length + 1;
  libros.push({ id, titulo, autor, anio, genero, disponible: true });
  console.log("📚 Libro agregado con éxito.");
}

function buscarLibro() {
  const termino = prompt("Buscar libro por título: ").toLowerCase();
  const encontrados = libros.filter(libro => libro.titulo.toLowerCase().includes(termino));
  console.log(encontrados.length ? encontrados : "No se encontró ningún libro.");
}

function ordenarLibros() {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - 1 - i; j++) {
      if (libros[j].titulo > libros[j + 1].titulo) {
        [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
      }
    }
  }
  console.log("📚 Libros ordenados alfabéticamente.");
}

function borrarLibro() {
  const id = parseInt(prompt("ID del libro a borrar: "));
  const index = libros.findIndex(libro => libro.id === id);
  if (index !== -1) {
    libros.splice(index, 1);
    console.log("🗑 Libro eliminado.");
  } else {
    console.log("❌ Libro no encontrado.");
  }
}

// ✅ 3. Funciones de gestión de usuarios
function registrarUsuario() {
  const nombre = prompt("Nombre del usuario: ");
  const email = prompt("Correo electrónico: ");
  const id = usuarios.length + 1;
  usuarios.push({ id, nombre, email, librosPrestados: [] });
  console.log("👤 Usuario registrado con éxito.");
}

function mostrarTodosLosUsuarios() {
  usuarios.forEach(u => {
    console.log(`${u.id}. ${u.nombre} (${u.email}) - Libros prestados: ${u.librosPrestados.length}`);
  });
}

function buscarUsuario() {
  const nombre = prompt("Buscar usuario por nombre: ").toLowerCase();
  const encontrados = usuarios.filter(u => u.nombre.toLowerCase().includes(nombre));
  console.log(encontrados.length ? encontrados : "No se encontró ningún usuario.");
}

function borrarUsuario() {
  const id = parseInt(prompt("ID del usuario a borrar: "));
  const index = usuarios.findIndex(u => u.id === id);
  if (index !== -1) {
    usuarios.splice(index, 1);
    console.log("🗑 Usuario eliminado.");
  } else {
    console.log("❌ Usuario no encontrado.");
  }
}

// ✅ 4. Sistema de préstamos
function prestarLibro() {
  const idUsuario = parseInt(prompt("ID del usuario: "));
  const idLibro = parseInt(prompt("ID del libro: "));
  const usuario = usuarios.find(u => u.id === idUsuario);
  const libro = libros.find(l => l.id === idLibro);
  if (usuario && libro && libro.disponible) {
    usuario.librosPrestados.push(idLibro);
    libro.disponible = false;
    console.log("✅ Libro prestado.");
  } else {
    console.log("❌ Error en el préstamo.");
  }
}

function devolverLibro() {
  const idUsuario = parseInt(prompt("ID del usuario: "));
  const idLibro = parseInt(prompt("ID del libro a devolver: "));
  const usuario = usuarios.find(u => u.id === idUsuario);
  const libro = libros.find(l => l.id === idLibro);
  if (usuario && libro) {
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
    libro.disponible = true;
    console.log("📦 Libro devuelto.");
  } else {
    console.log("❌ No se pudo devolver.");
  }
}

// ✅ 5. Reporte con métodos avanzados
function generarReporteLibros() {
  const total = libros.length;
  const prestados = libros.filter(l => !l.disponible).length;
  const disponibles = total - prestados;
  console.log(`📊 Total: ${total}, Prestados: ${prestados}, Disponibles: ${disponibles}`);
}

// ✅ 6. Identificación avanzada de libros
function librosConPalabrasEnTitulo() {
  const palabra = prompt("Palabra clave en título: ").toLowerCase();
  const encontrados = libros.filter(l => l.titulo.toLowerCase().includes(palabra));
  console.log(encontrados.length ? encontrados : "No se encontraron coincidencias.");
}

// ✅ 7. Cálculos estadísticos
function calcularEstadisticas() {
  const promedioAnio = libros.reduce((sum, l) => sum + l.anio, 0) / libros.length;
  const prestados = libros.filter(l => !l.disponible).length;
  console.log(`📈 Año promedio de publicación: ${Math.round(promedioAnio)}, Libros prestados: ${prestados}`);
}

// ✅ 8. Manejo de cadenas
function normalizarDatos() {
  libros = libros.map(l => ({
    ...l,
    titulo: l.titulo.trim().toUpperCase(),
    autor: l.autor.trim()
  }));
  usuarios = usuarios.map(u => ({
    ...u,
    email: u.email.toLowerCase()
  }));
  console.log("🔤 Datos normalizados.");
}

// ✅ 9. Interfaz de usuario por consola
function menuPrincipal() {
  console.log("📚 ¡Bienvenida, Ashley, a tu Biblioteca Virtual Empresarial! 📚");
  let opcion;
  do {
    console.log(`
1. Agregar libro
2. Buscar libro
3. Ordenar libros
4. Borrar libro
5. Registrar usuario
6. Mostrar todos los usuarios
7. Buscar usuario
8. Borrar usuario
9. Prestar libro
10. Devolver libro
11. Generar reporte
12. Libros con palabras en el título
13. Calcular estadísticas
14. Normalizar datos
0. Salir`);
    opcion = prompt("Selecciona una opción: ");
    switch (opcion) {
      case "1": agregarLibro(); break;
      case "2": buscarLibro(); break;
      case "3": ordenarLibros(); break;
      case "4": borrarLibro(); break;
      case "5": registrarUsuario(); break;
      case "6": mostrarTodosLosUsuarios(); break;
      case "7": buscarUsuario(); break;
      case "8": borrarUsuario(); break;
      case "9": prestarLibro(); break;
      case "10": devolverLibro(); break;
      case "11": generarReporteLibros(); break;
      case "12": librosConPalabrasEnTitulo(); break;
      case "13": calcularEstadisticas(); break;
      case "14": normalizarDatos(); break;
      case "0": console.log("👋 ¡Gracias por usar el sistema!"); break;
      default: console.log("❗ Opción inválida.");
    }
  } while (opcion !== "0");
}

menuPrincipal();

