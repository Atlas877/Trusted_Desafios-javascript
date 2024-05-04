
function TurnOnOff() {

    var Image = document.getElementById('image');

    if(Image.src.match('lightbulb-off.jpg')) {
       
        Image.src = 'Images/lightbulb-on.jpg';
  
    } else {
   
        Image.src = 'Images/lightbulb-off.jpg';
    }

}