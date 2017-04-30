## Sprint 0: Getting Started

Create the React app. We're going to be using `react-router` version 3 for this, so go ahead and install that as well.

```bash
$ create-react-app my-react-todo
$ cd my-react-todo
$ npm install --save react-router@3.0.0
$ npm start
```

Navigate to [`localhost:3000`](http://localhost:3000) to see the boilerplate `create-react-app` React application.

### Step 1: Hello World

1. Remove files you won't need for this app. Specifically, remove the following files from the `src` folder:

```bash
$ rm src/App.css
$ rm src/App.test.js
$ rm src/logo.svg
```

> You could also remove the favicon; just make sure you remove the reference to it from `index.html` as well.

2. Modify the code inside the `return` block from `src/App.js` so that it returns JSX for a header with the text Hello World. The whole file should look like this:

```js
// src/App.js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
```

> Hooray for automatic re-rendering when we save files! If you switch over to your browser, you should automatically see your updates.
