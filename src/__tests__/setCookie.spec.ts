import { getCookie } from '../getCookie';

test('read cookie', () => {
  const cookies = {
    my_cookie: '3',
    my_cookie_00: 'my-lo',
    my_cookie_01: 'ng-va',
    my_cookie_02: 'lue',
  };

  expect(getCookie(cookies, 'my_cookie')).toEqual('my-long-value');
});