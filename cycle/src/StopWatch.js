import React, {Component} from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLive: false,
      curTime: 0,
      startTime: 0,
      add:0
    }
    this.timerId = 0
    console.log('StopWatchConstructor')
  }

  componentWillMount() {
    this.timerId = setInterval(e => {
      this.tick()
    }, 1000)
    console.log('StopWatchcomponentWillMount')

  }

  componentWillUnmount() {
    clearInterval(this.timerId)
    console.log('StopWatchcomponentWillUnmount')

  }

  tick() {
    if (this.state.isLive) {
      const v = new Date().getTime()
      this.setState({curTime: v})
    }
  }

  clickHandler() {
    if (this.state.isLive) {
      this.setState({isLive: false})
      return
    }
    const v = new Date().getTime()
    this.setState({
      curTime: v,
      startTime: v,
      isLive: true
    })
  }

  getDisp() {
    const s = this.state
    const delta = s.curTime - s.startTime
    const t = Math.floor(delta / 1000)
    const ss = t % 60
    const m = Math.floor(t / 60)
    const mm = m % 60
    const hh = Math.floor(mm / 60)

    const z = (num) => {
      const s = `00${String(num)}`
      return s.substr(s.length - 2, 2)
    }

    return <span className='disp'>{z(hh)}:{z(mm)}:{z(ss)}</span>
  }

  render() {
    let label = 'START'
    if (this.state.isLive) {
      label = 'STOP'
    }

    const disp = this.getDisp()
    const fclick = (e) => this.clickHandler(e)
    return (
      <div>
        {disp}
        <button onClick={fclick}>{label}</button>
      </div>
    )
  }
}

export default StopWatch