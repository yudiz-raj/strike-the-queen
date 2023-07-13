// You can write more code here
let nStretchDistance;
let nMaxStretch = 1000;
let nVelocityX, nVelocityY, angle;
let queenCoin;
let userTurn = true;
let strikerCollideWithHall = false;
let repeateUserTurn = false;
let repeateOpponentTurn = false;
let userQueenFouls = false;
let opponentQueenFouls = false;
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

		// title
		const title = this.add.image(247, 379, "title");
		container_background.add(title);

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
		const user_img = this.add.image(-16, 588, "avatar_1");
		container_user.add(user_img);

		// userName
		const userName = this.add.text(-16, 682, "", {});
		userName.setOrigin(0.5, 0.5);
		userName.text = "Raj";
		userName.setStyle({ "fontFamily": "GochiHand", "fontSize": "60px" });
		container_user.add(userName);

		// userScore
		const userScore = this.add.text(18, 750, "", {});
		userScore.setOrigin(0.5, 0.5);
		userScore.text = "0";
		userScore.setStyle({ "fontFamily": "GochiHand", "fontSize": "60px" });
		container_user.add(userScore);

		// whiteCoin
		const whiteCoin = this.add.image(-47, 750, "whiteCoin");
		whiteCoin.scaleX = 2;
		whiteCoin.scaleY = 2;
		container_user.add(whiteCoin);

		// container_opponent
		const container_opponent = this.add.container(1684, 256);
		body.add(container_opponent);

		// opponent_img
		const opponent_img = this.add.image(-6, -119, "avatar_2");
		container_opponent.add(opponent_img);

		// opponentName
		const opponentName = this.add.text(-6, -19, "", {});
		opponentName.setOrigin(0.5, 0.5);
		opponentName.text = "Fenil";
		opponentName.setStyle({ "fontFamily": "GochiHand", "fontSize": "60px" });
		container_opponent.add(opponentName);

		// opponentScore
		const opponentScore = this.add.text(24, 49, "", {});
		opponentScore.setOrigin(0.5, 0.5);
		opponentScore.text = "0";
		opponentScore.setStyle({ "fontFamily": "GochiHand", "fontSize": "60px" });
		container_opponent.add(opponentScore);

		// blackCoin
		const blackCoin = this.add.image(-41, 49, "blackCoin");
		blackCoin.scaleX = 2;
		blackCoin.scaleY = 2;
		container_opponent.add(blackCoin);

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

	changeTurn() {
		let timeOut;
		if(nStretchDistance < 90){
			timeOut = 100;
		}
		if (nStretchDistance>90 && nStretchDistance < 150) {
			timeOut = 2000;
		}
		if (nStretchDistance > 150 && nStretchDistance < 200) {
			timeOut = 2500;
		}
		if (nStretchDistance > 200) {
			timeOut = 3200;
		}
		setTimeout(() => {
			this.stopMovement();
		}, timeOut);
	}

	checkForWinner(userWin) {
		if (userWin == true) {
			const winText = this.add.image(960, 500, "text-win").setScale(0, 1);
			this.tweens.add({
				targets: winText,
				ease: "power3",
				scaleX: 1,
				duration: 2000,
				onComplete: () => {
					this.reloadSceen();
				}
			});
		}
		else {
			const loseText = this.add.image(960, 500, "text-lose").setScale(0, 1);
			this.tweens.add({
				targets: loseText,
				ease: "power3",
				scaleX: 1,
				duration: 2000,
				onComplete: () => {
					this.reloadSceen();
				}
			});
		}
	}

	reloadSceen() {
		this.striker.disableInteractive();
		this.slider.disableInteractive();
		const tryAgainText = this.add.text(960, 600, "", {});
		tryAgainText.setOrigin(0.5, 0.5);
		tryAgainText.text = "Try again";
		tryAgainText.setStyle({ "fontFamily": "GochiHand", "fontSize": "60px", "fontStyle": "bold", "color": "#553636ff" });
		tryAgainText.setInteractive().on("pointerdown", () => {
			nUserScore = 0;
			nOpponentScore = 0;
			this.userScore.setText(nUserScore);
			this.opponentScore.setText(nOpponentScore);
			this.scene.restart("Level");
		});
	}

	create() {

		this.editorCreate();

		this.oSoundManager = new SoundManager(this);

		this.striker = this.physics.add.sprite(680, 865, "striker").setScale(1.4).setOrigin(0.5, 0.5);
		this.striker.body.setCircle(18, 1, 1);

		this.arrow = this.add.image(this.striker.x, this.striker.y, "direction-arrow").setScale(0.7, 0.7).setOrigin(0.5, 0.6);
		this.arrow.setVisible(false);

		// whiteCoin_1
		const whiteCoin_1 = this.add.sprite(-495, 177, "whiteCoin");
		whiteCoin_1.scaleX = 1.3;
		whiteCoin_1.scaleY = 1.3;
		this.container_whiteCoins.add(whiteCoin_1);

		// whiteCoin_2
		const whiteCoin_2 = this.add.sprite(-434, 72, "whiteCoin");
		whiteCoin_2.scaleX = 1.3;
		whiteCoin_2.scaleY = 1.3;
		this.container_whiteCoins.add(whiteCoin_2);

		// whiteCoin_3
		const whiteCoin_3 = this.add.sprite(-481, 74, "whiteCoin");
		whiteCoin_3.scaleX = 1.3;
		whiteCoin_3.scaleY = 1.3;
		this.container_whiteCoins.add(whiteCoin_3);

		// whiteCoin_4
		const whiteCoin_4 = this.add.sprite(-434, 141, "whiteCoin");
		whiteCoin_4.scaleX = 1.3;
		whiteCoin_4.scaleY = 1.3;
		this.container_whiteCoins.add(whiteCoin_4);

		// whiteCoin_5
		const whiteCoin_5 = this.add.sprite(-554, 72, "whiteCoin");
		whiteCoin_5.scaleX = 1.3;
		whiteCoin_5.scaleY = 1.3;
		this.container_whiteCoins.add(whiteCoin_5);

		// whiteCoin_6
		const whiteCoin_6 = this.add.sprite(-495, 37, "whiteCoin");
		whiteCoin_6.scaleX = 1.3;
		whiteCoin_6.scaleY = 1.3;
		this.container_whiteCoins.add(whiteCoin_6);

		// whiteCoin_7
		const whiteCoin_7 = this.add.sprite(-554, 141, "whiteCoin");
		whiteCoin_7.scaleX = 1.3;
		whiteCoin_7.scaleY = 1.3;
		this.container_whiteCoins.add(whiteCoin_7);

		// whiteCoin_8
		const whiteCoin_8 = this.add.sprite(-532, 108, "whiteCoin");
		whiteCoin_8.scaleX = 1.3;
		whiteCoin_8.scaleY = 1.3;
		this.container_whiteCoins.add(whiteCoin_8);

		// whiteCoin_9
		const whiteCoin_9 = this.add.sprite(-476, 137, "whiteCoin");
		whiteCoin_9.scaleX = 1.3;
		whiteCoin_9.scaleY = 1.3;
		this.container_whiteCoins.add(whiteCoin_9);


		// blackCoin_1
		const blackCoin_1 = this.add.sprite(-515, 79, "blackCoin");
		blackCoin_1.scaleX = 1.3;
		blackCoin_1.scaleY = 1.3;
		this.container_blackCoins.add(blackCoin_1);

		// blackCoin_2
		const blackCoin_2 = this.add.sprite(-424, 109, "blackCoin");
		blackCoin_2.scaleX = 1.3;
		blackCoin_2.scaleY = 1.3;
		this.container_blackCoins.add(blackCoin_2);

		// blackCoin_3
		const blackCoin_3 = this.add.sprite(-530, 48, "blackCoin");
		blackCoin_3.scaleX = 1.3;
		blackCoin_3.scaleY = 1.3;
		this.container_blackCoins.add(blackCoin_3);

		// blackCoin_4
		const blackCoin_4 = this.add.sprite(-566, 109, "blackCoin");
		blackCoin_4.scaleX = 1.3;
		blackCoin_4.scaleY = 1.3;
		this.container_blackCoins.add(blackCoin_4);

		// blackCoin_5
		const blackCoin_5 = this.add.sprite(-511, 142, "blackCoin");
		blackCoin_5.scaleX = 1.3;
		blackCoin_5.scaleY = 1.3;
		this.container_blackCoins.add(blackCoin_5);

		// blackCoin_6
		const blackCoin_6 = this.add.sprite(-531, 172, "blackCoin");
		blackCoin_6.scaleX = 1.3;
		blackCoin_6.scaleY = 1.3;
		this.container_blackCoins.add(blackCoin_6);

		// blackCoin_7
		const blackCoin_7 = this.add.sprite(-459, 171, "blackCoin");
		blackCoin_7.scaleX = 1.3;
		blackCoin_7.scaleY = 1.3;
		this.container_blackCoins.add(blackCoin_7);

		// blackCoin_8
		const blackCoin_8 = this.add.sprite(-460, 49, "blackCoin");
		blackCoin_8.scaleX = 1.3;
		blackCoin_8.scaleY = 1.3;
		this.container_blackCoins.add(blackCoin_8);

		// blackCoin_9
		const blackCoin_9 = this.add.sprite(-460, 107, "blackCoin");
		blackCoin_9.scaleX = 1.3;
		blackCoin_9.scaleY = 1.3;
		this.container_blackCoins.add(blackCoin_9);

		// queenCoin
		queenCoin = this.add.sprite(-495, 119, "redCoin");
		queenCoin.scaleX = 1.3;
		queenCoin.scaleY = 1.3;
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
			coin.body.setCircle(13, 2, 1);
			this.whiteCoinGroup.add(coin);
		});

		this.container_blackCoins.list.forEach((coin) => {
			this.physics.add.existing(coin, false);
			coin.body.setCircle(13, 2, 1);
			this.blackCoinGroup.add(coin);
		});

		this.physics.add.existing(queenCoin, false);
		queenCoin.body.setCircle(13, 2, 1);

		this.container_halls.list.forEach((hall) => {
			this.physics.add.existing(hall, true);
			hall.body.setSize(25, 25);
			this.hallsGroup.add(hall);
		})

		this.setCollider();
		this.strikeCoins();
		this.setStrikerPosition();

	}

	setCollider() {

		this.physics.add.collider(this.wallGroup, this.striker, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideWallSound, false);
		});
		this.physics.add.collider(this.wallGroup, queenCoin, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideWallSound, false);
		});

		this.physics.add.collider(this.wallGroup, this.whiteCoinGroup, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideWallSound, false);
		});

		this.physics.add.collider(this.wallGroup, this.blackCoinGroup, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideWallSound, false);
		});

		this.physics.add.collider(this.hallsGroup, this.striker, () => {
			this.striker.setVelocity(0, 0);
			this.striker.disableInteractive();
			this.physics.pause();
			this.striker.setVisible(false);
			strikerCollideWithHall = true;
			this.oSoundManager.playSound(this.oSoundManager.wrongCoinFoulsSound, false);
			if (userTurn && nUserScore > 0) {
				if (repeateUserTurn) {
					nUserScore -= 2;
					const whiteCoinCharge = this.physics.add.sprite(-495, 119, "whiteCoin");
					whiteCoinCharge.scaleX = 1.3;
					whiteCoinCharge.scaleY = 1.3;
					this.container_whiteCoins.add(whiteCoinCharge);
					this.whiteCoinGroup.add(whiteCoinCharge);
					repeateUserTurn = false;
				}
				else {
					nUserScore--;
				}
				this.userScore.setText(nUserScore);
				const whiteCoinCharge = this.physics.add.sprite(-495, 119, "whiteCoin");
				whiteCoinCharge.scaleX = 1.3;
				whiteCoinCharge.scaleY = 1.3;
				this.container_whiteCoins.add(whiteCoinCharge);
				this.whiteCoinGroup.add(whiteCoinCharge);
			}
			if (!userTurn && nOpponentScore > 0) {
				if (repeateOpponentTurn) {
					nOpponentScore -= 2;
					const blackCoinCharge = this.physics.add.sprite(-495, 119, "blackCoin");
					blackCoinCharge.scaleX = 1.3;
					blackCoinCharge.scaleY = 1.3;
					this.container_blackCoins.add(blackCoinCharge);
					this.blackCoinGroup.add(blackCoinCharge);
					repeateOpponentTurn = false;
				}
				else{
					nOpponentScore--;
				}
				this.opponentScore.setText(nOpponentScore);
				const blackCoinCharge = this.physics.add.sprite(-495, 119, "blackCoin");
				blackCoinCharge.scaleX = 1.3;
				blackCoinCharge.scaleY = 1.3;
				this.container_blackCoins.add(blackCoinCharge);
				this.blackCoinGroup.add(blackCoinCharge);
			}
		});

		this.physics.add.collider(this.hallsGroup, this.blackCoinGroup, (hall, coin) => {
			coin.destroy();
			nOpponentScore++;
			this.opponentScore.setText(nOpponentScore);

			if (!userTurn) {
				this.oSoundManager.playSound(this.oSoundManager.rightCoinFoulsSound, false);
				if(this.container_blackCoins.list.length == 0 && !opponentQueenFouls){
					userWin = true;
					this.checkForWinner(userWin);
				}
				if (!strikerCollideWithHall) {
					repeateOpponentTurn = true;
					if (repeateUserTurn) {
						repeateOpponentTurn = false;
					}
					if (opponentQueenFouls) {
						userWin = false;
						this.checkForWinner(userWin);
					}
				} else {
					strikerCollideWithHall = false;
				}
			}
			else {
				repeateUserTurn = false;
				this.oSoundManager.playSound(this.oSoundManager.wrongCoinFoulsSound, false);
				if(this.container_blackCoins.list.length == 0){
					userWin = false;
					this.checkForWinner(userWin);
				}
			}
		});

		this.physics.add.collider(this.hallsGroup, this.whiteCoinGroup, (hall, coin) => {
			coin.destroy();
			nUserScore++;
			this.userScore.setText(nUserScore);

			if (userTurn) {
				this.oSoundManager.playSound(this.oSoundManager.rightCoinFoulsSound, false);
				if(this.container_whiteCoins.list.length == 0 && !userQueenFouls){
					userWin = false;
					this.checkForWinner(userWin);
				}
				if (!strikerCollideWithHall) {
					repeateUserTurn = true;
					if (repeateOpponentTurn) {
						repeateUserTurn = false;
					}
					if (userQueenFouls) {
						userWin = true;
						this.checkForWinner(userWin);
					}
				}
				else {
					strikerCollideWithHall = false;
				}
			}
			else {
				repeateOpponentTurn = false;
				this.oSoundManager.playSound(this.oSoundManager.wrongCoinFoulsSound, false);
				if(this.container_whiteCoins.list.length == 0){
					userWin = true;
					this.checkForWinner(userWin);
				}
			}
		});

		this.physics.add.collider(this.hallsGroup, queenCoin, (hall, coin) => {
			if (!userTurn) {
				if (this.container_blackCoins.list.length == 1) {
					queenCoin.setVisible(false);
					this.oSoundManager.playSound(this.oSoundManager.rightCoinFoulsSound, false);
					opponentQueenFouls = true;
					repeateOpponentTurn = true;
					setTimeout(() => {
						queenCoin.setPosition(-495, 119).setVisible(true);
					}, 4000);
				}
				else {
					this.oSoundManager.playSound(this.oSoundManager.wrongCoinFoulsSound, false);
					queenCoin.setVisible(false);
					userWin = true;
					this.checkForWinner(userWin);
				}
			}
			else {
				if (this.container_whiteCoins.list.length == 1) {
					this.oSoundManager.playSound(this.oSoundManager.rightCoinFoulsSound, false);
					queenCoin.setVisible(false);
					userQueenFouls = true;
					repeateUserTurn = true;
					setTimeout(() => {
						queenCoin.setPosition(-495, 119).setVisible(true);
					}, 4000);
				}
				else {
					this.oSoundManager.playSound(this.oSoundManager.wrongCoinFoulsSound, false);
					queenCoin.setVisible(false);
					userWin = false;
					this.checkForWinner(userWin);
				}
			}
		});

		this.physics.add.collider(this.whiteCoinGroup, this.striker, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});

		this.physics.add.collider(this.blackCoinGroup, this.striker, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});

		this.physics.add.collider(this.whiteCoinGroup, this.blackCoinGroup, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});

		this.physics.add.collider(queenCoin, this.blackCoinGroup, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});

		this.physics.add.collider(queenCoin, this.whiteCoinGroup, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});

		this.physics.add.collider(queenCoin, this.striker, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});

		this.physics.add.collider(this.whiteCoinGroup, this.whiteCoinGroup, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});

		this.physics.add.collider(this.blackCoinGroup, this.blackCoinGroup, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
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

		this.input.once('dragend', (pointer, gameObject) => {
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
				strikerCollideWithHall = false;
				repeateUserTurn = false;
				repeateOpponentTurn = false;
				this.striker.disableInteractive();
				this.changeTurn();
			}
		});

	}

	stopMovement() {

		this.striker.body.setVelocity(0);
		this.striker.setBounce(0);

		this.container_blackCoins.list.forEach((coin) => {
			coin.body.setVelocity(0);
		});
		this.container_whiteCoins.list.forEach((coin) => {
			coin.body.setVelocity(0);
		});
		queenCoin.body.setVelocity(0);

		setTimeout(() => {
			if (this.striker.visible == false) {
				this.striker.setVisible(true);
			}
		}, 800);

		if (!repeateUserTurn && !repeateOpponentTurn) {
			userTurn = !userTurn;
		}

		if (userTurn) {
			repeateUserTurn = false;
			setTimeout(() => {
				this.striker.setPosition(680, 865);
			}, 400);
		}
		else {
			repeateOpponentTurn = false;
			setTimeout(() => {
				this.striker.setPosition(678, 223);
			}, 400);
		}

		this.physics.pause();
		this.slider.setPosition(-286, -8);
		this.slider.setInteractive();
		this.striker.setInteractive();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
