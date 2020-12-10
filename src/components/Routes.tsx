import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { Page404 } from '../pages/Page404'

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact/:text" component={Contact} />
			<Route path="*" component={Page404} />
		</Switch>
	)
}
