# Field-Caser


`field-caser` is a project that allows you to do one thing, and one thing only... switch field names from various formats like:
* [Snake case](https://en.wikipedia.org/wiki/Snake_case): e.g. `foo_bar`
* [Camel case](https://en.wikipedia.org/wiki/Camel_case): e.g. `fooBar`
* [Kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles): e.g. `foo-bar`

## Table of Contents
* [Background](#background)
* [Installation](#installation)
* [Usage](#usage)

## Background

I found it annoying to map JSON from older (or opinionated) REST endpoints that use snake case to camel case.  This is often the case when using TypeScript in the Node.js and browser world, _especially_ if you're typing all of 
your outputs.  While other frameworks add this feature, this is _naked_ for you to use at your discretion.

__And yes, this is a deep conversion.__ It will recurse and find all of the child objects and arrays (naive, depth first).

[Top](#table-of-contents)

## Installation

To use `field-caser` first install it via `npm`:

```bash
npm install --save field-caser
```

Or `yarn`:
```bash
yarn add field-caser
```

[Top](#table-of-contents)

## Usage

There's a very simple little Node application under the `example` directory that demonstrates usage in TypeScript.

Essentially:

```ts
const snakeUser = {
  first_name: 'Homer',
  last_name: 'Simpson'
}

interface User  {
  firstName: string,
  lastName: string
}

const camelUser: User = <User>transformAllFieldNamesToCamel(snakeUser)
```

You don't need to type the input, as we utilize the `unknown` type for this (since you probably _don't_ want to bother typing the "bad" shapes).

As usual, since this is TypeScript, there's no guarantee that your input truly matches since that would need a run time check.  So _caveat emptor_.


[Top](#table-of-contents)
