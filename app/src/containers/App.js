import React from "react"
import ReactDOM from "react-dom"
//import {Container,Raw,Col} from "reactstrap"

import VisContainer from "./VisContainer"
import Footer from "./Footer"

class App extends React.Component {
    render(){
        return (
            <div className="container">
              <div className="content">
                <h1>Hello, world!</h1>
              </div>
              <div className="row">
                <div className="col-6">
                  <VisContainer />
                </div>
                <div className="col-6">
                  <Footer />
                </div>
              </div>
            </div>
        )
    }
}
export default App
