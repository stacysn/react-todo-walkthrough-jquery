## Sprint 1: React Router

We're going to use React Router today!

Client-side routing isn't strictly necessary for this application. However, client-side routing will let our single page app (SPA) keep the url in synch with what the user is seeing and doing as the page content changes. This is useful for deep linking and search engines!  

This Todo app will have two urls or application-states (not to be confused with component states): the root url (`/`) and a url to view all todos (`/todos`).

There is a lot to learn about React Router, and we'll just be scratching the surface. If you want to dive deeper, check out [React's  tutorial on it](https://github.com/reactjs/react-router-tutorial)


### Creating Routes

0. If you followed the instructions from Sprint 0, you've already installed `react-router` as a dependency. If you get errors on the next few steps, confirm that you have it installed.

1. Make a `config` folder and a `routes.js` file that will contain our routes:

```bash
$ mkdir src/config
$ touch src/config/routes.js
```

2. Fill in the contents our `routes.js` file:

```js
// src/config/routes.js
import React from 'react'
import {Route} from 'react-router'
import App from '../App'

module.exports = (
  <Route path='/' component={App}/>
)
```

3. The `Route` component comes from `react-router`, and the snippet above uses this `Route` component to create a route for the root path(`'/'`).  `Route` also needs to know what component should be rendered when the user navigates to that url.  Here, the component to render is the `App` component we defined earlier.

> Notice that the code imports `React` from `'react'` but uses `{}` to import `{Route}` from `'react-router'`. What's the difference?

> Using `{Route}` imports *one* specific module - the `Route` module - from `react-router` - and names it `Route`.  

> Without the `{}`, the import it would have grabbed all of `react-router` functionality. Check out the [react router source code](https://github.com/reactjs/react-router) to see `Route` and other modules within `react-router`.

4. The `src/config/routes.js` file sets up a route, but it's not connected to any of the app's other files yet.  Referencing the code below, update `index.js` to use React Router now instead of just rendering the `App` Component.


```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, browserHistory} from 'react-router'
import routes from './config/routes.js'

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);
```

5. Think critically about the code above. What is it doing? How can you find out about less familiar pieces like the `Router` and `browserHistory` modules?


6. Now you should see the hello world header showing when you visit the route you set up!



### A Simple Header Component


1. While you're working on this route, change the header to be more applicable to the Todo app, and make it its own component.


```js
// src/App.js
import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello, and welcome! I am a heading tag in App.js! Have a great day!</h1>
      <Header />
      </div>
    );
  }
}

export default App;
```

2. Check your page again - what has changed?  Why? Once you carefully read any error messages, move on to the next step!


3. Create a `components` directory and a `Header.js` file inside it.

```bash
$ mkdir src/components
$ touch src/components/Header.js
```

4. In the new header component file, add a `render` method that `return`s JSX for a more appropriate header tag.

```js
// src/components/Header.js
import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component{
  render(){
    return (
      <header>
        <h1><Link to={'/todos'}>React Todos</Link></h1>
      </header>
    )
  }
}

export default Header
```

5. The `Link` component is new in this file. What do you think it does? What happens if you click on that header on the page?  

<details><summary>click here to check your guess for <code>Link</code></summary>
  <code>Link</code> creates a link to another route (similar to <code>href</code> in an HTML <code>a</code> tag).
</details>


6. Think about the warning `Warning: [react-router] Location "/todos" did not match any routes`.  Does it make sense?  Where are your routes defined, so you can check?

7. Confirm that `config/routes.js` only has a reference to `'/'`; there's no route for `/todos` yet.  Make a note in your `config/routes.js` file to remind yourself to add that route later!
