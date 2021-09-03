function randomImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>{
        return response.json();
    }).then(val=>{
        document.getElementById('out').src=val.message;
    }).catch(reason=>{
        document.getElementById('out').alt="Not found";
    });
}