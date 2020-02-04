var imgNumber = document.querySelector("#imgNumber");
var thumbnailSize = document.querySelector("#thumbnailSize");
var refreshButton = document.querySelector("#reload");
var settingsContainer = document.querySelector("#settingsContainer");
var settingsToggle = document.querySelector("#settingsToggle");
var alertContainer = document.createElement("DIV");

imgNumber.focus();

window.onload = function(){
	  
	  if (name != "undefined" || name != "null") {
		append();
	  } 
	
	}

function append(){
	
	var appendImage = localStorage.getItem("numberOfImages");
	imgNumber.value = appendImage;
	var appendThumb = localStorage.getItem("thumbnailSize");
	thumbnailSize.value = appendThumb;
	
	
	
	};

settingsToggle.onclick = function(){
	
	window.location.reload();
	

	}

function alerting(x){
	
		var div = document.createElement("DIV");
		
		alertContainer.id = "alertContainer";
		
		div.id = "alert";
		
		document.body.appendChild(alertContainer);
		alertContainer.appendChild(div);
		
		div.innerHTML = x;
		
		
	
	}

refreshButton.onclick = function(){
	
	thumbnailSizeValue = thumbnailSize.value;
	numberOfImagesValue = imgNumber.value;
	localStorage.setItem("thumbnailSize", thumbnailSizeValue);
	localStorage.setItem("numberOfImages", numberOfImagesValue);
	
	if (imgNumber.value == "" || isNaN(imgNumber.value)){
		
		alerting("Please Enter The Number of Images You Have");
		
		}else{
		
		var imagesContainer = document.querySelector("#imagesContainer");
		settingsContainer.style.visibility = "hidden";
		topSlideShow();
		loadImages(numberOfImagesValue);
		loader();
		
		
	}

	}
	
			
alertContainer.onclick = function(){
	
		window.location.reload();
	
	}

//removing the loading screen

function loader(){
	
	
		var div  = document.createElement("DIV");
		div.id = "loader";
		
		var divIcon  = document.createElement("DIV");
		divIcon.id = "loading-icon";
		
		document.body.appendChild(div);
		document.body.appendChild(divIcon);
		
	
		setTimeout(function(){
			
			document.body.removeChild(div);
			document.body.removeChild(divIcon);
			
			
			},2000);
	
	
	};
		
//making the slideshow at the top;

function topSlideShow(){
	
			container = document.querySelector("#slideshowContainerImages");

			var count = 0;
			
			var interval = setInterval(function(){
			
				
				count++;
							
				var random = Math.floor(((Math.random()) * (numberOfImagesValue)) + 1);
				var images = document.createElement("IMG");
				var imagesdiv = document.createElement("DIV");
				imagesdiv.id = "imagesdiv";
				images.src = "image" + random + ".jpg";
				
				container.appendChild(imagesdiv);

				if (random <= numberOfImagesValue ){
							
							imagesdiv.appendChild(images);
							
							}
							
				if(count == 4 ){
					
						clearInterval(interval);
					
					}
							
			}, 1);
			
			var leftCount = 0;
			var countin = 0;
			var otherCountin = 0;
			
			var interval2 = setInterval(function(){
				
				countin++;
				var counting =  leftCount - (countin * 100);
								
				container.style.left = counting + "%";
							
				if(countin == 3 ){
					
						countin = 0;
					
					}
							
			}, 5000);
		
		
	
	}


//slideshow aniimation

function animate(){
	
		var count = 0;
		
		var interval = setInterval(function(){
			
			count++;
			
			images.style.opacity = "0."	 + count;
			
			if(count == 10){
				
				images.style.opacity = 1;
				
				clearInterval(interval);
		
				}
				
			
			}, 100);

	}

//making new rows for the images	

function newRow(rowId){
	
		var row = document.createElement("DIV"),
			imagesContainer = document.querySelector("#imagesContainer");
						
		row.classList.add("row");
		
		row.id = rowId;
		
		imagesContainer.appendChild(row);
		
	}

//starting id for the rows

