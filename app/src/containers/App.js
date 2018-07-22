import React from "react"
import ReactDOM from "react-dom"
//import {Container,Raw,Col} from "reactstrap"

import VisContainer from "./VisContainer"
import Header from "./Header"
import Footer from "./Footer"

class App extends React.Component {
    render(){
        return (
            <div className="container-fluid">

              <div className="content-fluid">
                <Header/>
              </div>
              <div className="content">              
                <div className="row">
                  <div className="col-12">
                    <VisContainer />
                  </div>
                  <div className="col-12">
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
export default App
