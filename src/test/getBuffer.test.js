import getBuffer from '../js/getBuffer';

test('testing buffer', () => {
  expect(getBuffer()).toBeInstanceOf(ArrayBuffer);
});