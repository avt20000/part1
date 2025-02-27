// Object with keywords as keys and images as values
// keywords: happy, nature, calm
var images = {
	calm: "./img/calm.jpg",
	happy: "./img/happy.jpg",
	afraid: "./img/afraid.jpg",
	angry: "./img/angry.jpg",
    tired: "./img/tired.jpg",
    lonely: "./img/lonely.jpg",
    guilty: "./img/guilty.jpg",
    bored: "./img/bored.jpg",
    embarassed: "./img/embarassed.jpg",
    hopeful: "./img/hopeful.jpg",
    shy: "./img/shy.jpg",
    proud: "./img/proud.jpg",
    hungry: "./img/hungry.jpg",
    sad: "./img/sad.jpg",
    anxious: "./img/anxious.jpg",
    funny: "./img/funny.jpg",
    horny: "./img/horny.jpg",
    excited: "./img/excited.jpg",
    confident: "./img/confident.jpg",
    confused: "./img/confused.jpg",
    silly: "./img/silly.jpg",
    depressed: "./img/depressed.jpg",
    annoyed: "./img/annoyed.jpg",
    stupid: "./img/stupid.jpg",
    spaghetti: "./img/spaghetti.jpg",
    rotten: "./img/rotten.jpg",
    smart: "./img/smart.jpg",
  };
  
  function checkSentence() {
	// Get the user input
	var sentence = document.getElementById("sentence").value.toLowerCase(); // Convert to lowercase for easy matching
  
	// Get the image element
	var image = document.getElementById("image");
  
	// Default to hiding the image
	image.style.display = "none";
  
	// Check if any keyword is in the sentence
	if (sentence.includes("calm")) {
	  image.src = images["calm"];
	  image.style.display = "block";
	} else if (sentence.includes("happy")) {
	  image.src = images["happy"];
	  image.style.display = "block";
	} else if (sentence.includes("afraid")) {
	  image.src = images["afraid"];
	  image.style.display = "block";
	
	 } else if (sentence.includes("angry")) {
	  image.src = images["angry"];
	  image.style.display = "block";
	}
    else if (sentence.includes("tired")) {
        image.src = images["tired"];
        image.style.display = "block";
      }
      else if (sentence.includes("lonely")) {
        image.src = images["lonely"];
        image.style.display = "block";
      }
      else if (sentence.includes("guilty")) {
        image.src = images["guilty"];
        image.style.display = "block";
      }
      else if (sentence.includes("bored")) {
        image.src = images["bored"];
        image.style.display = "block";
      }
      else if (sentence.includes("embarassed")) {
        image.src = images["embarassed"];
        image.style.display = "block";
      }
      else if (sentence.includes("hopeful")) {
        image.src = images["hopeful"];
        image.style.display = "block";
      }
      else if (sentence.includes("shy")) {
        image.src = images["shy"];
        image.style.display = "block";
      }
      else if (sentence.includes("proud")) {
        image.src = images["proud"];
        image.style.display = "block";
      }
      else if (sentence.includes("hungry")) {
        image.src = images["hungry"];
        image.style.display = "block";
      }
      else if (sentence.includes("sad")) {
        image.src = images["sad"];
        image.style.display = "block";
      }
      else if (sentence.includes("anxious")) {
        image.src = images["anxious"];
        image.style.display = "block";
      }
      else if (sentence.includes("funny")) {
        image.src = images["funny"];
        image.style.display = "block";
      }
      else if (sentence.includes("horny")) {
        image.src = images["horny"];
        image.style.display = "block";
      }
      else if (sentence.includes("excited")) {
        image.src = images["excited"];
        image.style.display = "block";
      }
      else if (sentence.includes("confident")) {
        image.src = images["confident"];
        image.style.display = "block";
      }
      else if (sentence.includes("confused")) {
        image.src = images["confused"];
        image.style.display = "block";
      }
      else if (sentence.includes("silly")) {
        image.src = images["silly"];
        image.style.display = "block";
      }
      else if (sentence.includes("depressed")) {
        image.src = images["depressed"];
        image.style.display = "block";
      }
                          
      else if (sentence.includes("annoyed")) {
        image.src = images["annoyed"];
        image.style.display = "block";
      }
      else if (sentence.includes("stupid")) {
        image.src = images["stupid"];
        image.style.display = "block";
      }
      else if (sentence.includes("spaghetti")) {
        image.src = images["spaghetti"];
        image.style.display = "block";
      }
      else if (sentence.includes("rotten")) {
        image.src = images["rotten"];
        image.style.display = "block";
      }
      else if (sentence.includes("smart")) {
        image.src = images["smart"];
        image.style.display = "block";
      }
                          
                          
      
      
  }
  