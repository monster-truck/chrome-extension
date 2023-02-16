// document.getSelection() -> return selection object;
// ___.toString() method -> return string of selection from document;

//Set an event listener on the body of the webpage

/* if this isn't working, change mousup to click */
//Listens for mouseup
document.querySelector('body').addEventListener('mouseup', (e) => {
    //checks if there's a selection
    //declare variable to store the users selection
    let highlightedText;
    //If true, save that selection to our variable
    if (document.getSelection()) {
      // parse variable making everything lowercase, and replacing ' ' with '%20'
      highlightedText = document.getSelection().toString().toLowerCase();
      highlightedText.replace(/[^a-zA-Z0-9" "]/g, '').replace(/\s/g, '%20').replaceAll('"', '');

      // save variable with youtube search endpoint, and concat search-string to endpoint
      let youtubeEndpoint = 'https://www.youtube.com/results?search_query='
      /// it opens a new tab searching youtube with what has been selected
       window.open(youtubeEndpoint.concat(highlightedText), '_blank')
      
    }
    
 
})
  


