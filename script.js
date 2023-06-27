const canvas = document.querySelector('#draw')
const title = document.querySelector('#title')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  // ctx.globalCompositeOperation = 'multiply'

  let isDrawing = false
  let lastX = 0
  let lastY = 0

  function draw(e){
    if (!isDrawing) return; // Stop
    ctx.strokeStyle = document.querySelector('.color').value
    ctx.lineWidth = document.querySelector('.width').value
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
  }


  const changeColor = document.querySelector('.color');
  const changeWidth = document.querySelector('.width');
  const buttonDraw = document.querySelector('.draw');


  changeColor.addEventListener('input', () => {
    ctx.strokeStyle = changeColor.value;
    const selectedColor = changeColor.value;
    title.style.color = selectedColor;
  });

  changeWidth.addEventListener('input', () => {
    ctx.lineWidth = changeWidth.value; // Mengubah warna garis saat terjadi perubahan input
  });


  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
  })
  canvas.addEventListener('mouseup',  () => isDrawing = false)
  canvas.addEventListener('mouseout',  () => isDrawing = false)

  