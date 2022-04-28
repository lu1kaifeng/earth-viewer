import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { About } from './pages/About'

const App: React.FC = () => {
  const Earth = React.lazy( () => import("./components/EarthCanvas"));
  return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" component={Earth} exact />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Suspense>
      </BrowserRouter>
  )
}

export default App
