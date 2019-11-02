function count(){
    let text = document.querySelector("#text").textContent
    text = text.replace(/\s/g,'')
    let characters = document.querySelector("#characters")
    characters.textContent = text.length + " tähemärki"
}