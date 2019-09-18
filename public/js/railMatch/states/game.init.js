/*
	Rail match initial state
*/
function RailMatch(){
	this.background = null;
	this.foreground = null;
	this.loading = null;
	this.logo = null;
	this.player = null;
	this.walls = null;
	this.wallsSpawinTimer = null;
	this.blockProperties = ['shape', 'color'];
	this.shapes = ['square', 'circle', 'triangle', 'penta', 'diamond', 'inverseTriangle', 'star'];
	this.colors = ['Red', 'Blue', 'Green', 'Yellow', 'Cyan', 'Magenta', 'White'];
	this.score = 0;
	this.restart_label = null;
	this.score_label = null;
	this.maxWalls = 2;
	this.oncomingWallIndex = 0;
	this.spaceBetweenWalls = -5;
}

var state = {
	main: {
		preload: function(){
			game.load.image('logo', '/public/js/railMatch/assets/logoBlack.png');
			game.load.image('loading', '/public/js/railMatch/assets/loading.png');
		},
		create: function(){
			game.state.start('splashScreen');
		}
	},
	splashScreen: {
		preload: function(){
			railMatch.logo = game.add.sprite(0, 0, 'logo');
			railMatch.loading = game.add.sprite(0, 0, 'loading');
			game.load.setPreloadSprite(railMatch.loading);
			game.load.image('background', '/public/js/railMatch/assets/background.png');

			/* Squares */
			game.load.image('squareRed', '/public/js/railMatch/assets/squareRed.png');
			game.load.image('squareBlue', '/public/js/railMatch/assets/squareBlue.png');
			game.load.image('squareGreen', '/public/js/railMatch/assets/squareGreen.png');
			game.load.image('squareYellow', '/public/js/railMatch/assets/squareYellow.png');
			game.load.image('squareCyan', '/public/js/railMatch/assets/squareCyan.png');
			game.load.image('squareMagenta', '/public/js/railMatch/assets/squareMagenta.png');
			game.load.image('squareWhite', '/public/js/railMatch/assets/squareWhite.png');

			/* Circles */
			game.load.image('circleRed', '/public/js/railMatch/assets/circleRed.png');
			game.load.image('circleBlue', '/public/js/railMatch/assets/circleBlue.png');
			game.load.image('circleGreen', '/public/js/railMatch/assets/circleGreen.png');
			game.load.image('circleYellow', '/public/js/railMatch/assets/circleYellow.png');
			game.load.image('circleCyan', '/public/js/railMatch/assets/circleCyan.png');
			game.load.image('circleMagenta', '/public/js/railMatch/assets/circleMagenta.png');
			game.load.image('circleWhite', '/public/js/railMatch/assets/circleWhite.png');

			/* Triangles */
			game.load.image('triangleRed', '/public/js/railMatch/assets/triangleRed.png');
			game.load.image('triangleBlue', '/public/js/railMatch/assets/triangleBlue.png');
			game.load.image('triangleGreen', '/public/js/railMatch/assets/triangleGreen.png');
			game.load.image('triangleYellow', '/public/js/railMatch/assets/triangleYellow.png');
			game.load.image('triangleCyan', '/public/js/railMatch/assets/triangleCyan.png');
			game.load.image('triangleMagenta', '/public/js/railMatch/assets/triangleMagenta.png');
			game.load.image('triangleWhite', '/public/js/railMatch/assets/triangleWhite.png');

			/* Triangles */
			game.load.image('pentaRed', '/public/js/railMatch/assets/pentaRed.png');
			game.load.image('pentaBlue', '/public/js/railMatch/assets/pentaBlue.png');
			game.load.image('pentaGreen', '/public/js/railMatch/assets/pentaGreen.png');
			game.load.image('pentaYellow', '/public/js/railMatch/assets/pentaYellow.png');
			game.load.image('pentaCyan', '/public/js/railMatch/assets/pentaCyan.png');
			game.load.image('pentaMagenta', '/public/js/railMatch/assets/pentaMagenta.png');
			game.load.image('pentaWhite', '/public/js/railMatch/assets/pentaWhite.png');

			/* Diamonds */
			game.load.image('diamondRed', '/public/js/railMatch/assets/diamondRed.png');
			game.load.image('diamondBlue', '/public/js/railMatch/assets/diamondBlue.png');
			game.load.image('diamondGreen', '/public/js/railMatch/assets/diamondGreen.png');
			game.load.image('diamondYellow', '/public/js/railMatch/assets/diamondYellow.png');
			game.load.image('diamondCyan', '/public/js/railMatch/assets/diamondCyan.png');
			game.load.image('diamondMagenta', '/public/js/railMatch/assets/diamondMagenta.png');
			game.load.image('diamondWhite', '/public/js/railMatch/assets/diamondWhite.png');

			/* Inverse triangle */
			game.load.image('inverseTriangleRed', '/public/js/railMatch/assets/inverseTriangleRed.png');
			game.load.image('inverseTriangleBlue', '/public/js/railMatch/assets/inverseTriangleBlue.png');
			game.load.image('inverseTriangleGreen', '/public/js/railMatch/assets/inverseTriangleGreen.png');
			game.load.image('inverseTriangleYellow', '/public/js/railMatch/assets/inverseTriangleYellow.png');
			game.load.image('inverseTriangleCyan', '/public/js/railMatch/assets/inverseTriangleCyan.png');
			game.load.image('inverseTriangleMagenta', '/public/js/railMatch/assets/inverseTriangleMagenta.png');
			game.load.image('inverseTriangleWhite', '/public/js/railMatch/assets/inverseTriangleWhite.png');

			/* Star */
			game.load.image('starRed', '/public/js/railMatch/assets/starRed.png');
			game.load.image('starBlue', '/public/js/railMatch/assets/starBlue.png');
			game.load.image('starGreen', '/public/js/railMatch/assets/starGreen.png');
			game.load.image('starYellow', '/public/js/railMatch/assets/starYellow.png');
			game.load.image('starCyan', '/public/js/railMatch/assets/starCyan.png');
			game.load.image('starMagenta', '/public/js/railMatch/assets/starMagenta.png');
			game.load.image('starWhite', '/public/js/railMatch/assets/starWhite.png');

			/* Outline  */
			game.load.image('outline', '/public/js/railMatch/assets/outline.png?timeStamp=' + new Date().getTime());
		},
		create: function(){
			game.state.start('game', state.game);
		}
	},
	game: {
		create: function(){
			game.time.advancedTiming = true;
			game.time.desiredFps = 60;
			game.time.slowMotion = 1.0;

			createBackground();
			createWalls();
			createPlayer();
			createOutline();
			createInput();
			createScore();
			createResetLabel();

			console.log("Game created...");
		},
		update: function(){
			updatePlayer()
			detectCollision();
			updateWalls();
		}
	}
};

