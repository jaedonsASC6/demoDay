const quoteSect = document.getElementById("quote")
let today = new Date()
let quotes = [
    "Every moment is a beginning… Never, never, never give up.\n – Winston Churchill",

    "Do what you can, with what you have, where you are.\n – Theodore Roosevelt",
    
    "Life is trying things to see if they work.\n – Ray Bradbury",
    
    "May you live every day of your life.\n – Jonathan Swift",
    
    "To be the best, you must be able to handle the worst.\n – Wilson Kanadi",
    
    "You get what you settle for The best way out is always through.\n – Robert Frost",
    
    "Work your way up or rust your way out.\n – Holton",

    "If you want to achieve greatness stop asking for permission.\n --Anonymous",

    "Things work out best for those who make the best of how things work out.\n --John Wooden",

    "To live a creative life, we must lose our fear of being wrong.\n --Anonymous",

    "If you are not willing to risk the usual you will have to settle for the ordinary.\n --Jim Rohn",

    "Trust because you are willing to accept the risk, not because it's safe or certain.\n --Anonymous",

    "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.\n --Swami Vivekananda",

    "All our dreams can come true if we have the courage to pursue them.\n --Walt Disney",

    "Good things come to people who wait, but better things come to those who go out and get them.\n --Anonymous",

    "If you do what you always did, you will get what you always got.\n --Anonymous",

    "Success is walking from failure to failure with no loss of enthusiasm.\n --Winston Churchill",

    "Just when the caterpillar thought the world was ending, he turned into a butterfly.\n --Proverb",

    "Successful entrepreneurs are givers and not takers of positive energy.\n --Anonymous",

    "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.\n --Vaibhav Shah",

    "Opportunities don't happen, you create them.\n --Chris Grosser",

    "Try not to become a person of success, but rather try to become a person of value.\n --Albert Einstein",

    "Great minds discuss ideas; average minds discuss events; small minds discuss people.\n --Eleanor Roosevelt",

    "I have not failed. I've just found 10,000 ways that won't work.\n --Thomas A. Edison",

    "If you don't value your time, neither will others. Stop giving away your time and talents--start charging for it.\n --Kim Garst",

    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.\n --David Brinkley",

    "No one can make you feel inferior without your consent.\n --Eleanor Roosevelt",

    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.\n --Henry Ford",

    "If you're going through hell keep going.\n --Winston Churchill",

    "The ones who are crazy enough to think they can change the world, are the ones who do.\n --Anonymous",

    "Don't raise your voice, improve your argument.\n --Anonymous"
]
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())
let quote = 0
function draw(){
    if(today.getDate() <= 1){
        const mkH4 = document.createElement('h4')
        quoteSect.innerText = `${quotes[0]}`
         }else if(today.getDate() <= 2){
        const mkH4 = document.createElement('h4')
        quoteSect.innerText = `${quotes[1]}`
        }else if(today.getDate() <= 3){
        quoteSect.innerText = `${quotes[2]}`
        }else if(today.getDate() <= 4){
        quoteSect.innerText = `${quotes[3]}`
        }else if(today.getDate() <= 5){
        quoteSect.innerText = `${quotes[4]}`
        }else if(today.getDate() <= 6){
        quoteSect.innerText = `${quotes[5]}`
        }else if(today.getDate() <= 7){
        quoteSect.innerText = `${quotes[6]}`
        }else if(today.getDate() <= 8){
        quoteSect.innerText = `${quotes[7]}`
        }else if(today.getDate() <= 9){
        quoteSect.innerText = `${quotes[8]}`
        }else if(today.getDate() <= 10){
        quoteSect.innerText = `${quotes[9]}`
        }else if(today.getDate() <= 11){
        quoteSect.innerText = `${quotes[10]}`
         }else if(today.getDate() <= 12){
        quoteSect.innerText = `${quotes[11]}`
         }else if(today.getDate() <= 13){
        quoteSect.innerText = `${quotes[12]}`
         }else if(today.getDate() <= 14){
        quoteSect.innerText = `${quotes[13]}`
         }else if(today.getDate() <= 15){
        quoteSect.innerText = `${quotes[14]}`
         }else if(today.getDate() <= 16){
        quoteSect.innerText = `${quotes[15]}`
         }else if(today.getDate() <= 17){
        quoteSect.innerText = `${quotes[16]}`
         }else if(today.getDate() <= 18){
        quoteSect.innerText = `${quotes[17]}`
         }else if(today.getDate() <= 19){
        quoteSect.innerText = `${quotes[18]}`
         }else if(today.getDate() <= 20){
        quoteSect.innerText = `${quotes[19]}`
         }else if(today.getDate() <= 21){
        quoteSect.innerText = `${quotes[20]}`
         }else if(today.getDate() <= 22){
        quoteSect.innerText = `${quotes[21]}`
         }else if(today.getDate() <= 23){
        quoteSect.innerText = `${quotes[22]}`
         }else if(today.getDate() <= 24){
        quoteSect.innerText = `${quotes[23]}`
         }else if(today.getDate() <= 25){
        quoteSect.innerText = `${quotes[24]}`
         }else if(today.getDate() <= 26){
        quoteSect.innerText = `${quotes[25]}`
         }else if(today.getDate() <= 27){
        quoteSect.innerText = `${quotes[26]}`
         }else if(today.getDate() <= 28){
        quoteSect.innerText = `${quotes[27]}`
         }else if(today.getDate() <= 29){
        quoteSect.innerText = `${quotes[28]}`
         }else if(today.getDate() <= 30){
        quoteSect.innerText = `${quotes[29]}`
         }else if(today.getDate() <= 31){
        quoteSect.innerText = `${quotes[30]}`
         }   
}

