import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
//CONTAINERS
import FirstExample from './containers/FirstExample'
import SecondExample from './containers/SecondExample'
import CustomHooks from './containers/CustomHooks'

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={FirstExample} />
					<Route exact path="/SecondExample" component={SecondExample} />
					<Route exact path="/customHooks" component={CustomHooks} />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}

export default App
