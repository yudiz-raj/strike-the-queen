
// You can write more code here

/* START OF COMPILED CODE */

class LogoPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -143);

		// redCoin
		const redCoin = scene.add.image(385, 68, "redCoin");
		redCoin.angle = 20;
		this.add(redCoin);

		// blackCoin
		const blackCoin = scene.add.image(349, 36, "blackCoin");
		blackCoin.scaleX = 1.2;
		blackCoin.scaleY = 1.2;
		this.add(blackCoin);

		// whiteCoin
		const whiteCoin = scene.add.image(411, 60, "whiteCoin");
		whiteCoin.scaleX = 1.2;
		whiteCoin.scaleY = 1.2;
		whiteCoin.angle = 45;
		this.add(whiteCoin);

		// logo
		const logo = scene.add.image(0, 143, "logo");
		this.add(logo);

		this.redCoin = redCoin;
		this.blackCoin = blackCoin;
		this.whiteCoin = whiteCoin;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	redCoin;
	/** @type {Phaser.GameObjects.Image} */
	blackCoin;
	/** @type {Phaser.GameObjects.Image} */
	whiteCoin;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
