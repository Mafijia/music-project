controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mouse,
    [img`
        ................................
        ...fffff................fffff...
        ..fbbbbbf....ffffff....fbbbbbf..
        ..fbbbbbf.fffbbbbbbfff.fbbbbbf..
        .fbbbbbbfffbbbbbbbbbbfffbbbbbbf.
        .fbbbbbbfbbbbbbbbbbbbbbfbbbbbbf.
        .fbbbbbfbbbbbbbbbbbbbbbbfbbbbbf.
        .fbbbbbfbbbbbbbbbbbbbbbbfbbbbbf.
        .ffbbbbfbbbbbbbbbbbbbbbbfbbbbff.
        ..ffbbbfbbbbbbbbbbbbbbbbfbbbff..
        ...fffffbbbbbbbbbbbbbbbbfffff...
        ....fffffbbbbbbbbbbbbbbfffff....
        ........fbbbbbbbbbbbbbbf........
        .......fcbbbbbbbbbbbbbbcf.......
        .......fcbbbbbbbbbbbbbbcf.......
        .......ffcbbbbbbbbbbbbcff.......
        ........ffccbbbbbbbbccff........
        ..fff....fffccccccccfff.........
        ....ff....ffffffffffff..........
        .....f.....fbbbbbbbbf...........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....ff....fbbbbbbbbf...........
        ......f..ffbbbbbbbbbbff.........
        ......fffbbbbbbbbbbbbbbf........
        ........fbbbbbbbbbbbbbbf........
        .........fbbfbbbbbbfbbf.........
        .........fbfffbbbbfbbf..........
        .........ff...ffffccbbff........
        ..................ffccccf.......
        ....................fffff.......
        `,img`
        ................................
        ...fffff................fffff...
        ..fbbbbbf....ffffff....fbbbbbf..
        ..fbbbbbf.fffbbbbbbfff.fbbbbbf..
        .fbbbbbbfffbbbbbbbbbbfffbbbbbbf.
        .fbbbbbbfbbbbbbbbbbbbbbfbbbbbbf.
        .fbbbbbfbbbbbbbbbbbbbbbbfbbbbbf.
        .fbbbbbfbbbbbbbbbbbbbbbbfbbbbbf.
        .ffbbbbfbbbbbbbbbbbbbbbbfbbbbff.
        ..ffbbbfbbbbbbbbbbbbbbbbfbbbff..
        ...fffffbbbbbbbbbbbbbbbbfffff...
        ....fffffbbbbbbbbbbbbbbfffff....
        ........fbbbbbbbbbbbbbbf........
        .......fcbbbbbbbbbbbbbbcf.......
        .......fcbbbbbbbbbbbbbbcf.......
        .......ffcbbbbbbbbbbbbcff.......
        ........ffccbbbbbbbbccff........
        ..fff....fffccccccccfff.........
        ....ff....ffffffffffff..........
        .....f.....fbbbbbbbbf...........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....ff....fbbbbbbbbf...........
        ......f..ffbbbbbbbbbbff.........
        ......fffbbbbbbbbbbbbbbf........
        ........fbbbbbbbbbbbbbbf........
        .........fbbfbbbbbbfbbf.........
        .........fffffbbbbfbbf..........
        ..........fff.ffffccbbff........
        ..................ffccccf.......
        ....................fffff.......
        `,img`
        ................................
        ...fffff................fffff...
        ..fbbbbbf....ffffff....fbbbbbf..
        ..fbbbbbf.fffbbbbbbfff.fbbbbbf..
        .fbbbbbbfffbbbbbbbbbbfffbbbbbbf.
        .fbbbbbbfbbbbbbbbbbbbbbfbbbbbbf.
        .fbbbbbfbbbbbbbbbbbbbbbbfbbbbbf.
        .fbbbbbfbbbbbbbbbbbbbbbbfbbbbbf.
        .ffbbbbfbbbbbbbbbbbbbbbbfbbbbff.
        ..ffbbbfbbbbbbbbbbbbbbbbfbbbff..
        ...fffffbbbbbbbbbbbbbbbbfffff...
        ....fffffbbbbbbbbbbbbbbfffff....
        ........fbbbbbbbbbbbbbbf........
        .......fcbbbbbbbbbbbbbbcf.......
        .......fcbbbbbbbbbbbbbbcf.......
        .......ffcbbbbbbbbbbbbcff.......
        ........ffccbbbbbbbbccff........
        ..fff....fffccccccccfff.........
        ....ff....ffffffffffff..........
        .....f.....fbbbbbbbbf...........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....ff....fbbbbbbbbf...........
        ......f..ffbbbbbbbbbbff.........
        ......fffbbbbbbbbbbbbbbf........
        ........fbbbbbbbbbbbbbbf........
        .........fbbfbbbbbbfbbf.........
        ..........fbbfbbbbfbbf..........
        ........ffbbccffffbbbbf.........
        .......fccccff....ffff..........
        .......fffff....................
        `,img`
        ................................
        ...fffff................fffff...
        ..fbbbbbf....ffffff....fbbbbbf..
        ..fbbbbbf.fffbbbbbbfff.fbbbbbf..
        .fbbbbbbfffbbbbbbbbbbfffbbbbbbf.
        .fbbbbbbfbbbbbbbbbbbbbbfbbbbbbf.
        .fbbbbbfbbbbbbbbbbbbbbbbfbbbbbf.
        .fbbbbbfbbbbbbbbbbbbbbbbfbbbbbf.
        .ffbbbbfbbbbbbbbbbbbbbbbfbbbbff.
        ..ffbbbfbbbbbbbbbbbbbbbbfbbbff..
        ...fffffbbbbbbbbbbbbbbbbfffff...
        ....fffffbbbbbbbbbbbbbbfffff....
        ........fbbbbbbbbbbbbbbf........
        .......fcbbbbbbbbbbbbbbcf.......
        .......fcbbbbbbbbbbbbbbcf.......
        .......ffcbbbbbbbbbbbbcff.......
        ........ffccbbbbbbbbccff........
        ..fff....fffccccccccfff.........
        ....ff....ffffffffffff..........
        .....f.....fbbbbbbbbf...........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....ff....fbbbbbbbbf...........
        ......f..ffbbbbbbbbbbff.........
        ......fffbbbbbbbbbbbbbbf........
        ........fbbbbbbbbbbbbbbf........
        .........fbbfbbbbbfbbbf.........
        ..........fbbfbbbfffbf..........
        ........ffbbccffff.fbf..........
        .......fccccff.....ff...........
        .......fffff....................
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    Mouse.setPosition(0, 0)
    ranodom_ransacekr_of_akdjamdklnm_npc_aka_ball_sack.setPosition(160, 120)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.cameraFollowSprite(Mouse)
    sprites.destroy(ranodom_ransacekr_of_akdjamdklnm_npc_aka_ball_sack)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Mouse,
    [img`
        ................................
        ...fffff................fffff...
        ..fbbbbbf....ffffff....fbbbbbf..
        ..fb333bf.fffbbbbbbfff.fb333bf..
        .fb3333bfffbbbbbbbbbbfffb3333bf.
        .fb333bbfbbbbbbbbbbbbbbfbb333bf.
        .fb333bfbbffbbbbbbbbffbbfb333bf.
        .fb333bfbbbbbbbbbbbbbbbbfb333bf.
        .ffb33bfbbb111bbbb111bbbfb33bff.
        ..ffbbbfbbb111bbbb111bbbfbbbff..
        ...fffffbbb1ffbbbbff1bbbfffff...
        ....fffffbb1ffbbbbff1bbfffff....
        ........fbbbbbb33bbbbbbf........
        .......fcbfffbbbbbbfffbcf.......
        .......fcbbbbbfbbfbbbbbcf.......
        .......ffcbffbbffbbffbcff.......
        ........ffccbbbbbbbbccff........
        .........fffcccccccccff.........
        ..........ffffffffffff.....fff..
        ...........fbbbbbbbbf.....ff....
        ..........fbbbbddbbbbf....f.....
        ..........fbfbddddbfbf....f.....
        ..........fbbfddddfbbf....f.....
        ..........fbbfddddfbbf....f.....
        ...........fbbfddfbbf....ff.....
        .........ffbfbfddfbfbff..f......
        ........fbbbbffddffbbbbfff......
        ........fbbbbbddddbbbbbf........
        .........fbbbbbddbbfbbf.........
        ..........fbbbbbbbfbbf..........
        ........ffbbccffffccbbff........
        .......fccccff....ffccccf.......
        .......fffff........fffff.......
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mouse,
    [img`
        ......................fffff.....
        .....................fbbbbbf....
        ....................fbb333bf....
        ....................fb33333bf...
        ...........ffffff...fb33333bf...
        ........fffbbbbbbffffb33333bf...
        .......ffbbbbbbbbbbffff333bbf...
        .......fbbbbbbbbbbbbbbfb3bff....
        .......fbbbbbbbbbbbbbbbfbfff....
        ......ffbbb111bbbbbbbbbfff......
        ......fbbbb111bbbbbbbbbf........
        ......fbbbbff1bbbbbbbbbf........
        ......fbbbbff1bbbbbbbbbf........
        ......fbbbbbbbbbbbbbbbf.........
        ......fbb33bbbbbbbbbbbf.........
        ......fbbbbbffffbbbbbbbf........
        ......fbbfbbbbbbbbbbbbbc........
        ......fffbbbfffbbbbbbcff........
        .......fccbbbbbbbbbccff.........
        .......fffcccccccccfff..........
        ..........fffffffffff...fff.....
        ..........fbbbbbbbbf...ff.......
        .........fbbbbbbbbbbf..f........
        .........fddbbbbbbbbf..f........
        .........fddbfbbbbbbf..f........
        .........fddfbbbbbbbf..f........
        .........fddfbcbbbbbf..f........
        .........fdfbcfbbbbbf.ff........
        ..........ffcfbbbbbbfff.........
        ........ffbffbbbbbbbf...........
        .......fbbbbbbbbbbbbf...........
        .......fbbbbbbbbbbccf...........
        ........fbbbbbbbbcff............
        .........fbbbccccf..............
        .......ffbbccffff...............
        ......fccccff...................
        ......ffffff....................
        `,img`
        .....................bffffff....
        .....................fbbbbbbf...
        .....................fb3333bf...
        ............ffffff...fb33333bf..
        .........fffbbbbbbffffb33333bf..
        ........ffbbbbbbbbbbffff3333bf..
        ........fbbbbbbbbbbbbbbf33bff...
        ........fbbbbbbbbbbbbbbbfbfff...
        .......ffbbb111bbbbbbbbbfff.....
        .......fbbbb111bbbbbbbbbf.......
        .......fbbbbff1bbbbbbbbbf.......
        .......fbbbbff1bbbbbbbbbf.......
        .......fbbbbbbbbbbbbbbbf........
        .......fbb33bbbbbbbbbbbf........
        .......fbbbbbffffbbbbbbbf.......
        .......fbbfbbbbbbbbbbbbcf.......
        .......fffbbbfffbbbbbbcff.......
        ........fccbbbbbbbbbccff........
        ........fffcccccccccfff.........
        ...........fffffffffff...fff....
        ...........fbbbbbbbbf...ff......
        ..........fbbbbbbbbbbf..f.......
        ..........fddbbbbbbbbf..f.......
        ..........fddbfbbbbbbf..f.......
        ..........fddfbbbbbbbf..f.......
        ..........fddfbcbbbbbf..f.......
        ..........fdfbcfbbbbbf.ff.......
        ...........ffcfbbbbbbfff........
        .........ffbffbbbbbbbf..........
        ........fbbbbbbbbbbbbf..........
        ........fbbbbbbbbbbccf..........
        .........fbbbbbbbbbff...........
        ..........fbbbccccbbf...........
        ........ffbbccffffbbff..........
        .......fccccff....fbbcf.........
        .......ffffff......fbcf.........
        ....................ff..........
        `,img`
        .....................bffffff....
        .....................fbbbbbbf...
        .....................fb3333bf...
        ............ffffff...fb33333bf..
        .........fffbbbbbbffffb33333bf..
        ........ffbbbbbbbbbbffff3333bf..
        ........fbbbbbbbbbbbbbbf33bff...
        ........fbbbbbbbbbbbbbbbfbfff...
        .......ffbbb111bbbbbbbbbfff.....
        .......fbbbb111bbbbbbbbbf.......
        .......fbbbbff1bbbbbbbbbf.......
        .......fbbbbff1bbbbbbbbbf.......
        .......fbbbbbbbbbbbbbbbf........
        .......fbb33bbbbbbbbbbbf........
        .......fbbbbbffffbbbbbbbf.......
        .......fbbfbbbbbbbbbbbbbf.......
        .......fffbbbfffbbbbbbbff.......
        ........fbbbbbbbbbbbbbff........
        ........fffbbbbbbbbbfff.........
        ...........fffffffffff...fff....
        ...........fbbbbbbbbf...ff......
        ..........fbbbbbbbbbbf..f.......
        ..........fddbbbbbbbbf..f.......
        ..........fddbfbbbbbbf..f.......
        ..........fddfbbbbbbbf..f.......
        ..........fddfbbbbbbbf..f.......
        ..........fdfbbfbbbbbf.ff.......
        ...........ffbfbbbbbbfff........
        .........ffbffbbbbbbbf..........
        ........fbbbbbbbbbbbbf..........
        ........fbbbbbbbbbbbbf..........
        .........fbbbbbbbbbff...........
        ..........fbbbbbbbbbf...........
        ..........fbccffffbbff..........
        .........fbcff....fbbcf.........
        .........fbcf......fbcf.........
        .........fff........ff..........
        `,img`
        .....................bffffff....
        .....................fbbbbbbf...
        .....................fb3333bf...
        ............ffffff...fb33333bf..
        .........fffbbbbbbffffb33333bf..
        ........ffbbbbbbbbbbffff3333bf..
        ........fbbbbbbbbbbbbbbf33bff...
        ........fbbbbbbbbbbbbbbbfbfff...
        .......ffbbb111bbbbbbbbbfff.....
        .......fbbbb111bbbbbbbbbf.......
        .......fbbbbff1bbbbbbbbbf.......
        .......fbbbbff1bbbbbbbbbf.......
        .......fbbbbbbbbbbbbbbbf........
        .......fbb33bbbbbbbbbbbf........
        .......fbbbbbffffbbbbbbbf.......
        .......fbbfbbbbbbbbbbbbbf.......
        .......fffbbbfffbbbbbbbff.......
        ........fbbbbbbbbbbbbbff........
        ........fffbbbbbbbbbfff.........
        ...........fffffffffff...fff....
        ...........fbbbbbbbbf...ff......
        ..........fbbbbbbbbbbf..f.......
        ..........fddbbbbbbbbf..f.......
        ..........fddbfbbbbbbf..f.......
        ..........fddfbbbbbbbf..f.......
        ..........fddfbbbbbbbf..f.......
        ..........fdfbbfbbbbbf.ff.......
        ...........ffbfbbbbbbfff........
        .........ffbffbbbbbbbf..........
        ........fbbbbbbbbbbbbf..........
        ........fbbbbbbbbbbbbf..........
        .........fbbbbbbbbbff...........
        ..........fbbbbbbbbcf...........
        ........ffbbccffffbcf...........
        .......fccccff...ffbcf..........
        .......ffffff.....fbcf..........
        ..................fff...........
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Mouse,
    [img`
        .....fffff......................
        ....fbbbbbf.....................
        ....fb333bbf....................
        ...fb33333bf....................
        ...fb33333bf...ffffff...........
        ...fb33333bffffbbbbbbfff........
        ...fbb333ffffbbbbbbbbbbff.......
        ....ffb3bfbbbbbbbbbbbbbbf.......
        ....fffbfbbbbbbbbbbbbbbbf.......
        ......fffbbbbbbbbb111bbbff......
        ........fbbbbbbbbb111bbbbf......
        ........fbbbbbbbbb1ffbbbbf......
        ........fbbbbbbbbb1ffbbbbf......
        .........fbbbbbbbbbbbbbbbf......
        .........fbbbbbbbbbbb33bbf......
        ........fbbbbbbbffffbbbbbf......
        ........fbbbbbbbbbbbbbfbbf......
        ........ffbbbbbbbfffbbbfff......
        .........ffbbbbbbbbbbbbbf.......
        ..........fffbbbbbbbbbfff.......
        .....fff...fffffffffff..........
        .......ff...fbbbbbbbbf..........
        ........f..fbbbbbbbbbbf.........
        ........f..fbbbbbbbbddf.........
        ........f..fbbbbbbfbddf.........
        ........f..fbbbbbbbfddf.........
        ........f..fbbbbbbbfddf.........
        ........ff.fbbbbbfbbfdf.........
        .........fffbbbbbbfbff..........
        ...........fbbbbbbbffbff........
        ...........fbbbbbbbbbbbbf.......
        ...........fbbbbbbbbbbbbf.......
        ............ffbbbbbbbbbf........
        ..............fbbbbbbbf.........
        ...............ffffccbbff.......
        ...................ffccccf......
        ....................ffffff......
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Mouse,
    [img`
        ......................fffff.....
        .....................fbbbbbf....
        ....................fbb333bf....
        ....................fb33333bf...
        ...........ffffff...fb33333bf...
        ........fffbbbbbbffffb33333bf...
        .......ffbbbbbbbbbbffff333bbf...
        .......fbbbbbbbbbbbbbbfb3bff....
        .......fbbbbbbbbbbbbbbbfbfff....
        ......ffbbb111bbbbbbbbbfff......
        ......fbbbb111bbbbbbbbbf........
        ......fbbbbff1bbbbbbbbbf........
        ......fbbbbff1bbbbbbbbbf........
        ......fbbbbbbbbbbbbbbbf.........
        ......fbb33bbbbbbbbbbbf.........
        ......fbbbbbffffbbbbbbbf........
        ......fbbfbbbbbbbbbbbbbf........
        ......fffbbbfffbbbbbbbff........
        .......fbbbbbbbbbbbbbff.........
        .......fffbbbbbbbbbfff..........
        ..........fffffffffff...fff.....
        ..........fbbbbbbbbf...ff.......
        .........fbbbbbbbbbbf..f........
        .........fddbbbbbbbbf..f........
        .........fddbfbbbbbbf..f........
        .........fddfbbbbbbbf..f........
        .........fddfbbbbbbbf..f........
        .........fdfbbfbbbbbf.ff........
        ..........ffbfbbbbbbfff.........
        ........ffbffbbbbbbbf...........
        .......fbbbbbbbbbbbbf...........
        .......fbbbbbbbbbbbbf...........
        ........fbbbbbbbbbff............
        .........fbbbbbbbf..............
        .......ffbbccffff...............
        ......fccccff...................
        ......ffffff....................
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    scene.cameraFollowSprite(Mouse)
    sprites.destroy(ranodom_ransacekr_of_akdjamdklnm_npc_aka_ball_sack)
    MakeyMakey.setSimulatorKeymap(
    MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.UP
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mouse,
    [img`
        .....fffff......................
        ....fbbbbbf.....................
        ....fb333bbf....................
        ...fb33333bf....................
        ...fb33333bf...ffffff...........
        ...fb33333bffffbbbbbbfff........
        ...fbb333ffffbbbbbbbbbbff.......
        ....ffb3bfbbbbbbbbbbbbbbf.......
        ....fffbfbbbbbbbbbbbbbbbf.......
        ......fffbbbbbbbbb111bbbff......
        ........fbbbbbbbbb111bbbbf......
        ........fbbbbbbbbb1ffbbbbf......
        ........fbbbbbbbbb1ffbbbbf......
        .........fbbbbbbbbbbbbbbbf......
        .........fbbbbbbbbbbb33bbf......
        ........fbbbbbbbffffbbbbbf......
        ........fbbbbbbbbbbbbbfbbf......
        ........ffbbbbbbbfffbbbfff......
        .........ffbbbbbbbbbbbbbf.......
        ..........fffbbbbbbbbbfff.......
        .....fff...fffffffffff..........
        .......ff...fbbbbbbbbf..........
        ........f..fbbbbbbbbbbf.........
        ........f..fbbbbbbbbddf.........
        ........f..fbbbbbbfbddf.........
        ........f..fbbbbbbbfddf.........
        ........f..fbbbbbbbfddf.........
        ........ff.fbbbbbfbbfdf.........
        .........fffbbbbbbfbff..........
        ...........fbbbbbbbffbff........
        ...........fbbbbbbbbbbbbf.......
        ...........fbbbbbbbbbbbbf.......
        ............ffbbbbbbbbbf........
        ..............fbbbbbbbf.........
        ...............ffffccbbff.......
        ...................ffccccf......
        ....................ffffff......
        `,img`
        ....ffffffb.....................
        ...fbbbbbbf.....................
        ...fb3333bf.....................
        ..fb33333bf...ffffff............
        ..fb33333bffffbbbbbbfff.........
        ..fb3333ffffbbbbbbbbbbff........
        ...ffb33fbbbbbbbbbbbbbbf........
        ...fffbfbbbbbbbbbbbbbbbf........
        .....fffbbbbbbbbb111bbbff.......
        .......fbbbbbbbbb111bbbbf.......
        .......fbbbbbbbbb1ffbbbbf.......
        .......fbbbbbbbbb1ffbbbbf.......
        ........fbbbbbbbbbbbbbbbf.......
        ........fbbbbbbbbbbb33bbf.......
        .......fbbbbbbbffffbbbbbf.......
        .......fbbbbbbbbbbbbbfbbf.......
        .......ffbbbbbbbfffbbbfff.......
        ........ffbbbbbbbbbbbbbf........
        .........fffbbbbbbbbbfff........
        ....fff...fffffffffff...........
        ......ff...fbbbbbbbbf...........
        .......f..fbbbbbbbbbbf..........
        .......f..fbbbbbbbbddf..........
        .......f..fbbbbbbfbddf..........
        .......f..fbbbbbbbfddf..........
        .......f..fbbbbbbbfddf..........
        .......ff.fbbbbbfbbfdf..........
        ........fffbbbbbbfbff...........
        ..........fbbbbbbbffbff.........
        ..........fbbbbbbbbbbbbf........
        ..........fbbbbbbbbbbbbf........
        ...........ffbbbbbbbbbf.........
        ...........fbbbbbbbbbf..........
        ..........ffbbffffccbbff........
        .........fcbbf....ffccccf.......
        .........fcbf......ffffff.......
        ..........ff....................
        `,img`
        ....ffffffb.....................
        ...fbbbbbbf.....................
        ...fb3333bf.....................
        ..fb33333bf...ffffff............
        ..fb33333bffffbbbbbbfff.........
        ..fb3333ffffbbbbbbbbbbff........
        ...ffb33fbbbbbbbbbbbbbbf........
        ...fffbfbbbbbbbbbbbbbbbf........
        .....fffbbbbbbbbb111bbbff.......
        .......fbbbbbbbbb111bbbbf.......
        .......fbbbbbbbbb1ffbbbbf.......
        .......fbbbbbbbbb1ffbbbbf.......
        ........fbbbbbbbbbbbbbbbf.......
        ........fbbbbbbbbbbb33bbf.......
        .......fbbbbbbbffffbbbbbf.......
        .......fbbbbbbbbbbbbbfbbf.......
        .......ffbbbbbbbfffbbbfff.......
        ........ffbbbbbbbbbbbbbf........
        .........fffbbbbbbbbbfff........
        ....fff...fffffffffff...........
        ......ff...fbbbbbbbbf...........
        .......f..fbbbbbbbbbbf..........
        .......f..fbbbbbbbbddf..........
        .......f..fbbbbbbfbddf..........
        .......f..fbbbbbbbfddf..........
        .......f..fbbbbbbbfddf..........
        .......ff.fbbbbbfbbfdf..........
        ........fffbbbbbbfbff...........
        ..........fbbbbbbbffbff.........
        ..........fbbbbbbbbbbbbf........
        ..........fbbbbbbbbbbbbf........
        ...........ffbbbbbbbbbf.........
        ...........fbbbbbbbbbf..........
        ..........ffbbffffccbf..........
        .........fcbbf....ffcbf.........
        .........fcbf......fcbf.........
        ..........ff........fff.........
        `,img`
        ....ffffffb.....................
        ...fbbbbbbf.....................
        ...fb3333bf.....................
        ..fb33333bf...ffffff............
        ..fb33333bffffbbbbbbfff.........
        ..fb3333ffffbbbbbbbbbbff........
        ...ffb33fbbbbbbbbbbbbbbf........
        ...fffbfbbbbbbbbbbbbbbbf........
        .....fffbbbbbbbbb111bbbff.......
        .......fbbbbbbbbb111bbbbf.......
        .......fbbbbbbbbb1ffbbbbf.......
        .......fbbbbbbbbb1ffbbbbf.......
        ........fbbbbbbbbbbbbbbbf.......
        ........fbbbbbbbbbbb33bbf.......
        .......fbbbbbbbffffbbbbbf.......
        .......fbbbbbbbbbbbbbfbbf.......
        .......ffbbbbbbbfffbbbfff.......
        ........ffbbbbbbbbbbbbbf........
        .........fffbbbbbbbbbfff........
        ....fff...fffffffffff...........
        ......ff...fbbbbbbbbf...........
        .......f..fbbbbbbbbbbf..........
        .......f..fbbbbbbbbddf..........
        .......f..fbbbbbbfbddf..........
        .......f..fbbbbbbbfddf..........
        .......f..fbbbbbbbfddf..........
        .......ff.fbbbbbfbbfdf..........
        ........fffbbbbbbfbff...........
        ..........fbbbbbbbffbff.........
        ..........fbbbbbbbbbbbbf........
        ..........fbbbbbbbbbbbbf........
        ...........ffbbbbbbbbbf.........
        ...........fcbbbbbbbbf..........
        ...........fcbffffccbbff........
        ..........fcbff...ffccccf.......
        ..........fcbf.....ffffff.......
        ...........fff..................
        `],
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Mouse,
    [img`
        ................................
        ...fffff................fffff...
        ..fbbbbbf....ffffff....fbbbbbf..
        ..fbbbbbf.fffbbbbbbfff.fbbbbbf..
        .fbbbbbbfffbbbbbbbbbbfffbbbbbbf.
        .fbbbbbbfbbbbbbbbbbbbbbfbbbbbbf.
        .fbbbbbfbbbbbbbbbbbbbbbbfbbbbbf.
        .fbbbbbfbbbbbbbbbbbbbbbbfbbbbbf.
        .ffbbbbfbbbbbbbbbbbbbbbbfbbbbff.
        ..ffbbbfbbbbbbbbbbbbbbbbfbbbff..
        ...fffffbbbbbbbbbbbbbbbbfffff...
        ....fffffbbbbbbbbbbbbbbfffff....
        ........fbbbbbbbbbbbbbbf........
        .......fcbbbbbbbbbbbbbbcf.......
        .......fcbbbbbbbbbbbbbbcf.......
        .......ffcbbbbbbbbbbbbcff.......
        ........ffccbbbbbbbbccff........
        ..fff....fffccccccccfff.........
        ....ff....ffffffffffff..........
        .....f.....fbbbbbbbbf...........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....f....fbbbbbbbbbbf..........
        .....ff....fbbbbbbbbf...........
        ......f..ffbbbbbbbbbbff.........
        ......fffbbbbbbbbbbbbbbf........
        ........fbbbbbbbbbbbbbbf........
        .........fbbfbbbbbbfbbf.........
        ..........fbbfbbbbfbbf..........
        ........ffbbccffffccbbff........
        .......fccccff....ffccccf.......
        .......fffff.......ffffff.......
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mouse,
    [img`
        ................................
        ...fffff................fffff...
        ..fbbbbbf....ffffff....fbbbbbf..
        ..fb333bf.fffbbbbbbfff.fb333bf..
        .fb3333bfffbbbbbbbbbbfffb3333bf.
        .fb333bbfbbbbbbbbbbbbbbfbb333bf.
        .fb333bfbbffbbbbbbbbffbbfb333bf.
        .fb333bfbbbbbbbbbbbbbbbbfb333bf.
        .ffb33bfbbb111bbbb111bbbfb33bff.
        ..ffbbbfbbb111bbbb111bbbfbbbff..
        ...fffffbbb1ffbbbbff1bbbfffff...
        ....fffffbb1ffbbbbff1bbfffff....
        ........fbbbbbb33bbbbbbf........
        .......fcbfffbbbbbbfffbcf.......
        .......fcbbbbbfbbfbbbbbcf.......
        .......ffcbffbbffbbffbcff.......
        ........ffccbbbbbbbbccff........
        .........fffcccccccccff.........
        ..........ffffffffffff.....fff..
        ...........fbbbbbbbbf.....ff....
        ..........fbbbbddbbbbf....f.....
        ..........fbfbddddbfbf....f.....
        ..........fbbfddddfbbf....f.....
        ..........fbbfddddfbbf....f.....
        ...........fbbfddfbbf....ff.....
        .........ffbfbfddfbfbff..f......
        ........fbbbbffddffbbbbfff......
        ........fbbbbbddddbbbbbf........
        .........fbbfbbddbbfbbf.........
        .........fbfffbbbbfbbf..........
        .........ff...ffffccbbff........
        ..................ffccccf.......
        ....................fffff.......
        `,img`
        ................................
        ...fffff................fffff...
        ..fbbbbbf....ffffff....fbbbbbf..
        ..fb333bf.fffbbbbbbfff.fb333bf..
        .fb3333bfffbbbbbbbbbbfffb3333bf.
        .fb333bbfbbbbbbbbbbbbbbfbb333bf.
        .fb333bfbbffbbbbbbbbffbbfb333bf.
        .fb333bfbbbbbbbbbbbbbbbbfb333bf.
        .ffb33bfbbb111bbbb111bbbfb33bff.
        ..ffbbbfbbb111bbbb111bbbfbbbff..
        ...fffffbbb1ffbbbbff1bbbfffff...
        ....fffffbb1ffbbbbff1bbfffff....
        ........fbbbbbb33bbbbbbf........
        .......fcbfffbbbbbbfffbcf.......
        .......fcbbbbbfbbfbbbbbcf.......
        .......ffcbffbbffbbffbcff.......
        ........ffccbbbbbbbbccff........
        .........fffcccccccccff.........
        ..........ffffffffffff.....fff..
        ...........fbbbbbbbbf.....ff....
        ..........fbbbbddbbbbf....f.....
        ..........fbfbddddbfbf....f.....
        ..........fbbfddddfbbf....f.....
        ..........fbbfddddfbbf....f.....
        ...........fbbfddfbbf....ff.....
        .........ffbfbfddfbfbff..f......
        ........fbbbbffddffbbbbfff......
        ........fbbbbbddddbbbbbf........
        .........fbbfbbddbbfbbf.........
        .........fffffbbbbfbbf..........
        ..........fff.ffffccbbff........
        ..................ffccccf.......
        ....................fffff.......
        `,img`
        ................................
        ...fffff................fffff...
        ..fbbbbbf....ffffff....fbbbbbf..
        ..fb333bf.fffbbbbbbfff.fb333bf..
        .fb3333bfffbbbbbbbbbbfffb3333bf.
        .fb333bbfbbbbbbbbbbbbbbfbb333bf.
        .fb333bfbbffbbbbbbbbffbbfb333bf.
        .fb333bfbbbbbbbbbbbbbbbbfb333bf.
        .ffb33bfbbb111bbbb111bbbfb33bff.
        ..ffbbbfbbb111bbbb111bbbfbbbff..
        ...fffffbbb1ffbbbbff1bbbfffff...
        ....fffffbb1ffbbbbff1bbfffff....
        ........fbbbbbb33bbbbbbf........
        .......fcbfffbbbbbbfffbcf.......
        .......fcbbbbbfbbfbbbbbcf.......
        .......ffcbffbbffbbffbcff.......
        ........ffccbbbbbbbbccff........
        .........fffcccccccccff.........
        ..........ffffffffffff.....fff..
        ...........fbbbbbbbbf.....ff....
        ..........fbbbbddbbbbf....f.....
        ..........fbfbddddbfbf....f.....
        ..........fbbfddddfbbf....f.....
        ..........fbbfddddfbbf....f.....
        ...........fbbfddfbbf....ff.....
        .........ffbfbfddfbfbff..f......
        ........fbbbbffddffbbbbfff......
        ........fbbbbbddddbbbbbf........
        .........fbbfbbddbbfbbf.........
        ..........fbbfbbbbfbbf..........
        ........ffbbccffffbbbbf.........
        .......fccccff....ffff..........
        .......fffff....................
        `,img`
        ................................
        ...fffff................fffff...
        ..fbbbbbf....ffffff....fbbbbbf..
        ..fb333bf.fffbbbbbbfff.fb333bf..
        .fb3333bfffbbbbbbbbbbfffb3333bf.
        .fb333bbfbbbbbbbbbbbbbbfbb333bf.
        .fb333bfbbffbbbbbbbbffbbfb333bf.
        .fb333bfbbbbbbbbbbbbbbbbfb333bf.
        .ffb33bfbbb111bbbb111bbbfb33bff.
        ..ffbbbfbbb111bbbb111bbbfbbbff..
        ...fffffbbb1ffbbbbff1bbbfffff...
        ....fffffbb1ffbbbbff1bbfffff....
        ........fbbbbbb33bbbbbbf........
        .......fcbfffbbbbbbfffbcf.......
        .......fcbbbbbfbbfbbbbbcf.......
        .......ffcbffbbffbbffbcff.......
        ........ffccbbbbbbbbccff........
        .........fffcccccccccff.........
        ..........ffffffffffff.....fff..
        ...........fbbbbbbbbf.....ff....
        ..........fbbbbddbbbbf....f.....
        ..........fbfbddddbfbf....f.....
        ..........fbbfddddfbbf....f.....
        ..........fbbfddddfbbf....f.....
        ...........fbbfddfbbf....ff.....
        .........ffbfbfddfbfbff..f......
        ........fbbbbffddffbbbbfff......
        ........fbbbbbdddbbbbbbf........
        .........fbbfbbddbfbbbf.........
        ..........fbbfbbbfffbf..........
        ........ffbbccffff.fbf..........
        .......fccccff.....ff...........
        .......fffff....................
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("Hello Adventure Go down to the Village to learn more")
    pause(5000)
})
let ranodom_ransacekr_of_akdjamdklnm_npc_aka_ball_sack: Sprite = null
let Mouse: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
Mouse = sprites.create(img`
    ................................
    ...fffff................fffff...
    ..fbbbbbf....ffffff....fbbbbbf..
    ..fb333bf.fffbbbbbbfff.fb333bf..
    .fb3333bfffbbbbbbbbbbfffb3333bf.
    .fb333bbfbbbbbbbbbbbbbbfbb333bf.
    .fb333bfbbffbbbbbbbbffbbfb333bf.
    .fb333bfbbbbbbbbbbbbbbbbfb333bf.
    .ffb33bfbbb111bbbb111bbbfb33bff.
    ..ffbbbfbbb111bbbb111bbbfbbbff..
    ...fffffbbb1ffbbbbff1bbbfffff...
    ....fffffbb1ffbbbbff1bbfffff....
    ........fbbbbbb33bbbbbbf........
    .......fcbfffbbbbbbfffbcf.......
    .......fcbbbbbfbbfbbbbbcf.......
    .......ffcbffbbffbbffbcff.......
    ........ffccbbbbbbbbccff........
    .........fffccccccccfff.........
    ..........ffffffffffff.....fff..
    ...........fbbbbbbbbf.....ff....
    ..........fbbbbddbbbbf....f.....
    ..........fbfbddddbfbf....f.....
    ..........fbbfddddfbbf....f.....
    ..........fbbfddddfbbf....f.....
    ...........fbbfddfbbf....ff.....
    .........ffbfbfddfbfbff..f......
    ........fbbbbffddffbbbbfff......
    ........fbbbbbddddbbbbbf........
    .........fbbfbbddbbfbbf.........
    ..........fbbfbbbbfbbf..........
    ........ffbbccffffccbbff........
    .......fccccff....ffccccf.......
    .......fffff........fffff.......
    `, SpriteKind.Player)
ranodom_ransacekr_of_akdjamdklnm_npc_aka_ball_sack = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    . . . c d b e e d d c d d d d c 
    . . . . c f e e e d d c c c c c 
    . . . . . f f e e e d d d d f . 
    . . . . f e e e e f f f f f . . 
    f f . f e e e e e e f f . . . . 
    f e . f e e f e e f e e f . . . 
    f e . f e e e f e e f e e f . . 
    f e f f e f b b f b d f d b f . 
    f f f f e b d d f d d f d d f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(Mouse, 100, 100)
scene.cameraFollowSprite(Mouse)
Mouse.setPosition(24, 22)
ranodom_ransacekr_of_akdjamdklnm_npc_aka_ball_sack.setPosition(160, 120)
