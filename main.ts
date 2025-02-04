let mySprite = sprites.create(assets.image`Stand alone stickman`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`Stickman handshake`,
500,
true
)
animation.runImageAnimation(
mySprite,
assets.animation`Walking Stickman`,
500,
false
)
