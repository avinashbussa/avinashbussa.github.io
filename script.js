
//For External SVG
//Reading input file and preview in mockup
  //  function readURL(input) {
  //   if (input.files && input.files[0]) {
  //     var reader = new FileReader();
  //     var a = document.getElementById("svgObject");
	//     var svgDoc = a.contentDocument;
  //     reader.onload = function (e) {
  //         var newimage = URL.createObjectURL(input.files[0]);
  //         var element = svgDoc.getElementById("Screen");
  //         element.setAttribute("href", newimage);
  //       };
  //       reader.readAsDataURL(input.files[0]);
  //     }
  //  }

//Get selected model from dropdown and updated device frame

var a = document.getElementById("svgObject");
function select_model(input) {
  var modelValue = input.getElementsByClassName("value")[0].innerHTML;
  var activeValue = document.getElementById("selected").getElementsByClassName("value")[0].innerHTML;
  if(modelValue === "1" && modelValue !== activeValue){
    a.setAttribute("data", "./Apple_iPhone_12_Pro.svg");
    a.style.width = "600px";
  }
  if(modelValue === "2" && modelValue !== activeValue){
    a.setAttribute("data", "./Apple_iPhone_11_Green.svg");
    a.style.width = "600px";
  }
  if(modelValue === "3" && modelValue !== activeValue){
    a.setAttribute("data", "./Apple_iPhone_11_Pro_Max.svg");
    a.style.width = "600px";
  }
  if(modelValue === "4" && modelValue !== activeValue){
    a.setAttribute("data", "./Apple_iPhone_SE_Red.svg");
    a.style.width = "600px";
  }
  if(modelValue === "5" && modelValue !== activeValue){
    a.setAttribute("data", "./Google_Pixel_5_JustBlack.svg");
    a.style.width = "600px";
  }
  if(modelValue === "6" && modelValue !== activeValue){
    a.setAttribute("data", "./Apple_Watch_Series_6.svg");
    a.style.width = "320px";
  }
  if(modelValue === "7" && modelValue !== activeValue){
    a.setAttribute("data", "./Motorola_Moto_360_Rose_Gold.svg");
    a.style.width = "260px";
  }
}

//Get selected model from dropdown and update device frame
// var model = document.getElementById("device-model");
// var resp_model = document.getElementById("device-model-responsive");
// var a = document.getElementById("svgObject");
// var mockuptitle = document.getElementById("mockup-title");
// function select_model(input) {
// if(model.value == "3" || resp_model.value == "3"){
//     a.setAttribute("data", "./Apple_iPhone_12_Pro.svg");
//     mockuptitle.innerHTML = "Apple iPhone 12 Pro";
// }
// if(model.value == "5" || resp_model.value == "5"){
//     a.setAttribute("data", "./Apple_iPhone_11_Green.svg");
//     mockuptitle.innerHTML = "Apple iPhone 11 - Green";
// }
//   if(model.value == "7" || resp_model.value == "7"){
//     a.setAttribute("data", "./Apple_iPhone_11_Pro_Max.svg");
//     mockuptitle.innerHTML = "Apple iPhone 11 Pro Max";
// }
//   if(model.value == "8" || resp_model.value == "8"){
//     a.setAttribute("data", "./Apple_iPhone_SE_Red.svg");
//     mockuptitle.innerHTML = "Apple iPhone SE - Red";
// }
//   if(model.value == "10" || resp_model.value == "10"){
//     a.setAttribute("data", "./Google_Pixel_5_JustBlack.svg");
//     mockuptitle.innerHTML = "Google Pixel 5 JustBlack";
// }
//   if(model.value == "11" || resp_model.value == "11"){
//     a.setAttribute("data", "./Apple_Watch_Series_6.svg");
//     mockuptitle.innerHTML = "Apple Watch Series 6";
//     a.style.width = "320px";
// }
//   if(model.value == "12" || resp_model.value == "12"){
//     a.setAttribute("data", "./Motorola_Moto_360_Rose_Gold.svg");
//     mockuptitle.innerHTML = "Motorola Moto 360";
//     a.style.width = "260px";
// }
// }

