import QRCode from 'qrcode'

/**
 * 1. toCanvas(canvasElement, text, [options], [cb(error, canvas)])
 * 2. toCanvas(text, [options], [cb(error, canvas)])
 */
QRCode.toCanvas(
  document.getElementById('canvas'), // canvas
  'sample text', // 文本
  {
    errorCorrectionLevel: 'Q',
    scale: 1,
    small: false,
    width: 200,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  },
  (err, canvas) => {
    if (err) return

    const logo = new Image()
    logo.src = 'vite.svg'
    logo.onload = () => {
      const ctx = canvas.getContext('2d')
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(logo, 75, 75, 50, 50)
    }
  },
)
