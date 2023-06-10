import {FilterAudio} from './types'

export const filterAudio: FilterAudio = (audioBuffer: AudioBuffer) => {
  const size = Math.round(audioBuffer.sampleRate / 70)
  const data = audioBuffer.getChannelData(0)
  const audioClips: [number, number][] = []
  for (let i = 0; i < data.length; i += size) {
    audioClips.push([i / data.length, data[i] + 1])
  }
  return audioClips
}
