import {create, decodeAudio, query, readFile} from './utilities'
import {filterAudio} from './filter-audio'
import {drawAudio} from './draw-audio'
import './style.scss'

const main = query('main')
const object = query('object')
const canvas = query('canvas')
const ratio = 16 / 9

const loader = {
  hide() {
    object.hidden = true
  },
  show() {
    object.hidden = false
  },
}

canvas.width = main.clientWidth
canvas.height = canvas.width / ratio
const context = canvas.getContext('2d')

const input = create('input', {
  type: 'file',
  accept: 'audio/mp3,audio/ogg',
  onchange() {
    const [file] = Array.from(input.files ?? [])

    if (file && context) {
      loader.show()
      readFile(file)
        .then(decodeAudio)
        .then(filterAudio)
        .then(drawAudio(context))
        .then(loader.hide)
    }
  },
})

document.body.appendChild(input)

const audios = [
  'Beethoven_-_Moonlight_Sonata.ogg',
  'Beethoven_-_Moonlight_Sonata.mp3',
  'Mozart_-_Magic_Flute_Overture.ogg',
  'Mozart_-_Magic_Flute_Overture.mp3',
]

audios.map((innerText) => {
  document.body.append(
    create('button', {
      innerText,
      onclick() {
        if (context) {
          loader.show()
          fetch(innerText)
            .then((res) => res.arrayBuffer())
            .then(decodeAudio)
            .then(filterAudio)
            .then(drawAudio(context))
            .then(loader.hide)
        }
      },
    })
  )
})
