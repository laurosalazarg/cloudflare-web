import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import $ from 'jquery';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { hasMounted: false };
  }
    
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     foo: 'bar',
  //     resumeData: {}
  //   };

  //   ReactGA.initialize('LS-02132022-1');
  //   ReactGA.pageview(window.location.pathname);

  // }

  // getResumeData(){
  //   $.ajax({
  //     url:'/resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  componentDidMount() {
    this.setState({ hasMounted: true });
  }


  render() {


    return (
      <div className="App">
        <Header data={this.state.hasMounted}/>
        <Body data={this.state.hasMounted}/>
        <Footer data={this.state.hasMounted}/>

        
      </div>
    );
    
  }
}

export default App;
