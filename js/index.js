window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  //Obstacles coordinates
  let sizeX = Math.floor(Math.random() * 180) + 20;
  let obsX = Math.floor(Math.random() * (384 - sizeX - 32)) + 32;
  let obsY = 0;
  let sizeX1 = Math.floor(Math.random() * 180) + 20;
  let obsX1 = Math.floor(Math.random() * (384 - sizeX1 - 32)) + 32;
  let obsY1 = 0;
  let sizeX2 = Math.floor(Math.random() * 180) + 20;
  let obsX2 = Math.floor(Math.random() * (384 - sizeX2 - 32)) + 32;
  let obsY2 = 0;
  let sizeX3 = Math.floor(Math.random() * 180) + 20;
  let obsX3 = Math.floor(Math.random() * (384 - sizeX3 - 32)) + 32;
  let obsY3 = 0;
  //Points
  let points = 0;
  function startGame() {
    const canvas = document.querySelector("#canvas");
    //Context
    const ctx = canvas.getContext("2d");
    //Road and car
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const img = new Image();
    img.src = "../images/road.png";
    const img2 = new Image();
    img2.src = "../images/car.png";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 384, 600);
      ctx.drawImage(img2, 172, 520, 40, 80);
    };
    //Points
    ctx.fillStyle = "white";
    ctx.font = "32px Arial";
    ctx.fillText(`Score: ${points}`, 60, 40);
    //Car keyboard control
    let carX = 0
    document.addEventListener("keydown", (event) => {
      const img = new Image();
      img.src = "../images/road.png";
      const img2 = new Image();
      img2.src = "../images/car.png";
      //The car doesn't move if it passes the boundaries
      if (carX < -130){
        carX = carX + 20;
      } else if (carX > 130){
        carX = carX - 20;
      };
      switch (event.keyCode) {
        case 37:
          carX = carX - 20;
          break;
        case 39:
          carX = carX + 20;
          break;
      };
      ctx.fillStyle = "white";
      ctx.fillText(`Score: ${points}`, 60, 40);
    });
    //Obstacles
    let myInterval = window.setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, 384, 600);
      ctx.drawImage(img2, 172 + carX, 520, 40, 80);
      obsY += 2;
      obsY1 += 2;
      obsY2 += 2;
      obsY3 += 2;
      if (obsY === 600){
        obsY = 0;
        sizeX = Math.floor(Math.random() * 180) + 20;
        obsX = Math.floor(Math.random() * (384 - sizeX - 32)) + 32;
        points++;
      }
      if (obsY1 === 760){
        obsY1 = 160;
        sizeX1 = Math.floor(Math.random() * 180) + 20;
        obsX1 = Math.floor(Math.random() * (384 - sizeX1 - 32)) + 32;
        points++;
      }
      if (obsY2 === 920){
        obsY2 = 320;
        sizeX2 = Math.floor(Math.random() * 180) + 20;
        obsX2 = Math.floor(Math.random() * (384 - sizeX2 - 32)) + 32;
        points++;
      }
      if (obsY3 === 1080){
        obsY3 = 480;
        sizeX3 = Math.floor(Math.random() * 180) + 20;
        obsX3 = Math.floor(Math.random() * (384 - sizeX3 - 32)) + 32;
        points++;
      }
      ctx.fillStyle = "red";
      ctx.fillRect(obsX, obsY, sizeX, 20);
      ctx.fillRect(obsX1, obsY1 - 160, sizeX1, 20);
      ctx.fillRect(obsX2, obsY2 - 320, sizeX2, 20);
      ctx.fillRect(obsX3, obsY3 - 480, sizeX3, 20);
      ctx.fillStyle = "white";
      ctx.fillText(`Score: ${points}`, 60, 40);
      //Game over
      if ((carX + 172 + 40) >= obsX && (carX + 172) <= (sizeX + obsX) && (obsY + 20) >= 520){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.font = "60px Arial";
        ctx.fillText("Game over!", 100, 300);
        ctx.fillStyle = "white";
        ctx.font = "48px Arial";
        ctx.fillText(`Your final score:`, 80, 370);
        ctx.fillText(`${points}`, 230, 420);
        clearInterval(myInterval);
      } else if ((carX + 172 + 40) >= obsX1 && (carX + 172) <= (sizeX1 + obsX1) && (obsY1 + 20 - 160) >= 520){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.font = "60px Arial";
        ctx.fillText("Game over!", 100, 300);
        ctx.fillStyle = "white";
        ctx.font = "48px Arial";
        ctx.fillText(`Your final score:`, 80, 370);
        ctx.fillText(`${points}`, 230, 420);
        clearInterval(myInterval);
      } else if ((carX + 172 + 40) >= obsX2 && (carX + 172) <= (sizeX2 + obsX2) && (obsY2 + 20 - 320) >= 520){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.font = "60px Arial";
        ctx.fillText("Game over!", 100, 300);
        ctx.fillStyle = "white";
        ctx.font = "48px Arial";
        ctx.fillText(`Your final score:`, 80, 370);
        ctx.fillText(`${points}`, 230, 420);
        clearInterval(myInterval);
      } else if ((carX + 172 + 40) >= obsX3 && (carX + 172) <= (sizeX3 + obsX3) && (obsY3 + 20 - 480) >= 520){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.font = "60px Arial";
        ctx.fillText("Game over!", 100, 300);
        ctx.fillStyle = "white";
        ctx.font = "48px Arial";
        ctx.fillText(`Your final score:`, 80, 370);
        ctx.fillText(`${points}`, 230, 420);
        clearInterval(myInterval);
      };
    }, 20);
  };
};