var railMatch = new RailMatch();

/*
	Phaser config
*/
var phaserConfig = {
	width: 360,
	height: 616,
	renderer: Phaser.CANVAS,
	state: state
};

var game = new Phaser.Game(phaserConfig);
game.clearBeforeRender = false;
game.cache = new Phaser.Cache(game);
game.state.add('main', state.main);
game.state.add('splashScreen', state.splashScreen);
game.state.add('game', state.game);
game.state.start('main');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function movePlayerLeft(){
	if(railMatch.player.rail > 0){
		railMatch.player.x -= 64;
		railMatch.player.rail--;
	}
}

function movePlayerRight(){
	if(railMatch.player.rail < 4){
		railMatch.player.x += 64;
		railMatch.player.rail++;
	}
}

function createBackground(){
	railMatch.background = game.add.sprite(0, 0, 'background');
}

function createWalls(){
	railMatch.walls = new Phaser.Group(game);

	for(var c = 0; c < railMatch.maxWalls; c++){
		var wall  = new Phaser.Group(game, railMatch.walls);
		wall.x = 20;
		wall.y = c * 64 * (railMatch.spaceBetweenWalls - 1);
		var colors = [...railMatch.colors];

		for(var rail = 0; rail < 5; rail++){
			shapeIndex = getRandomInt(0, railMatch.shapes.length - 1);
			colorIndex = getRandomInt(0, colors.length - 1);

			shape = railMatch.shapes[shapeIndex];
			color = colors[colorIndex];

			colors.splice(colorIndex, 1);

			var block = wall.create(rail * 64, 0, shape + color);
			block.shape = shape;
			block.color = color;
		}
	}
}

