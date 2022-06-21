import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import platformSmallTall from '../img/platformSmallTall.png'
import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'
import javascript  from '../img/javascript.png'
import ruby  from '../img/ruby.png'
import sign  from '../img/sign.png'
import direction  from '../img/direction.png'
import movement  from '../img/movement.png'
import react  from '../img/react.png'
import rails  from '../img/rails.png'
import html  from '../img/html.png'
import css  from '../img/css.png'
import tailwind  from '../img/tailwind.png'
import skills from '../img/skills.gif'
import redux from '../img/redux.png'
import signs from '../img/signs.png'


const canvas = document.querySelector("canvas")

const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0.5

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 66
        this.height = 150

        this.image = createImage(spriteStandRight)
        this.frames = 0
        this.sprites = {
          stand: {
            right: createImage(spriteStandRight),
            left: createImage(spriteStandLeft),
            cropWidth: 177,
            width: 66
          },
          run: {
            right: createImage(spriteRunRight),
            left: createImage(spriteRunLeft),
            cropWidth: 341,
            width: 127.875
          }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 177
    }
    
    draw() {
      c.drawImage(
        this.currentSprite,
        this.currentCropWidth * this.frames,
        0,
        this.currentCropWidth ,
        400, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
      
    }
    update() {
        this.frames++
        if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0
        else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    } 
}

class Platform {
    constructor({ x, y, image }) {
        this.position = {
             x,
             y
        }
    this.image = image
    this.width = image.width
    this.height = image.height
    
    }
    draw() {
        c.drawImage(
          this.image, 
          this.position.x, 
          this.position.y)
        
    }
}

class ResumeObject {
  constructor({ x, y, image }) {
      this.position = {
           x,
           y
      }
  this.image = image
  this.width = image.width
  this.height = image.height
  
  }
  draw() {
      c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y)
      
  }
}

function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image
}

const platformImage = createImage(platform)

const player = new Player()
const platforms = [
  new Platform({x: 0, y: 850, image: platformImage}),
  new Platform({x: 500, y: 850, image: platformImage}),
  // new Platform({x: 550, y: 500, image: platformImage}),
  // new Platform({x: 1200, y: 600, image: platformImage}), 
  new Platform({x: 1000, y: 850, image: platformImage}), 
  new Platform({x: 1500, y: 850, image: platformImage}), 
  new Platform({x: 2000, y: 850, image: platformImage}),
  new Platform({x: 2500, y: 850, image: platformImage}),
  new Platform({x: 3000, y: 850, image: platformImage}),
  new Platform({x: 3500, y: 850, image: platformImage}),
  new Platform({x: 4000, y: 850, image: platformImage}),
  new Platform({x: 4500, y: 850, image: platformImage}),
  new Platform({x: 5000, y: 850, image: platformImage}),
  new Platform({x: 5500, y: 850, image: platformImage}),
  new Platform({x: 6000, y: 850, image: platformImage}),
  new Platform({x: 6500, y: 850, image: platformImage}),
  new Platform({x: 7000, y: 850, image: platformImage}),
  new Platform({x: 7500, y: 850, image: platformImage}),
  new Platform({x: 8000, y: 850, image: platformImage}),
  new Platform({x: 8500, y: 850, image: platformImage}),
  new Platform({x: 9000, y: 850, image: platformImage}),
  new Platform({x: 9500, y: 850, image: platformImage}),
  new Platform({x: 10000, y: 850, image: platformImage}),
  new Platform({x: 10500, y: 850, image: platformImage}),
  new Platform({x: 11000, y: 850, image: platformImage}),
  new Platform({x: 11500, y: 850, image: platformImage}),
  new Platform({x: 2000, y: 600, image: platformImage}),
  new Platform({x: 2700, y: 400, image: platformImage}),
  new Platform({x: 3300, y: 200, image: platformImage}),
  new Platform({x: 3800, y: 400, image: platformImage}),
]

const resumeObjects = [ 
  // new ResumeObject({x: 0, y: 150, image: createImage(background)}),
  // new ResumeObject({x: 0, y: -1, image: createImage(background)}),
  new ResumeObject({x: 0, y: 300, image: createImage(hills)}),
  new ResumeObject({x: 1100, y: 600, image: createImage(javascript)}),
  new ResumeObject({x: 850, y: 600, image: createImage(ruby)}),
  new ResumeObject({x: 510, y: 600, image: createImage(sign)}),
  new ResumeObject({x: 100, y: 200, image: createImage(direction)}),
  new ResumeObject({x: 75, y: 0, image: createImage(movement)}),
  new ResumeObject({x: 1300, y: 600, image: createImage(react)}),
  new ResumeObject({x: 1530, y: 600, image: createImage(rails)}),
  new ResumeObject({x: 850, y: 300, image: createImage(html)}),
  new ResumeObject({x: 1100, y: 300, image: createImage(css)}),
  new ResumeObject({x: 1320, y: 300, image: createImage(tailwind)}),
  new ResumeObject({x: 970, y: -100, image: createImage(skills)}),
  new ResumeObject({x: 1530, y: 300, image: createImage(redux)}),
  new ResumeObject({x: 2400, y: 600, image: createImage(signs)}),

]
let lastKey

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

let scrollOffset = 0

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    resumeObjects.forEach(resumeObject => {
      resumeObject.draw()
    })
    platforms.forEach(platform => {
    platform.draw()
    })
    player.update()
    
    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 2
    }
    else if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)) {
        player.velocity.x = -2
    } else {
        player.velocity.x = 0
    if (keys.right.pressed) { 
        scrollOffset += 5
        platforms.forEach((platform) => {
        platform.position.x -= 5
    })
    resumeObjects.forEach(resumeObject => {
      resumeObject.position.x -= 2
    })
  }
    else if (keys.left.pressed && scrollOffset > 0) {
        scrollOffset += 5
        platforms.forEach((platform) => {
            platform.position.x += 5
        })
        resumeObjects.forEach(resumeObject => {
          resumeObject.position.x += 2
        })
        }
    } 
    

    // Platform Collision detection
    platforms.forEach((platform) => {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0
    }
})
    // sprite switching
  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1
    player.currentSprite = player.sprites.run.right
    player.currentCropWidth = player.sprites.run.cropWidth
    player.width = player.sprites.run.width
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left
    player.currentCropWidth = player.sprites.run.cropWidth
    player.width = player.sprites.stand.width 
  }  else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left
    player.currentCropWidth = player.sprites.stand.cropWidth
    player.width = player.sprites.stand.width}
    else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
      player.currentSprite = player.sprites.stand.right
      player.currentCropWidth = player.sprites.stand.cropWidth
      player.width = player.sprites.stand.width}
// if (scrollOffset > 3000) {
//     console.log("You Win")
// }
}
animate()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = true
            lastKey = "left"
            break
        case 83:
            console.log('down')
            
            break
        case 68:
            console.log('right')
            keys.right.pressed = true
            lastKey = 'right'
            break
        case 87:
            console.log('up')
            player.velocity.y -= 20
            break            
    }
})

addEventListener('keyup', ({ keyCode }) => {

    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = false
            
            break
        case 83:
            console.log('down')
            
            break
        case 68:
            console.log('right')
            keys.right.pressed = false
        
            break
        case 87:
            console.log('up')
            
            break            
    }
})



