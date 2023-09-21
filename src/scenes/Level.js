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

		// container_walls
		const container_walls = this.add.container(0, 0);
		container_background.add(container_walls);

		// wall_1
		const wall_1 = this.add.rectangle(621, 534, 128, 128);
		wall_1.scaleX = 0.2;
		wall_1.scaleY = 7;
		container_walls.add(wall_1);

		// wall_2
		const wall_2 = this.add.rectangle(966, 179, 128, 128);
		wall_2.scaleX = 0.2;
		wall_2.scaleY = 7;
		wall_2.angle = 90;
		container_walls.add(wall_2);

		// wall_3
		const wall_3 = this.add.rectangle(1319, 540, 128, 128);
		wall_3.scaleX = 0.2;
		wall_3.scaleY = 7;
		container_walls.add(wall_3);

		// wall_4
		const wall_4 = this.add.rectangle(969, 876, 128, 128);
		wall_4.scaleX = 0.2;
		wall_4.scaleY = 7;
		wall_4.angle = 90;
		container_walls.add(wall_4);

		// carrom_board
		const carrom_board = this.add.image(960, 540, "carrom-board");
		carrom_board.scaleX = 0.8;
		carrom_board.scaleY = 0.8;
		container_background.add(carrom_board);

		// container_halls
		const container_halls = this.add.container(0, 0);
		body.add(container_halls);

		// hall_1
		const hall_1 = this.add.ellipse(689, 823, 128, 128);
		hall_1.scaleX = 0.2;
		hall_1.scaleY = 0.2;
		container_halls.add(hall_1);

		// hall_2
		const hall_2 = this.add.ellipse(690, 264, 128, 128);
		hall_2.scaleX = 0.2;
		hall_2.scaleY = 0.2;
		container_halls.add(hall_2);

		// hall_3
		const hall_3 = this.add.ellipse(1244, 262, 128, 128);
		hall_3.scaleX = 0.2;
		hall_3.scaleY = 0.2;
		container_halls.add(hall_3);

		// hall_4
		const hall_4 = this.add.ellipse(1247, 823, 128, 128);
		hall_4.scaleX = 0.2;
		hall_4.scaleY = 0.2;
		container_halls.add(hall_4);

		// container_slider
		const container_slider = this.add.container(967, 1033);
		body.add(container_slider);

		// slidebar
		const slidebar = this.add.image(2, -52, "player_1_slidebar");
		container_slider.add(slidebar);

		// player_2_slidebar
		const player_2_slidebar = this.add.image(2, -934, "player_2_slidebar");
		container_slider.add(player_2_slidebar);

		// slider
		const slider = this.add.sprite(-188, -54, "striker");
		slider.name = "slider";
		slider.scaleX = 1.1;
		slider.scaleY = 1.1;
		container_slider.add(slider);

		// container_user
		const container_user = this.add.container(0, 0);
		body.add(container_user);

		// user_img
		const user_img = this.add.image(390, 445, "avatar_1");
		user_img.scaleX = 0.7;
		user_img.scaleY = 0.7;
		container_user.add(user_img);

		// userName
		const userName = this.add.text(390, 541, "", {});
		userName.setOrigin(0.5, 0.5);
		userName.text = "Player 1";
		userName.setStyle({ "fontFamily": "Montserrat", "fontSize": "40px" });
		container_user.add(userName);

		// score_bar
		const score_bar = this.add.image(390, 690, "score_bar");
		score_bar.scaleX = 0.9;
		score_bar.scaleY = 0.9;
		container_user.add(score_bar);

		// userScore
		const userScore = this.add.text(360, 690, "", {});
		userScore.setOrigin(0.5, 0.5);
		userScore.text = "0/9";
		userScore.setStyle({ "fontFamily": "Montserrat", "fontSize": "46px" });
		container_user.add(userScore);

		// whiteCoin
		const whiteCoin = this.add.image(463, 690, "whiteCoin");
		container_user.add(whiteCoin);

		// container_opponent
		const container_opponent = this.add.container(0, 0);
		body.add(container_opponent);

		// opponent_img
		const opponent_img = this.add.image(1530, 445, "avatar_2");
		opponent_img.scaleX = 0.7;
		opponent_img.scaleY = 0.7;
		container_opponent.add(opponent_img);

		// opponentName
		const opponentName = this.add.text(1530, 541, "", {});
		opponentName.setOrigin(0.5, 0.5);
		opponentName.text = "Player 2";
		opponentName.setStyle({ "fontFamily": "Montserrat", "fontSize": "40px" });
		container_opponent.add(opponentName);

		// score_bar_1
		const score_bar_1 = this.add.image(1530, 690, "score_bar");
		score_bar_1.scaleX = 0.9;
		score_bar_1.scaleY = 0.9;
		container_opponent.add(score_bar_1);

		// opponentScore
		const opponentScore = this.add.text(1500, 690, "", {});
		opponentScore.setOrigin(0.5, 0.5);
		opponentScore.text = "0/9";
		opponentScore.setStyle({ "fontFamily": "Montserrat", "fontSize": "46px" });
		container_opponent.add(opponentScore);

		// blackCoin
		const blackCoin = this.add.image(1603, 690, "blackCoin");
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

		// container_striker
		const container_striker = this.add.container(0, -3);
		body.add(container_striker);

		// container_winnerImage
		const container_winnerImage = this.add.container(0, -3);
		body.add(container_winnerImage);

		this.container_walls = container_walls;
		this.carrom_board = carrom_board;
		this.container_halls = container_halls;
		this.slider = slider;
		this.userScore = userScore;
		this.opponentScore = opponentScore;
		this.container_whiteCoins = container_whiteCoins;
		this.container_blackCoins = container_blackCoins;
		this.container_queen = container_queen;
		this.container_striker = container_striker;
		this.container_winnerImage = container_winnerImage;

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
	/** @type {Phaser.GameObjects.Container} */
	container_striker;
	/** @type {Phaser.GameObjects.Container} */
	container_winnerImage;

	/* START-USER-CODE */

	// Write your code here

	changeTurn() {
		let timeOut;
		if (nStretchDistance < 90) {
			timeOut = 100;
		}
		if (nStretchDistance > 90 && nStretchDistance < 150) {
			timeOut = 3000;
		}
		if (nStretchDistance > 150 && nStretchDistance < 200) {
			timeOut = 3500;
		}
		if (nStretchDistance > 200) {
			timeOut = 4000;
		}
		setTimeout(() => {
			this.stopMovement();
		}, timeOut);
	}

	checkForWinner(userWin) {
		let winnerText;
		console.log(userWin);
		if (userWin == true) {
			console.log("userWin");
			winnerText = this.add.image(960, -75, "you_win").setScale(0.6, 0.6);
		}
		else {
			console.log("userLose");
			winnerText = this.add.image(960, -75, "you_lose").setScale(0.6, 0.6);
		}
		console.log(winnerText);
		this.container_winnerImage.add(winnerText);
		let winnerImage = this.add.image(960, 1246, "avatar_1").setScale(0.5, 0.5);
		this.container_winnerImage.add(winnerImage);
		let playerName = this.add.text(960, 1328, "", {});
		playerName.setOrigin(0.5, 0.5);
		playerName.text = "Player 1";
		playerName.setStyle({ "fontFamily": "Montserrat", "fontSize": "32px" });
		this.container_winnerImage.add(playerName);
		this.scene.bringToTop(this.container_winnerImage);
		this.winnerAnimation();
	}

	winnerAnimation() {
		let pos = [396, 559, 628];
		this.container_winnerImage.list.forEach((image, i) => {
			this.tweens.add({
				targets: image,
				ease: "power3",
				y: pos[i],
				duration: 1000,
				onComplete: () => {
					this.reloadScreen();
				}
			});
		})
	}

	reloadScreen() {
		this.striker.disableInteractive();
		this.slider.disableInteractive();
		const tryAgainText = this.add.text(960, 600, "", {});
		tryAgainText.setOrigin(0.5, 0.5);
		tryAgainText.text = "Try again";
		tryAgainText.setStyle({ "fontFamily": "GochiHand", "fontSize": "60px", "fontStyle": "bold", "color": "#553636ff" });
		tryAgainText.setInteractive().on("pointerdown", () => {
			nUserScore = 0;
			nOpponentScore = 0;
			this.userScore.setText(nUserScore, +"/9");
			this.opponentScore.setText(nOpponentScore, +"/9");
			this.scene.restart("Level");
		});
	}

	create() {

		this.editorCreate();

		this.oSoundManager = new SoundManager(this);
		this.oTweenManager = new TweenManager(this);

		this.arrow = this.add.image(784, 773, "direction-arrow").setScale(0, 0).setOrigin(0.5, 0.5);
		this.arrow.setVisible(false);

		this.striker = this.physics.add.sprite(784, 773, "striker").setOrigin(0.5, 0.5);
		this.striker.setName("striker");
		this.striker.body.setCircle(27, 6, 6);
		this.container_striker.add(this.striker);

		// whiteCoin_1
		const whiteCoin_1 = this.add.image(-527, 49, "whiteCoin");
		whiteCoin_1.scaleX = 0.35;
		whiteCoin_1.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_1);

		// whiteCoin_9
		const whiteCoin_9 = this.add.image(-556, 114, "whiteCoin");
		whiteCoin_9.scaleX = 0.35;
		whiteCoin_9.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_9);

		// whiteCoin_8
		const whiteCoin_8 = this.add.image(-419, 104, "whiteCoin");
		whiteCoin_8.scaleX = 0.35;
		whiteCoin_8.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_8);

		// whiteCoin_7
		const whiteCoin_7 = this.add.image(-518, 169, "whiteCoin");
		whiteCoin_7.scaleX = 0.35;
		whiteCoin_7.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_7);

		// whiteCoin_6
		const whiteCoin_6 = this.add.image(-520, 129, "whiteCoin");
		whiteCoin_6.scaleX = 0.35;
		whiteCoin_6.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_6);

		// whiteCoin_5
		const whiteCoin_5 = this.add.image(-490, 70, "whiteCoin");
		whiteCoin_5.scaleX = 0.35;
		whiteCoin_5.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_5);

		// whiteCoin_4
		const whiteCoin_4 = this.add.image(-454, 126, "whiteCoin");
		whiteCoin_4.scaleX = 0.35;
		whiteCoin_4.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_4);

		// whiteCoin_3
		const whiteCoin_3 = this.add.image(-450, 165, "whiteCoin");
		whiteCoin_3.scaleX = 0.35;
		whiteCoin_3.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_3);

		// whiteCoin_2
		const whiteCoin_2 = this.add.image(-456, 46, "whiteCoin");
		whiteCoin_2.scaleX = 0.35;
		whiteCoin_2.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_2);

		// blackCoin_1
		const blackCoin_1 = this.add.image(-492, 35, "blackCoin");
		blackCoin_1.scaleX = 0.35;
		blackCoin_1.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_1);

		// blackCoin_9
		const blackCoin_9 = this.add.image(-521, 93, "blackCoin");
		blackCoin_9.scaleX = 0.35;
		blackCoin_9.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_9);

		// blackCoin_8
		const blackCoin_8 = this.add.image(-424, 70, "blackCoin");
		blackCoin_8.scaleX = 0.35;
		blackCoin_8.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_8);

		// blackCoin_7
		const blackCoin_7 = this.add.image(-555, 79, "blackCoin");
		blackCoin_7.scaleX = 0.35;
		blackCoin_7.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_7);

		// blackCoin_6
		const blackCoin_6 = this.add.image(-551, 155, "blackCoin");
		blackCoin_6.scaleX = 0.35;
		blackCoin_6.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_6);

		// blackCoin_5
		const blackCoin_5 = this.add.image(-484, 186, "blackCoin");
		blackCoin_5.scaleX = 0.35;
		blackCoin_5.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_5);

		// blackCoin_4
		const blackCoin_4 = this.add.image(-486, 149, "blackCoin");
		blackCoin_4.scaleX = 0.35;
		blackCoin_4.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_4);

		// blackCoin_3
		const blackCoin_3 = this.add.image(-456, 90, "blackCoin");
		blackCoin_3.scaleX = 0.35;
		blackCoin_3.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_3);

		// blackCoin_2
		const blackCoin_2 = this.add.image(-419, 144, "blackCoin");
		blackCoin_2.scaleX = 0.35;
		blackCoin_2.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_2);

		// redCoin
		queenCoin = this.add.image(-488, 120, "redCoin");
		queenCoin.scaleX = 0.21;
		queenCoin.scaleY = 0.21;
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
				wall.body.setSize(900, 50);
				wall.body.setOffset(-450, 440);
			}
			this.wallGroup.add(wall);
		});

		this.container_whiteCoins.list.forEach((coin) => {
			this.physics.add.existing(coin, false);
			coin.body.setCircle(50, 15, 15);
			this.whiteCoinGroup.add(coin);
		});

		this.container_blackCoins.list.forEach((coin) => {
			this.physics.add.existing(coin, false);
			coin.body.setCircle(50, 15, 15);
			this.blackCoinGroup.add(coin);
		});

		this.physics.add.existing(queenCoin, false);
		queenCoin.body.setCircle(90, 40, 40);

		this.container_halls.list.forEach((hall) => {
			this.physics.add.existing(hall, true);
			hall.body.setCircle(13, 15, 15);
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
					if (nUserScore >= 2) {
						nUserScore -= 2;
					}
					else {
						nUserScore--;
					}
					const whiteCoinCharge = this.physics.add.sprite(-488, 120, "whiteCoin");
					whiteCoinCharge.scaleX = 0.35;
					whiteCoinCharge.scaleY = 0.35;
					whiteCoinCharge.body.setCircle(50, 15, 15);
					this.container_whiteCoins.add(whiteCoinCharge);
					this.whiteCoinGroup.add(whiteCoinCharge);
					repeateUserTurn = false;
				}
				else {
					nUserScore--;
				}
				this.userScore.setText(nUserScore + "/9");
				const whiteCoinCharge = this.physics.add.sprite(-488, 120, "whiteCoin");
				whiteCoinCharge.scaleX = 0.35;
				whiteCoinCharge.scaleY = 0.35;
				whiteCoinCharge.body.setCircle(50, 15, 15);
				this.container_whiteCoins.add(whiteCoinCharge);
				this.whiteCoinGroup.add(whiteCoinCharge);
			}
			if (!userTurn && nOpponentScore > 0) {
				if (repeateOpponentTurn) {
					if (nOpponentScore >= 2) {
						nOpponentScore -= 2;
					}
					else {
						nOpponentScore--;
					}
					const blackCoinCharge = this.physics.add.sprite(-488, 120, "blackCoin");
					blackCoinCharge.scaleX = 0.35;
					blackCoinCharge.scaleY = 0.35;
					blackCoinCharge.body.setCircle(50, 15, 15);
					this.container_blackCoins.add(blackCoinCharge);
					this.blackCoinGroup.add(blackCoinCharge);
					repeateOpponentTurn = false;
				}
				else {
					nOpponentScore--;
				}
				this.opponentScore.setText(nOpponentScore + "/9");
				const blackCoinCharge = this.physics.add.sprite(-488, 120, "blackCoin");
				blackCoinCharge.scaleX = 0.35;
				blackCoinCharge.scaleY = 0.35;
				blackCoinCharge.body.setCircle(50, 15, 15);
				this.container_blackCoins.add(blackCoinCharge);
				this.blackCoinGroup.add(blackCoinCharge);
			}
		});

		this.physics.add.collider(this.hallsGroup, this.blackCoinGroup, (hall, coin) => {
			coin.destroy();

			nOpponentScore++;
			this.opponentScore.setText(nOpponentScore + "/9");

			if (!userTurn) {
				this.oSoundManager.playSound(this.oSoundManager.rightCoinFoulsSound, false);
				if (this.container_blackCoins.list.length == 0 && !opponentQueenFouls) {
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
				if (this.container_blackCoins.list.length == 0) {
					userWin = false;
					this.checkForWinner(userWin);
				}
			}
		});

		this.physics.add.collider(this.hallsGroup, this.whiteCoinGroup, (hall, coin) => {
			coin.destroy();
			nUserScore++;
			this.userScore.setText(nUserScore + "/9");

			if (userTurn) {
				this.oSoundManager.playSound(this.oSoundManager.rightCoinFoulsSound, false);
				if (this.container_whiteCoins.list.length == 0 && !userQueenFouls) {
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
				if (this.container_whiteCoins.list.length == 0) {
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
						queenCoin.setPosition(-488, 120).setVisible(true);
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
						queenCoin.setPosition(-486, 120).setVisible(true);
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

			if (gameObject.name == "slider") {
				dragX = Math.min(Math.max(-188, dragX), 193);

				gameObject.x = dragX;
				this.striker.x = gameObject.x + 960;
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

			if (gameObject.name == "striker") {

				this.arrow.setPosition(this.striker.x, this.striker.y);
				this.arrow.setVisible(true);
				// console.log(dragY, gameObject.y);
				angle = Phaser.Math.Angle.Between(this.striker.x, this.striker.y, dragX, dragY);

				if (userTurn) {
					this.arrow.scale = Phaser.Math.Clamp((dragY / 600 - gameObject.y / 600) + 1, 1, 2);
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
					this.arrow.scale = Phaser.Math.Clamp((-(dragY / 600 - gameObject.y / 600)) + 1, 1, 2);
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
			if (gameObject.name == "striker") {

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
				this.striker.setPosition(784, 773);
				this.slider.setPosition(-188, -54);
			}, 400);
		}
		else {
			repeateOpponentTurn = false;
			setTimeout(() => {
				this.striker.setPosition(784, 318);
				this.slider.setPosition(-188, -938);
			}, 400);
		}

		this.physics.pause();
		this.slider.setInteractive();
		this.striker.setInteractive();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
