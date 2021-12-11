controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        game.over(true)
    } else {
        info.changeLifeBy(-1)
        info.startCountdown(10)
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
mySprite = sprites.create(assets.image`Hero`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`Bouncer`, SpriteKind.Food)
mySprite2.setVelocity(150, 150)
mySprite2.setBounceOnWall(true)
info.setLife(3)
