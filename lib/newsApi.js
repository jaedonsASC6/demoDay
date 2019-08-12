const url = 'https://newsapi.org/v2/everything?q=%22mental_health%22&apiKey=b488f2d9f34041de9622128ef055346c';
const mkP = document.createElement('p')
const mkH4 = document.createElement('h4')
const mkLink = document.createElement('a')
const articleSect = document.getElementById('healthArticles')

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        for(let i = 0;i < 8;i++){
        const mkP = document.createElement('p')
        const mkH4 = document.createElement('h4')
        const mkLink = document.createElement('a')
        mkP.innerText = `${data.articles[i].content}`
        articleSect.appendChild(mkP)
        mkLink.setAttribute('href',`${data.articles[i].url}`)
        mkLink.setAttribute('target', '_blank')
        mkLink.innerText = 'Click For Full Ariticle'
        articleSect.appendChild(mkLink)
        mkH4.innerHTML  =`${data.articles[i].author}`
        articleSect.appendChild(mkH4)
        }
    })
    