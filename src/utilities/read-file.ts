export function readFile<R extends ArrayBuffer>(file: File) {
  return new Promise<R>((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onloadend = () => resolve(reader.result as R)
    reader.readAsArrayBuffer(file)
  })
}
