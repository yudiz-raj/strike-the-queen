
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progress
		const progress = this.add.text(960, 819, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.visible = false;
		progress.text = "0%";
		progress.setStyle({ "fontSize": "54px" });

		// carrom
		const carrom = this.add.image(960, 540, "carrom");
		carrom.scaleX = 0.9;
		carrom.scaleY = 0.9;
		carrom.tintTopLeft = 11974326;
		carrom.tintTopRight = 11974326;
		carrom.tintBottomLeft = 11974326;
		carrom.tintBottomRight = 11974326;

		// loading_bar
		const loading_bar = this.add.image(960, 1000, "loading_bar");

		// innerBar
		const innerBar = this.add.image(705, 1000, "loading");
		innerBar.setOrigin(0, 0.5);
		innerBar.visible = false;

		// logoPrefab
		const logoPrefab = new LogoPrefab(this, 960, 391);
		this.add.existing(logoPrefab);

		// text_1
		const text_1 = this.add.text(724, 932, "", {});
		text_1.text = "Loading...";
		text_1.setStyle({ "fontFamily": "Montserrat", "fontSize": "42px" });

		// txt_progress
		const txt_progress = this.add.text(936, 932, "", {});
		txt_progress.setStyle({ "fontFamily": "Montserrat", "fontSize": "42px" });

		// progress (components)
		new PreloadText(progress);

		this.loading_bar = loading_bar;
		this.innerBar = innerBar;
		this.logoPrefab = logoPrefab;
		this.txt_progress = txt_progress;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	loading_bar;
	/** @type {Phaser.GameObjects.Image} */
	innerBar;
	/** @type {LogoPrefab} */
	logoPrefab;
	/** @type {Phaser.GameObjects.Text} */
	txt_progress;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();
		this.logoAnimation();
		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;
		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.innerBar.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);
			this.txt_progress.setText((currentProgress * 100).toFixed(0) + '%');
			currentInterval++;
			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	logoAnimation() {
		this.tweens.add({
			targets: this.logoPrefab.blackCoin,
			x: 349,
			y: -40,
			duration: 500,
			delay: 200,
		});
		this.tweens.add({
			targets: this.logoPrefab.redCoin,
			x: 439,
			y: -80,
			duration: 500,
			delay: 400,
		});
		this.tweens.add({
			targets: this.logoPrefab.whiteCoin,
			x: 457,
			y: 14,
			duration: 500,
			delay: 600,
		});
}

	update() {
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			this.scene.stop("Preload");
			this.scene.start("Level");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
