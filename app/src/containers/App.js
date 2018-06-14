import React from "react"
import ReactDOM from "react-dom"
//import {Container,Raw,Col} from "reactstrap"

import VisContainer from "./VisContainer"


class App extends React.Component {
    render(){
        return (
            <div className="container">
              <div className="content">
                <h1>Hello, world!</h1>
              </div>
              <VisContainer />
            </div>
        )
    }
}
export default App
