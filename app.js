const ideas = [
  { id: 'cur-01', category: 'Curiosidades', title: 'El animal que tiene tres corazones', script: ['“Hay un animal que tiene tres corazones… y es el pulpo.”', 'Dos bombean sangre hacia las branquias; el tercero la envía al resto del cuerpo.', 'Y cuando nada, ese corazón principal se detiene. ¿Lo sabías?'], duration: '20–25 s' },
  { id: 'cur-02', category: 'Curiosidades', title: 'Un día más largo que un año', script: ['“En Venus, cumplir un año toma menos tiempo que completar un día.”', 'El planeta tarda unos 225 días terrestres en rodear el Sol.', 'Pero su rotación dura alrededor de 243 días terrestres.'], duration: '20–30 s' },
  { id: 'cur-03', category: 'Curiosidades', title: 'La Luna se aleja poquito a poco', script: ['“La Luna se aleja de la Tierra cada año.”', 'La distancia aumenta cerca de 3,8 centímetros anuales.', 'Es más o menos lo que crecen tus uñas en un mes.'], duration: '15–20 s' },
  { id: 'cur-04', category: 'Curiosidades', title: 'Las mariposas prueban con las patas', script: ['“Las mariposas pueden saborear sin usar la boca.”', 'Tienen receptores del gusto en las patas.', 'Así detectan si una planta es adecuada para poner sus huevos.'], duration: '15–20 s' },
  { id: 'cur-05', category: 'Curiosidades', title: 'Los tiburones son más antiguos que los árboles', script: ['“Los tiburones ya existían antes que los primeros árboles.”', 'Sus antepasados aparecieron hace más de 400 millones de años.', 'Los primeros árboles llegaron decenas de millones de años después.'], duration: '20–25 s' },
  { id: 'hum-01', category: 'Humor', title: 'POV: dijiste “un video más”', script: ['“POV: dijiste que verías un solo Short antes de dormir.”', 'Corte rápido: luces apagadas, reloj marcando las 2:47.', '“Bueno… técnicamente fueron varios videos cortos.”'], duration: '12–18 s' },
  { id: 'hum-02', category: 'Humor', title: 'El tutorial que necesitaba un tutorial', script: ['“Encontré un tutorial para aprender a seguir tutoriales.”', 'Muestra una pantalla llena de pestañas abiertas.', '“Paso uno: olvida para qué abriste el computador.”'], duration: '12–18 s' },
  { id: 'hum-03', category: 'Humor', title: 'Cuando el GPS pierde la fe', script: ['“Gira a la derecha… no, tu otra derecha.”', 'Haz que el GPS se quede en silencio mientras miras a cámara.', '“Recalculando. Y también mi opinión sobre tus decisiones.”'], duration: '12–20 s' },
  { id: 'hum-04', category: 'Humor', title: 'La reunión pudo ser un mensaje', script: ['“Esta reunión pudo ser un mensaje de una línea.”', 'Corte: todos mirando una presentación titulada ‘Punto 1’.', '“Llevamos 40 minutos y recién vamos en el saludo.”'], duration: '15–20 s' },
  { id: 'hum-05', category: 'Humor', title: 'Mi cerebro a las tres de la mañana', script: ['“Hora de dormir.”', '“¿Y si recuerdas esa vergüenza de hace 11 años?”', 'Representa el debate contigo mismo en dos personajes.'], duration: '15–20 s' },
  { id: 'his-01', category: 'Historias', title: 'El botón que salvó una misión espacial', script: ['“Un error diminuto podía arruinar esta misión espacial.”', 'Cuenta cómo el Apolo 11 tuvo una alarma de computadora durante el alunizaje.', 'La tripulación y el equipo en Tierra resolvieron el problema a tiempo.'], duration: '25–35 s' },
  { id: 'his-02', category: 'Historias', title: 'La cámara que vigilaba una cafetera', script: ['“La primera cámara web famosa no vigilaba una casa.”', 'En Cambridge apuntaba a una cafetera para ver si quedaba café.', 'La idea era ahorrarse el viaje hasta una cafetera vacía.'], duration: '20–25 s' },
  { id: 'his-03', category: 'Historias', title: 'La biblioteca que viaja en camello', script: ['“En el desierto, los libros también pueden ir de viaje.”', 'En Mauritania, antiguas bibliotecas familiares guardan manuscritos en ciudades del Sahara.', 'Cuenta cómo comunidades locales protegen ese conocimiento.'], duration: '25–35 s' },
  { id: 'his-04', category: 'Historias', title: 'Un mapa hecho para explicar el metro', script: ['“Este mapa no intenta parecerse a la ciudad.”', 'El mapa del metro de Londres de Harry Beck organizó las líneas como un diagrama eléctrico.', 'La claridad ganó sobre la geografía exacta.'], duration: '20–30 s' },
  { id: 'his-05', category: 'Historias', title: 'El mensaje que tardó décadas', script: ['“Una cápsula del tiempo puede convertir un secreto en una sorpresa.”', 'Cuenta una historia real de una cápsula local o escolar.', 'Cierra preguntando: ¿qué dejarías para que alguien lo abra en 50 años?'], duration: '20–30 s' },
  { id: 'tec-01', category: 'Tecnología', title: '¿Por qué el teclado no va en orden alfabético?', script: ['“Tu teclado pudo tener las letras en orden… pero no.”', 'Los diseños evolucionaron junto con las máquinas de escribir y sus mecanismos.', 'El teclado QWERTY se volvió popular y terminó siendo un estándar.'], duration: '20–30 s' },
  { id: 'tec-02', category: 'Tecnología', title: 'El “bug” que sí era un insecto', script: ['“Una polilla quedó atrapada en una computadora en 1947.”', 'El equipo la pegó en su cuaderno de registro del Harvard Mark II.', 'La palabra “bug” para errores técnicos ya existía; esta anécdota la hizo memorable.'], duration: '20–25 s' },
  { id: 'tec-03', category: 'Tecnología', title: 'Tu teléfono tiene un modo lupa', script: ['“Tu celular puede convertir la cámara en una lupa.”', 'En iPhone y Android puedes encontrar funciones de accesibilidad para ampliar texto e imagen.', 'Muestra cómo activarla en tu modelo y anima a guardar el tip.'], duration: '15–25 s' },
  { id: 'tec-04', category: 'Tecnología', title: '¿Qué hace el modo avión?', script: ['“El modo avión no hace que tu celular vuele.”', 'Desactiva conexiones inalámbricas como la red móvil; algunas se pueden reactivar por separado.', 'Úsalo cuando quieras desconectarte rápido o ahorrar distracciones.'], duration: '15–20 s' },
  { id: 'tec-05', category: 'Tecnología', title: 'El archivo que desaparece al apagar', script: ['“Hay un tipo de memoria que pierde sus datos al quedarse sin energía.”', 'La RAM guarda temporalmente lo que el computador usa en ese momento.', 'Por eso guardar tu trabajo sigue siendo una buena costumbre.'], duration: '20–25 s' },
  { id: 'nat-01', category: 'Naturaleza', title: 'El bosque que se comunica bajo tierra', script: ['“Bajo el suelo de un bosque hay una red de hongos.”', 'Las raíces y los hongos forman relaciones que pueden mover nutrientes entre organismos.', 'No es internet de árboles: es una red ecológica fascinante y compleja.'], duration: '20–30 s' },
  { id: 'nat-02', category: 'Naturaleza', title: 'La aurora no es una nube de colores', script: ['“La aurora aparece cuando partículas del Sol interactúan con la atmósfera.”', 'El campo magnético terrestre guía parte de esas partículas hacia las regiones polares.', 'Los gases de la atmósfera ayudan a crear sus colores.'], duration: '20–30 s' },
  { id: 'nat-03', category: 'Naturaleza', title: 'Los árboles también tienen anillos', script: ['“Un tronco puede guardar un archivo de su vida.”', 'Cada anillo suele corresponder a un año de crecimiento.', 'Su grosor puede ofrecer pistas sobre las condiciones de ese periodo.'], duration: '15–20 s' },
  { id: 'nat-04', category: 'Naturaleza', title: 'El desierto que a veces florece', script: ['“En algunos desiertos, la lluvia puede transformar el paisaje.”', 'Cuando las condiciones se alinean, semillas dormidas germinan y aparecen flores.', 'Es raro, breve y depende de la región y el clima.'], duration: '20–25 s' },
  { id: 'nat-05', category: 'Naturaleza', title: 'Por qué los flamencos son rosados', script: ['“Los flamencos no nacen rosados.”', 'Su color viene de pigmentos presentes en alimentos como algas y pequeños crustáceos.', 'La naturaleza les sirve un menú que también pinta sus plumas.'], duration: '15–20 s' },
  { id: 'pop-01', category: 'Cultura pop', title: 'El sonido que todos reconocen', script: ['“Este sonido dura un segundo y casi todos lo reconocen.”', 'Elige un efecto sonoro clásico de cine o videojuegos y recrea su contexto sin usar clips ajenos.', 'Pregunta: ¿en qué escena lo escuchaste por primera vez?'], duration: '15–25 s' },
  { id: 'pop-02', category: 'Cultura pop', title: 'Un personaje, dos voces', script: ['“¿Y si este personaje tuviera una voz completamente distinta?”', 'Haz una comparación humorística con dos interpretaciones propias.', 'Pide a la audiencia que elija cuál encaja mejor.'], duration: '15–20 s' },
  { id: 'pop-03', category: 'Cultura pop', title: 'El detalle escondido en el póster', script: ['“Pausa: hay un detalle escondido en este diseño.”', 'Usa un póster que puedas mostrar legalmente o recrea la forma con gráficos propios.', 'Acércate al detalle y cuenta por qué te parece interesante.'], duration: '20–30 s' },
  { id: 'pop-04', category: 'Cultura pop', title: '¿Qué pasaría si cambias el género?', script: ['“Imagina que esta historia fuera una comedia romántica.”', 'Reescribe una premisa conocida con un giro original y sin mostrar escenas ajenas.', 'Cierra con el nuevo título inventado para la película.'], duration: '15–25 s' },
  { id: 'pop-05', category: 'Cultura pop', title: 'El objeto que se volvió protagonista', script: ['“En esta historia, el objeto más simple se roba la escena.”', 'Elige un objeto icónico de una obra y explica qué lo hace memorable.', 'Termina con una pregunta para que comenten otros ejemplos.'], duration: '20–30 s' }
];

