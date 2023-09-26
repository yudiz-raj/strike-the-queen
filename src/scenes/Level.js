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
let gameOver = false;
let wrongCoin = false;
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

		// container_speedBreaker
		const container_speedBreaker = this.add.container(0, -3);
		body.add(container_speedBreaker);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(720, 560, 80, 600);
		container_speedBreaker.add(rectangle_1);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(928, 256, 80, 600);
		rectangle_2.angle = 90;
		container_speedBreaker.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(928, 832, 80, 600);
		rectangle_3.angle = 90;
		container_speedBreaker.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(1296, 560, 80, 600);
		container_speedBreaker.add(rectangle_4);

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
		const container_slider = this.add.container(0, 0);
		body.add(container_slider);

		// slidebar
		const slidebar = this.add.image(965, 990, "player_1_slidebar");
		slidebar.scaleX = 0.9;
		slidebar.scaleY = 0.9;
		container_slider.add(slidebar);

		// player_2_slidebar
		const player_2_slidebar = this.add.image(965, 90, "player_2_slidebar");
		player_2_slidebar.scaleX = 0.9;
		player_2_slidebar.scaleY = 0.9;
		container_slider.add(player_2_slidebar);

		// slider
		const slider = this.add.sprite(784, 989, "striker");
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
		const container_whiteCoins = this.add.container(0, 0);
		body.add(container_whiteCoins);

		// container_blackCoins
		const container_blackCoins = this.add.container(0, 0);
		body.add(container_blackCoins);

		// container_queen
		const container_queen = this.add.container(0, 0);
		body.add(container_queen);

		// container_striker
		const container_striker = this.add.container(0, -3);
		body.add(container_striker);

		// container_winnerImage
		const container_winnerImage = this.add.container(0, -3);
		body.add(container_winnerImage);

		this.container_speedBreaker = container_speedBreaker;
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
	container_speedBreaker;
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
			if (!gameOver) {
				this.stopMovement();
			}
		}, timeOut);
	}

	checkForWinner(userWin) {
		let winnerText;
		gameOver = true;
		let layer = this.add.image(960, 540, "front").setAlpha(0.5);
		this.container_winnerImage.add(layer);
		if (userWin == true) {
			winnerText = this.add.image(960, -75, "you_win").setScale(0.6, 0.6);
		}
		else {
			winnerText = this.add.image(960, -75, "you_lose").setScale(0.6, 0.6);
		}
		this.container_winnerImage.add(winnerText);
		let winnerImage = this.add.image(960, 1246, "avatar_1").setScale(0.5, 0.5);
		this.container_winnerImage.add(winnerImage);
		let playerName = this.add.text(960, 1328, "", {});
		playerName.setOrigin(0.5, 0.5);
		playerName.text = "Player 1";
		playerName.setStyle({ "fontFamily": "Montserrat", "fontSize": "32px" });
		this.container_winnerImage.add(playerName);
		let replayButton = this.add.image(960, 1246, "replay_button");
		this.container_winnerImage.add(replayButton);
		this.slider.disableInteractive();
		this.striker.disableInteractive();
		this.striker.body.setVelocity(0);
		this.striker.setBounce(0);
		this.container_blackCoins.list.forEach((coin) => {
			coin.body.setVelocity(0);
		});
		this.container_whiteCoins.list.forEach((coin) => {
			coin.body.setVelocity(0);
		});
		queenCoin.body.setVelocity(0);
		queenCoin.destroy();
		this.physics.pause();
		this.winnerAnimation(replayButton);
	}

	winnerAnimation(replayButton) {
		let pos = [540, 396, 559, 628, 784];
		this.container_winnerImage.list.forEach((image, i) => {
			this.tweens.add({
				targets: image,
				ease: "power3",
				y: pos[i],
				duration: 1000,
				onComplete: () => {
					this.striker.disableInteractive();
					this.slider.disableInteractive();
					replayButton.setInteractive();
					replayButton.on('pointerover', () => {
						this.input.setDefaultCursor('pointer');
						replayButton.setScale(1.1);
					});
					replayButton.on('pointerout', () => {
						this.input.setDefaultCursor('default');
						replayButton.setScale(1);
					});
					replayButton.on("pointerdown", () => {
						this.input.setDefaultCursor('default');
						replayButton.setScale(1);
						this.tweens.add({
							targets: replayButton,
							scaleX: 0.8,
							scaleY: 0.8,
							yoyo: true,
							duration: 100,
							onComplete: () => {
								repeateUserTurn = false;
								repeateOpponentTurn = false;
								userQueenFouls = false;
								opponentQueenFouls = false;
								gameOver = false;
								userTurn = true;
								wrongCoin = false;
								nUserScore = 0;
								nOpponentScore = 0;
								this.userScore.setText(nUserScore, +"/9");
								this.opponentScore.setText(nOpponentScore, +"/9");
								this.scene.restart("Level");
							}
						});
					});
				}
			});
		})
	}

	create() {

		document.body.style.backgroundImage = "url('assets/images/background.png')";
		this.editorCreate();
		this.oSoundManager = new SoundManager(this);

		this.arrow = this.add.image(784, 773, "direction-arrow").setScale(0, 0).setOrigin(0.5, 0.5);
		this.arrow.setVisible(false);
		this.container_striker.add(this.arrow);

		this.striker = this.physics.add.sprite(784, 773, "striker").setOrigin(0.5, 0.5);
		this.striker.setName("striker");
		this.striker.body.setCircle(27, 6, 6);
		this.container_striker.add(this.striker);

		// whiteCoin_1
		const whiteCoin_1 = this.add.image(931, 555, "whiteCoin");
		whiteCoin_1.scaleX = 0.35;
		whiteCoin_1.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_1);

		// whiteCoin_2
		const whiteCoin_2 = this.add.image(996, 569, "whiteCoin");
		whiteCoin_2.scaleX = 0.35;
		whiteCoin_2.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_2);

		// whiteCoin_3
		const whiteCoin_3 = this.add.image(975, 506, "whiteCoin");
		whiteCoin_3.scaleX = 0.35;
		whiteCoin_3.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_3);

		// whiteCoin_4
		const whiteCoin_4 = this.add.image(1013, 488, "whiteCoin");
		whiteCoin_4.scaleX = 0.35;
		whiteCoin_4.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_4);

		// whiteCoin_5
		const whiteCoin_5 = this.add.image(940, 477, "whiteCoin");
		whiteCoin_5.scaleX = 0.35;
		whiteCoin_5.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_5);

		// whiteCoin_6
		const whiteCoin_6 = this.add.image(896, 535, "whiteCoin");
		whiteCoin_6.scaleX = 0.35;
		whiteCoin_6.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_6);

		// whiteCoin_7
		const whiteCoin_7 = this.add.image(923, 599, "whiteCoin");
		whiteCoin_7.scaleX = 0.35;
		whiteCoin_7.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_7);

		// whiteCoin_8
		const whiteCoin_8 = this.add.image(992, 609, "whiteCoin");
		whiteCoin_8.scaleX = 0.35;
		whiteCoin_8.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_8);

		// whiteCoin_9
		const whiteCoin_9 = this.add.image(1037, 554, "whiteCoin");
		whiteCoin_9.scaleX = 0.35;
		whiteCoin_9.scaleY = 0.35;
		this.container_whiteCoins.add(whiteCoin_9);

		// blackCoin_1
		const blackCoin_1 = this.add.image(960, 581, "blackCoin");
		blackCoin_1.scaleX = 0.35;
		blackCoin_1.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_1);

		// blackCoin_2
		const blackCoin_2 = this.add.image(1005, 532, "blackCoin");
		blackCoin_2.scaleX = 0.35;
		blackCoin_2.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_2);

		// blackCoin_3
		const blackCoin_3 = this.add.image(938, 517, "blackCoin");
		blackCoin_3.scaleX = 0.35;
		blackCoin_3.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_3);

		// blackCoin_4
		const blackCoin_4 = this.add.image(979, 468, "blackCoin");
		blackCoin_4.scaleX = 0.35;
		blackCoin_4.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_4);

		// blackCoin_5
		const blackCoin_5 = this.add.image(1028, 591, "blackCoin");
		blackCoin_5.scaleX = 0.35;
		blackCoin_5.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_5);

		// blackCoin_6
		const blackCoin_6 = this.add.image(1039, 516, "blackCoin");
		blackCoin_6.scaleX = 0.35;
		blackCoin_6.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_6);

		// blackCoin_7
		const blackCoin_7 = this.add.image(955, 618, "blackCoin");
		blackCoin_7.scaleX = 0.35;
		blackCoin_7.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_7);

		// blackCoin_8
		const blackCoin_8 = this.add.image(897, 573, "blackCoin");
		blackCoin_8.scaleX = 0.35;
		blackCoin_8.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_8);

		// blackCoin_9
		const blackCoin_9 = this.add.image(905, 498, "blackCoin");
		blackCoin_9.scaleX = 0.35;
		blackCoin_9.scaleY = 0.35;
		this.container_blackCoins.add(blackCoin_9);

		// redCoin
		queenCoin = this.add.image(967, 546, "redCoin");
		queenCoin.scaleX = 0.21;
		queenCoin.scaleY = 0.21;
		this.container_queen.add(queenCoin);


		this.hallsGroup = this.add.group();
		this.wallGroup = this.add.group();
		this.whiteCoinGroup = this.add.group();
		this.blackCoinGroup = this.add.group();
		this.speedBreakerGroup = this.add.group();

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
			coin.body.setCircle(53, 15, 15);
			this.whiteCoinGroup.add(coin);
		});

		this.container_blackCoins.list.forEach((coin) => {
			this.physics.add.existing(coin, false);
			coin.body.setCircle(53, 14, 14);
			this.blackCoinGroup.add(coin);
		});

		this.physics.add.existing(queenCoin, false);
		queenCoin.body.setCircle(93, 40, 40);

		this.container_halls.list.forEach((hall) => {
			this.physics.add.existing(hall, true);
			hall.body.setCircle(13, 15, 15);
			this.hallsGroup.add(hall);
		})

		this.setCollider();
		this.strikeCoins();
		this.setStrikerPosition();

	}

	decreaseMotion() { 
		if (coin.body.velocity.x < 0) {
			coin.body.velocity.x += 10;
		}
		if (coin.body.velocity.x > 0) {
			coin.body.velocity.x -= 10;
		}
		if (coin.body.velocity.y < 0) {
			coin.body.velocity.y += 10;
		}
		if (coin.body.velocity.y > 0) {
			coin.body.velocity.y -= 10;
		}
	}

	setCollider() {

		this.physics.add.collider(this.wallGroup, this.striker, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideWallSound, false);
			this.decreaseMotion(this.striker);
		});
		this.physics.add.collider(this.wallGroup, queenCoin, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideWallSound, false);
			this.decreaseMotion(queenCoin);
		});

		this.physics.add.collider(this.wallGroup, this.whiteCoinGroup, (wall, coin) => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideWallSound, false);
			this.decreaseMotion(coin);
		});

		this.physics.add.collider(this.wallGroup, this.blackCoinGroup, (wall, coin) => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideWallSound, false);
			this.decreaseMotion(coin);
		});

		this.physics.add.collider(this.hallsGroup, this.striker, () => {
			this.striker.setVelocity(0, 0);
			this.striker.disableInteractive();
			this.physics.pause();
			this.coinFallAnimation(this.striker);
			// this.striker.setVisible(false);
			strikerCollideWithHall = true;
			this.oSoundManager.playSound(this.oSoundManager.wrongCoinFoulsSound, false);
			if (userTurn && nUserScore > 0) {
				if (repeateUserTurn && !userQueenFouls) {
					if (nUserScore >= 2) {
						nUserScore -= 2;
					}
					else {
						nUserScore--;
					}
					const whiteCoinCharge = this.physics.add.sprite(967, 546, "whiteCoin");
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
				const whiteCoinCharge = this.physics.add.sprite(967, 546, "whiteCoin");
				whiteCoinCharge.scaleX = 0.35;
				whiteCoinCharge.scaleY = 0.35;
				whiteCoinCharge.body.setCircle(50, 15, 15);
				this.container_whiteCoins.add(whiteCoinCharge);
				this.whiteCoinGroup.add(whiteCoinCharge);
			}
			if (!userTurn && nOpponentScore > 0) {
				if (repeateOpponentTurn && !opponentQueenFouls) {
					if (nOpponentScore >= 2) {
						nOpponentScore -= 2;
					}
					else {
						nOpponentScore--;
					}
					const blackCoinCharge = this.physics.add.sprite(967, 546, "blackCoin");
					blackCoinCharge.scaleX = 0.35;
					blackCoinCharge.scaleY = 0.35;
					blackCoinCharge.body.setCircle(50, 14, 14);
					this.container_blackCoins.add(blackCoinCharge);
					this.blackCoinGroup.add(blackCoinCharge);
					repeateOpponentTurn = false;
				}
				else {
					nOpponentScore--;
				}
				this.opponentScore.setText(nOpponentScore + "/9");
				const blackCoinCharge = this.physics.add.sprite(967, 546, "blackCoin");
				blackCoinCharge.scaleX = 0.35;
				blackCoinCharge.scaleY = 0.35;
				blackCoinCharge.body.setCircle(50, 14, 14);
				this.container_blackCoins.add(blackCoinCharge);
				this.blackCoinGroup.add(blackCoinCharge);
			}
		});

		this.physics.add.collider(this.hallsGroup, this.blackCoinGroup, (hall, coin) => {
			this.coinFallAnimation(coin);
			// coin.destroy();
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
				wrongCoin = true;
				this.oSoundManager.playSound(this.oSoundManager.wrongCoinFoulsSound, false);
				if (this.container_blackCoins.list.length == 0) {
					userWin = false;
					this.checkForWinner(userWin);
				}
			}
		});

		this.physics.add.collider(this.hallsGroup, this.whiteCoinGroup, (hall, coin) => {
			this.coinFallAnimation(coin);
			// coin.destroy();
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
				wrongCoin = true;
				this.oSoundManager.playSound(this.oSoundManager.wrongCoinFoulsSound, false);
				if (this.container_whiteCoins.list.length == 0) {
					userWin = true;
					this.checkForWinner(userWin);
				}
			}
		});

		this.physics.add.collider(this.hallsGroup, queenCoin, (hall, coin) => {
			this.coinFallAnimation(queenCoin, 0.21);
			if (!userTurn) {
				if (this.container_blackCoins.list.length == 1) {
					queenCoin.setVisible(false);
					this.oSoundManager.playSound(this.oSoundManager.rightCoinFoulsSound, false);
					opponentQueenFouls = true;
					repeateOpponentTurn = true;
					setTimeout(() => {
						queenCoin.setPosition(967, 546).setVisible(true).setScale(0.21, 0.21);
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
						queenCoin.setPosition(967, 546).setVisible(true).setScale(0.21, 0.21);
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
			this.striker.setBounce(0.5, 0.5);
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});

		this.physics.add.collider(this.blackCoinGroup, this.striker, () => {
			this.striker.setBounce(0.5, 0.5);
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
			this.striker.setBounce(0.5, 0.5);
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});

		this.physics.add.collider(this.whiteCoinGroup, this.whiteCoinGroup, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});

		this.physics.add.collider(this.blackCoinGroup, this.blackCoinGroup, () => {
			this.oSoundManager.playSound(this.oSoundManager.coinCollideSound, false);
		});
	}

	coinFallAnimation(coin) {
		coin.body.setVelocity(0, 0);
		coin.body.setBounce(0);
		this.tweens.add({
			targets: coin,
			scaleX: 0,
			scaleY: 0,
			duration: 50,
			onComplete: () => {
				if (coin == this.striker || coin == queenCoin) {
					this.striker.setVisible(false);
				}
				else {
					coin.destroy();
				}
			}
		})
	}

	setStrikerPosition() {
		this.slider.setInteractive();
		this.input.setDraggable(this.slider);
		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			if (gameObject.name == "slider") {
				dragX = Math.min(Math.max(784, dragX), 1152);

				gameObject.x = dragX;
				this.striker.x = gameObject.x;
			}
		});

		this.input.on('dragend', (pointer, gameObject) => {
			this.findOverlappingCoins();
			this.strikeCoins();
		});
	}

	findOverlappingCoins() {
		this.container_blackCoins.list.forEach((coin) => {
			this.chackOverlapping(coin);
		});
		this.container_whiteCoins.list.forEach((coin) => {
			this.chackOverlapping(coin);
		});
		this.container_queen.list.forEach((coin) => {
			this.chackOverlapping(coin);
		});
	}

	chackOverlapping(coin) {
		if (coin.x >= this.striker.x - 45 && coin.x <= this.striker.x + 45) {
			if (coin.y >= this.striker.y - 45 && coin.y <= this.striker.y + 45) {

				if (this.striker.x > 740 && this.striker.x < 1152) {
					this.striker.x = coin.x + 50;
				}
				if (this.striker.x >= 1130) {
					this.striker.x = coin.x - 50;
				}
			}
		}
	}

	strikeCoins() {
		this.striker.setInteractive();
		this.input.setDraggable(this.striker);
		this.findOverlappingCoins();

		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			this.findOverlappingCoins();
			if (gameObject.name == "striker") {

				this.arrow.setPosition(this.striker.x, this.striker.y);
				this.arrow.setVisible(true);
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

				this.striker.disableInteractive();
				this.slider.disableInteractive();

				nVelocityX = Math.cos(this.striker.rotation) * nStretchDistance * 2.5;
				nVelocityY = Math.sin(this.striker.rotation) * nStretchDistance * 2.5;

				if (nStretchDistance > 125) {
					if (userTurn) {
						gameObject.setVelocity(-nVelocityX, -nVelocityY);
					}
					else {
						gameObject.setVelocity(-nVelocityX, nVelocityY);
					}
					gameObject.body.setBounce(1, 1);
					this.container_whiteCoins.list.forEach((coin) => {
						coin.body.setBounce(0.85, 0.85);
					});
					this.container_blackCoins.list.forEach((coin) => {
						coin.body.setBounce(0.85, 0.85);
					});
					queenCoin.body.setBounce(0.85, 0.85);

					strikerCollideWithHall = false;
					repeateUserTurn = false;
					repeateOpponentTurn = false;
					this.physics.resume();
					this.striker.disableInteractive();
					this.changeTurn();
				}
				else {
					this.slider.setInteractive();
					this.input.setDraggable(this.slider);
					this.striker.setInteractive();
					this.input.setDraggable(this.striker);
				}
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
		}, 500);

		if (wrongCoin) {
			repeateUserTurn = false;
			repeateOpponentTurn = false;
			wrongCoin = false;
		}
		if (!repeateUserTurn && !repeateOpponentTurn) {
			userTurn = !userTurn;
		}

		if (userTurn) {
			repeateUserTurn = false;
			setTimeout(() => {
				this.striker.setPosition(784, 773).setScale(1, 1);
				this.slider.setPosition(768, 989);
				this.slider.setInteractive();
				this.striker.setInteractive();
				this.findOverlappingCoins();
			}, 300);
		}
		else {
			repeateOpponentTurn = false;
			setTimeout(() => {
				this.striker.setPosition(784, 318).setScale(1, 1);
				this.slider.setPosition(768, 86);
				this.slider.setInteractive();
				this.striker.setInteractive();
				this.findOverlappingCoins();
			}, 300);
		}
		this.physics.pause();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