function createPlayer(){
	var wallComing = railMatch.walls.getAt(0);
	var chooseBlock = wallComing.getAt(getRandomInt(0, wallComing.length - 1));

	var blockProperties = [...railMatch.blockProperties];
	var blockPropertie = blockProperties[getRandomInt(0, blockProperties.length - 1)];
	var color = null;
	var shape = null;

	switch(blockPropertie){
		case 'shape':
			shape = chooseBlock.shape;
			var colors = [...railMatch.colors];
			color = colors[getRandomInt(0, colors.length -1)]
		break;
		case 'color':
			color = chooseBlock.color;
			var shape = railMatch.shapes[getRandomInt(0, railMatch.shapes.length - 1)];
		break;
	}

	console.log(shape + color);

	railMatch.player = game.add.sprite(20 + 64 * 2, game.world.height - 16 - 64, shape + color);
	railMatch.player.shape = shape;
	railMatch.player.color = color;
	railMatch.player.rail = 2;
}

function createOutline(){
	railMatch.outline = game.add.sprite(0, 0, 'outline');
}

function createInput(){
	railMatch.cursors = game.input.keyboard.createCursorKeys();

	/* Tap halfs */
	var leftCtx = game.add.graphics(0, 0);
	leftCtx.beginFill(0x0000FF);
	leftCtx.drawRect(0, 0, game.world.width/2, game.world.height)
	leftCtx.inputEnabled = true;
	leftCtx.input.useHandCursor = true;
	leftCtx.events.onInputDown.add(movePlayerLeft, true);
	leftCtx.alpha = 0.0;

	var rightCtx = game.add.graphics(0, 0);
	rightCtx.beginFill(0xFF0000);
	rightCtx.drawRect(game.world.width/2, 0, game.world.width/2, game.world.height);
	rightCtx.inputEnabled = true;
	rightCtx.input.useHandCursor = true;
	rightCtx.events.onInputDown.add(movePlayerRight, true);
	rightCtx.alpha = 0.0;
}

function createScore(){
	railMatch.score_label = game.add.text(32, 32, 'SCORE: 0', {fontSize: "14px", fill: "#0071FF"});
}