const categoryNames = ['Todos', ...new Set(ideas.map((idea) => idea.category))];
const categoriesElement = document.querySelector('#categories');
const titleElement = document.querySelector('#idea-title');
const scriptElement = document.querySelector('#idea-script');
const categoryElement = document.querySelector('#idea-category');
const durationElement = document.querySelector('#idea-duration');
const numberElement = document.querySelector('#idea-number');
const saveButton = document.querySelector('#save-idea');
const favoriteList = document.querySelector('#favorites-list');
const favoriteCount = document.querySelector('#favorite-count');
const emptyState = document.querySelector('#empty-state');
const toast = document.querySelector('#toast');

let selectedCategory = 'Todos';
let currentIdea = null;
let turn = 0;
let toastTimer;
let favorites = loadFavorites();

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem('girolab-favorites') || '[]');
    return Array.isArray(saved) ? saved.filter((id) => ideas.some((idea) => idea.id === id)) : [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem('girolab-favorites', JSON.stringify(favorites));
  } catch {
    showToast('No se pudo guardar en este navegador.');
  }
}

function renderCategories() {
  categoriesElement.replaceChildren();
  for (const name of categoryNames) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'category-button';
    button.textContent = name;
    button.setAttribute('aria-pressed', String(name === selectedCategory));
    button.addEventListener('click', () => {
      selectedCategory = name;
      renderCategories();
      showRandomIdea(true);
    });
    categoriesElement.append(button);
  }
}

