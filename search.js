// Simple client-side search across site pages.
// Attach this once; it will auto-bind to any `.search-box` in the layout.

const pages = [
  { title: "Getting Started", url: "getting-started.html", text: "how to use the site study path glossary resources timeline" },
  { title: "Glossary", url: "glossary.html", text: "definitions art history terms fauvism cubism abstraction" },
  { title: "Resources", url: "resources.html", text: "books journals open access museums study tools" },
  { title: "About", url: "about.html", text: "mission approach credits contact learnarthistory" },
  { title: "Famous Artists", url: "famous-artists.html", text: "leonardo michelangelo raphael caravaggio monet van gogh picasso" },
  { title: "Timeline", url: "timeline.html", text: "renaissance baroque rococo impressionism cubism dada surrealism abstract expressionism" },
  { title: "Museums", url: "museums.html", text: "louvre orsay rijksmuseum met moma guggenheim tate pompidou" },
  { title: "Art Books", url: "art-books.html", text: "surveys janson gardner story of art modern shock of the new" },
  { title: "Online Collections", url: "online-collections.html", text: "google arts culture europeana smithsonian met open access rijksmuseum" },
  { title: "Documentaries", url: "documentaries.html", text: "power of art art21 shock of the new exit through the gift shop bauhaus" },
  // Chapters — extend this list with every chapter you have:
  { title: "6.6 — Toward Modern Architecture & Design", url: "chapter6.6.html", text: "arts and crafts art nouveau vienna secession prairie school aeg turbine" },
  { title: "7.1 — Fauvism and Expressionism", url: "chapter7.1.html", text: "matisse derain kandinsky marc kirchner arbitrary color expressionism" },
  { title: "7.2 — Cubism", url: "chapter7.2.html", text: "picasso braque analytic synthetic collage simultaneity facets planes" },
  { title: "7.3 — Futurism & the Machine Age", url: "chapter7.3.html", text: "marinetti boccioni balla severini dynamism speed machine" },
  { title: "7.4 — Constructivism & De Stijl", url: "chapter7.4.html", text: "tatlin rodchenko lissitzky mondrian van doesburg rietveld geometry" },
  { title: "7.5 — Bauhaus & The International Style", url: "chapter7.5.html", text: "gropius mies le corbusier breuer bauhaus dessau international style" },
  { title: "8.1 — Dada and Surrealism", url: "chapter8.1.html", text: "duchamp hoch dali magritte miro automatism readymade dreams" },
  { title: "8.2 — Abstract Expressionism", url: "chapter8.2.html", text: "pollock rothko de kooning krasner frankenthaler gesture color field" },
  { title: "8.3 — Postwar European Currents", url: "chapter8.3.html", text: "art informel cobra nouveau realisme zero gutai" },
  { title: "8.4 — Mid-Century Sculpture", url: "chapter8.4.html", text: "calder hepworth moore noguchi mobiles assemblage open form" },
];

function setupSearch() {
  const searchBoxes = document.querySelectorAll('.search-box');
  searchBoxes.forEach(box => {
    const input = box.querySelector('input');
    if (!input) return;

    let results = box.querySelector('.search-results');
    if (!results) {
      results = document.createElement('div');
      results.className = 'search-results';
      box.appendChild(results);
    }

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      results.innerHTML = '';
      if (!q) {
        results.style.display = 'none';
        return;
      }
      const matches = pages.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.text.toLowerCase().includes(q)
      ).slice(0, 8);

      if (matches.length === 0) {
        results.innerHTML = '<div class="result empty">No matches</div>';
        results.style.display = 'block';
        return;
      }

      results.innerHTML = matches.map(m =>
        `<a class="result" href="${m.url}">
            <div class="result-title">${m.title}</div>
            <div class="result-snippet">${snippet(m.text, q)}</div>
         </a>`
      ).join('');
      results.style.display = 'block';
    });

    input.addEventListener('blur', () => setTimeout(() => {
      results.style.display = 'none';
    }, 200));
    input.addEventListener('focus', () => {
      if (input.value.trim()) results.style.display = 'block';
    });
  });
}

function snippet(text, q, radius = 40) {
  const idx = text.toLowerCase().indexOf(q);
  if (idx === -1) return text.slice(0, radius * 2) + (text.length > radius * 2 ? '…' : '');
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + q.length + radius);
  return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupSearch);
} else {
  setupSearch();
}
