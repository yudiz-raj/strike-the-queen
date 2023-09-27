
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// carrom
		const carrom = this.add.image(960, 540, "carrom");
		carrom.scaleX = 0.9;
		carrom.scaleY = 0.9;

		// front
		this.add.image(960, 540, "front");

		// logoPrefab
		const logoPrefab = new LogoPrefab(this, 960, 391);
		this.add.existing(logoPrefab);

		// play_button
		const play_button = this.add.image(960, 790, "play_button");

		this.logoPrefab = logoPrefab;
		this.play_button = play_button;

		this.events.emit("scene-awake");
	}

	/** @type {LogoPrefab} */
	logoPrefab;
	/** @type {Phaser.GameObjects.Image} */
	play_button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.logoAnimation();
		this.play_button.setInteractive();
		this.play_button.on('pointerover', () => {
			this.input.setDefaultCursor('pointer');
			this.play_button.setScale(1.1);
		});
		this.play_button.on('pointerout', () => {
			this.input.setDefaultCursor('default');
			this.play_button.setScale(1);
		});
		this.play_button.on("pointerdown", () => {
			this.input.setDefaultCursor('default');
			this.play_button.setScale(1);
			this.tweens.add({
				targets: this.play_button,
				scaleX: 0.8,
				scaleY: 0.8,
				yoyo: true,
				duration: 100,
				onComplete: () => {
					this.scene.stop("Home");
					this.scene.start("Level");
				}
			})
		})
	}

	logoAnimation() {
		this.tweens.add({
			targets: this.logoPrefab.blackCoin,
			x: 349,
			y: -40,
			duration: 1000,
			delay: 400,
			yoyo: true,
			repeat: -1,
		});
		this.tweens.add({
			targets: this.logoPrefab.redCoin,
			x: 439,
			y: -80,
			duration: 1000,
			delay: 800,
			yoyo: true,
			repeat: -1,
		});
		this.tweens.add({
			targets: this.logoPrefab.whiteCoin,
			x: 457,
			y: 14,
			duration: 1000,
			delay: 1200,
			yoyo: true,
			repeat: -1,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here