# Silencer Hooks

This a library containing some custom utility hooks. The purpose of the hooks
is to **silence console errors** and thus should be used sparingly and with caution.
There are times however, like with tests or errors that muddy up the console and you'd
like to address later, where it can be beneficial to hide them.

The origin of this hook was to hide a React keys error that only showed up
when using an external component library in another project. This appeared to
cause no functional issues, was happening in components that weren't using `Array.map`,
and in components that were working fine in other environments (like Storybook).
A similar issue is documented on GitHub [for an unrelated project](https://github.com/vitejs/vite/issues/5646).

As a result, there is a hook specifically built to hide just this error `useSilenceKeysError`
which uses a regex to match this specific error. More might be added in the future, and the base
hook can be used to match against whatever Regex you want.

## Installation

Good old trusty:

```shell
$ npm install silencer-hooks
```

## Usage

```javascript
import  { useSilenceConsoleError, useSilenceKeysError } from './silencer'

const MyComponent = () => {
  useSilenceConsoleError(/foobar/)
  useSilenceKeysError()
  const arr = ['hello', 'world']

  // should be caught by first hook
  console.error('foobar!')
  return (
    <>
      {
        arr.map(str => <p>{str}</p>) // note missing keys prop
      }
    </>
  )
}
```
