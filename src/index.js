import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

function updateCount() {
  const text = document.getElementById("text-input").value;
  const count = text.length;
  document.getElementById("char-count").textContent = count;
}

