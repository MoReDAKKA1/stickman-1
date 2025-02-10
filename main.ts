controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("Stickman handshake")
    animation.runImageAnimation(
    mySprite,
    assets.animation`Stickman handshake`,
    500,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("jumping jack")
    animation.runImageAnimation(
    mySprite,
    assets.animation`jumping jack`,
    300,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("throwing ball")
    animation.runImageAnimation(
    mySprite,
    assets.animation`throwing ball`,
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("Walking Stickman")
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walking Stickman`,
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("picking up ball")
    animation.runImageAnimation(
    mySprite,
    assets.animation`picking up ball`,
    500,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("flinch")
    animation.runImageAnimation(
    mySprite,
    assets.animation`flinch`,
    500,
    false
    )
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`Stand alone stickman`, SpriteKind.Player)
