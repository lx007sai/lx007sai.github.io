var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/SVEN1.jpg'){
        myImage.setAttribute('src','images/SVEN2.jpg');
    }else{
        myImage.setAttribute('src','images/SVEN1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('What you said?');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Hi,'+myName;
   }
if (!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hi,'+storedName;
}
myButton.onclick = function(){
    setUserName();
}