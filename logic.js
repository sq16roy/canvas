(function(){
    doIt();
})();

function doIt() {
    var canvas = document.getElementById("canvas"); // grabs the canvas element
    var ctx = canvas.getContext("2d"); // returns the 2d context object
    var grd=ctx.createLinearGradient(0,0,170,0);
    grd.addColorStop(0,"#001848");
    grd.addColorStop(1,"#301860");
    var stars = new Image(); //creates a variable for a new image
    var mountains = new Image();
    var moon = new Image();
    var x = 480;
    var y = 180;
    stars.src= "assets/stars.png"; // specifies the location of the image
    mountains.src= "assets/mountains.png";
    moon.src= "assets/moon.png";


    window.addEventListener("load", function(){
        ctx.fillStyle=grd;
        ctx.fillRect(0,0,720,300);
        ctx.drawImage(moon,x,y,88,84); // draws the image at the specified x and y location
        ctx.drawImage(mountains,0,0,720,300);
        ctx.drawImage(stars,-10,0,720,300);
        setInterval(function(){
            if(x<700){
                x++;
                y--;
            } else {
                x = 480;
                y = 180;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle=grd;
            ctx.fillRect(0,0,720,300);
            ctx.drawImage(moon,x,y,88,84); // draws the image at the specified x and y location
            ctx.drawImage(mountains,0,0,720,300);
            ctx.drawImage(stars,-10,0,720,300);
        }, 15);


    },false);


};