rowId = 1;

//making the first row

newRow(rowId);

var row = document.querySelector(".row");	
	
function loadImages(x){
	
		
	
		for(i = 1 ; i <= x ; i++){
			
			var imageContainer = document.createElement("DIV");

			var image = document.createElement("IMG");
			
			imageContainer.classList.add("images");
			
			image.src = "image" + i + ".jpg";
			
			row.appendChild(imageContainer);
			imageContainer.appendChild(image);
						
			if (row.childNodes.length == thumbnailSizeValue){ 
		
				rowId++;
				
				newRow(rowId);
				
				row = document.getElementById(rowId);	

			
				
				}

			}
	
		
	}


	setTimeout(function(){
		var imagesContainer = document.querySelector("#imagesContainer");
		
		imagesContainer.addEventListener("click", function(e){
			
				
				targetName = e.target.nodeName;
				targetSrc = e.target.src;
							
				if( targetName == "IMG"){
					
						viewImage();
					
					};
					
			});
			
		},2000);
	
function viewImage(){
	
	
	var divContainer = document.createElement("DIV");
	
	divContainer.id = "divContainer";
		
	var image = document.createElement("IMG");
	
	
	image.id = "openImage";
	
	document.body.appendChild(divContainer);
	
	
	
		image.src = targetSrc;
	
	var currentImageNumber = image.src.substring(97,100);
		
	var convert = parseInt(currentImageNumber);
		
	animateView();
	
	var xbutton = document.createElement("DIV");
	right = document.createElement("DIV");
	left = document.createElement("DIV");
	
	divContainer.appendChild(xbutton);
	divContainer.appendChild(right);
	divContainer.appendChild(left);
	
	setTimeout(function(){
		
		divContainer.style.background = "#000";
		divContainer.appendChild(image);
		xbutton.innerHTML = "X";
		xbutton.id =  "xButton";
		right.innerHTML = ">";
		right.id =  "right";
		left.innerHTML = "<";
		left.id =  "left";
		
		},200);
	
	if(convert == 1 ){
		
		left.style.display = "none";
		
		}else{
			
		left.style.display = "block";
			
			}
	
	if(convert == numberOfImagesValue ){
		
		right.style.display = "none";
		
		}else{
			
		right.style.display = "block";
			
			}
	
	xbutton.onclick = function(){
		
			document.body.removeChild(divContainer);
			imagesContainer.removeEventListener("click");
		
		}
		
	right.onclick = function(){
		
			next();
			
		}
		
	left.onclick = function(){
		
			prev();
			
		}
	
	
	}
	
function animateView(){
		
		var divContainer = document.querySelector("#divContainer");

		count = 0;
		
		var interval = setInterval(function(){
			
				count++;
				
				divContainer.style.height = count + "vh";
				divContainer.style.width = count + "vw";
				
				if (count == 100){
					
						clearInterval(interval);					
					
					}
							
			},2);
				
	
	}

function next(){
	
		var image = document.querySelector("#openImage");
		var currentImageNumber = image.src.substring(image.src.length - 10 ,image.src.length);
		var thenumber = currentImageNumber.replace( /^\D+/g, '')
		var convert = parseInt(thenumber, 10);
		var number = convert + 1;
		
		console.log(convert);
		
		left.style.display = "block";
					
		image.src = "image" + number + ".jpg";
		
		if(number == numberOfImagesValue){
		
		right.style.display = "none";
		
		}else{
			
		right.style.display = "block";
			
			}	
	
	}
function prev(){
	
		var image = document.querySelector("#openImage");
		var currentImageNumber = image.src.substring(image.src.length - 10 ,image.src.length);
		var thenumber = currentImageNumber.replace( /^\D+/g, '')
		var convert = parseInt(thenumber, 10);
		var number = convert - 1;
				
		right.style.display = "block";
					
		image.src = "image" + number + ".jpg";
		
		if(number == 1 ){
		
		left.style.display = "none";
		
		}else{
			
		left.style.display = "block";
			
			}
			
	}

