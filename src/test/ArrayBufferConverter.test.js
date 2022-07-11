import ArrayBufferConverter from '../js/ArrayBufferConverter';
import getBuffer from '../js/getBuffer';

const buffer = new ArrayBufferConverter();

test('testing load() ', () => {
  const bufferView = buffer.load(getBuffer());
  expect(bufferView).toBeInstanceOf(Uint16Array);
});

test('testing toString() ', () => {
  const bufferView = buffer.load(getBuffer());
  const string = buffer.toString(bufferView);
  expect(string).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});