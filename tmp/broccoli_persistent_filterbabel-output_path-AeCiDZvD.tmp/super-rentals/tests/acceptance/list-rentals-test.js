define('super-rentals/tests/acceptance/list-rentals-test', ['exports', 'qunit', 'super-rentals/tests/helpers/module-for-acceptance'], function (exports, _qunit, _superRentalsTestsHelpersModuleForAcceptance) {

  (0, _superRentalsTestsHelpersModuleForAcceptance['default'])('Acceptance | list rentals');

  (0, _qunit.test)('visiting /list-rentals', function (assert) {
    visit('/list-rentals');

    andThen(function () {
      assert.equal(currentURL(), '/list-rentals');
    });
  });
});