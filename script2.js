// Array of images

// var arr = ["A", "B", "C"];
//             0.   1.   2
// arr[0] = "A"

// var happyBirthday = ["march 9th", "december 12th", "april 6th"];

// happyBirthday[0] = "march 9th"
// happyBirthday[2]= "april 6th"

// var age= [88, 18, 14, 90]

// DIRECTIONS: UPDATE THE URLS WITH THE RELATIVE LINKS OF YOUR IMAGES

// array of 27 images
// 0 - A
const images = [
    "./img/ghosta.png", //A
    "./img/ghostb.png", //B
    "./img/ghostc.png", //C
    "./img/ghostd.png", //D
    "./img/ghoste.png", //E
    "./img/ghostf.png", //F
    "./img/ghostg.png", //G
    "./img/ghosth.png", //H
    "./img/ghosti.png", //I
    "./img/ghostj.png", //J
    "./img/ghostk.png", //K
    "./img/ghostl.png", //L
    "./img/ghostm.png", //M
    "./img/ghostn.png", //N
    "./img/ghosto.png", //O
    "./img/ghostp.png", //P
    "./img/ghostq.png", //Q
    "./img/ghostr.png", //R
    "./img/ghosts.png", //S
    "./img/ghostt.png", //T
    "./img/ghostu.png", //U
    "./img/ghostv.png", //V
    "./img/ghostw.png", //W
    "./img/ghostx.png", //X
    "./img/ghosty.png", //Y
    "./img/ghostz.png", //Z
  ];
  
  function displayImage() {
    const input = document.getElementById("charInput").value.toUpperCase();
    const imgElement = document.getElementById("displayedImage");
  
    // Assign an image based on character (A-Z)
    const index = input.charCodeAt(0) - 65; // 'A' is 65 in ASCII
    if (index >= 0 && index < images.length) {
      imgElement.src = images[index];
      imgElement.style.display = "block";
    } else {
      alert("that's not a letter of the alphabet, dummy");
      imgElement.style.display = "none";
  
      // IF INVALID INPUT IS ENTERED, DISPLAY ALTERNATE IMAGE
      imgElement.src =
        "./img/ghosterror.png";
      imgElement.style.display = "block";
    }
  }



document.addEventListener("DOMContentLoaded", function() {
  function updateImage() {
      var sizeValue = document.getElementById("sizeSlider").value;
      var image = document.getElementById("displayedImage");

      if (image.src && image.style.display !== "none") {
          // Update size
          var newSize = sizeValue * 5;
          image.style.width = newSize + "px";
          document.getElementById("sizeDisplay").textContent = newSize;
      }
  }

  // Get elements
  const image = document.getElementById("displayedImage");
  const sizeSlider = document.getElementById("sizeSlider");
  const opacitySlider = document.getElementById("opacitySlider");

  // Attach event listeners
  sizeSlider.addEventListener("input", updateImage);

  opacitySlider.addEventListener("input", function() {
      if (image) {
          image.style.opacity = this.value;
      }
  });

  console.log(document.getElementById("sizeDisplay")); 
});

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play()
      .then(() => {
          // Autoplay started successfully
      })
      .catch(error => {
          // Autoplay was prevented. Show a UI element to allow the user to start playback
          console.error("Autoplay was prevented:", error);
          document.body.addEventListener('click', function() {
              audio.play();
          }, { once: true });
      });
}