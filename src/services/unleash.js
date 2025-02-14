/* eslint-disable import/no-mutable-exports */
import { initialize } from 'unleash-client';

let unleash;
if (process.env.NODE_ENV !== 'teste') {
  unleash = initialize({
    url: process.env.UNLEASH_URL,
    appName: 'deafult',
    customHeaders: { Authorization: process.env.UNLEASH_TOKEN},
  });
}

export default unleash;
