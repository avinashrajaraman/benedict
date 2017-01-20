(function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	var width = canvas.width;
	var height = canvas.height;
        
        terrain = [];

        var AssetLoader = function(){
                this.imgs = {
                        'map': './imgs/jump_map.png',
			'floor' : './imgs/land.png'
                };
                var loaded = 0;
                this.load = function(dic,name){
                        if (this[dic][name].status != "loading"){
                                return ;
                        }
                        else{
                                this[dic][name].status = "loaded";
                                loaded+=1;
                                if(loaded == 2){
                                        startGame();
                                }
                        }
                };
                this.download = function(){
                        var src;
                        var _this = this;
                        for(var img in this.imgs){
                                src = this.imgs[img];
                                (function(_this,img){
                                        _this.imgs[img] = new Image();
                                        _this.imgs[img].status = "loading";
                                        _this.imgs[img].src = src;
                                        _this.imgs[img].name = img;
                                        _this.imgs[img].onload = function(){
                                                load.call(_this,"imgs",img);
                                        }
                                })(_this,img);
                        }
                };

                return {
                        imgs : this.imgs,
                        download : this.download,
                        load : this.load
                }
        }();
        function Floor(x,y,value){
                this.velocity = {};
                this.type = "floor";
                this.collidableWith = "player";
                this.x = x;
                this.y = y;
                this.width = 32;
                this.height = 32;
                this.color = value;
                this.restitution = 0;
                this.mass = Infinity;

                this.draw = function(){
                        ctx.drawImage(AssetLoader.imgs['floor'],this.x,this.y,this.width,this.height);
                }
        }


        function parseMap(){
                
                var map = JSON.parse(jump);
                console.log(map);
        }

        function startGame(){
                console.log("okay now");
                parseMap();       
        //        x = parseMap(AssetLoader.imgs["map"]);
        //        loadMap(x)
		for(var i =0 ;i<terrain.length;i++){
                        console.log("HUH");
			terrain[i].draw();	
		}
                
        }
        AssetLoader.download();
})()
