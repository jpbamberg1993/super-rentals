define('super-rentals/router', ['exports', 'ember', 'super-rentals/config/environment'], function (exports, _ember, _superRentalsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _superRentalsConfigEnvironment['default'].locationType,
    rootURL: _superRentalsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});