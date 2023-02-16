console.log("desde projects.js");

function zoom(e){
  //console.log(e.target);
    var zoomer = e.currentTarget;
    /*
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageX
    */
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }

  