function filteredIdeas() {
  return selectedCategory === 'Todos' ? ideas : ideas.filter((idea) => idea.category === selectedCategory);
}

function showRandomIdea(allowSame = false) {
  const choices = filteredIdeas();
  const alternatives = choices.filter((idea) => idea.id !== currentIdea?.id);
  const pool = !allowSame && alternatives.length ? alternatives : choices;
  currentIdea = pool[Math.floor(Math.random() * pool.length)];
  turn += 1;
  categoryElement.textContent = currentIdea.category.toLocaleUpperCase('es-CL');
  titleElement.textContent = currentIdea.title;
  durationElement.textContent = currentIdea.duration;
  numberElement.textContent = `GIRO ${String(turn).padStart(2, '0')}`;
  scriptElement.replaceChildren();
  for (const line of currentIdea.script) {
    const item = document.createElement('li');
    item.textContent = line;
    scriptElement.append(item);
  }
  updateSaveButton();
}

function updateSaveButton() {
  const isSaved = currentIdea && favorites.includes(currentIdea.id);
  saveButton.classList.toggle('is-saved', Boolean(isSaved));
  saveButton.setAttribute('aria-pressed', String(Boolean(isSaved)));
  saveButton.innerHTML = isSaved ? '<span aria-hidden="true">♥</span> Guardada' : '<span aria-hidden="true">♡</span> Guardar';
}

