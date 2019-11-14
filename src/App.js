import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
//CONTAINERS
import Home from './containers/Home'
import Bye from './containers/Bye'
import Person from './containers/Person'

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/bye" component={Bye} />
				</Switch>
				<Route exact path="/person" component={Person} />
			</BrowserRouter>
		</Provider>
	)
}

export default App
