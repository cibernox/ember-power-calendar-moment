'use strict';

module.exports = {
  name: 'ember-power-calendar-moment',
  treeForVendor(rawVendorTree) {
    let babelAddon = this.addons.find(addon => addon.name === 'ember-cli-babel');

    return babelAddon.transpileTree(rawVendorTree, {
      'ember-cli-babel': {
        compileModules: false
      }
    });
  }
};
