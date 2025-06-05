<h1 align="center">
  <br>
  Chai HTMLHint
  <br>
</h1>

<h4 align="center">Extends Chai with assertions for HTMLHint</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/chai-htmlhint">
    <img src="https://img.shields.io/npm/v/chai-htmlhint" alt="npm Version">
  </a>
  <a href="https://www.npmjs.com/package/chai-htmlhint">
    <img src="https://img.shields.io/npm/dm/chai-htmlhint.svg" alt="npm count">
  </a>
</p>

<p align="center">
  <a href="#usage">How To Use</a> • <a href="/CONTRIBUTING.md">Contributing</a> • <a href="https://htmlhint.com">Website</a>
</p>

# Usage
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
}
```

If you want to override you just need a valid `.htmlhintrc` file in the root of your project

## LICENCE

Project initially created by [@molant](https://github.com/molant) and transferred to the [HTMLHint](https://github.com/htmlhint) organization.

<a href="https://htmlhint.com"><img src="https://raw.githubusercontent.com/htmlhint/HTMLHint/main/website/src/assets/img/htmlhint.png" alt="Logo HTMLHint" height="65" width="65"></a>

[MIT License](./LICENSE)
