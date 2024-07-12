const canvases = [
  document.getElementById("canvas1"),
  document.getElementById("canvas2"),
  document.getElementById("canvas3"),
  document.getElementById("canvas4"),
];
const ctxs = canvases.map((canvas) => canvas.getContext("2d"));
let pixelation = 20; // Initial pixel size

function drawPixelatedShape(ctx, shape, pixelSize) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  ctx.clearRect(0, 0, width, height); // Clear the canvas

  for (let x = 0; x <= width; x += pixelSize) {
    for (let y = 0; y <= height; y += pixelSize) {
      if (shape(x, y)) {
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }
  }
}

function isShape1(x, y) {
  let rx = 65.83;
  return (
    (x - rx >= 0 && x + rx <= 160 && y - rx >= 0 && y + rx <= 160) ||
    (x - 65.83) ** 2 + (y - 65.83) ** 2 <= rx ** 2 ||
    (x - 94.17) ** 2 + (y - 65.83) ** 2 <= rx ** 2 ||
    (x - 65.83) ** 2 + (y - 94.17) ** 2 <= rx ** 2 ||
    (x - 94.17) ** 2 + (y - 94.17) ** 2 <= rx ** 2
  );
}

function isShape2(x, y) {
  return (
    (x - 40) ** 2 + (y - 40) ** 2 <= 40 ** 2 ||
    (x - 120) ** 2 + (y - 120) ** 2 <= 40 ** 2 ||
    (x >= 80 && y <= 80) ||
    (x <= 80 && y >= 80)
  );
}

function isShape3(x, y) {
  return (
    (x >= 0 && x <= 80 && y >= 80 && y <= 160 && x + y >= 80) ||
    (x >= 0 && x <= 80 && y >= 0 && y <= 80 && x + y <= 80) ||
    (x >= 80 && x <= 160 && y >= 0 && y <= 80 && x - y <= 80) ||
    (x >= 80 && x <= 160 && y >= 80 && y <= 160 && x - y >= -80)
  );
}

function isShape4(x, y) {
  let inTopRoundedRect =
    x >= 0 &&
    x <= 164 &&
    y >= 0 &&
    y <= 80.4969 &&
    ((x - 40.2484) ** 2 + (y - 40.2484) ** 2 <= 40.2484 ** 2 ||
      (x - 123.7516) ** 2 + (y - 40.2484) ** 2 <= 40.2484 ** 2 ||
      (y >= 40.2484 && y <= 80.4969));

  let inBottomRect = x >= 0 && x <= 164 && y >= 80.4969 && y <= 160;

  return inTopRoundedRect || inBottomRect;
}

const shapes = [isShape1, isShape2, isShape3, isShape4];

function animate() {
  if (pixelation > 1) {
    pixelation -= 0.5; // Reduce pixelation
    for (let i = 0; i < ctxs.length; i++) {
      drawPixelatedShape(ctxs[i], shapes[i], pixelation);
    }
    requestAnimationFrame(animate); // Request next frame
  } else {
    for (let i = 0; i < ctxs.length; i++) {
      const ctx = ctxs[i];
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#272727";

      if (i === 0) {
        ctx.beginPath();
        ctx.moveTo(65.83, 0);
        ctx.arcTo(160, 0, 160, 65.83, 65.83);
        ctx.arcTo(160, 160, 94.17, 160, 65.83);
        ctx.arcTo(0, 160, 0, 94.17, 65.83);
        ctx.arcTo(0, 0, 65.83, 0, 65.83);
        ctx.closePath();
        ctx.fill();
      } else if (i === 1) {
        ctx.beginPath();
        ctx.arc(40, 40, 40, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(120, 120, 40, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(80, 0);
        ctx.lineTo(160, 0);
        ctx.lineTo(160, 14.17);
        ctx.arcTo(130.527, 80, 94.17, 80, 65.83);
        ctx.lineTo(80, 80);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 80);
        ctx.lineTo(80, 80);
        ctx.lineTo(80, 160);
        ctx.closePath();
        ctx.fill();
      } else if (i === 2) {
        ctx.beginPath();
        ctx.moveTo(0, 80);
        ctx.lineTo(80, 80);
        ctx.lineTo(80, 160);
        ctx.lineTo(65.83, 160);
        ctx.arcTo(0, 160, 0, 94.17, 65.83);
        ctx.lineTo(0, 80);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(80, 0);
        ctx.lineTo(80, 80);
        ctx.lineTo(65.83, 80);
        ctx.arcTo(0, 80, 0, 14.17, 65.83);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(160, 0);
        ctx.lineTo(160, 80);
        ctx.lineTo(80, 80);
        ctx.lineTo(80, 65.83);
        ctx.arcTo(80, 0, 145.83, 0, 65.83);
        ctx.lineTo(160, 0);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(160, 80);
        ctx.lineTo(160, 160);
        ctx.lineTo(80, 160);
        ctx.lineTo(80, 145.83);
        ctx.arcTo(80, 80, 145.83, 80, 65.83);
        ctx.lineTo(160, 80);
        ctx.closePath();
        ctx.fill();
      } else if (i === 3) {
        ctx.beginPath();
        ctx.moveTo(40.2484, 0);
        ctx.arcTo(164, 0, 164, 40.2484, 40.2484);
        ctx.arcTo(164, 80.4969, 123.7516, 80.4969, 40.2484);
        ctx.arcTo(0, 80.4969, 0, 40.2484, 40.2484);
        ctx.arcTo(0, 0, 40.2484, 0, 40.2484);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(0, 80.4969);
        ctx.lineTo(164, 80.4969);
        ctx.lineTo(164, 113);
        ctx.arcTo(164, 160, 117, 160, 47);
        ctx.lineTo(47, 160);
        ctx.arcTo(0, 160, 0, 113, 47);
        ctx.closePath();
        ctx.fill();
      }
    }
  }
}

animate();
