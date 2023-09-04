# ember-power-calendar-moment

Date manipulation, formatting and parsin is too complex for ember-power-calendar to reinvent, so it
has to rely on other well tested libraries for that.

This is the addon that exposes the utils used internally by [ember-power-calendar](https://www.ember-power-calendar.com),
using [Moment.js](http://momentjs.com) underneath.

You will want to install this addon if you already use moment.js in your application already, or if
moment.js is your preferred date manipulation library.


## Compatibility

* Ember.js v3.28 or above
* Ember CLI v3.28 or above
* Node.js v16 or above


## Installation

```
ember install ember-power-calendar-moment
```

Add the following lines into you `app/app.js` to register this meta addon to `ember-power-calendar`
```
import { registerDateLibrary } from 'ember-power-calendar';
import DateUtils from 'ember-power-calendar-moment';

registerDateLibrary(DateUtils);
```


## Usage

**Don't use it.**

This library is meant to be used internally by `ember-power-calendar` only.

The API can change in breaking ways based on the needs of Ember Power Calendar.


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
