import getBuffer from '../js/getBuffer';

test('testing whether function can actualy to emul buffer', () => {
  const buffer = getBuffer();
  expect(buffer).toBeInstanceOf(ArrayBuffer);
});