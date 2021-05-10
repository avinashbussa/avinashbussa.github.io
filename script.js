
//For External SVG
//Reading input file and preview in mockup
   function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      var a = document.getElementById("svgObject");
	    var svgDoc = a.contentDocument;
      reader.onload = function (e) {
          var newimage = URL.createObjectURL(input.files[0]);
          var element = svgDoc.getElementById("Screen");
          element.setAttribute("href", newimage);
        };
        reader.readAsDataURL(input.files[0]);
      }
   }

//Get selected model from dropdown and update device frame
var model = document.getElementById("device-model");
var resp_model = document.getElementById("device-model-responsive");
var a = document.getElementById("svgObject");
var mockuptitle = document.getElementById("mockup-title");
function select_model(input) {
if(model.value == "3" || resp_model.value == "3"){
    a.setAttribute("data", "./Apple_iPhone_12_Pro.svg");
    mockuptitle.innerHTML = "Apple iPhone 12 Pro";
}
if(model.value == "5" || resp_model.value == "5"){
    a.setAttribute("data", "./Apple_iPhone_11_Green.svg");
    mockuptitle.innerHTML = "Apple iPhone 11 - Green";
}
  if(model.value == "7" || resp_model.value == "7"){
    a.setAttribute("data", "./Apple_iPhone_11_Pro_Max.svg");
    mockuptitle.innerHTML = "Apple iPhone 11 Pro Max";
}
  if(model.value == "8" || resp_model.value == "8"){
    a.setAttribute("data", "./Apple_iPhone_SE_Red.svg");
    mockuptitle.innerHTML = "Apple iPhone SE - Red";
}
  if(model.value == "10" || resp_model.value == "10"){
    a.setAttribute("data", "./Google_Pixel_5_JustBlack.svg");
    mockuptitle.innerHTML = "Google Pixel 5 JustBlack";
}
  if(model.value == "11" || resp_model.value == "11"){
    a.setAttribute("data", "./Apple_Watch_Series_6.svg");
    mockuptitle.innerHTML = "Apple Watch Series 6";
    a.style.width = "320px";
}
  if(model.value == "12" || resp_model.value == "12"){
    a.setAttribute("data", "./Motorola_Moto_360_Rose_Gold.svg");
    mockuptitle.innerHTML = "Motorola Moto 360";
    a.style.width = "260px";
}
}

//Description link hide/reveal
function moreAbout(){
  var about = document.getElementById("about")
  var hidden_span = document.getElementById("about-inner")
  var link = document.getElementById("about-link")
  if(link.innerHTML == "less"){
    link.style.opacity="0"
    about.style.height="60px"
    //Adding fadein effect and delay to "more" link using setTimeout
    setTimeout(function(){ 
      hidden_span.style.display="none"
      link.style.opacity="1"
      link.innerHTML="more"
    }, 450);
    
  }
  else{
    link.style.opacity="0"
    about.style.height="140px"
    hidden_span.style.display="block"
    //Adding fadein effect and delay to "Less" link using setTimeout
    setTimeout(function(){ 
      link.style.opacity="1"
      link.innerHTML="less"
    }, 400);
  }
};

//drag and drop
var myDrop = document.getElementById('dropZone');
function displayDropZone() {
   myDrop.style.visibility = "visible";
}
function hideDropZone() {
   myDrop.style.visibility = "hidden";
}
function allowDrag(ev) {
   if (true) {
      ev.dataTransfer.dropEffect = 'copy';
      ev.preventDefault();
   }
}
function handleDrop(ev) {
   ev.preventDefault();
   hideDropZone();
   file = event.dataTransfer.files[0];
   showFile();
}
function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp", "image/svg+xml"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      var a = document.getElementById("svgObject"); // getting SVG
	    var svgDoc = a.contentDocument;
      var newimage = URL.createObjectURL(file); //passing user file source in fileURL variable
      var element = svgDoc.getElementById("Screen");
      element.setAttribute("href", newimage);
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
  }
}
window.addEventListener('dragenter', function(ev) {
   displayDropZone();
});
myDrop.addEventListener('dragenter', allowDrag);
myDrop.addEventListener('dragover', allowDrag);
myDrop.addEventListener('dragleave', function(e) {
   hideDropZone();
});
myDrop.addEventListener('drop', handleDrop);

//image paste to upload
const fileInput = document.getElementById("upload-btn");
window.addEventListener('paste', e => {
    fileInput.files = e.clipboardData.files;
    var new_src = URL.createObjectURL(fileInput.files[0]);
    var a = document.getElementById("svgObject");
    var svgDoc = a.contentDocument;
    var element = svgDoc.getElementById("Screen");
    element.setAttribute("href", new_src);

});
