const quotes = [
        ["You only live once, but if you do it right, once is enough."],
        ["I am so clever that sometimes I don't understand a single word of what I am saying" ],
        ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."],
        ["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science."]
        ["It is our choices, Harry, that show what we truly are, far more than our abilities."],
        ["All men who have turned out worth anything have had the chief hand in their own education."],
        ["Trust yourself. You know more than you think you do."],
        ["No one can make you feel inferior without your consent."],
        ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."],
        
    ];
     
    const quoteElement = document.getElementById("quote");
    const newQuoteButton = document.getElementById("new-quote");
    
    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
    
    function changeBackgroundColor() {
        var colors = [
			'#490A3D',
			'#BD1550',
			'#E97F02',
			'#F8CA00',
			'#8A9B0F',
			'#69D2E7',
			'#FA6900',
			'#16a085',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#73A857'
		];
      var randomColorIndex = Math.floor(Math.random() * colors.length);
      document.body.style.backgroundColor = colors[randomColorIndex];
    }
    
    newQuoteButton.addEventListener("click", () => {
      const randomQuote = getRandomQuote();
      quoteElement.textContent = randomQuote;
      changeBackgroundColor();
    });
    
    // Initial quote and background color change
    newQuoteButton.click();