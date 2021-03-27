class World {
    #levels;

    constructor() {
        this.#levels = world.map(level => (level.split('\n')).map(row => row.split("")));
    }

    getLevel(level) {
        return this.#levels[level];
    }

    getLength() {
        return this.#levels.length;
    }
}