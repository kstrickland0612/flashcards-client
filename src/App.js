import React, { Component } from 'react'
import './App.scss'
import { Route, withRouter } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './app/shared/header/Header'
import Footer from './app/shared/footer/Footer'
import Cards from './app/routes/cards/Cards'
import CardCreate from './app/routes/cardcreate/CardCreate'
import MyCards from './app/routes/mycards/MyCards'
import CardEdit from './app/routes/cardedit/CardEdit'
import CardsByCat from './app/routes/cardsbycat/CardsByCat'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      search: ''
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  handleSearch = event => {
    event.preventDefault()
    const updateSearch = {
      [event.target.name]: event.target.value
    }

    const searchContent = Object.assign(this.state.search, updateSearch)
    this.setState({ search: searchContent })
  }

  render () {
    const { alerts, user, search } = this.state

    return (
      <React.Fragment>
        <Header alert={this.alert} user={user} handleSearch={this.handleSearch}/>
        {alerts.map((alert, index) => (
          <Alert key={index} dismissible variant={alert.type}>
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </Alert>
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <Cards alert={this.alert} user={user} search={search} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/build-card' render ={() => (
            <CardCreate user={user} alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} path='/my-cards' render ={() => (
            <MyCards user={user} alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} path='/cards/:id/edit' render ={({ match }) => (
            <CardEdit match={match} user={user} alert={this.alert} />
          )} />
          <Route exact path='/cards/:category' render ={({ match }) => (
            <CardsByCat alert={this.alert} match={match} />
          )} />
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(App)
