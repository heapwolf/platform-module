;((typeof module !== 'undefined' && function(m) { module.exports = m[1]; }) ||
  (typeof define === 'function' && function(m) { define(m[0], function() { return m[1] }); }) ||
  (function(m) { window[m[0]] = m[1]; })
)(function(m) { var name = /^function\s*(.*?)\s*\(/; return [name.exec(m.toString())[1], m]; }(

  function foo() {
    console.log('x')
  }

));
