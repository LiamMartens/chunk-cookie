import { setCookie } from '../setCookie';

test('split cookie', () => {
  expect(setCookie('my_cookie', 'my-long-value', {
    chunkSize: 5,
  })).toEqual({
    my_cookie: '3',
    my_cookie_00: 'my-lo',
    my_cookie_01: 'ng-va',
    my_cookie_02: 'lue',
  });
});