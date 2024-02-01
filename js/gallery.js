/*Name this external file gallery.js*/
function ramdomImage() {
  var image = [
    {
      img: "images/Dog1.webp",
      alt: "Dog1",
    },
    {
      img: "images/image.webp",
      alt: "Dog2",
    },
    {
      img: "images/national-pet-day-landing-mobile.webp",
      alt: "Dog3",
    },
    {
      img: "images/bacon.jpg",
      alt: "Dog4",
    },
    {
      img: "images/bacon2.jfif",
      alt: "Dog5",
    },
    {
      img: "images/bacon3.jpg",
      alt: "Dog6",
    },
  ];

  var setImage = document.querySelectorAll("img");

  for (var i = 0; i < setImage.length; i++) {
    var random = Math.floor(Math.random() * image.length);
    setImage[i].src = image[random].img;
    setImage[i].alt = image[random].alt;
  }
}

function upDate(previewPic) {
  /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */

  document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */

  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here.";
}
