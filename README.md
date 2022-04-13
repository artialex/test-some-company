# Test Some Company

Running

```
npm install
npm test
npm start
```

Libs I used:

- _TypeScript_ for types
- _MaterialUI_ for input elements (Select and Button)
- _Redux Toolkit_ to simplify API calls, I did not use any slices as it wasn't necessary
- _React Router_ to simplify page routing
- simple custom hook to put/retrieve `localstorage` data
- `normalize.css`, `sass` and _CSS Modules_ for styling
- _Testing Library_ for component tests

I intentionally split code in several modules as I would to in real project:

- `core` contains _entrypoint_ components and error page. In more complex apps I would put here Redux store setup
- `cars` is a _domain_ module containing everything related to car domain: types, components, APIs, slices
- `platform` can contain browser related API: Intl, polyfills, mobile check
- `ui` contains custom UI components used across the entire application
