# chunk-cookie
This small utility library provides 2 functions to read and write large cookies.

## Installation
```js
// with yarn
yarn add chunk-cookie
// with npm
npm install chunk-cookie
```

## Usage
### setCookie
This method can be used to split a large cookie into smaller chunks to circumvent the byte limit. By default it will be split into chunks of `1024` characters.

```js
import { setCookie } from 'chunk-cookie';
const chunkedCookies = setCookie('my-cookie', 'my-long-value', {
  chunkSize: 5, // 1024 by default
  write: (name, value) => {
    // function to actually write the cookie
  }
});
```

This above example will return a object with names and values for the cookies that will be set. In this case:
```json
{
  "my-cookie": "3",
  "my-cookie_00": "my-lo",
  "my-cookie_01": "ng-va",
  "my-cookie_02": "lue",
}
```

### getCookie
To read a chunked cookie value, you will need to use the `getCookie` method. This utility will get the count of chunks and join their separate values together. Using the example from above we could do the following:

```js
import { getCookie } from 'chunk-cookie';
const value = getCookie(cookies, 'my-cookie');
```
In thise case, the `value` should equal `my-long-value`.