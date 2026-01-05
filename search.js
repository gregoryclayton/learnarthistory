// Chapter data with keywords for searching
const chapters = [
    {
        id: "0.1",
        title: "Introduction to Art History and Why It Matters",
        url: "chapter0.1.html",
        section: "Introduction to Art History",
        keywords: ["introduction", "basics", "beginning", "start", "why", "matters", "importance", "overview"]
    },
    {
        id: "0.2",
        title: "How to Study Art History",
        url: "chapter0.2.html",
        section: "Introduction to Art History",
        keywords:  ["study", "learn", "methods", "techniques", "approach", "analyze", "analysis"]
    },
    {
        id: "0.3",
        title: "Basic Art Terminology",
        url: "chapter0.3.html",
        section: "Introduction to Art History",
        keywords: ["terminology", "terms", "vocabulary", "words", "definitions", "glossary", "basics"]
    },
    {
        id: "0.4",
        title: "Elements and Principles of Art",
        url:  "chapter0.4.html",
        section: "Introduction to Art History",
        keywords: ["elements", "principles", "design", "composition", "color", "line", "shape", "form", "texture", "space", "balance", "contrast", "emphasis", "movement", "pattern", "rhythm", "unity"]
    },
    {
        id: "1.1",
        title: "Prehistoric Art: Cave Paintings and Sculptures",
        url: "chapter1.1.html",
        section: "Prehistoric and Ancient Art",
        keywords: ["prehistoric", "cave", "paintings", "sculptures", "lascaux", "altamira", "venus", "paleolithic", "neolithic", "stone age", "ancient"]
    },
    {
        id: "1.2",
        title: "Mesopotamian Art",
        url: "chapter1.2.html",
        section: "Prehistoric and Ancient Art",
        keywords:  ["mesopotamia", "mesopotamian", "sumerian", "babylonian", "assyrian", "ziggurat", "cuneiform", "iraq", "fertile crescent", "ancient"]
    },
    {
        id: "1.3",
        title: "Egyptian Art and Architecture",
        url: "chapter1.3.html",
        section: "Prehistoric and Ancient Art",
        keywords: ["egypt", "egyptian", "pyramid", "pyramids", "sphinx", "pharaoh", "hieroglyphics", "tomb", "mummy", "nile", "ancient", "tutankhamun"]
    },
    {
        id: "1.4",
        title: "Art of the Ancient Americas",
        url: "chapter1.4.html",
        section: "Prehistoric and Ancient Art",
        keywords: ["americas", "maya", "mayan", "aztec", "inca", "olmec", "pre-columbian", "mesoamerica", "south america", "native", "indigenous", "ancient"]
    },
    {
        id: "1.5",
        title: "Ancient Greek Art",
        url: "chapter1.5.html",
        section: "Prehistoric and Ancient Art",
        keywords: ["greek", "greece", "classical", "parthenon", "sculpture", "pottery", "athens", "hellenistic", "archaic", "ancient", "columns", "temple"]
    },
    {
        id: "1.6",
        title: "Roman Art and Its Influence",
        url:  "chapter1.6.html",
        section: "Prehistoric and Ancient Art",
        keywords: ["roman", "rome", "italy", "colosseum", "fresco", "mosaic", "architecture", "empire", "ancient", "pompeii", "sculpture"]
    },
    {
        id: "2.1",
        title: "Early Christian and Byzantine Art",
        url: "chapter2.1.html",
        section: "Medieval and Byzantine Art",
        keywords:  ["christian", "byzantine", "byzantium", "constantinople", "mosaic", "icon", "icons", "religious", "church", "medieval", "gold"]
    },
    {
        id: "2.2",
        title: "Islamic Art and Architecture",
        url: "chapter2.2.html",
        section: "Medieval and Byzantine Art",
        keywords: ["islamic", "islam", "muslim", "mosque", "calligraphy", "geometric", "arabesque", "tiles", "persian", "arabic", "middle east"]
    },
    {
        id: "2.3",
        title: "Romanesque Art",
        url: "chapter2.3.html",
        section: "Medieval and Byzantine Art",
        keywords: ["romanesque", "medieval", "church", "monastery", "architecture", "sculpture", "manuscript", "illuminated", "europe"]
    },
    {
        id: "2.4",
        title: "Gothic Art and Architecture",
        url: "chapter2.4.html",
        section: "Medieval and Byzantine Art",
        keywords: ["gothic", "cathedral", "stained glass", "flying buttress", "medieval", "notre dame", "chartres", "architecture", "pointed arch"]
    },
    {
        id: "3.1",
        title: "Early Renaissance in Italy",
        url: "chapter3.1.html",
        section: "Renaissance Art",
        keywords: ["renaissance", "italy", "italian", "florence", "brunelleschi", "donatello", "masaccio", "perspective", "humanism", "15th century", "quattrocento"]
    },
    {
        id: "3.2",
        title: "High Renaissance Masters",
        url: "chapter3.2.html",
        section: "Renaissance Art",
        keywords: ["renaissance", "leonardo", "da vinci", "michelangelo", "raphael", "sistine chapel", "mona lisa", "last supper", "david", "masters", "italy"]
    },
    {
        id: "3.3",
        title: "Northern Renaissance",
        url: "chapter3.3.html",
        section: "Renaissance Art",
        keywords:  ["northern", "renaissance", "flemish", "dutch", "german", "van eyck", "durer", "bosch", "bruegel", "oil painting", "netherlands", "germany"]
    },
    {
        id: "3.4",
        title: "Mannerism",
        url:  "chapter3.4.html",
        section: "Renaissance Art",
        keywords: ["mannerism", "mannerist", "elongated", "pontormo", "parmigianino", "el greco", "16th century", "late renaissance"]
    },
    {
        id: "4.1",
        title: "The Baroque Style",
        url: "chapter4.1.html",
        section: "Baroque and Rococo",
        keywords: ["baroque", "caravaggio", "bernini", "rubens", "dramatic", "chiaroscuro", "17th century", "catholic", "counter-reformation", "italy"]
    },
    {
        id: "4.2",
        title: "Dutch Golden Age Painting",
        url: "chapter4.2.html",
        section: "Baroque and Rococo",
        keywords: ["dutch", "golden age", "rembrandt", "vermeer", "netherlands", "holland", "portrait", "still life", "genre", "17th century"]
    },
    {
        id: "4.3",
        title: "Rococo: The Art of Elegance",
        url: "chapter4.3.html",
        section: "Baroque and Rococo",
        keywords: ["rococo", "france", "french", "watteau", "boucher", "fragonard", "elegant", "decorative", "aristocratic", "18th century", "pastel"]
    },
    {
        id: "5.1",
        title: "Neoclassicism",
        url:  "chapter5.1.html",
        section: "Neoclassicism to Romanticism",
        keywords:  ["neoclassicism", "neoclassical", "david", "ingres", "classical", "greek", "roman", "revolution", "enlightenment", "18th century", "19th century"]
    },
    {
        id: "5.2",
        title: "Romanticism",
        url: "chapter5.2.html",
        section: "Neoclassicism to Romanticism",
        keywords: ["romanticism", "romantic", "delacroix", "turner", "friedrich", "goya", "emotion", "nature", "sublime", "19th century", "landscape"]
    },
    {
        id: "5.3",
        title: "Realism",
        url: "chapter5.3.html",
        section: "Neoclassicism to Romanticism",
        keywords:  ["realism", "realist", "courbet", "millet", "daumier", "everyday", "working class", "19th century", "france", "social"]
    },
    {
        id: "6.1",
        title: "Impressionism",
        url: "chapter6.1.html",
        section: "Modern Art Movements",
        keywords:  ["impressionism", "impressionist", "monet", "renoir", "degas", "light", "color", "outdoor", "plein air", "paris", "19th century", "water lilies"]
    },
    {
        id: "6.2",
        title: "Post-Impressionism",
        url:  "chapter6.2.html",
        section: "Modern Art Movements",
        keywords: ["post-impressionism", "post impressionism", "van gogh", "cezanne", "gauguin", "seurat", "pointillism", "starry night", "color", "19th century"]
    },
    {
        id: "6.3",
        title: "Expressionism",
        url: "chapter6.3.html",
        section: "Modern Art Movements",
        keywords: ["expressionism", "expressionist", "munch", "kirchner", "kandinsky", "emotion", "distortion", "german", "scream", "20th century"]
    },
    {
        id: "6.4",
        title: "Cubism",
        url: "chapter6.4.html",
        section: "Modern Art Movements",
        keywords: ["cubism", "cubist", "picasso", "braque", "geometric", "abstract", "fragmented", "multiple perspectives", "20th century", "guernica"]
    },
    {
        id: "6.5",
        title: "Surrealism",
        url: "chapter6.5.html",
        section: "Modern Art Movements",
        keywords: ["surrealism", "surrealist", "dali", "magritte", "ernst", "dreams", "unconscious", "freud", "fantasy", "20th century", "melting clocks"]
    },
    {
        id: "6.6",
        title: "Abstract Expressionism",
        url: "chapter6.6.html",
        section: "Modern Art Movements",
        keywords: ["abstract expressionism", "pollock", "de kooning", "rothko", "action painting", "color field", "new york", "american", "20th century", "drip"]
    },
    {
        id: "7.1",
        title: "Pop Art",
        url: "chapter7.1.html",
        section: "Contemporary Art",
        keywords: ["pop art", "warhol", "lichtenstein", "popular culture", "consumer", "advertising", "campbell soup", "marilyn", "20th century", "american", "british"]
    },
    {
        id: "7.2",
        title: "Minimalism and Conceptual Art",
        url: "chapter7.2.html",
        section: "Contemporary Art",
        keywords: ["minimalism", "minimalist", "conceptual", "judd", "flavin", "lewitt", "simple", "geometric", "idea", "20th century"]
    },
    {
        id: "7.3",
        title: "Postmodernism",
        url: "chapter7.3.html",
        section: "Contemporary Art",
        keywords: ["postmodernism", "postmodern", "appropriation", "irony", "pastiche", "deconstruction", "20th century", "contemporary"]
    },
    {
        id: "7.4",
        title: "Contemporary Art Practices",
        url: "chapter7.4.html",
        section: "Contemporary Art",
        keywords: ["contemporary", "installation", "performance", "video", "mixed media", "21st century", "modern", "current"]
    },
    {
        id: "7.5",
        title: "Digital and New Media Art",
        url: "chapter7.5.html",
        section: "Contemporary Art",
        keywords: ["digital", "new media", "technology", "computer", "internet", "interactive", "virtual", "21st century", "nft", "ai"]
    },
    {
        id: "8.1",
        title: "Asian Art Traditions",
        url: "chapter8.1.html",
        section: "Global Perspectives",
        keywords: ["asian", "asia", "chinese", "japanese", "indian", "korea", "buddhist", "hindu", "calligraphy", "scroll", "woodblock", "zen"]
    },
    {
        id: "8.2",
        title: "African Art",
        url: "chapter8.2.html",
        section: "Global Perspectives",
        keywords:  ["african", "africa", "mask", "sculpture", "tribal", "benin", "yoruba", "textiles", "wood carving", "traditional"]
    },
    {
        id: "8.3",
        title: "Indigenous Art Traditions",
        url: "chapter8.3.html",
        section: "Global Perspectives",
        keywords: ["indigenous", "native", "aboriginal", "oceanic", "pacific", "polynesian", "maori", "totem", "traditional", "tribal"]
    },
    {
        id: "8.4",
        title: "Globalization and Art",
        url: "chapter8.4.html",
        section: "Global Perspectives",
        keywords: ["globalization", "global", "international", "multicultural", "diversity", "contemporary", "world", "cross-cultural", "21st century"]
    }
];

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Search function
function searchChapters(query) {
    if (! query || query.trim() === '') {
        return [];
    }
    
    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    const results = [];
    
    chapters.forEach(chapter => {
        let score = 0;
        const titleLower = chapter.title.toLowerCase();
        const sectionLower = chapter.section.toLowerCase();
        const keywordsLower = chapter.keywords. join(' ').toLowerCase();
        
        searchTerms.forEach(term => {
            // Check title (highest priority)
            if (titleLower.includes(term)) {
                score += 10;
                // Bonus for exact word match in title
                if (titleLower.split(/\s+/).some(word => word === term)) {
                    score += 5;
                }
            }
            
            // Check section name
            if (sectionLower. includes(term)) {
                score += 5;
            }
            
            // Check keywords
            if (keywordsLower. includes(term)) {
                score += 3;
                // Bonus for exact keyword match
                if (chapter.keywords.some(kw => kw.toLowerCase() === term)) {
                    score += 2;
                }
            }
            
            // Check chapter ID
            if (chapter.id. includes(term)) {
                score += 8;
            }
        });
        
        if (score > 0) {
            results.push({ chapter, score });
        }
    });
    
    // Sort by score descending
    results.sort((a, b) => b.score - a.score);
    
    return results. map(r => r.chapter);
}

