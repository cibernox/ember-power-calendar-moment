ember-power-calendar-moment
==============================================================================

Date manipulation, formatting and parsin is too complex for ember-power-calendar to reinvent, so it
has to rely on other well tested libraries for that.

This is the addon that exposes the utils used internally by [ember-power-calendar](https://www.ember-power-calendar.com),
using [Moment.js](http://momentjs.com) underneath.

You will want to install this addon if you already use moment.js in your application already, or if
moment.js is your preferred date manipulation library.

Installation
------------------------------------------------------------------------------

```
ember install ember-power-calendar-moment
```


Usage
------------------------------------------------------------------------------

**Don't use it.**

This library is meant to be used internally by `ember-power-calendar` only.

The API can change in breaking ways based on the needs of Ember Power Calendar.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-power-calendar-moment`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
