class QuoteGenerator {
    constructor() {
        this.quotes = [
            // Motivational Quotes
            {
                text: "The only way to do great work is to love what you do.",
                author: "Steve Jobs",
                category: "motivational"
            },
            {
                text: "Innovation distinguishes between a leader and a follower.",
                author: "Steve Jobs",
                category: "motivational"
            },
            {
                text: "Your limitation—it's only your imagination.",
                author: "Unknown",
                category: "motivational"
            },
            {
                text: "Push yourself, because no one else is going to do it for you.",
                author: "Unknown",
                category: "motivational"
            },
            {
                text: "Great things never come from comfort zones.",
                author: "Unknown",
                category: "motivational"
            },
            {
                text: "Dream it. Wish it. Do it.",
                author: "Unknown",
                category: "motivational"
            },
            {
                text: "Success doesn't just find you. You have to go out and get it.",
                author: "Unknown",
                category: "motivational"
            },
            {
                text: "The harder you work for something, the greater you'll feel when you achieve it.",
                author: "Unknown",
                category: "motivational"
            },
            {
                text: "Dream bigger. Do bigger.",
                author: "Unknown",
                category: "motivational"
            },
            {
                text: "Don't stop when you're tired. Stop when you're done.",
                author: "Unknown",
                category: "motivational"
            },

            // Inspirational Quotes
            {
                text: "The future belongs to those who believe in the beauty of their dreams.",
                author: "Eleanor Roosevelt",
                category: "inspirational"
            },
            {
                text: "It is during our darkest moments that we must focus to see the light.",
                author: "Aristotle",
                category: "inspirational"
            },
            {
                text: "Whoever is happy will make others happy too.",
                author: "Anne Frank",
                category: "inspirational"
            },
            {
                text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
                author: "Ralph Waldo Emerson",
                category: "inspirational"
            },
            {
                text: "You are never too old to set another goal or to dream a new dream.",
                author: "C.S. Lewis",
                category: "inspirational"
            },
            {
                text: "Try to be a rainbow in someone's cloud.",
                author: "Maya Angelou",
                category: "inspirational"
            },
            {
                text: "You do not find the happy life. You make it.",
                author: "Camilla Eyring Kimball",
                category: "inspirational"
            },
            {
                text: "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
                author: "Deep Roy",
                category: "inspirational"
            },
            {
                text: "Sometimes you will never know the value of a moment until it becomes a memory.",
                author: "Dr. Seuss",
                category: "inspirational"
            },
            {
                text: "The most wasted of days is one without laughter.",
                author: "E.E. Cummings",
                category: "inspirational"
            },

            // Life Quotes
            {
                text: "Life is what happens to you while you're busy making other plans.",
                author: "John Lennon",
                category: "life"
            },
            {
                text: "The purpose of our lives is to be happy.",
                author: "Dalai Lama",
                category: "life"
            },
            {
                text: "Life is really simple, but we insist on making it complicated.",
                author: "Confucius",
                category: "life"
            },
            {
                text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
                author: "Martin Luther King Jr.",
                category: "life"
            },
            {
                text: "To live is the rarest thing in the world. Most people just exist.",
                author: "Oscar Wilde",
                category: "life"
            },
            {
                text: "Life is 10% what happens to you and 90% how you react to it.",
                author: "Charles R. Swindoll",
                category: "life"
            },
            {
                text: "The only impossible journey is the one you never begin.",
                author: "Tony Robbins",
                category: "life"
            },
            {
                text: "Life isn't about finding yourself. Life is about creating yourself.",
                author: "George Bernard Shaw",
                category: "life"
            },
            {
                text: "The biggest adventure you can take is to live the life of your dreams.",
                author: "Oprah Winfrey",
                category: "life"
            },
            {
                text: "Life is short, and it is up to you to make it sweet.",
                author: "Sarah Louise Delany",
                category: "life"
            },

            // Success Quotes
            {
                text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                author: "Winston Churchill",
                category: "success"
            },
            {
                text: "The way to get started is to quit talking and begin doing.",
                author: "Walt Disney",
                category: "success"
            },
            {
                text: "Don't be afraid to give up the good to go for the great.",
                author: "John D. Rockefeller",
                category: "success"
            },
            {
                text: "I find that the harder I work, the more luck I seem to have.",
                author: "Thomas Jefferson",
                category: "success"
            },
            {
                text: "Success is walking from failure to failure with no loss of enthusiasm.",
                author: "Winston Churchill",
                category: "success"
            },
            {
                text: "The only place where success comes before work is in the dictionary.",
                author: "Vidal Sassoon",
                category: "success"
            },
            {
                text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
                author: "Roy T. Bennett",
                category: "success"
            },
            {
                text: "Don't let yesterday take up too much of today.",
                author: "Will Rogers",
                category: "success"
            },
            {
                text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
                author: "Unknown",
                category: "success"
            },
            {
                text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
                author: "Steve Jobs",
                category: "success"
            },

            // Wisdom Quotes
            {
                text: "The only true wisdom is in knowing you know nothing.",
                author: "Socrates",
                category: "wisdom"
            },
            {
                text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
                author: "Bill Keane",
                category: "wisdom"
            },
            {
                text: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
                author: "Bruce Lee",
                category: "wisdom"
            },
            {
                text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
                author: "William Shakespeare",
                category: "wisdom"
            },
            {
                text: "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
                author: "Confucius",
                category: "wisdom"
            },
            {
                text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
                author: "Alan Watts",
                category: "wisdom"
            },
            {
                text: "Knowing yourself is the beginning of all wisdom.",
                author: "Aristotle",
                category: "wisdom"
            },
            {
                text: "The journey of a thousand miles begins with one step.",
                author: "Lao Tzu",
                category: "wisdom"
            },
            {
                text: "It does not matter how slowly you go as long as you do not stop.",
                author: "Confucius",
                category: "wisdom"
            },
            {
                text: "Turn your wounds into wisdom.",
                author: "Oprah Winfrey",
                category: "wisdom"
            },

            // Happiness Quotes
            {
                text: "Happiness is not something ready made. It comes from your own actions.",
                author: "Dalai Lama",
                category: "happiness"
            },
            {
                text: "The best time to plant a tree was 20 years ago. The second best time is now.",
                author: "Chinese Proverb",
                category: "happiness"
            },
            {
                text: "Happiness is when what you think, what you say, and what you do are in harmony.",
                author: "Mahatma Gandhi",
                category: "happiness"
            },
            {
                text: "For every minute you are angry you lose sixty seconds of happiness.",
                author: "Ralph Waldo Emerson",
                category: "happiness"
            },
            {
                text: "Happiness is not by chance, but by choice.",
                author: "Jim Rohn",
                category: "happiness"
            },
            {
                text: "The happiness of your life depends upon the quality of your thoughts.",
                author: "Marcus Aurelius",
                category: "happiness"
            },
            {
                text: "Count your age by friends, not years. Count your life by smiles, not tears.",
                author: "John Lennon",
                category: "happiness"
            },
            {
                text: "Happiness is a warm puppy.",
                author: "Charles M. Schulz",
                category: "happiness"
            },
            {
                text: "The secret of happiness is not in doing what one likes, but in liking what one does.",
                author: "James M. Barrie",
                category: "happiness"
            },
            {
                text: "Happiness is the only thing that multiplies when you share it.",
                author: "Albert Schweitzer",
                category: "happiness"
            },

            // Love Quotes
            {
                text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
                author: "Lao Tzu",
                category: "love"
            },
            {
                text: "The best thing to hold onto in life is each other.",
                author: "Audrey Hepburn",
                category: "love"
            },
            {
                text: "Love is composed of a single soul inhabiting two bodies.",
                author: "Aristotle",
                category: "love"
            },
            {
                text: "Where there is love there is life.",
                author: "Mahatma Gandhi",
                category: "love"
            },
            {
                text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
                author: "Dr. Seuss",
                category: "love"
            },
            {
                text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
                author: "Unknown",
                category: "love"
            },
            {
                text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
                author: "Victor Hugo",
                category: "love"
            },
            {
                text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
                author: "Maya Angelou",
                category: "love"
            },
            {
                text: "To love and be loved is to feel the sun from both sides.",
                author: "David Viscott",
                category: "love"
            },
            {
                text: "Love is friendship that has caught fire.",
                author: "Ann Landers",
                category: "love"
            },

            // Friendship Quotes
            {
                text: "A friend is someone who knows all about you and still loves you.",
                author: "Elbert Hubbard",
                category: "friendship"
            },
            {
                text: "Friendship is born at that moment when one person says to another: 'What! You too? I thought I was the only one.'",
                author: "C.S. Lewis",
                category: "friendship"
            },
            {
                text: "A real friend is one who walks in when the rest of the world walks out.",
                author: "Walter Winchell",
                category: "friendship"
            },
            {
                text: "Friendship is the only cement that will ever hold the world together.",
                author: "Woodrow Wilson",
                category: "friendship"
            },
            {
                text: "A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow.",
                author: "William Shakespeare",
                category: "friendship"
            },
            {
                text: "In the cookie of life, friends are the chocolate chips.",
                author: "Salman Rushdie",
                category: "friendship"
            },
            {
                text: "There is nothing on this earth more to be prized than true friendship.",
                author: "Thomas Aquinas",
                category: "friendship"
            },
            {
                text: "Friendship is the hardest thing in the world to explain. It's not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything.",
                author: "Muhammad Ali",
                category: "friendship"
            },
            {
                text: "A good friend is like a four-leaf clover; hard to find and lucky to have.",
                author: "Irish Proverb",
                category: "friendship"
            },
            {
                text: "Friends are the family you choose.",
                author: "Jess C. Scott",
                category: "friendship"
            }
        ];

        this.favorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
        this.currentQuote = null;
        this.isLoading = false;

        this.initializeElements();
        this.bindEvents();
        this.renderFavorites();
    }

