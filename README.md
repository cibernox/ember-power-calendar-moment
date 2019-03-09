ember-power-calendar-moment
==============================================================================

Date manipulation, formatting and parsin is too complex for ember-power-calendar to reinvent, so it
has to rely on other well tested libraries for that.

This is the addon that exposes the utils used internally by [ember-power-calendar](https://www.ember-power-calendar.com),
using [Moment.js](http://momentjs.com) underneath.

You will want to install this addon if you already use moment.js in your application already, or if
moment.js is your preferred date manipulation library.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-power-calendar-moment
```

This addon depends on `moment` package. If you use ember-auto-import, make sure that `moment` is
in your `dependencies`.

Alternatively, you can use shim package: `ember install ember-cli-moment-shim`

Usage
------------------------------------------------------------------------------

**Don't use it.**

This library is meant to be used internally by `ember-power-calendar` only.

The API can change in breaking ways based on the needs of Ember Power Calendar.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
