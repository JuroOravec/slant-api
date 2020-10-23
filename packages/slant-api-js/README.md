# slant-api

[![Latest Version](https://img.shields.io/npm/v/slant-api/latest.svg)](https://www.npmjs.com/package/slant-api)
[![Documentation](https://img.shields.io/badge/docs-yes-brightgreen.svg)](https://github.com/JuroOravec/slant-api/tree/master/packages/slant-api-js/docs)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](#-contributing)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://tldrlegal.com/license/mit-license)
[![Package Size](https://img.shields.io/bundlephobia/min/slant-api)](https://bundlephobia.com/result?p=slant-api)

[![Build Status](https://travis-ci.org/JuroOravec/slant-api.svg?branch=master)](https://travis-ci.org/JuroOravec/slant-api)
![Dependencies](https://david-dm.org/JuroOravec/slant-api.svg)
[![codecov](https://codecov.io/gh/JuroOravec/slant-api/branch/master/graph/badge.svg)](https://codecov.io/gh/JuroOravec/slant-api)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/JuroOravec/slant-api.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/JuroOravec/slant-api/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/JuroOravec/slant-api.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/JuroOravec/slant-api/context:javascript)
[![Maintainability](https://api.codeclimate.com/v1/badges/822ed3fce354e0853f8c/maintainability)](https://codeclimate.com/github/JuroOravec/slant-api/maintainability)

---

The first JS client for Slant.co API (unofficial)

#### 🏠 [Homepage](https://github.com/JuroOravec/slant-api/tree/master/packages/slant-api-js/) | 🗃 [Repository](https://github.com/JuroOravec/slant-api/tree/master/packages/slant-api-js) | 📦 [NPM](https://www.npmjs.com/package/slant-api) | 📚 [Documentation](https://github.com/JuroOravec/slant-api/tree/master/packages/slant-api-js/docs) | 🐛 [Issue Tracker](https://github.com/JuroOravec/slant-api/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)

## 🪑 Table of Content

- [🧰 Features](#-features)
- [👶 Install](#-install)
- [🚀 Usage](#-usage)
- [🤖 API](#-api)
- [⏳ Changelog](#-changelog)
- [🛠 Developing](#-developing)
- [🤝 Contributing](#-contributing)
- [🧙 Contributors](#-contributors)
- [⭐ Show your support](#-show-your-support)
- [🐙 Community](#-community)
- [👨‍🔧 Maintainers](#-maintainers)
- [📝 License](#-license)

## 🧰 Features

<!--
A brief description of your project, what it is used for and how does life get
awesome when someone starts to use it.

- Note and briefly describe any key concepts (technical, philosophical, or both) important to the user’s understanding.
- Link to any supplementary blog posts or project main pages.
- State if it is out-of-the-box user-friendly, so it’s clear to the user.
- List its most useful/innovative/noteworthy features.
- State its goals/what problem(s) it solves.
-->

This library allows you to access these parts of Slant.co:

- tags

## 👶 Install

<!--
- Getting it
- Installing It
- Configuring It
- Running it
-->

```sh
npm install slant-api
```

### Basic usage

```ts
import { Slant } from 'slant-api';

const slant = new Slant();

// Get all tags
const tags = await slant.tags();
```

> ⚠️ NOTE: Slant.co does not provide an official client for interacting with the website programatically. As such, we cannot guarantee the client will work 100% of the time.
>
> We do our best. To check the integrity with Slant.co endpoints, see and run the integration tests in `test/integration`.

## 🤖 API

TypeDoc documentation can be [found here](https://github.com/JuroOravec/slant-api/blob/master/packages/slant-api-js/docs/typedoc/README.md).

#### `new Slant()`

Initialize a new slant client instance.

#### `slant.tags(): Tag[]`

Get a list of all tags.

#### `slant.tag(query): Tag`

Get a single tag matching the query.

`query` can be either a function, object or array, and is passed to [Lodash.find](https://lodash.com/docs/4.17.15#find) as a predicate.

## ⏳ Changelog

This projects follows semantic versioning. The
[changelog can be found here](https://github.com/JuroOravec/slant-api/blob/master/packages/slant-api-js/CHANGELOG.md).

## 🛠 Developing

If you want to contribute to the project or have forked it,
[this guide will get you up and going](https://github.com/JuroOravec/slant-api/blob/master/docs/developing.md).

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Thank you ❤️

Feel free to dive in! See [current issues](https://github.com/JuroOravec/slant-api/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc),
[open an issue](https://github.com/JuroOravec/slant-api/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc/new), or [submit PRs](https://github.com/JuroOravec/slant-api/compare).

How to report bugs, feature requests, and how to contribute and what conventions we use is all described in the [contributing guide](https://github.com/JuroOravec/slant-api/tree/master/docs/CONTRIBUTING.md).

When contributing we follow the
[Contributor Covenant](https://contributor-covenant.org/version/1/3/0/).
See our [Code of Conduct](https://github.com/JuroOravec/slant-api/blob/master/docs/CODE_OF_CONDUCT.md).

## 🧙 Contributors

Contributions of any kind are welcome. Thanks goes to these wonderful people ❤️

### Recent and Top Contributors

<!-- Hall of Fame uses 8 links (7 users + 1 stats), see https://github.com/sourcerer-io/hall-of-fame#faq -->

[![Hall of Fame Contributor 1](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/images/0)](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/links/0)
[![Hall of Fame Contributor 2](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/images/1)](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/links/1)
[![Hall of Fame Contributor 3](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/images/2)](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/links/2)
[![Hall of Fame Contributor 4](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/images/3)](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/links/3)
[![Hall of Fame Contributor 5](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/images/4)](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/links/4)
[![Hall of Fame Contributor 6](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/images/5)](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/links/5)
[![Hall of Fame Contributor 7](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/images/6)](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/links/6)
[![Hall of Fame Contributor 8](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/images/7)](https://sourcerer.io/fame/JuroOravec/JuroOravec/slant-api/links/7)

<!-- markdownlint-disable -->

<sub><em>Generated using [Hall of Fame](https://github.com/sourcerer-io/hall-of-fame#readme).</em></sub>

<!-- markdownlint-enable -->

### All Contributors

Contribution type [emoji legend](https://allcontributors.org/docs/en/emoji-key)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

_No additional contributors. Be the first one!_

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- markdownlint-disable -->

<sub><em>This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.</em></sub>

<!-- markdownlint-enable -->

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 🐙 Community

- [Stack Overflow](https://stackoverflow.com/questions/tagged/slant-api)
- [Quora](https://www.quora.com/search?q=%22slant-api%22)

## 👨‍🔧 Maintainers

👤 **Juro Oravec**

- Twitter: [@JuroOravec](https://twitter.com/JuroOravec)
- GitHub: [@JuroOravec](https://github.com/JuroOravec)
- LinkedIn: [@JuroOravec](https://linkedin.com/in/JuroOravec)
- Sourcerer: [@JuroOravec](https://sourcerer.io/JuroOravec)

## 📝 License

Copyright © 2020 [Juro Oravec](https://github.com/JuroOravec).

This project is [MIT](https://tldrlegal.com/license/mit-license) licensed.
