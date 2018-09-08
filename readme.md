# What is chai-htmlhint

[![Greenkeeper badge](https://badges.greenkeeper.io/htmlhint/chai-htmlhint.svg)](https://greenkeeper.io/)

chai-htmlhint is a wrapper of [htmlhint](https://github.com/yaniswang/HTMLHint/) to use with chai.

# How to use it
You just have to pass the html you want to validate like this:
```javascript
var myhtml = '<h1>my html</h1>';
expect(myhtml).to.be.validHtml;
```

The default rules are:
```json
{
	"alt-require": true,
	"attr-lowercase": true,
	"attr-no-duplication": true,
	"attr-unsafe-chars": true,
	"attr-value-double-quotes": true,
	"doctype-first": true,
	"doctype-html5": true,
	"id-unique": true,
	"inline-script-disabled": false,
	"inline-style-disabled": false,
	"space-tab-mixed-disabled": true,
	"spec-char-escape": true,
	"src-not-empty": true,
	"style-disabled": true,
	"tag-pair": true,
	"tag-self-close": true,
	"tagname-lowercase": true,
	"title-require": true
};
```

If you want to override you just need a valid `.htmlhintrc` file in the root of your project