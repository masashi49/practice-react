import React ,{Component}from 'react';
import StopWatch from './StopWatch';

class App extends  Component{
  constructor(props){
    super(props)
    console.log('constructor');
  }


  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return false
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('rendor')
    const setStateHandler = (e) => {
      console.log('* call setState()')
      this.setState({r: Math.random()})
    }
    return (
      <div>
        <button onClick={setStateHandler}>setState</button>
        <StopWatch />
      </div>
    )
  }
}

export default App