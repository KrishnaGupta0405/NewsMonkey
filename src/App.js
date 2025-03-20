import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"

// ! Country = 'us' 
//  ! as of 20 Jan 2025, only US is being supported by NewsApi.org, rather than other like in for India
export class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  pageSize = "10";
  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <LoadingBar color='#f11946' progress={this.state.progress} />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}  key="General" country="us" category="General" pageSize={this.pageSize} API_KEY={this.apikey}></News>}></Route>
          <Route exact path="/Business" element={<News setProgress={this.setProgress}  key="Business" country="us" category="Business" pageSize={this.pageSize} API_KEY={this.apikey}></News>}></Route>
          <Route exact path="/Entertainment"  element={<News setProgress={this.setProgress} key="Entertainment" country="us" category="Entertainment" pageSize={this.pageSize} API_KEY={this.apikey}></News>}></Route>
          <Route exact path="/Health"  element={<News setProgress={this.setProgress} key="Health" country="us" category="Health" pageSize={this.pageSize} API_KEY={this.apikey}></News>}></Route>
          <Route exact path="/Science"  element={<News setProgress={this.setProgress} key="Science" country="us" category="Science" pageSize={this.pageSize} API_KEY={this.apikey}></News>}></Route>
          <Route exact path="/Sports"  element={<News setProgress={this.setProgress} key="Sports" country="us" category="Sports" pageSize={this.pageSize} API_KEY={this.apikey}></News>}></Route>
          <Route exact path="/Technology"  element={<News setProgress={this.setProgress} key="Technology" country="us" category="Technology" pageSize={this.pageSize} API_KEY={this.apikey}></News>}></Route>
          {/* supplied key to tell the react that yes if user clicks on this element, then this has diffrent key and this element should be re-mounted on the page, while older one has be removed... */}
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
