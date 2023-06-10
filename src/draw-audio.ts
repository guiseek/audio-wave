import {DrawAudio} from './types'

export const drawAudio: DrawAudio = (context) => (clip) => {
  const {width, height} = context.canvas
  context.clearRect(0, 0, width, height)
  context.strokeStyle = 'black'
  context.lineWidth = 2
  context.beginPath()
  clip.forEach(([x, y]) => {
    context.lineTo(x * width, y * (height / 2))
  })
  context.stroke()
}
