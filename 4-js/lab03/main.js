// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Define os atributos da classe Ball
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

// cria o método desenhar para a classe Ball
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// criar o método para atualizar a direção e velocidade caso encontre a borda
Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

Ball.prototype.collisionDetect = function () {
  balls.forEach((el) => {
    if (!(this === el)) {
      const dx = this.x - el.x;
      const dy = this.y - el.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + el.size) {
        el.color = this.color = `rgb(
        ${random(0, 255)}
        ,${random(0, 255)}
        ,${random(0, 255)})`;
      }
    }
  });
};

// armazena todas as bolas disponíveis em um array
let balls = [];

while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    // posição da bola sempre deve ser ao menos uma bola de largura
    // de distância da borda do canvas, para evitar erros nos desenhos

    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)} )`,
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