    initializeElements() {
        this.quoteText = document.getElementById('quoteText');
        this.quoteAuthor = document.getElementById('quoteAuthor');
        this.quoteCategory = document.getElementById('quoteCategory');
        this.quoteContainer = document.getElementById('quoteContainer');
        
        this.generateBtn = document.getElementById('generateBtn');
        this.copyBtn = document.getElementById('copyBtn');
        this.shareBtn = document.getElementById('shareBtn');
        this.favoriteBtn = document.getElementById('favoriteBtn');
        
        this.categorySelect = document.getElementById('categorySelect');
        this.favoritesList = document.getElementById('favoritesList');
        this.toast = document.getElementById('toast');
        this.toastMessage = document.getElementById('toastMessage');
    }

    bindEvents() {
        this.generateBtn.addEventListener('click', () => this.generateQuote());
        this.copyBtn.addEventListener('click', () => this.copyQuote());
        this.shareBtn.addEventListener('click', () => this.shareQuote());
        this.favoriteBtn.addEventListener('click', () => this.toggleFavorite());
        this.categorySelect.addEventListener('change', () => this.generateQuote());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !e.target.matches('input, textarea, select')) {
                e.preventDefault();
                this.generateQuote();
            } else if (e.ctrlKey && e.code === 'KeyC') {
                e.preventDefault();
                this.copyQuote();
            }
        });
    }

    generateQuote() {
        if (this.isLoading) return;

        this.isLoading = true;
        this.quoteContainer.classList.add('loading');

        // Simulate loading delay for better UX
        setTimeout(() => {
            const category = this.categorySelect.value;
            let availableQuotes = this.quotes;

            if (category !== 'all') {
                availableQuotes = this.quotes.filter(quote => quote.category === category);
            }

            if (availableQuotes.length === 0) {
                availableQuotes = this.quotes;
            }

            // Get a random quote different from the current one
            let newQuote;
            do {
                newQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
            } while (newQuote === this.currentQuote && availableQuotes.length > 1);

            this.currentQuote = newQuote;
            this.displayQuote(newQuote);
            this.updateFavoriteButton();

            this.isLoading = false;
            this.quoteContainer.classList.remove('loading');
        }, 500);
    }

    displayQuote(quote) {
        // Animate out
        this.quoteText.style.opacity = '0';
        this.quoteAuthor.style.opacity = '0';
        this.quoteCategory.style.opacity = '0';

        setTimeout(() => {
            this.quoteText.textContent = quote.text;
            this.quoteAuthor.textContent = quote.author;
            this.quoteCategory.textContent = quote.category;

            // Animate in
            this.quoteText.style.opacity = '1';
            this.quoteAuthor.style.opacity = '1';
            this.quoteCategory.style.opacity = '1';
        }, 200);
    }

    copyQuote() {
        if (!this.currentQuote) {
            this.showToast('Generate a quote first!');
            return;
        }

        const quoteText = `"${this.currentQuote.text}" - ${this.currentQuote.author}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(quoteText).then(() => {
                this.showToast('Quote copied to clipboard!');
            }).catch(() => {
                this.fallbackCopyTextToClipboard(quoteText);
            });
        } else {
            this.fallbackCopyTextToClipboard(quoteText);
        }
    }

    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';
        
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showToast('Quote copied to clipboard!');
        } catch (err) {
            this.showToast('Failed to copy quote');
        }
        
        document.body.removeChild(textArea);
    }

    shareQuote() {
        if (!this.currentQuote) {
            this.showToast('Generate a quote first!');
            return;
        }

        const quoteText = `"${this.currentQuote.text}" - ${this.currentQuote.author}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Inspirational Quote',
                text: quoteText,
                url: window.location.href
            }).catch(() => {
                this.fallbackShare(quoteText);
            });
        } else {
            this.fallbackShare(quoteText);
        }
    }

    fallbackShare(text) {
        const encodedText = encodeURIComponent(text);
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
        window.open(shareUrl, '_blank', 'width=550,height=420');
    }

    toggleFavorite() {
        if (!this.currentQuote) {
            this.showToast('Generate a quote first!');
            return;
        }

        const quoteId = `${this.currentQuote.text}-${this.currentQuote.author}`;
        const existingIndex = this.favorites.findIndex(fav => 
            `${fav.text}-${fav.author}` === quoteId
        );

        if (existingIndex > -1) {
            this.favorites.splice(existingIndex, 1);
            this.showToast('Removed from favorites');
        } else {
            this.favorites.push({...this.currentQuote});
            this.showToast('Added to favorites');
        }

        this.saveFavorites();
        this.updateFavoriteButton();
        this.renderFavorites();
    }

    updateFavoriteButton() {
        if (!this.currentQuote) return;

        const quoteId = `${this.currentQuote.text}-${this.currentQuote.author}`;
        const isFavorited = this.favorites.some(fav => 
            `${fav.text}-${fav.author}` === quoteId
        );

        if (isFavorited) {
            this.favoriteBtn.classList.add('favorited');
            this.favoriteBtn.title = 'Remove from Favorites';
        } else {
            this.favoriteBtn.classList.remove('favorited');
            this.favoriteBtn.title = 'Add to Favorites';
        }
    }

    renderFavorites() {
        if (this.favorites.length === 0) {
            this.favoritesList.innerHTML = '<p class="no-favorites">No favorite quotes yet. Click the heart icon to save quotes!</p>';
            return;
        }

        const favoritesHTML = this.favorites.map((quote, index) => `
            <div class="favorite-item">
                <div class="favorite-quote">"${quote.text}"</div>
                <div class="favorite-author">— ${quote.author}</div>
                <button class="remove-favorite" onclick="quoteGenerator.removeFavorite(${index})" title="Remove from favorites">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `).join('');

        this.favoritesList.innerHTML = favoritesHTML;
    }

    removeFavorite(index) {
        this.favorites.splice(index, 1);
        this.saveFavorites();
        this.renderFavorites();
        this.updateFavoriteButton();
        this.showToast('Removed from favorites');
    }

    saveFavorites() {
        localStorage.setItem('favoriteQuotes', JSON.stringify(this.favorites));
    }

    showToast(message) {
        this.toastMessage.textContent = message;
        this.toast.classList.add('show');
        
        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.quoteGenerator = new QuoteGenerator();
});

// Auto-generate first quote after a short delay
window.addEventListener('load', () => {
    setTimeout(() => {
        if (window.quoteGenerator) {
            window.quoteGenerator.generateQuote();
        }
    }, 1000);
});