function renderFavorites() {
  favoriteList.replaceChildren();
  favoriteCount.textContent = String(favorites.length);
  emptyState.hidden = favorites.length > 0;
  for (const id of favorites) {
    const idea = ideas.find((item) => item.id === id);
    if (!idea) continue;
    const entry = document.createElement('div');
    entry.className = 'favorite-entry';
    const open = document.createElement('button');
    open.type = 'button';
    open.className = 'favorite-item';
    open.innerHTML = `<span></span><span></span>`;
    open.children[0].textContent = idea.title;
    open.children[1].textContent = idea.category.toLocaleUpperCase('es-CL');
    open.addEventListener('click', () => {
      currentIdea = idea;
      turn += 1;
      categoryElement.textContent = idea.category.toLocaleUpperCase('es-CL');
      titleElement.textContent = idea.title;
      durationElement.textContent = idea.duration;
      numberElement.textContent = `GIRO ${String(turn).padStart(2, '0')}`;
      scriptElement.replaceChildren(...idea.script.map((line) => {
        const item = document.createElement('li');
        item.textContent = line;
        return item;
      }));
      updateSaveButton();
      document.querySelector('.idea-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'remove-favorite';
    remove.setAttribute('aria-label', `Quitar “${idea.title}” de guardadas`);
    remove.textContent = '×';
    remove.addEventListener('click', () => {
      favorites = favorites.filter((favoriteId) => favoriteId !== id);
      saveFavorites();
      renderFavorites();
      updateSaveButton();
      showToast('Idea quitada de tu colección.');
    });
    entry.append(open, remove);
    favoriteList.append(entry);
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2200);
}

function scriptText(idea) {
  return `${idea.title}\n\n${idea.script.map((line, index) => `${index + 1}. ${line}`).join('\n')}\n\nDuración sugerida: ${idea.duration}\nIdea creada con GiroLab · Giro Infinito`;
}

async function copyCurrentIdea() {
  if (!currentIdea) return;
  const text = scriptText(currentIdea);
  try {
    await navigator.clipboard.writeText(text);
    showToast('Guion copiado. ¡A grabar!');
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    textarea.remove();
    showToast(copied ? 'Guion copiado. ¡A grabar!' : 'Selecciona el guion para copiarlo.');
  }
}

document.querySelector('#new-idea').addEventListener('click', () => showRandomIdea());
document.querySelector('#copy-idea').addEventListener('click', copyCurrentIdea);
saveButton.addEventListener('click', () => {
  if (!currentIdea) return;
  if (favorites.includes(currentIdea.id)) {
    favorites = favorites.filter((id) => id !== currentIdea.id);
    showToast('Idea quitada de tu colección.');
  } else {
    favorites = [currentIdea.id, ...favorites];
    showToast('Idea guardada en tu colección.');
  }
  saveFavorites();
  renderFavorites();
  updateSaveButton();
});

renderCategories();
renderFavorites();
showRandomIdea(true);
