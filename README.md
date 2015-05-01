# dalek-driver

Master repository containing tests and definitions to be used by the various dalek-driver-* implementations

## API

The driver *must* expose the following base API:

```js
// constructor
//  arguments
//    options - TODO
//  throws
//    TypeError - when dissatisfied with options
function Browser(options) {}

// default options map
Browser.defaults = {};

// behavior map
Browser.prototype.behaviors = {};

// method to start the service
//  arguments:
//    successCallback(endpoints, options) - when the process was started successfully
//    errorCallback(error instanceof Error, options) - when the process could not be started
//    failureCallback(error instanceof Error, options) - when the process crashes mid run
//  throws
//    Error - when process is already running
Browser.prototype.start(successCallback, errorCallback, failureCallback);

// method to gracefully stop the service
//  arguments:
//    callback() - when the process was stopped successfully
Browser.prototype.stop(callback);

// method to force stop the service
Browser.prototype.kill();
```

## Behaviors

Drivers may show different behaviors while still being JsonWireProtocol/WebDriver specification compliant. In order to allow clients to compensate for the varying behaviors, a driver *must* maintain a behavior mapping. Behaviors are identified by a behavior name per endpoint: `{method} {url} {behaviorName}`. A list of all known behaviors (along with the default values) is maintained in this repository's [behaviors.js](behaviors.js).

## Desired Capabilities

TODO: investigate desired capabilities - https://code.google.com/p/selenium/wiki/DesiredCapabilities
