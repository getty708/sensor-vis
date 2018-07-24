import React from "react"
import ReactDOM from "react-dom"
//import {Container,Raw,Col} from "reactstrap"

import VisContainer from "./VisContainer"
import Header from "./Header"
import Footer from "./Footer"
import SideBar from './SideBar'


class App extends React.Component {
    render(){
        return (
            <div >
              <Header/>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-2 bg-light">
                    <SideBar />
                  </div>
                  <div className="col-10">                              
                    <VisContainer />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
        )
    }
}
export default App
