// -----------------------------
// Punto 1: Estructura de Datos
// -----------------------------

const prompt = require("prompt-sync")();

// Mensaje de bienvenida personalizado
console.log("📚 Bienvenida al Sistema de Gestión de Biblioteca Empresarial - Desarrollado por Ashley Terán");
console.log("💼 Aquí encontrarás libros de desarrollo personal y autoayuda para líderes, emprendedores y empresarios.");
console.log("--------------------------------------------------------------------------\n");

// a) Array de libros de desarrollo personal y autoayuda empresarial

const libros = [
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

// b) Array de usuarios con nombres reales, distintos a los comunes

const usuarios = [
  { id: 1, nombre: "Aitana Duarte", email: "aitana.duarte@empresa.com", librosPrestados: [2] },
  { id: 2, nombre: "Thiago Mena", email: "thiago.mena@startups.org", librosPrestados: [5] },
  { id: 3, nombre: "Isamar Vega", email: "isamar.vega@liderazgo.io", librosPrestados: [] },
  { id: 4, nombre: "Gael Zamora", email: "gael.zamora@mentores.net", librosPrestados: [] },
  { id: 5, nombre: "Milena Carvajal", email: "milena.carvajal@businesshub.com", librosPrestados: [] }
];

// Fin del Punto 1 ✅
