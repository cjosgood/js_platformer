class Scene {

    #background;
    #blocks;
    #player;
    #enemy;
    #exit;

    constructor(map) {
        this.#blocks = [];
        this.#enemy = [];
        this.setScene(map);
    }

    setScene(worldData) {
        const cols = worldData[0].length;
        const rows = worldData.length;
        this.setBackground(rows, cols);

        for( let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const tile = worldData[y][x];
                this.setTile(x, y, tile);
            }
        }
    }

    setBackground(rows, cols, img="assets/background1.jpg", tileSize=32) {
        const width = cols * tileSize;
        const height = rows * tileSize;
        this.#background = new GameObject(0, 0, width, height, img);
    }

    draw() {
        this.#background.draw();
        this.#blocks.forEach((block) => block.draw());
        this.#enemy.forEach((enemy) => enemy.draw());
        this.#exit.draw();
        this.#player.draw();
    }

    setTile(x, y, tile) {
        switch(tile) {
            case "#" : this.#blocks.push(new Block(x,y)); break;
            case "P" : this.#player = new Player(x,y); break;
            case "+" : this.#enemy.push(new LavaHazard(x,y)); break;
            case "!" : this.#exit = new Exit(x, y); break;
            case "O" : this.#enemy.push(new SpikeHazard(x,y)); break;
        }
    }

    update() {
        this.#player.update(this.#blocks);
    }

    getPlayer() {
        return this.#player;
    }

    hasCollisions() {
        return this.#enemy.some( enemy => enemy.isTouching(this.#player));
    }

    getCollisions() {
        return this.#enemy.filter( enemy => enemy.isTouching(this.#player));
    }

    getExit() {
        return this.#exit;
    }
}