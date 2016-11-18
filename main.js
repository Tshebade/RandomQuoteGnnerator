$(document).ready(function() {
var quote;
var author;

function getNewQuote() {
        $.getJSON("http://quotes.stormconsultancy.co.uk/random.json",
         function(response){
            quote = (response.quote);
            author = (response.author);
            $('#quote').text(quote);
            if (author) {
              $('#author').text('- '+ author);
            } else {
              $('#author').text('- unknown');
            }
          });
        }

        getNewQuote();

        $(".get-quote").click(function(e){
          e.preventDefault();
          getNewQuote();
        });

        $(".share-button").click(function(e){
          e.preventDefault();
          window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote));
        });

      });
