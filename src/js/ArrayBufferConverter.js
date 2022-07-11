export default class ArrayBufferConverter {
  load(buffer) {
    const bufferView = new Uint16Array(buffer);
    return bufferView;
  }

  toString(bufferView) {
    return bufferView.reduce(
      (sum, current) => sum + String.fromCharCode(current), '',
    )
  }
}