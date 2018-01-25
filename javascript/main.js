// 1. Grabbing the input

document.querySelector(".js-go").addEventListener("click", function() {
  var input = document.querySelector(".js-userinput").value;
  // pushToDOM(input);
  AJAXRequest(input);
});

document.querySelector(".js-userinput").addEventListener("keyup", function(e) {
  if (e.which == 13) {
    // pushToDOM(input);
    AJAXRequest(this.value);
  }
});

// 2. Working with API
function AJAXRequest(input) {

  var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=3wv4kwq9fG45jOLtQTNRhFZp5vimOxLZ";

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', url);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load', function(e) {
    var data = e.target.response;
    pushToDOM(data);

  });

}

// 3. Displaying GIFs

function pushToDOM(input) {

  var response = JSON.parse(input);

  var imageUrls = response.data;
  console.log(imageUrls);

  var container;
  var html;
  imageUrls.forEach(function(image) {
    var src = image.images.fixed_height.url;
    console.log(src);

    container = document.querySelector(".js-container");
    html += "<img src=\"" + src + "\" class=\"container-image\">";

  });

    container.innerHTML = html;
}
