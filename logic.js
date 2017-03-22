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
    var x =165;
    var y = 90;
    stars.src= "assets/stars.png"; // specifies the location of the image
    mountains.src= "assets/mountains.png";
    moon.src= "assets/moon.png"; 
     
    
    window.addEventListener("load", function(){
        ctx.fillStyle=grd;
        ctx.fillRect(0,0,400,150);
        ctx.drawImage(moon,165,90,40,40); // draws the image at the specified x and y location
        ctx.drawImage(mountains,0,0,300,150);
        ctx.drawImage(stars,-10,0,300,150);
        setInterval(function(){
            if(x<290){
                x = x+12;
                y = y-10;
            } else {
                x = 165;
                y = 90;
            }   
            ctx.clearRect(0, 0, canvas.width, canvas.height);                        
            ctx.fillStyle=grd;
            ctx.fillRect(0,0,400,150);
            ctx.drawImage(moon,x,y,40,40); // draws the image at the specified x and y location
            ctx.drawImage(mountains,0,0,300,150);
            ctx.drawImage(stars,-10,0,300,150);
        }, 800);
        
        
    },false);

   
};