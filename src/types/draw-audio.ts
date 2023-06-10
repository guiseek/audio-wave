interface DrawAudio {
  (ctx: CanvasRenderingContext2D): (clip: [number, number][]) => void
}

export type {DrawAudio}
