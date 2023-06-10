export function decodeAudio(arrayBuffer: ArrayBuffer) {
  const context = new AudioContext()
  return context.decodeAudioData(arrayBuffer)
}
