
const btn = document.getElementById('new-quote')
const auth_txt = document.getElementById('author')
const txt = document.getElementById('text')
const twt_elem = document.getElementById('tweet-quote')

btn.addEventListener('click', () => {
    const api_url ="https://api.quotable.io/random";

    async function getapi(url)
    {
      const response = await fetch(url);
      var data = await response.json();

      auth_txt.innerText = data['author']
      txt.innerText = '"' + data['content'] + '"'
      twt_elem.setAttribute('href', "https://twitter.com/intent/tweet?text=" + data['content'])
    }
    
    getapi(api_url);

    
})
