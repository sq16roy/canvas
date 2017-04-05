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


   function myMoon(){
        if(x<700){
            x++;
            y--;
        } else {
            x = 480;
            y = 180;
        }
        ctx.fillStyle=grd;
        ctx.fillRect(0,0,720,300);
        ctx.drawImage(moon,x,y,88,84); // draws the image at the specified x and y location
        ctx.drawImage(mountains,0,0,720,300);
        ctx.drawImage(stars,-10,0,720,300);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    };

	//canvas dimensions
	 var W = window.innerWidth;
	 var H = window.innerHeight;
	
	//snowflake particles
	var mp = 100; //max particles
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*4+1, //radius
			d: Math.random()*mp //density
		})
	}
	
	//Lets draw the flakes
	function draw()
	{
		ctx.clearRect(0, 0, W, H);
		ctx.fillStyle=grd;
        ctx.fillRect(0,0,720,300);
        ctx.drawImage(moon,x,y,88,84);
        ctx.drawImage(mountains,0,0,720,300);
        ctx.drawImage(stars,-10,0,720,300);
		ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
		ctx.beginPath();
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
			ctx.moveTo(p.x, p.y);
			
		}
		myMoon();
        ctx.fill(); 
		update();
	}
	
	//Function to move the snowflakes
	//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			//Updating X and Y coordinates
			//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
			//Every particle has its own density which can be used to make the downward movement different for each flake
			//Lets make it more random by adding in the radius
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			
			//Sending flakes back from the top when it exits
			//Lets make it a bit more organic and let flakes enter from the left and right also.
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) //66.67% of the flakes
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					//If the flake is exitting from the right
					if(Math.sin(angle) > 0)
					{
						//Enter from the left
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						//Enter from the right
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
	}
	
	//animation loop
	setInterval(draw, 33);



};