// Display search results
function displayResults(results, query) {
    searchResults. innerHTML = '';
    
    if (!query || query.trim() === '') {
        searchResults.style.display = 'none';
        return;
    }
    
    if (results.length === 0) {
        searchResults.style.display = 'block';
        searchResults.innerHTML = `
            <div class="no-results">
                <p>No chapters found for "<strong>${escapeHtml(query)}</strong>"</p>
                <p class="suggestion">Try different keywords or browse the chapter list below.</p>
            </div>
        `;
        return;
    }
    
    searchResults.style.display = 'block';
    
    const resultsHeader = document.createElement('div');
    resultsHeader.className = 'results-header';
    resultsHeader.innerHTML = `<span>${results.length} result${results.length !== 1 ? 's' :  ''} for "<strong>${escapeHtml(query)}</strong>"</span>`;
    searchResults.appendChild(resultsHeader);
    
    const resultsList = document.createElement('ul');
    resultsList.className = 'results-list';
    
    // Show max 8 results in dropdown
    const displayResults = results.slice(0, 8);
    
    displayResults.forEach(chapter => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${chapter.url}">
                <span class="result-id">${chapter.id}</span>
                <span class="result-title">${highlightMatch(chapter.title, query)}</span>
                <span class="result-section">${chapter.section}</span>
            </a>
        `;
        resultsList.appendChild(li);
    });
    
    searchResults.appendChild(resultsList);
    
    if (results.length > 8) {
        const moreResults = document.createElement('div');
        moreResults.className = 'more-results';
        moreResults.textContent = `+ ${results.length - 8} more results`;
        searchResults.appendChild(moreResults);
    }
}

// Highlight matching text
function highlightMatch(text, query) {
    const terms = query.toLowerCase().trim().split(/\s+/);
    let result = text;
    
    terms.forEach(term => {
        if (term.length > 1) {
            const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
            result = result.replace(regex, '<mark>$1</mark>');
        }
    });
    
    return result;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Escape regex special characters
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Event Listeners
searchInput.addEventListener('input', function(e) {
    const query = e.target.value;
    const results = searchChapters(query);
    displayResults(results, query);
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const query = searchInput.value;
        const results = searchChapters(query);
        if (results.length > 0) {
            window.location.href = results[0].url;
        }
    }
});

searchButton.addEventListener('click', function() {
    const query = searchInput.value;
    const results = searchChapters(query);
    if (results.length > 0) {
        window.location.href = results[0].url;
    }
});

// Clear results when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('. dropdown')) {
        searchResults.style. display = 'none';
    }
});

// Keep dropdown open when interacting with search
searchInput.addEventListener('focus', function() {
    if (searchInput.value. trim()) {
        const results = searchChapters(searchInput.value);
        displayResults(results, searchInput.value);
    }
});
