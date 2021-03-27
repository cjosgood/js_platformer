class Lava extends GameObject {

    static SIZE = 32;

    constructor(x, y, image="assets/lava.png") {
        super( x*Lava.SIZE, y*Lava.SIZE, Lava.SIZE, Lava.SIZE, image);
    }
}