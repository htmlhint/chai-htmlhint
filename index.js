'use strict';
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var HTMLHint = require('htmlhint').HTMLHint;
var configFile = path.join(process.cwd(), '.htmlhintrc');

var defaultConfig = {
	'alt-require': true,
	'attr-lowercase': true,
	'attr-no-duplication': true,
	'attr-unsafe-chars': true,
	'attr-value-double-quotes': true,
	'doctype-first': true,
	'doctype-html5': true,
	'id-unique': true,
	'inline-script-disabled': false,
	'inline-style-disabled': false,
	'space-tab-mixed-disabled': true,
	'spec-char-escape': true,
	'src-not-empty': true,
	'style-disabled': true,
	'tag-pair': true,
	'tag-self-close': true,
	'tagname-lowercase': true,
	'title-require': true
};

var configs = [defaultConfig];

if (fs.existsSync(configFile)) {
	var contentFile = fs.readFileSync(configFile, 'utf8');
	var newConfig = JSON.parse(contentFile);
	configs.unshift(newConfig);
}

var config = {};
configs.unshift(config);

_.defaults.apply(null, configs);

var plugin = function (chai) {
	var Assertion = chai.Assertion;

	Assertion.addProperty('validHtml', function () {
		/*eslint-disable no-invalid-this*/
		var content = this._obj;
		var messages = HTMLHint.verify(content, config);
		var textMessage = HTMLHint.format(messages).join('\n');

		var notValidMessage = 'expected content to be valid HTML5\n' + textMessage;

		this.assert(messages.length === 0,
			notValidMessage,
			'expected content to not be valid HTML5');
		/*eslint-enable no-invalid-this*/
	});
};

module.exports = plugin;