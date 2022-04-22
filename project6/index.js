import fetch from 'node-fetch'

fetch('https://api.sampleapis.com/coffee/hot')
    .then(raw => raw.json())
    .then(data => { 
        for(let item of data){
            if (item.title === 'Latte')
                console.log(item.ingredients)
            }
    })
    .catch(err => console.log("Oops: ", err))
