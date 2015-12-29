import React from 'react'
import { render } from 'react-dom'
import { createHistory } from 'history'
import createHashHistory from 'history/lib/createHashHistory'
import { Router, Route, IndexRoute, Link } from 'react-router'
import Menu from './components/Menu'
import MobileNav from './components/MobileNav'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Gallery from './views/Gallery'
import RouteTransition from './components/RouteTransition'

let history = createHashHistory({
  queryKey: false
});

class App extends React.Component {

  componentDidMount() {
    // setTimeout(() =>{
      document.getElementById("app").className = "show";
      document.getElementById("loader").className = "delete";
    // }, 3000);
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <Menu />
        <MobileNav />
        <RouteTransition pathname={this.props.location.pathname} style={{visibility: 'hidden'}}>
          {this.props.children}
        </RouteTransition>  
      </div>
    )
  }
}

render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home} />
    	<Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="gallery/:title/:number" component={Gallery} />
    </Route>
  </Router>
), document.getElementById('app'))