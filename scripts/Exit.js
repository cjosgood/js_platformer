class Exit extends Block {

    constructor(x, y) {
        super(x, y, "assets/exit.png");
    }

    isTouching(player) {
        return super.isTouching(player, 0.25) && super.isTouchingY(player, 0.25);
    }

}