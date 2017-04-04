## Sprint 2: Containers

As we first start to write this container, its going to seem like just another component. Remember that  React components should be FIRST: focused, independent, reusable, small, and testable. In order to help keep components slim, a good practice is to move as much of the business logic surrounding a component's state to a container component. We're going to put all that logic in this container. It will start out very similarly to our `Header` component, but end up much more complex.

Let's start by creating a containers folder and then the container file:

```bash
$ mkdir src/containers
$ touch src/containers/TodosContainer.js
```

In `src/containers/TodosContainer.js`:

```js
import React, {Component} from 'react'

class TodosContainer extends Component {
  render(){
    return (
      <div className='todosContainer'>
        <h2>This is the todos container</h2>
      </div>
    )
  }
}

export default TodosContainer
```

Then we just have to update the routes in `src/config/routes.js`:

```js
//...
import TodosContainer from '../containers/TodosContainer'

module.exports = (
  <Route path='/' component={App}>
    <Route path='/todos' component={TodosContainer}/>
  </Route>
);
```

If we click on it we should totally see ..... nothing still. But no error now! Because our `/todos` is nested within our `'/'` route, our `App` Component needs to know what to render. We do this by adding one line of code to our `src/App.js`:

```js
render() {
  return (
    <div className="App">
      <Header />
      {this.props.children}
    </div>
  );
}
```

Great everything works!

### PAUSE!

Everything up to this point, is most of what you need to know about using react for a website NOT using a back end. [Just add css through index.css and you're good to go!](https://gist.github.com/superbuggy/29693beaa19cbc2a9171aba4f373dc32)
