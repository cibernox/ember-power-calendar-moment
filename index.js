'use strict';

module.exports = {
  name: 'ember-power-calendar-moment',
  // included(app) {
  //   this._super.included(app);
  //   app.import('vendor/ember-power-calendar-utils/index.js');
  // },

  // treeForVendor(rawVendorTree) {
  //   let babelAddon = this.addons.find(addon => addon.name === 'ember-cli-babel');

  //   return babelAddon.transpileTree(rawVendorTree, {
  //     'ember-cli-babel': {
  //       compileModules: true
  //     }
  //   });
  // }
  treeForAddon(tree) {
    // intentionally not calling _super here
    // so that can have our `import`'s be
    // import { click, fillIn } from 'ember-native-dom-helpers';

    const Funnel = require('broccoli-funnel');

    let namespacedTree = new Funnel(tree, {
      srcDir: '/',
      destDir: `/ember-power-calendar-utils`,
      annotation: `Addon#treeForVendor (${this.name})`
    });

    return this.preprocessJs(namespacedTree, '/', 'ember-power-calendar-utils', {
      registry: this.registry
    });
  }
};
