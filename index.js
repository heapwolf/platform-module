(function() {

  var name = 'foobar'; // name of the export.

  (
    (typeof module !== 'undefined' && function (module) { module.exports = module(); }) ||
    (typeof define === 'function' && function (module) { define(name, module); }) ||
    (function (module) { window[name] = module(); })

  )(function () {

    var foobar = function(arg1, arg2, etc) {
      // code...
    };

    return foobar;
  });

}());
