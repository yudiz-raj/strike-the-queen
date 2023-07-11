// You can write more code here
let nStretchDistance;
let nMaxStretch = 1000;
let nVelocityX, nVelocityY, angle;
let queenCoin;
let speedTimer;
let nStrikerThreshold = 20;
let nCoinsThreshold = 40;
let userTurn = true;
let strikerCollideWithHall = false;
let repeateUserTurn = false;
let repeateOpponentTurn = false;
let nUserScore = 0;
let nOpponentScore = 0;
let userWin = true;
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// body
		const body = this.add.container(0, 3);

		// container_background
		const container_background = this.add.container(0, 1);
		body.add(container_background);

		// background_img
		const background_img = this.add.image(960, 539, "background-img");
		container_background.add(background_img);

		// container_walls
		const container_walls = this.add.container(0, 0);
		container_background.add(container_walls);

		// wall_1
		const wall_1 = this.add.rectangle(501, 534, 128, 128);
		wall_1.scaleX = 0.2;
		wall_1.scaleY = 7;
		wall_1.isFilled = true;
		container_walls.add(wall_1);

		// wall_2
		const wall_2 = this.add.rectangle(966, 79, 128, 128);
		wall_2.scaleX = 0.2;
		wall_2.scaleY = 7;
		wall_2.angle = 90;
		wall_2.isFilled = true;
		container_walls.add(wall_2);

		// wall_3
		const wall_3 = this.add.rectangle(1424, 540, 128, 128);
		wall_3.scaleX = 0.2;
		wall_3.scaleY = 7;
		wall_3.isFilled = true;
		container_walls.add(wall_3);

		// wall_4
		const wall_4 = this.add.rectangle(969, 989, 128, 128);
		wall_4.scaleX = 0.2;
		wall_4.scaleY = 7;
		wall_4.angle = 90;
		wall_4.isFilled = true;
		container_walls.add(wall_4);

		// carrom_board
		const carrom_board = this.add.image(960, 540, "carrom-board");
		carrom_board.scaleX = 2;
		carrom_board.scaleY = 2;
		container_background.add(carrom_board);

		// container_halls
		const container_halls = this.add.container(0, 0);
		body.add(container_halls);

		// hall_1
		const hall_1 = this.add.ellipse(556, 949, 128, 128);
		hall_1.scaleX = 0.5;
		hall_1.scaleY = 0.5;
		hall_1.isFilled = true;
		hall_1.fillColor = 268635;
		hall_1.fillAlpha = 0.3;
		container_halls.add(hall_1);

		// hall_2
		const hall_2 = this.add.ellipse(554, 133, 128, 128);
		hall_2.scaleX = 0.5;
		hall_2.scaleY = 0.5;
		hall_2.isFilled = true;
		hall_2.fillColor = 268635;
		hall_2.fillAlpha = 0.3;
		container_halls.add(hall_2);

		// hall_3
		const hall_3 = this.add.ellipse(1365, 133, 128, 128);
		hall_3.scaleX = 0.5;
		hall_3.scaleY = 0.5;
		hall_3.isFilled = true;
		hall_3.fillColor = 268635;
		hall_3.fillAlpha = 0.3;
		container_halls.add(hall_3);

		// hall_4
		const hall_4 = this.add.ellipse(1367, 950, 128, 128);
		hall_4.scaleX = 0.5;
		hall_4.scaleY = 0.5;
		hall_4.isFilled = true;
		hall_4.fillColor = 268635;
		hall_4.fillAlpha = 0.3;
		container_halls.add(hall_4);

		// container_slider
		const container_slider = this.add.container(967, 1055);
		body.add(container_slider);

		// slidebar
		const slidebar = this.add.image(2, -5, "slidebar");
		slidebar.scaleX = 1.4;
		slidebar.scaleY = 0.65;
		container_slider.add(slidebar);

		// slider
		const slider = this.add.sprite(-278, -8, "slider");
		slider.scaleX = 0.2;
		slider.scaleY = 0.2;
		container_slider.add(slider);

		// container_user
		const container_user = this.add.container(269, 255);
		body.add(container_user);

		// user_img
		const user_img = this.add.image(0, 0, "user-img");
		container_user.add(user_img);

		// userName
		const userName = this.add.text(0, 160, "", {});
		userName.setOrigin(0.5, 0.5);
		userName.text = "Player 1";
		userName.setStyle({ "fontSize": "60px" });
		container_user.add(userName);

		// userScore
		const userScore = this.add.text(0, 251, "", {});
		userScore.setOrigin(0.5, 0.5);
		userScore.text = "0";
		userScore.setStyle({ "fontSize": "60px" });
		container_user.add(userScore);

		// container_opponent
		const container_opponent = this.add.container(1684, 256);
		body.add(container_opponent);

		// opponent_img
		const opponent_img = this.add.image(0, -13, "opponent-img");
		container_opponent.add(opponent_img);

		// opponentName
		const opponentName = this.add.text(0, 137, "", {});
		opponentName.setOrigin(0.5, 0.5);
		opponentName.text = "Player 2";
		opponentName.setStyle({ "fontSize": "60px" });
		container_opponent.add(opponentName);

		// opponentScore
		const opponentScore = this.add.text(0, 228, "", {});
		opponentScore.setOrigin(0.5, 0.5);
		opponentScore.text = "0";
		opponentScore.setStyle({ "fontSize": "60px" });
		container_opponent.add(opponentScore);

		// container_whiteCoins
		const container_whiteCoins = this.add.container(1455, 435);
		body.add(container_whiteCoins);

		// container_blackCoins
		const container_blackCoins = this.add.container(1455, 432);
		body.add(container_blackCoins);

		// container_queen
		const container_queen = this.add.container(1455, 423);
		body.add(container_queen);

		this.container_walls = container_walls;
		this.carrom_board = carrom_board;
		this.container_halls = container_halls;
		this.slider = slider;
		this.userScore = userScore;
		this.opponentScore = opponentScore;
		this.container_whiteCoins = container_whiteCoins;
		this.container_blackCoins = container_blackCoins;
		this.container_queen = container_queen;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_walls;
	/** @type {Phaser.GameObjects.Image} */
	carrom_board;
	/** @type {Phaser.GameObjects.Container} */
	container_halls;
	/** @type {Phaser.GameObjects.Sprite} */
	slider;
	/** @type {Phaser.GameObjects.Text} */
	userScore;
	/** @type {Phaser.GameObjects.Text} */
	opponentScore;
	/** @type {Phaser.GameObjects.Container} */
	container_whiteCoins;
	/** @type {Phaser.GameObjects.Container} */
	container_blackCoins;
	/** @type {Phaser.GameObjects.Container} */
	container_queen;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.striker = this.physics.add.sprite(680, 865, "striker").setScale(0.1, 0.1).setOrigin(0.5, 0.5);
		this.striker.body.setCircle(this.striker.body.halfWidth - 20, 20, (this.striker.body.halfHeight - this.striker.body.halfWidth) + 20);

		this.arrow = this.add.image(this.striker.x, this.striker.y, "direction-arrow").setScale(0.7, 0.7).setOrigin(0.5, 0.6);
		this.arrow.setVisible(false);

		this.container_whiteCoins.setPosition(0, 8);
		this.container_blackCoins.setPosition(0, 5);
		this.container_queen.setPosition(0, -5);

		// whiteCoin_1
		const whiteCoin_1 = this.add.sprite(897, 511, "whiteCoin");
		whiteCoin_1.scaleX = 0.06;
		whiteCoin_1.scaleY = 0.06;
		whiteCoin_1.tintTopLeft = 14204307;
		whiteCoin_1.tintTopRight = 14204307;
		whiteCoin_1.tintBottomLeft = 14204307;
		whiteCoin_1.tintBottomRight = 14204307;
		this.container_whiteCoins.add(whiteCoin_1);

		// whiteCoin_2
		const whiteCoin_2 = this.add.sprite(925, 535, "whiteCoin");
		whiteCoin_2.scaleX = 0.06;
		whiteCoin_2.scaleY = 0.06;
		whiteCoin_2.tintTopLeft = 14204307;
		whiteCoin_2.tintTopRight = 14204307;
		whiteCoin_2.tintBottomLeft = 14204307;
		whiteCoin_2.tintBottomRight = 14204307;
		this.container_whiteCoins.add(whiteCoin_2);

		// whiteCoin_3
		const whiteCoin_3 = this.add.sprite(1026, 527, "whiteCoin");
		whiteCoin_3.scaleX = 0.06;
		whiteCoin_3.scaleY = 0.06;
		whiteCoin_3.tintTopLeft = 14204307;
		whiteCoin_3.tintTopRight = 14204307;
		whiteCoin_3.tintBottomLeft = 14204307;
		whiteCoin_3.tintBottomRight = 14204307;
		this.container_whiteCoins.add(whiteCoin_3);

		// whiteCoin_4
		const whiteCoin_4 = this.add.sprite(995, 535, "whiteCoin");
		whiteCoin_4.scaleX = 0.06;
		whiteCoin_4.scaleY = 0.06;
		whiteCoin_4.tintTopLeft = 14204307;
		whiteCoin_4.tintTopRight = 14204307;
		whiteCoin_4.tintBottomLeft = 14204307;
		whiteCoin_4.tintBottomRight = 14204307;
		this.container_whiteCoins.add(whiteCoin_4);

		// whiteCoin_5
		const whiteCoin_5 = this.add.sprite(937, 469, "whiteCoin");
		whiteCoin_5.scaleX = 0.06;
		whiteCoin_5.scaleY = 0.06;
		whiteCoin_5.tintTopLeft = 14204307;
		whiteCoin_5.tintTopRight = 14204307;
		whiteCoin_5.tintBottomLeft = 14204307;
		whiteCoin_5.tintBottomRight = 14204307;
		this.container_whiteCoins.add(whiteCoin_5);

		// whiteCoin_6
		const whiteCoin_6 = this.add.sprite(1007, 581, "whiteCoin");
		whiteCoin_6.scaleX = 0.06;
		whiteCoin_6.scaleY = 0.06;
		whiteCoin_6.tintTopLeft = 14204307;
		whiteCoin_6.tintTopRight = 14204307;
		whiteCoin_6.tintBottomLeft = 14204307;
		whiteCoin_6.tintBottomRight = 14204307;
		this.container_whiteCoins.add(whiteCoin_6);

		// whiteCoin_7
		const whiteCoin_7 = this.add.sprite(995, 478, "whiteCoin");
		whiteCoin_7.scaleX = 0.06;
		whiteCoin_7.scaleY = 0.06;
		whiteCoin_7.tintTopLeft = 14204307;
		whiteCoin_7.tintTopRight = 14204307;
		whiteCoin_7.tintBottomLeft = 14204307;
		whiteCoin_7.tintBottomRight = 14204307;
		this.container_whiteCoins.add(whiteCoin_7);

		// whiteCoin_8
		const whiteCoin_8 = this.add.sprite(952, 601, "whiteCoin");
		whiteCoin_8.scaleX = 0.06;
		whiteCoin_8.scaleY = 0.06;
		whiteCoin_8.tintTopLeft = 14204307;
		whiteCoin_8.tintTopRight = 14204307;
		whiteCoin_8.tintBottomLeft = 14204307;
		whiteCoin_8.tintBottomRight = 14204307;
		this.container_whiteCoins.add(whiteCoin_8);

		// whiteCoin_9
		const whiteCoin_9 = this.add.sprite(904, 568, "whiteCoin");
		whiteCoin_9.scaleX = 0.06;
		whiteCoin_9.scaleY = 0.06;
		whiteCoin_9.tintTopLeft = 14204307;
		whiteCoin_9.tintTopRight = 14204307;
		whiteCoin_9.tintBottomLeft = 14204307;
		whiteCoin_9.tintBottomRight = 14204307;
		this.container_whiteCoins.add(whiteCoin_9);

		// blackCoin_1
		const blackCoin_1 = this.add.sprite(913, 489, "blackCoin");
		blackCoin_1.scaleX = 0.08;
		blackCoin_1.scaleY = 0.08;
		this.container_blackCoins.add(blackCoin_1);

		// blackCoin_2
		const blackCoin_2 = this.add.sprite(1023, 559, "blackCoin");
		blackCoin_2.scaleX = 0.08;
		blackCoin_2.scaleY = 0.08;
		this.container_blackCoins.add(blackCoin_2);

		// blackCoin_3
		const blackCoin_3 = this.add.sprite(960, 504, "blackCoin");
		blackCoin_3.scaleX = 0.08;
		blackCoin_3.scaleY = 0.08;
		this.container_blackCoins.add(blackCoin_3);

		// blackCoin_4
		const blackCoin_4 = this.add.sprite(1015, 503, "blackCoin");
		blackCoin_4.scaleX = 0.08;
		blackCoin_4.scaleY = 0.08;
		this.container_blackCoins.add(blackCoin_4);

		// blackCoin_5
		const blackCoin_5 = this.add.sprite(960, 574, "blackCoin");
		blackCoin_5.scaleX = 0.08;
		blackCoin_5.scaleY = 0.08;
		this.container_blackCoins.add(blackCoin_5);

		// blackCoin_6
		const blackCoin_6 = this.add.sprite(982, 600, "blackCoin");
		blackCoin_6.scaleX = 0.08;
		blackCoin_6.scaleY = 0.08;
		this.container_blackCoins.add(blackCoin_6);

		// blackCoin_7
		const blackCoin_7 = this.add.sprite(894, 543, "blackCoin");
		blackCoin_7.scaleX = 0.08;
		blackCoin_7.scaleY = 0.08;
		this.container_blackCoins.add(blackCoin_7);

		// blackCoin_8
		const blackCoin_8 = this.add.sprite(925, 592, "blackCoin");
		blackCoin_8.scaleX = 0.08;
		blackCoin_8.scaleY = 0.08;
		this.container_blackCoins.add(blackCoin_8);

		// blackCoin_9
		const blackCoin_9 = this.add.sprite(967, 470, "blackCoin");
		blackCoin_9.scaleX = 0.08;
		blackCoin_9.scaleY = 0.08;
		this.container_blackCoins.add(blackCoin_9);

		// queenCoin
		queenCoin = this.add.image(960, 547, "whiteCoin");
		queenCoin.scaleX = 0.06;
		queenCoin.scaleY = 0.06;
		queenCoin.tintTopLeft = 15794176;
		queenCoin.tintTopRight = 15794176;
		queenCoin.tintBottomLeft = 15794176;
		queenCoin.tintBottomRight = 15794176;
		this.container_queen.add(queenCoin);

		this.hallsGroup = this.add.group();
		this.wallGroup = this.add.group();
		this.whiteCoinGroup = this.add.group();
		this.blackCoinGroup = this.add.group();

		this.container_walls.list.forEach((wall) => {
			this.physics.add.existing(wall, true);
			if (wall.angle != 90) {
				wall.body.setSize(50, 900);
				wall.body.setOffset(-15, 0);
			}
			else {
				wall.body.setSize(900, 30);
				wall.body.setOffset(-450, 440);
			}
			this.wallGroup.add(wall);
		});

		this.container_whiteCoins.list.forEach((coin) => {
			this.physics.add.existing(coin, false);
			coin.body.setCircle(260, 0, (coin.body.halfHeight - coin.body.halfWidth));
			this.whiteCoinGroup.add(coin);
		});

		this.container_blackCoins.list.forEach((coin) => {
			this.physics.add.existing(coin, false);
			coin.body.setCircle(200, 0, (coin.body.halfHeight - coin.body.halfWidth));
			coin.body.setOffset(60, 25);
			this.blackCoinGroup.add(coin);
		});

		this.container_halls.list.forEach((hall) => {
			this.physics.add.existing(hall, true);
			hall.body.setSize(25, 25);
			this.hallsGroup.add(hall);
		})

		this.physics.add.existing(queenCoin, false);
		queenCoin.body.setCircle(260, 0, (queenCoin.body.halfHeight - queenCoin.body.halfWidth));
		this.setCollider();
		let cursors = this.input.keyboard.createCursorKeys();
		// this.input.keyboard.on('keydown', this.setStrikerPosition, this);
		this.setStrikerPosition();

	}

	setCollider() {

		this.physics.add.collider(this.wallGroup, this.striker, () => {
			this.checkSpeed();
		});
		this.physics.add.collider(this.wallGroup, queenCoin, () => {

		});

		this.physics.add.collider(this.wallGroup, this.whiteCoinGroup, () => {

		});

		this.physics.add.collider(this.wallGroup, this.blackCoinGroup, () => {

		});

		this.physics.add.collider(this.hallsGroup, this.striker, () => {
			this.striker.setVelocity(0, 0);
			this.striker.setVisible(false);
			strikerCollideWithHall = true;
			// if (!userTurn && nUserScore > 0) {
			// 	nUserScore--;
			// 	this.userScore.setText(nUserScore);
			// 	const whiteCoinCharge = this.physics.add.sprite(960, 547, "whiteCoin");
			// 	whiteCoinCharge.scaleX = 0.06;
			// 	whiteCoinCharge.scaleY = 0.06;
			// 	whiteCoinCharge.tintTopLeft = 14204307;
			// 	whiteCoinCharge.tintTopRight = 14204307;
			// 	whiteCoinCharge.tintBottomLeft = 14204307;
			// 	whiteCoinCharge.tintBottomRight = 14204307;
			// 	this.container_whiteCoins.add(whiteCoinCharge);
			// 	this.whiteCoinGroup.add(whiteCoinCharge);
			// }
			// if (userTurn && nOpponentScore > 0) {
			// 	nOpponentScore--;
			// 	this.opponentScore.setText(nOpponentScore);
			// 	const blackCoinCharge = this.physics.add.sprite(960, 547, "blackCoin");
			// 	blackCoinCharge.scaleX = 0.08;
			// 	blackCoinCharge.scaleY = 0.08;
			// 	this.container_blackCoins.add(blackCoinCharge);
			// 	this.blackCoinGroup.add(blackCoinCharge);
			// }
			this.checkSpeed(strikerCollideWithHall);
		});

		this.physics.add.collider(this.hallsGroup, this.blackCoinGroup, (hall, coin) => {
			coin.destroy();
			nOpponentScore++;
			this.opponentScore.setText(nOpponentScore);
			if (userTurn) {
				if (!strikerCollideWithHall) {
					userTurn = false;
					if (repeateOpponentTurn) {
						userWin = false;
						this.checkForWinner(userWin);
					}
					// repeateOpponentTurn = true;
				} else {
					strikerCollideWithHall = false;
				}
			}
			console.log("black", userTurn);
		});

		this.physics.add.collider(this.hallsGroup, this.whiteCoinGroup, (hall, coin) => {
			coin.destroy();
			nUserScore++;
			this.userScore.setText(nUserScore);

			if (!userTurn) {
				if (!strikerCollideWithHall) {
					userTurn = true;
					if (repeateUserTurn) {
						userWin = true;
						this.checkForWinner(userWin);
					}
					// repeateUserTurn = true;
				}
				else {
					strikerCollideWithHall = false;
				}
			}
			console.log("white", userTurn);
		});

		this.physics.add.collider(this.hallsGroup, queenCoin, (hall, coin) => {
			if (userTurn) {
				if (this.container_blackCoins.list.length == 1) {
					repeateOpponentTurn = true;
					userTurn = false;
				}
				else {
					userWin = true;
					this.checkForWinner(userWin);
				}
			}
			else {
				if (this.container_whiteCoins.list.length == 1) {
					repeateUserTurn = true;
					userTurn = true;
				}
				else {
					userWin = false;
					this.checkForWinner(userWin);
				}
			}
		});

		this.physics.add.collider(this.whiteCoinGroup, this.striker, () => {
			
			this.checkSpeed();
		});

		this.physics.add.collider(this.blackCoinGroup, this.striker, () => {
			
			this.checkSpeed();
		});

		this.physics.add.collider(this.whiteCoinGroup, this.blackCoinGroup, () => {

		});

		this.physics.add.collider(queenCoin, this.blackCoinGroup, () => {

		});

		this.physics.add.collider(queenCoin, this.whiteCoinGroup, () => {

		});

		this.physics.add.collider(queenCoin, this.striker, () => {

			this.checkSpeed();
		});

		this.physics.add.collider(this.whiteCoinGroup, this.whiteCoinGroup, () => {

		});

		this.physics.add.collider(this.blackCoinGroup, this.blackCoinGroup, () => {

		});

	}

	setStrikerPosition() {
		this.slider.setInteractive();
		this.input.setDraggable(this.slider);


		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {

			if (gameObject.texture.key == "slider") {
				dragX = Math.min(Math.max(-279, dragX), 286);

				gameObject.x = dragX;
				this.striker.x = gameObject.x + 955;
			}
		});

		this.input.on('dragend', (pointer, GameObject) => {
			this.strikeCoins();

		});

	}
	// update() {
	// 	let cursors = this.input.keyboard.createCursorKeys();

	// 	if (cursors.left.isDown) {
	// 		if (this.slider.x > -277) {
	// 			this.slider.x -= 5;
	// 		}
	// 		this.striker.x = this.slider.x + 955;
	// 	}
	// 	if (cursors.right.isDown) {
	// 		if (this.slider.x < 280) {
	// 			this.slider.x += 5;
	// 		}
	// 		this.striker.x = this.slider.x + 955;
	// 	}

	// 	if (cursors.left.onUp) {
	// 		this.strikeCoins();
	// 	}
	// 	if (cursors.right.) {
	// 		this.strikeCoins();
	// 	}
	// }

	strikeCoins() {
		this.striker.setInteractive();
		this.input.setDraggable(this.striker);

		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {

			if (gameObject.texture.key == "striker") {

				this.arrow.setPosition(this.striker.x, this.striker.y);
				this.arrow.setVisible(true);

				angle = Phaser.Math.Angle.Between(this.striker.x, this.striker.y, dragX, dragY);

				if (userTurn) {
					nStretchDistance = Phaser.Math.Clamp((dragY - gameObject.y) + 100, 0, nMaxStretch);
					this.striker.setRotation(angle);
					if (angle < 1.80) {
						this.arrow.setRotation(-(-angle + 7.9));
					}
					else {
						this.arrow.setRotation(angle - 1.6);
					}
				}
				else {
					nStretchDistance = Phaser.Math.Clamp(-(dragY - gameObject.y) + 100, 0, nMaxStretch);
					this.striker.setRotation(-angle);
					if (angle < -1.59) {
						this.arrow.setRotation(-(-angle + 7.9));
					}

					else {
						this.arrow.setRotation(angle - 1.6);
					}
				}
			}
		});

		this.input.on('dragend', (pointer, gameObject) => {
			this.arrow.setVisible(false);
			if (gameObject.texture.key == "striker") {

				this.slider.disableInteractive();
				this.striker.disableInteractive();

				nVelocityX = Math.cos(this.striker.rotation) * nStretchDistance * 2;
				nVelocityY = Math.sin(this.striker.rotation) * nStretchDistance * 2;

				if (userTurn) {
					gameObject.setVelocity(-nVelocityX, -nVelocityY);
				}
				else {
					gameObject.setVelocity(-nVelocityX, nVelocityY);
				}

				gameObject.body.setBounce(1, 1);

				this.container_whiteCoins.list.forEach((coin) => {
					coin.body.setBounce(1, 1);
				});

				this.container_blackCoins.list.forEach((coin) => {
					coin.body.setBounce(1, 1);
				});

				queenCoin.body.setBounce(1, 1);

				this.physics.resume();
				this.changeTurn();
			}
		});

	}

	changeTurn() {
		if (userTurn) {
			userTurn = false;
		}
		else {
			userTurn = true;
		}
		strikerCollideWithHall = false;
	}

	checkSpeed(strikerCollideWithHall) {
		// const strikerSpeed = Math.sqrt(this.striker.body.velocity.x ** 2 + this.striker.body.velocity.y ** 2);
		if (this.striker.body.velocity.x < nStrikerThreshold && this.striker.body.velocity.y < nStrikerThreshold) {

			setTimeout(() => {
				this.striker.body.setVelocity(0);
				setTimeout(() => {
					if (this.striker.visible == false) {
						this.striker.setVisible(true);
					}
				}, 1200);

				if (userTurn) {
					setTimeout(() => {
						this.striker.setPosition(680, 865);
					}, 1200);

					this.striker.setBounce(0);
					this.striker.disableInteractive();

					this.container_blackCoins.list.forEach((coin) => {
						coin.body.setVelocity(0);
					});
					this.container_whiteCoins.list.forEach((coin) => {
						coin.body.setVelocity(0);
					});
					queenCoin.body.setVelocity(0);
					this.physics.pause();
				}
				else {
					setTimeout(() => {
						this.striker.setPosition(678, 223);
					}, 1200);

					this.striker.setBounce(0);
					this.striker.disableInteractive();

					this.container_blackCoins.list.forEach((coin) => {
						coin.body.setVelocity(0);
					});
					this.container_whiteCoins.list.forEach((coin) => {
						coin.body.setVelocity(0);
					});
					queenCoin.body.setVelocity(0);
					this.physics.pause();
				}
				this.slider.setPosition(-286, -8);
				this.slider.setInteractive();

			}, 2000);
		}

		this.container_blackCoins.list.forEach(function (coin) {
			if (coin.body.velocity.x < nCoinsThreshold && coin.body.velocity.y < nCoinsThreshold) {
				coin.body.setVelocity(0);
			}
		}, this);

		this.container_whiteCoins.list.forEach(function (coin) {
			if (coin.body.velocity.x < nCoinsThreshold && coin.body.velocity.y < nCoinsThreshold) {
				coin.body.setVelocity(0);
			}
		}, this);

		if (queenCoin.body.velocity.x < nCoinsThreshold && queenCoin.body.velocity.y < nCoinsThreshold) {
			queenCoin.body.setVelocity(0);
		}
	}

	checkForWinner(userWin) {
		if (userWin == true) {
			console.log("you win");
		}
		else {
			console.log("batter luck, next time");
		}
		this.scene.restart("Level");
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
