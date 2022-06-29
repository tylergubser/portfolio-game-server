

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
import skills from '../img/skills.png'
import redux from '../img/redux.png'
import signs from '../img/signs.png'
import resume from '../img/resume.png'
import resume2 from '../img/resume2.png'
import resume3 from '../img/resume3.png'
import resume4 from '../img/resume4.png'
import sign1 from '../img/sign1.png'
import sign2 from '../img/sign2.png'
import blog from '../img/blog.png'
import blog1 from '../img/blog1.png'
import blog2 from '../img/blog2.png'
import blogs from '../img/blogs.png'
import blog3 from '../img/blog3.png'
import game from '../img/game.png'
import drink from '../img/drink.png'
import projects from '../img/projects.png'
import fish from '../img/fish.png'
import techstack from '../img/techstack.png'
import techstack1 from '../img/techstack1.png'
import techstack2 from '../img/techstack2.png'
import tradport from '../img/tradport.png'
import downarrow from '../img/downarrow.png'
import work from '../img/work.png'
import education from '../img/education.png'

// document.addEventListener("DOMContentLoaded", function(event) {
//   setTimeout(animate(), 10000)
// });

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
  new Platform({x: 12000, y: 850, image: platformImage}),
  new Platform({x: 12500, y: 850, image: platformImage}),
  new Platform({x: 13000, y: 850, image: platformImage}),
  new Platform({x: 13500, y: 850, image: platformImage}),
  new Platform({x: 14000, y: 850, image: platformImage}),
  new Platform({x: 14500, y: 850, image: platformImage}),
  new Platform({x: 15000, y: 850, image: platformImage}),
  new Platform({x: 15500, y: 850, image: platformImage}),
  new Platform({x: 16000, y: 850, image: platformImage}),
  new Platform({x: 16500, y: 850, image: platformImage}),
  new Platform({x: 17000, y: 850, image: platformImage}),
  new Platform({x: 17500, y: 850, image: platformImage}),
  new Platform({x: 18000, y: 850, image: platformImage}),
  new Platform({x: 18500, y: 850, image: platformImage}),
  new Platform({x: 19000, y: 850, image: platformImage}),
  new Platform({x: 19500, y: 850, image: platformImage}),
  new Platform({x: 20000, y: 850, image: platformImage}),
  new Platform({x: 20500, y: 850, image: platformImage}),
  new Platform({x: 21000, y: 850, image: platformImage}),
  new Platform({x: 21500, y: 850, image: platformImage}),
  new Platform({x: 2000, y: 600, image: platformImage}),
  new Platform({x: 2700, y: 400, image: platformImage}),
  new Platform({x: 3300, y: 200, image: platformImage}),
  new Platform({x: 3800, y: 400, image: platformImage}),
  new Platform({x: 5300, y: 500, image: platformImage}),
  new Platform({x: 5800, y: 500, image: platformImage}),
  new Platform({x: 6800, y: 600, image: platformImage}),
  new Platform({x: 7300, y: 600, image: platformImage}),
  new Platform({x: 8000, y: 500, image: platformImage}),
  new Platform({x: 8800, y: 600, image: platformImage}),
  new Platform({x: 10000, y: 600, image: platformImage}),
  new Platform({x: 10700, y: 500, image: platformImage}),
  new Platform({x: 11300, y: 400, image: platformImage}),
  new Platform({x: 15000, y: 726, image: platformImage}),
  new Platform({x: 14500, y: 726, image: platformImage}),
  new Platform({x: 14000, y: 726, image: platformImage}),
  new Platform({x: 15500, y: 726, image: platformImage}),
  new Platform({x: 16000, y: 726, image: platformImage}),
  new Platform({x: 16500, y: 726, image: platformImage}),
  new Platform({x: 17000, y: 726, image: platformImage}),
  new Platform({x: 17500, y: 726, image: platformImage}),
  new Platform({x: 18000, y: 726, image: platformImage}),
  new Platform({x: 18500, y: 726, image: platformImage}),
  new Platform({x: 19000, y: 726, image: platformImage}),
  new Platform({x: 19500, y: 726, image: platformImage}),
  new Platform({x: 22000, y: 850, image: platformImage}),
  new Platform({x: 22500, y: 850, image: platformImage}),
  new Platform({x: 23000, y: 850, image: platformImage}),
  new Platform({x: 23500, y: 850, image: platformImage}),
  new Platform({x: 25000, y: 850, image: platformImage}),
  new Platform({x: 25500, y: 850, image: platformImage}),
  new Platform({x: 26000, y: 850, image: platformImage}),
  new Platform({x: 26500, y: 850, image: platformImage}),
  new Platform({x: 27000, y: 850, image: platformImage}),
  new Platform({x: 27500, y: 850, image: platformImage}),
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
  new ResumeObject({x: 1100, y: 0, image: createImage(skills)}),
  new ResumeObject({x: 1530, y: 300, image: createImage(redux)}),
  new ResumeObject({x: 2400, y: 600, image: createImage(signs)}),
  new ResumeObject({x: 2700, y: -90, image: createImage(education)}),
  new ResumeObject({x: 2800, y: 280, image: createImage(resume2)}),
  new ResumeObject({x: 4300, y: -20, image: createImage(work)}),
  new ResumeObject({x: 4380, y: 280, image: createImage(resume3)}),
  new ResumeObject({x: 4380, y: 680, image: createImage(resume4)}),
  new ResumeObject({x: 5100, y: 600, image: createImage(sign1)}),
  new ResumeObject({x: 5550, y: 150, image: createImage(blog)}),
  new ResumeObject({x: 5800, y: 150, image: createImage(blog1)}),
  new ResumeObject({x: 6600, y: 150, image: createImage(blog2)}),
  new ResumeObject({x: 6130, y: 10, image: createImage(blogs)}),
  new ResumeObject({x: 6860, y: 150, image: createImage(blog3)}),
  new ResumeObject({x: 6900, y: 475, image: createImage(sign2)}),
  new ResumeObject({x: 7600, y: 200, image: createImage(game)}),
  new ResumeObject({x: 8200, y: 200, image: createImage(drink)}),
  new ResumeObject({x: 8350, y: 0, image: createImage(projects)}),
  new ResumeObject({x: 8850, y: 200, image: createImage(fish)}),
  new ResumeObject({x: 8330, y: 500, image: createImage(techstack)}),
  new ResumeObject({x: 8990, y: 500, image: createImage(techstack1)}),
  new ResumeObject({x: 7710, y: 500, image: createImage(techstack2)}),
  new ResumeObject({x: 10000, y: 200, image: createImage(tradport)}),
  new ResumeObject({x: 10000, y: 500, image: createImage(downarrow)}),
  
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
    else if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed && scrollOffset === 0 && player.position.x > 2)) {
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
    else if (keys.left.pressed && scrollOffset > 2) {
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
// if (player.position.y > canvas.height) {
//   window.location.href = "https://portfolio-2022-tylergubser.vercel.app/";
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





