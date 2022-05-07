window.addEventListener('DOMContentLoaded', ()=>{
    console.log("star wars"); //sanity check

    fetch('http swapi.dev/api/files').then((resp)=>{
        resp.json().then((data)=>{
        console.log(data);
        })
    })
    
})