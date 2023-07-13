// You can write more code here

/* START OF COMPILED CODE */

class Loading extends Phaser.Scene {

	constructor() {
		super("Loading");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// banner_img
		const banner_img = this.add.image(960, 540, "banner-img");
		banner_img.scaleX = 4;
		banner_img.scaleY = 4;

		// logo
		const logo = this.add.image(474, 436, "logo");
		logo.scaleX = 2;
		logo.scaleY = 2;

		// start_button
		const start_button = this.add.image(960, 999, "start-button");

		this.start_button = start_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	start_button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.oSoundManager = new SoundManager(this);

		this.input.on("pointerdown", ()=>{
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);			
		},this);

		this.start_button.setInteractive().on("pointerdown", () => {
			this.scene.stop("Loading");
			this.scene.start("Level");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
