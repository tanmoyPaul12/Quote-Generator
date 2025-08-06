
        const quote = document.getElementById("quote")
        const author = document.getElementById("author")
        const key = `pIqMsIn5d3m/lxB5bkuVbw==9XbpmgBY6KKylT8u`
        const api_url = `https://api.api-ninjas.com/v1/quotes`

            // promise-->
        // function getquote(url){
        //     fetch(url , {
        //         headers:{
        //             'Content-Type': 'application/json',
        //             'X-Api-Key': key
        //         }
        //     })
        //     .then(res => res.json().then(data => {
        //         quote.innerHTML = data[0].quote
        //         author.innerHTML = data[0].author
        //     }))}

        // getquote(api_url);
        
        // async await-->
        async function getData(url) {
            let response = await fetch(url,{
                headers:{
                    'Content-Type': 'application/json',
                    'X-Api-Key': key
                }
            });
            let data = await response.json();
            // console.log(data);
            quote.innerHTML = data[0].quote
            author.innerHTML = data[0].author
        }
        getData(api_url);



        function tweet(){
            window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML +  "--- by "+ author.innerHTML,"Tweet Window","width = 600, height=300")
        }