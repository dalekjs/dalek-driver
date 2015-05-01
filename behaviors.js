module.exports = {
  // desribes the URL the browser redirects to when it cannot resolve the requested host
  'POST :sessionId/url hostNotFoundUrl': 'about:blank',
  // desribes if the browser redirects to a standard URL when it cannot resolve the requested host
  'POST :sessionId/url hostNotFoundRedirect': true,
  // describes when the command is finished
  // TODO: investigate effects of [WebDriver:page-loading-strategy]
  // see https://w3c.github.io/webdriver/webdriver-spec.html#dfn-page-loading-strategy
  'POST :sessionId/url resolve': 'DOMContentLoaded',
};