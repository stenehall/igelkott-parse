var ParseLib = require('parse').Parse

var Parse = function Parse() {
  var self = this;

  Object.defineProperty(this.igelkott, "parse", {
    get: function() {
      if (this._parse === undefined) {
        if (self.config === undefined ||
            self.config.app_id === undefined ||
              self.config.app_id === '' ||
                self.config.js_key === undefined ||
                  self.config.js_key === '') {
          this._parse = false;
        } else {
          this.log('Initialize Parse database');
          ParseLib.initialize(self.config.app_id, self.config.js_key);
          this._parse = ParseLib;
        }
      }
      return this._parse;
    }
  });
};

exports.Plugin = Parse;

