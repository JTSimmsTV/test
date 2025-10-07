player.onChat(".kill", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    mobs.kill(
    mobs.target(LOCAL_PLAYER)
    )
})
player.onDied(function () {
    player.say("killed themself like an idiot")
})
player.onChat("jump", function () {
	
})
player.onChat(".invisibletalk", function (num1) {
    player.say("")
})
blocks.onBlockPlaced(TNT, function () {
    blocks.replace(
    AIR,
    TNT,
    pos(1, 1, 1),
    pos(9999, 9999, 9999)
    )
    player.say("is griefing")
})
player.onChat(".spawn", function () {
    player.teleport(pos(0, 0, 0))
})
