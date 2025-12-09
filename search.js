// Client-side search functionality for LearnArtHistory.com
(function() {
    'use strict';

    // Pages array containing all site pages for searching
    const pages = [
        { url: 'index.html', title: 'LearnArtHistory.com - Introduction to Art History', content: 'Welcome to LearnArtHistory.com comprehensive free art history tutorial students enthusiasts lifelong learners chapters introduction guide world art history prehistoric cave paintings contemporary movements' },
        { url: 'about.html', title: 'About', content: 'About LearnArtHistory.com open student-friendly companion surveying global art history concise chapter overviews glossary resource links visuals connect movements artists key terms mission approach credits contact' },
        { url: 'getting-started.html', title: 'Getting Started', content: 'Getting started with art history how to use this site study guide learning path beginners' },
        { url: 'glossary.html', title: 'Glossary', content: 'Art history glossary terms definitions vocabulary art movements techniques styles periods' },
        { url: 'resources.html', title: 'Resources', content: 'Art history resources books articles museums collections online resources' },
        { url: 'famous-artists.html', title: 'Famous Artists', content: 'Famous artists throughout history notable painters sculptors architects influential artists' },
        { url: 'timeline.html', title: 'Timeline', content: 'Art history timeline chronological overview art movements periods prehistoric ancient medieval renaissance modern contemporary' },
        { url: 'museums.html', title: 'Museums', content: 'Museums world major art museums galleries collections visit virtual tours' },
        { url: 'art-books.html', title: 'Art Books', content: 'Recommended art books textbooks reading list art history literature resources' },
        { url: 'online-connections.html', title: 'Online Collections', content: 'Online art collections digital museums virtual galleries online resources databases' },
        { url: 'documentaries.html', title: 'Documentaries', content: 'Art documentaries films videos educational content art history documentaries' },
        
        // Chapter 0: Introduction to Art History
        { url: 'chapter0.1.html', title: '0.1 — Introduction to Art History and Why It Matters', content: 'Introduction to Art History why it matters understanding importance studying art history visual culture human expression' },
        { url: 'chapter0.2.html', title: '0.2 — How to Study Art History', content: 'How to Study Art History methods approaches techniques analyzing artwork research writing about art critical thinking' },
        { url: 'chapter0.3.html', title: '0.3 — Basic Art Terminology', content: 'Basic Art Terminology fundamental terms vocabulary elements composition medium technique style form content' },
        { url: 'chapter0.4.html', title: '0.4 — Elements and Principles of Art', content: 'Elements and Principles of Art line shape form color value space texture balance unity variety emphasis proportion rhythm' },
        
        // Chapter 1: Prehistoric and Ancient Art
        { url: 'chapter1.1.html', title: '1.1 — Prehistoric Art: Cave Paintings and Sculptures', content: 'Prehistoric Art cave paintings sculptures Lascaux Altamira Venus figurines Paleolithic Neolithic Stone Age early human artistic expression' },
        { url: 'chapter1.2.html', title: '1.2 — Mesopotamian Art', content: 'Mesopotamian Art ancient Mesopotamia Sumerian Babylonian Assyrian ziggurats cuneiform relief sculptures Iraq Fertile Crescent' },
        { url: 'chapter1.3.html', title: '1.3 — Egyptian Art and Architecture', content: 'Egyptian Art Architecture pyramids pharaohs hieroglyphics tomb paintings sculpture Sphinx ancient Egypt Nile Valley monuments' },
        { url: 'chapter1.4.html', title: '1.4 — Art of the Ancient Americas', content: 'Art Ancient Americas Maya Aztec Inca Olmec Mesoamerican pre-Columbian indigenous cultures pyramids temples artifacts' },
        { url: 'chapter1.5.html', title: '1.5 — Ancient Greek Art', content: 'Ancient Greek Art classical Greece sculpture architecture Parthenon pottery vases Olympic games philosophy democracy Athens Sparta' },
        { url: 'chapter1.6.html', title: '1.6 — Roman Art and Its Influence', content: 'Roman Art influence architecture Colosseum aqueducts mosaics portraits empire Augustus Caesar Latin civilization' },
        
        // Chapter 2: Medieval and Byzantine Art
        { url: 'chapter2.1.html', title: '2.1 — Early Christian and Byzantine Art', content: 'Early Christian Byzantine Art icons mosaics Constantinople Hagia Sophia religious art Orthodox Christianity basilicas catacombs' },
        { url: 'chapter2.2.html', title: '2.2 — Islamic Art and Architecture', content: 'Islamic Art Architecture mosques calligraphy geometric patterns arabesque Alhambra Quran Islamic civilization Middle East' },
        { url: 'chapter2.3.html', title: '2.3 — Romanesque Art', content: 'Romanesque Art architecture medieval Europe monasteries churches thick walls rounded arches barrel vaults pilgrimage routes' },
        { url: 'chapter2.4.html', title: '2.4 — Gothic Art and Architecture', content: 'Gothic Art Architecture cathedrals pointed arches flying buttresses stained glass Notre Dame Chartres medieval France Germany' },
        
        // Chapter 3: Renaissance Art
        { url: 'chapter3.1.html', title: '3.1 — Early Renaissance in Italy', content: 'Early Renaissance Italy Florence Giotto Masaccio Brunelleschi Donatello perspective humanism rebirth classical antiquity 15th century' },
        { url: 'chapter3.2.html', title: '3.2 — High Renaissance Masters', content: 'High Renaissance Masters Leonardo da Vinci Michelangelo Raphael Sistine Chapel Mona Lisa David Last Supper Vatican Rome' },
        { url: 'chapter3.3.html', title: '3.3 — Northern Renaissance', content: 'Northern Renaissance Flanders Netherlands Germany Jan van Eyck Albrecht Dürer oil painting detail realism northern Europe' },
        { url: 'chapter3.4.html', title: '3.4 — Mannerism', content: 'Mannerism late Renaissance elongated figures artificial colors complex compositions Parmigianino El Greco distortion elegance' },
        
        // Chapter 4: Baroque and Rococo
        { url: 'chapter4.1.html', title: '4.1 — The Baroque Style', content: 'Baroque Style drama emotion grandeur Caravaggio Bernini Rubens chiaroscuro dynamic movement Catholic Counter-Reformation 17th century' },
        { url: 'chapter4.2.html', title: '4.2 — Dutch Golden Age Painting', content: 'Dutch Golden Age Painting Rembrandt Vermeer Frans Hals still life landscape portraits Netherlands Holland 17th century realism' },
        { url: 'chapter4.3.html', title: '4.3 — Rococo: The Art of Elegance', content: 'Rococo Art Elegance decorative ornate pastel colors Watteau Fragonard Boucher French aristocracy playful lighthearted 18th century' },
        
        // Chapter 5: Neoclassicism to Romanticism
        { url: 'chapter5.1.html', title: '5.1 — Neoclassicism', content: 'Neoclassicism classical revival Greek Roman ancient order harmony David Ingres Napoleon French Revolution Enlightenment reason' },
        { url: 'chapter5.2.html', title: '5.2 — Romanticism', content: 'Romanticism emotion nature imagination individual sublime Delacroix Goya Turner landscape exotic dramatic passionate 19th century' },
        { url: 'chapter5.3.html', title: '5.3 — Realism', content: 'Realism everyday life common people Courbet Millet Daumier social commentary working class industrial revolution France truth' },
        
        // Chapter 6: Modern Art Movements
        { url: 'chapter6.1.html', title: '6.1 — Impressionism', content: 'Impressionism light color outdoor painting Monet Renoir Degas Pissarro plein air brushstrokes Paris modern life 19th century' },
        { url: 'chapter6.2.html', title: '6.2 — Post-Impressionism', content: 'Post-Impressionism Van Gogh Cézanne Gauguin Seurat color expression structure pointillism symbolism emotion form late 19th century' },
        { url: 'chapter6.3.html', title: '6.3 — Expressionism', content: 'Expressionism emotion distortion bold colors Munch Kirchner Die Brücke Der Blaue Reiter German art psychological intense subjective' },
        { url: 'chapter6.4.html', title: '6.4 — Cubism', content: 'Cubism Picasso Braque fragmentation multiple perspectives geometric forms analytical synthetic modern revolutionary 20th century Paris' },
        { url: 'chapter6.5.html', title: '6.5 — Surrealism', content: 'Surrealism dreams subconscious Dalí Magritte Ernst automatic drawing psychoanalysis Freud fantasy bizarre imagination unconscious mind' },
        { url: 'chapter6.6.html', title: '6.6 — Abstract Expressionism', content: 'Abstract Expressionism Pollock Rothko de Kooning action painting color field New York School drip painting gestural American art' },
        
        // Chapter 7: Contemporary Art
        { url: 'chapter7.1.html', title: '7.1 — Pop Art', content: 'Pop Art Warhol Lichtenstein popular culture mass media consumer society advertising Campbell soup comic books 1960s American British' },
        { url: 'chapter7.2.html', title: '7.2 — Minimalism and Conceptual Art', content: 'Minimalism Conceptual Art ideas simplicity reduction essential geometric forms Sol LeWitt Donald Judd concept over execution' },
        { url: 'chapter7.3.html', title: '7.3 — Postmodernism', content: 'Postmodernism irony appropriation pastiche pluralism questioning authority deconstruction contemporary theory critical practice diverse' },
        { url: 'chapter7.4.html', title: '7.4 — Contemporary Art Practices', content: 'Contemporary Art Practices installation performance video art social practice relational aesthetics participation new media current trends' },
        { url: 'chapter7.5.html', title: '7.5 — Digital and New Media Art', content: 'Digital New Media Art technology internet virtual reality computer graphics interactive digital photography video games cyber culture' },
        
        // Chapter 8: Global Perspectives
        { url: 'chapter8.1.html', title: '8.1 — Asian Art Traditions', content: 'Asian Art Traditions China Japan India Korea calligraphy ink painting Buddhism Hinduism ceramics silk scroll landscape meditation' },
        { url: 'chapter8.2.html', title: '8.2 — African Art', content: 'African Art masks sculpture tribal traditional contemporary Africa cultural heritage ritual ceremonial wood carving textiles' },
        { url: 'chapter8.3.html', title: '8.3 — Indigenous Art Traditions', content: 'Indigenous Art Traditions Native American Aboriginal Australian Pacific cultures traditional knowledge spiritual connection land heritage' },
        { url: 'chapter8.4.html', title: '8.4 — Globalization and Art', content: 'Globalization Art contemporary international cross-cultural exchange biennials global market migration identity multicultural diversity' }
    ];

    // Helper function to create a snippet from content
    function createSnippet(content, query, maxLength = 150) {
        const lowerContent = content.toLowerCase();
        const lowerQuery = query.toLowerCase();
        const index = lowerContent.indexOf(lowerQuery);
        
        if (index === -1) {
            return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
        }
        
        // Find a good starting point (previous word boundary)
        let start = Math.max(0, index - 50);
        if (start > 0) {
            const spaceIndex = content.indexOf(' ', start);
            start = spaceIndex !== -1 ? spaceIndex + 1 : start;
        }
        
        // Find a good ending point (next word boundary)
        let end = Math.min(content.length, index + query.length + 50);
        if (end < content.length) {
            const spaceIndex = content.lastIndexOf(' ', end);
            end = spaceIndex !== -1 ? spaceIndex : end;
        }
        
        let snippet = content.substring(start, end);
        if (start > 0) snippet = '...' + snippet;
        if (end < content.length) snippet = snippet + '...';
        
        return snippet;
    }

    // Search function
    function search(query) {
        if (!query || query.trim().length < 2) {
            return [];
        }
        
        const lowerQuery = query.toLowerCase().trim();
        const results = [];
        
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            const titleLower = page.title.toLowerCase();
            const contentLower = page.content.toLowerCase();
            
            // Calculate relevance score
            let score = 0;
            
            // Title matches are more important
            if (titleLower.includes(lowerQuery)) {
                score += 10;
                // Exact title match gets even higher score
                if (titleLower === lowerQuery) {
                    score += 20;
                }
            }
            
            // Content matches
            if (contentLower.includes(lowerQuery)) {
                score += 5;
                // Count occurrences for better ranking
                const matches = contentLower.split(lowerQuery).length - 1;
                score += matches;
            }
            
            if (score > 0) {
                results.push({
                    url: page.url,
                    title: page.title,
                    snippet: createSnippet(page.content, query),
                    score: score
                });
            }
        }
        
        // Sort by score (descending)
        results.sort((a, b) => b.score - a.score);
        
        // Limit to 8 results
        return results.slice(0, 8);
    }

    // Initialize search functionality
    function initSearch() {
        const searchBoxes = document.querySelectorAll('.search-box');
        
        searchBoxes.forEach(searchBox => {
            const input = searchBox.querySelector('input[type="text"]');
            if (!input) return;
            
            // Create results container
            const resultsContainer = document.createElement('div');
            resultsContainer.className = 'search-results';
            searchBox.appendChild(resultsContainer);
            
            // Handle input events
            let searchTimeout;
            input.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                
                const query = this.value;
                
                searchTimeout = setTimeout(() => {
                    if (!query || query.trim().length < 2) {
                        resultsContainer.innerHTML = '';
                        resultsContainer.style.display = 'none';
                        return;
                    }
                    
                    const results = search(query);
                    
                    if (results.length === 0) {
                        resultsContainer.innerHTML = '<div class="result empty">No results found</div>';
                        resultsContainer.style.display = 'block';
                    } else {
                        resultsContainer.innerHTML = results.map(result => 
                            `<a href="${result.url}" class="result">
                                <div class="result-title">${result.title}</div>
                                <div class="result-snippet">${result.snippet}</div>
                            </a>`
                        ).join('');
                        resultsContainer.style.display = 'block';
                    }
                }, 300); // Debounce for 300ms
            });
            
            // Hide results when clicking outside
            document.addEventListener('click', function(e) {
                if (!searchBox.contains(e.target)) {
                    resultsContainer.style.display = 'none';
                }
            });
            
            // Show results when clicking on input (if there are results)
            input.addEventListener('focus', function() {
                if (resultsContainer.innerHTML && this.value.trim().length >= 2) {
                    resultsContainer.style.display = 'block';
                }
            });
        });
    }

    // Initialize on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }
})();
