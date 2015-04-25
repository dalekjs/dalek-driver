# dalek-driver
Master repository containing tests and definitions to be used by the various dalek-driver-* implementations


## Capabilitites

```js
Driver.prototype.capability = {
  // desribes the URL the browser redirects to when it cannot resolve the requested host
  'POST :sessionId/url hostNotFoundUrl': 'about:blank',
  // describes when the command is finished
  'POST :sessionId/url resolve': 'DOMContentLoaded',
};
```
