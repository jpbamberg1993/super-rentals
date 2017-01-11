'use strict';

define('super-rentals/tests/acceptance/list-rentals-test', ['exports', 'qunit', 'super-rentals/tests/helpers/module-for-acceptance'], function (exports, _qunit, _superRentalsTestsHelpersModuleForAcceptance) {

  (0, _superRentalsTestsHelpersModuleForAcceptance['default'])('Acceptance | list rentals');

  (0, _qunit.test)('should redirect to rentals route.', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    });
  });

  (0, _qunit.test)('should list available rentals.', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(find('.listing').length, 3, 'should see 3 listings');
    });
  });

  (0, _qunit.test)('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
      assert.equal(currentURL(), '/about', 'should navigate to about');
    });
  });

  (0, _qunit.test)('should link to contact information.', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function () {
      assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
  });

  (0, _qunit.test)('should filter the list of rentals by city.', function (assert) {
    visit('/');
    fillIn('.list-filter input', 'seattle');
    keyEvent('.list-filter input', 'keyup', 69);
    andThen(function () {
      assert.equal(find('.listing').lendth, 1, 'should show one listing');
      assert.equal(find('.listing .locations:contains("Seattle")').length, 1, 'should contain 1 listing with location Seattle');
    });
  });

  (0, _qunit.test)('should show details for a specific rental.', function (assert) {
    visit('/rentals');
    click('a:contains("Grand Old Mansion")');
    andThen(function () {
      assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to show route');
      assert.equal(find('.show-listing h2').text(), "Grand Old Mansion", 'should list rental title');
      assert.equal(find('.description').length, 1, 'should list a description of the property');
    });
  });
});
define('super-rentals/tests/acceptance/list-rentals-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/list-rentals-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/list-rentals-test.js should pass jshint.');
  });
});
define('super-rentals/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('super-rentals/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('super-rentals/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('super-rentals/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'super-rentals/tests/helpers/start-app', 'super-rentals/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _superRentalsTestsHelpersStartApp, _superRentalsTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _superRentalsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _superRentalsTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('super-rentals/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('super-rentals/tests/helpers/resolver', ['exports', 'super-rentals/resolver', 'super-rentals/config/environment'], function (exports, _superRentalsResolver, _superRentalsConfigEnvironment) {

  var resolver = _superRentalsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _superRentalsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _superRentalsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('super-rentals/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('super-rentals/tests/helpers/start-app', ['exports', 'ember', 'super-rentals/app', 'super-rentals/config/environment'], function (exports, _ember, _superRentalsApp, _superRentalsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _superRentalsConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _superRentalsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('super-rentals/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('super-rentals/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('super-rentals/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('super-rentals/tests/test-helper', ['exports', 'super-rentals/tests/helpers/resolver', 'ember-qunit'], function (exports, _superRentalsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_superRentalsTestsHelpersResolver['default']);
});
define('super-rentals/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
