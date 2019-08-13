const quoteSect = document.getElementById("quote")
let today = new Date()
let quotes = [
    "Every moment is a beginning… Never, never, never give up.\n – Winston Churchill",

    "Do what you can, with what you have, where you are.\n – Theodore Roosevelt",
    
    "Life is trying things to see if they work.\n – Ray Bradbury",
    
    "May you live every day of your life.\n – Jonathan Swift",
    
    "To be the best, you must be able to handle the worst.\n – Wilson Kanadi",
    
    "You get what you settle for The best way out is always through.\n – Robert Frost",
    
    "Work your way up or rust your way out.\n – Holton"]
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())
let quote = 0
function draw(){
    if(today.getHours() == 10){
        const mkH4 = document.createElement('h4')
        quoteSect.innerText = `${quotes[quote]}`
        quote += 1;
        console.log(quote)
        }   
   }

