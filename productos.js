function products (){
    
    document.getElementById('cardHeader').innerHTML = '<h5>Listado de productos</h5>'
    const REQRES_ENDPOINT = "https://api.escuelajs.co/api/v1/auth/login"
    fetch(REQRES_ENDPOINT, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    })
}