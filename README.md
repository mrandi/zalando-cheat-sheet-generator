# zalando-cheat-sheet-generator

[![zcsg](https://img.shields.io/badge/zcs-stups-brightgreen.svg)](https://YOUR_DOMAIN/zalando-cheat-sheet-generator/?schema=https://raw.githubusercontent.com/zalando-stups/zalando-cheat-sheet-generator/gh-pages/schema/stups.json)


To use this generator:

* clone this repo
* Replace 'YOUR_DOMAIN' (you can also push the code in github in a branch gh-pages and use your github domain, keep in mind Cross-site scripting (XSS))
* define a [schema.json](schema/stups.json)
* GET on  https://YOUR_DOMAIN/zalando-cheat-sheet-generator/?schema=YOUR_SCHEMA_URL

With less words:

* clone repo
* $ python -m http.server 8000
* http://localhost:8000/index.html?schema=schema/stups.json

Example:

[https://YOUR_DOMAIN/zalando-cheat-sheet-generator/?schema=https://raw.githubusercontent.com/zalando-stups/zalando-cheat-sheet-generator/gh-pages/schema/stups.json](https://YOUR_DOMAIN/zalando-cheat-sheet-generator/?schema=https://raw.githubusercontent.com/zalando-stups/zalando-cheat-sheet-generator/gh-pages/schema/stups.json)

### TODO: How to write a good cheat sheet

* ..
* ..
