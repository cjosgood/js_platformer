class SpikeHazard extends Block {

    constructor(x, y) {
        super( x,y, "assets/spike.png");
    }

    isTouching(player) {
        return super.isTouchingX(player, 0.75) && this.isTouchingY(player);
    }

    isTouchingY(player) {
        const topHalf = this.getY() + this.getHeight()/2 <= (player.getY() + player.getHeight());
        const bottomHalf = player.getY() <= (this.getY() + this.getHeight());
        return topHalf && bottomHalf;
    }
}