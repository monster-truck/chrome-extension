const body = document.querySelector('body')

//Add an event listener to our body that reacts on click finishing
body.addEventListener('mouseup', (event) => {

  //If there is highlighted text
  if (window.getSelection().toString()) {
    let highlightedText = window.getSelection().toString()
    
    body.addEventListener('keydown', (e) => {
      if (e.key === 's') {
        async function getDef(input) {
          const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
          let finalData = data.json()
          return finalData
        }
        getDef(highlightedText)
        .then((data) => {
        const definition = data[0]['meanings'][0]['definitions'][0]['definition']
        const popUp = document.createElement('div')
        popUp.setAttribute('id', 'pop-up-box')
        popUp.style.border = 'solid black 5px'
        popUp.style.position = 'absolute'
        popUp.style.backgroundColor = 'white'
        popUp.style.height = '500px'
        popUp.style.width = '500px'
        popUp.style.zIndex = '90'
        popUp.style.top = '0px'
        popUp.style.left = '0px'
        const button = document.createElement('button')
        button.addEventListener('click', (e) => {
          e.preventDefault()
          const toRemove = document.querySelector('#pop-up-box')
          toRemove.remove()
        })
        button.innerText = 'Close Definition'
        popUp.appendChild(button)
        const text = document.createElement('h1')
        text.innerText = definition
        popUp.appendChild(text)
        body.appendChild(popUp)
        highlightedText = ''
    })
      }
    })

    //define async function
   
    //call async function
    
  }
})