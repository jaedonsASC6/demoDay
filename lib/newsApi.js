const url = 'https://newsapi.org/v2/everything?q=%22mental_health%22&apiKey=b488f2d9f34041de9622128ef055346c';
const mkP = document.createElement('p')
const mkH4 = document.createElement('h4')
const mkLink = document.createElement('a')
const articleSect = document.getElementById('healthArticles')
fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data);
            for(let i = 0;i < 6 ;i++){
            const mkP = document.createElement('p')
            const mkH4 = document.createElement('h4')
            const mkLink = document.createElement('a')
            const mkDiv = document.createElement("div")
            mkDiv.setAttribute("class","article")
            mkH4.innerHTML  =`${data.articles[i].author}`
            mkDiv.appendChild(mkH4)
            mkP.innerText = `${data.articles[i].content}`
            mkDiv.appendChild(mkP)
            mkLink.setAttribute('href',`${data.articles[i].url}`)
            mkLink.setAttribute('target', '_blank')
            mkLink.innerText = 'Click For Full Article'
            mkDiv.appendChild(mkLink)
            articleSect.appendChild(mkDiv)
            }
        })