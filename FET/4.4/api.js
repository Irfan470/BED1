// var request = new XMLHttpRequest();
// request.open('GET', 'https://hplussport.com/api/products');
// request.onload = function() {
//     var response = request.response;
//     var parsedData = JSON.parse(response);
//     console.log(parsedData);
//     }
// request.send();
// fetch('https://hplussport.com/api/products')
//     .then(response => response.json())
//     .then(data => console.log(data));

// $.get('https://hplussport.com/api/products', function(response) {
//     console.log(response);
// });
// $.ajax({
//     url: 'https://hplussport.com/api/products',
//     success: function(response) {
//         console.log(response);
//     }
// });
// $.ajax({
//     url: 'https://api.giphy.com/v1/gifs/random?api_key=OBGfooLk1A2Z3wHQ7oJ3ZewvGH7Vx9U5&rating=g',
//     success: function(response) {
//         console.log(response);
//         var imageUrl = response.data.images.original.url;
//         $('body').append('<img src="' + imageUrl + '">');
//     }
// });
$.ajax({
  url: "https://api.giphy.com/v1/gifs/random?api_key=OBGfooLk1A2Z3wHQ7oJ3ZewvGH7Vx9U5&rating=g",
  success: function (response) {
    console.log(response);
    if(response.data.user!=null){
      var imageUrl = response.data.user.avatar_url
    $("body").append('<img src="' + imageUrl + '">');
    }
    
  },
  error: function (error) {
    console.log("Error");
  }
  
});