//Description link hide/reveal
// function moreAbout(){
//   var about = document.getElementById("about")
//   var hidden_span = document.getElementById("about-inner")
//   var link = document.getElementById("about-link")
//   if(link.innerHTML == "less"){
//     link.style.opacity="0"
//     about.style.height="60px"
//     //Adding fadein effect and delay to "more" link using setTimeout
//     setTimeout(function(){ 
//       hidden_span.style.display="none"
//       link.style.opacity="1"
//       link.innerHTML="more"
//     }, 450);
    
//   }
//   else{
//     link.style.opacity="0"
//     about.style.height="140px"
//     hidden_span.style.display="block"
//     //Adding fadein effect and delay to "Less" link using setTimeout
//     setTimeout(function(){ 
//       link.style.opacity="1"
//       link.innerHTML="less"
//     }, 400);
//   }
// };

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
      saveMemento(newimage);
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
    saveMemento(new_src);
});

//Undo Redo functionality
const mementos = []
var mementosPos = 0
var mementosLastPos;

function saveMemento(e) {
  mementos.push(e);
  if(mementos.length>1){
    mementosPos += 1;
    console.log("Image " +(mementosPos+1)+ " : added");
  }else console.log("Image 1 : added")
}

//Undo functionality
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'z' && !event.shiftKey || event.metaKey && event.key === 'z' && !event.shiftKey) {
    if(mementosPos == '0'){
      console.log("Hmmm, isn't this where we started?")
    } else{
        var imagereplace;
        mementosPos = mementosPos-1;
        imagereplace = mementos[mementosPos];
        var a = document.getElementById("svgObject");
        var svgDoc = a.contentDocument;
        var element = svgDoc.getElementById("Screen");
        element.setAttribute("href", imagereplace);
        console.log("Undo success");
      } 
  }
});

//Redo functionality
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'z' || event.metaKey && event.shiftKey && event.key === 'z') {
    if(mementosPos == mementos.length-1){
      console.log("Hold on! isn't this the latest one?")
    } else{
        var imagereplace;
        mementosPos = mementosPos+1;
        imagereplace = mementos[mementosPos];
        var a = document.getElementById("svgObject");
        var svgDoc = a.contentDocument;
        var element = svgDoc.getElementById("Screen");
        element.setAttribute("href", imagereplace);
        console.log("Redo success");
    }
  }
});


//Slider Zoom
var slider = document.getElementById("ZoomObject");
var a = document.getElementById("svgObject");
a.style.height = slider.value + "px";

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  a.style.height = this.value + "px";
}


//-----------mousedrag for mockup
var div = document.getElementById("mockup");

//Make the DIV element draggagle:
dragElement(div);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmntPosStyle = elmnt.style.position;
  elmntCursStyle = elmnt.style.cursor;
  elmnt.onmousedown = function(eventData){
    if (eventData.button === 0) {
      dragMouseDown();
    }
  }
  
  function dragMouseDown(e) {
    var rect = div.getBoundingClientRect();
    // x = rect.left;
    y = rect.top;
    elmnt.style.position = "absolute";
    elmnt.style.cursor = "grabbing";
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement(e) {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    /* Reset original x, y, position, and cursor when mouse button is released:*/
    elmnt.style.transition = "top 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) 0s";
    elmnt.style.top = y + "px";
    // elmnt.style.left = x + "px";
    
    elmnt.style.cursor = elmntCursStyle;
    setTimeout(function(){ 
      elmnt.style.position = elmntPosStyle;
      elmnt.style.transition = "top ease-in 0s";
    }, 500);
  }
}

//fullscreen site
var fullscreenelem = document.documentElement;
function openFullscreen() {
  if (fullscreenelem.requestFullscreen) {
    fullscreenelem.requestFullscreen();
  } else if (fullscreenelem.webkitRequestFullscreen) { /* Safari */
    fullscreenelem.webkitRequestFullscreen();
  } else if (fullscreenelem.msRequestFullscreen) { /* IE11 */
    fullscreenelem.msRequestFullscreen();
  }
}

//-------Custom dropdown (jquery)-------
//TOGGLING NESTED ul
$(".drop-down .selected").click(function () {
  $(".drop-down .options").toggle();
});

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".drop-down .options li a").click(function () {
  var text = $(this).html();
  $(".drop-down .selected a span").html(text);
  $(".drop-down .options").hide();
});

//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind("click", function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("drop-down"))
    $(".drop-down .options").hide();
});
