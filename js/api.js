fetch('', {
     method: 'get',
     headers: new Headers({ 
        'Authorization': 'Bearer ' + your_token,
        'Content-Type': 'application/json'
     }),
});