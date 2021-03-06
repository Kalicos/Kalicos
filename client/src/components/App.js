import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { mapsApiKey } from '../config'

import GoogleMapReact from 'google-map-react'

window.foo = mapsApiKey
const Header = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/maps">Maps</Link></li>
    </ul>
  </div>
)

let SubTaskCreateForm = () => (
  <form>
    <label>Address</label>
    <Field name="title" component="input" type="text" />
    <label>Address2</label>
    <Field name="description" component="input" type="text" />
  </form>
)

SubTaskCreateForm = reduxForm({ form: 'createSubTask' })(SubTaskCreateForm)

const Home = () => (
  <div> This is the landing ... testing deployment</div>
)

const About = () => (
  <div> This is the about page </div>
)

const Maps = () => (
  <div>
    This is the maps page
    <SubTaskCreateForm />
    <div style={{ height: "16em", width: "16em" }}>
      <GoogleMapReact
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={ 11 }
        bootstrapURLKeys={{ key: mapsApiKey }}
      />
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/maps" component={ Maps } />
      </div>
    )
  }
}

export default App;
