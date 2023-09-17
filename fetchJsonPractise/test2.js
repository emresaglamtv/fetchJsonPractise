fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then(function(comments){
        comments.forEach((comments) => {
            console.log(comments.email);
        })
    })