function createResetLabel(){
	railMatch.restart_label = game.add.text(game.world.width/2, game.world.height/2, 'TAP TO RESTART', {fontSize: "18px", fill: "#00FFFF"});
	railMatch.restart_label.x = (game.world.width - railMatch.restart_label.width)/2;
	railMatch.restart_label.y = (game.world.height - railMatch.restart_label.height)/2;
	railMatch.restart_label.visible = false;
}

		function updatePlayer(){
			if(railMatch.cursors.left.justDown && railMatch.player.rail > 0){
				railMatch.player.x -= 64;
				railMatch.player.rail--;
			}

			if(railMatch.cursors.right.justDown && railMatch.player.rail < 4){
				railMatch.player.x += 64;
				railMatch.player.rail++;
			}
		}
		
		function restart(event){
			if(game.paused){
				game.world.removeAll(true);
				railMatch.background = null;
				railMatch.outline = null;
				railMatch.player = null;
				railMatch.walls = null;
				railMatch.wallsSpawnTimer = null;
				railMatch.score = 0;
				railMatch.restart_label = null;
				railMatch.oncomingWallIndex = 0;
				railMatch.maxWalls = 2;
				railMatch.spaceBetweenWalls = -5;
				state.game.create();
				game.paused = false;
			}
		}

		function detectCollision(){
			var onComingWall = railMatch.walls.getAt(railMatch.oncomingWallIndex);
			
			if(onComingWall.y < (game.world.height - 16 - 64)){
				/* THERE'S NO COLLISION, RETURN */
				return false;
			}

			var collidedBlock = onComingWall.getAt(railMatch.player.rail);

			if(collidedBlock.color != railMatch.player.color && collidedBlock.shape != railMatch.player.shape){
				console.log("Player Lose");
				game.paused = true;
				onComingWall.y = railMatch.player.y;

				if(game.device.desktop){
					railMatch.restart_label.setText('YOUR SCORE: ' + railMatch.score + "\nSPACEBAR TO RESTART!");
					railMatch.restart_label.x = (game.world.width - railMatch.restart_label.width)/2;
					railMatch.restart_label.visible = true;
					game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(restart, self);
				}else{
					railMatch.restart_label.setText('YOUR SCORE: ' + railMatch.score + "\nTAP TO RESTART");
					railMatch.restart_label.x = (game.world.width - railMatch.restart_label.width)/2;
					railMatch.restart_label.visible = true;
					setTimeout(function(){
						game.input.onDown.addOnce(restart, self);
					}, 1000);
				}

				return true;
			}

			railMatch.score++;
			railMatch.score_label.setText("SCORE: " + railMatch.score);
console.log(' test');
			/* Move block to the last */
			var lastWallIndex = (railMatch.oncomingWallIndex ? railMatch.oncomingWallIndex - 1 : railMatch.maxWalls - 1);
			var lastWall = railMatch.walls.getAt(lastWallIndex);

			onComingWall.y = lastWall.y + 64 * (railMatch.spaceBetweenWalls - 1);

			/* Reshape wall */

			var colors = [...railMatch.colors];
			for(var blockIndex = 0; blockIndex < onComingWall.length; blockIndex++){
				var block = onComingWall.getAt(blockIndex);
				
				var shape = railMatch.shapes[getRandomInt(0, railMatch.shapes.length - 1)];
				var colorIndex = getRandomInt(0, colors.length - 1);
				var color = colors[colorIndex];

				block.loadTexture(shape + color);
				block.shape = shape;
				block.color = color;
				colors.splice(colorIndex, 1);
			}

			railMatch.oncomingWallIndex ++;
			if(railMatch.oncomingWallIndex >= railMatch.maxWalls){
				railMatch.oncomingWallIndex = 0;
			}

			var nextKey = railMatch.blockProperties[getRandomInt(0, railMatch.blockProperties.length - 1)];
			var nextWall = railMatch.walls.getAt(railMatch.oncomingWallIndex);
			
			var block = nextWall.getAt(getRandomInt(0, nextWall.length - 1));
			var shape = null;
			var color = null;

			switch(nextKey){
				case 'shape':
					shape = block.shape;
					var colors = [...railMatch.colors];
					color = colors[getRandomInt(0, colors.length - 1)];
				break
				case 'color':
					color = block.color;
					shape = railMatch.shapes[getRandomInt(0, railMatch.shapes.length - 1)];
				break;
			}

			railMatch.player.loadTexture(shape + color);
			railMatch.player.shape = shape;
			railMatch.player.color = color;
			return true;
		}
		function updateWalls(){
			var wallReachedEnd = false;
			for(var wallIndex = 0; wallIndex < railMatch.walls.length; wallIndex++){
				var wall = railMatch.walls.getAt(wallIndex);

				if(wall.y >= (game.world.height - 16 - 64)){
					wallReachedEnd = true;
					continue;
				}

				// wall.y += 4.8;
				wall.y += 4.8;
			}
		}