

// my variables 
const button = document.querySelector("#btn")
const quote = document.querySelector("#quote")
const author = document.querySelector("#author")


const url = 'https://codingaddictla.github.io/random-quotes.quotes.json'

button.addEventListener('click',getData)

const getData = ()=>{
  let data = new XML.HttpRequest()
  data.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200 ){
      let quotes = JSON.parse(this.responseText)
      let number = Math.floor(Math.random() * quotes.length)
      quote.innerHTML = '<span>"</span>' + quotes[number].quote +  '<span>"</span>'
      author.innerHTML = '<span>"</span>' + quotes[number].author 
    }
    else {
      
    }
  }
  data.open("GET",url,true)
  data.send()
}