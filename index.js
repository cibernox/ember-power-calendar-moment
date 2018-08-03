'use strict';

module.exports = {
  name: 'ember-power-calendar-moment',
  included(app) {
    this._super.included(app);
    app.import('vendor/ember-power-calendar-utils/index.js');
  },

  treeForVendor(rawVendorTree) {
    let babelAddon = this.addons.find(addon => addon.name === 'ember-cli-babel');

    return babelAddon.transpileTree(rawVendorTree, {
      'ember-cli-babel': {
        compileModules: true
      }
    });
  }
};
