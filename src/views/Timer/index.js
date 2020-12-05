import React from 'react';

class Timer extends React.Component {
  state = {
    rounds: null,
    restTime: null,
    workTime: null,
    currentTime: null,
    isWork: true,
  };

  handleInputChange = (e) => {
    switch (e.target.id) {
      case 'rounds':
        this.setState({ rounds: e.target.value });
        break;
      case 'workTime':
        this.setState({ workTime: e.target.value });
        this.setState({ currentTime: e.target.value });
        break;
      case 'restTime':
        this.setState({ restTime: e.target.value });
        break;
      default:
        this.manageInterval(e.target.id);
        break;
    }
  };

  manageInterval = (cmd) => {
    if (
      cmd === 'start'
      && this.state.currentTime >= 0
      && this.state.workTime > 0
      && this.state.restTime > 0
      && this.state.rounds > 0
    ) {
      this.setState({ currentSetType: 'Work' });
      this.timer = setInterval(() => {
        if (this.state.currentTime === 0) {
          if (this.state.isWork) {
            this.setState({ currentSetType: 'Rest' });
            this.setState({ currentTime: this.state.restTime });
          } else {
            this.setState({ currentSetType: 'Work' });
            this.setState({ currentTime: this.state.workTime });
            this.setState({ rounds: this.state.rounds - 1 });
            if (this.state.rounds === 0) {
              clearInterval(this.timer);
              this.setState({
                rounds: null,
                restTime: null,
                workTime: null,
                currentTime: null,
                currentSetType: null,
              });
            }
          }
          this.setState({ isWork: !this.state.isWork });
          return;
        }
        this.setState({ currentTime: this.state.currentTime - 1 });
      }, 1000);
    } else if (cmd === 'stop') {
      clearInterval(this.timer);
    } else if (cmd === 'reset') {
      clearInterval(this.timer);
      this.setState({
        rounds: null,
        restTime: null,
        workTime: null,
        currentTime: null,
        currentSetType: null,
      });
    }
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center', marginTop: '15%' }}>
          Timer Display
          <div>Rounds: {this.state.rounds}</div>
          <div>Work Time: {this.state.workTime}</div>
          <div>Rest Time: {this.state.restTime}</div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '15%' }}>
          <div> Current Round: {this.state.rounds}</div>
          <div> {this.state.currentSetType}</div>
          <div> Current Time: {this.state.currentTime}</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '25%',
          }}
        >
          <div>
            <label htmlFor="rounds">Rounds:</label>
            <input
              onChange={this.handleInputChange}
              type="number"
              id="rounds"
              name="rounds"
              min="1"
              max="15"
            />
          </div>
          <div>
            <label htmlFor="workTime">Work Time (sec):</label>
            <input
              onChange={this.handleInputChange}
              type="number"
              id="workTime"
              name="workTime"
              min="1"
              max="360"
            />
          </div>
          <div>
            <label htmlFor="restTime">Rest Time (sec):</label>
            <input
              onChange={this.handleInputChange}
              type="number"
              id="restTime"
              name="restTime"
              min="1"
              max="360"
            />
          </div>
          <button id="start" onClick={this.handleInputChange}>
            Start
          </button>
          <button id="stop" onClick={this.handleInputChange}>
            Stop
          </button>
          <button id="reset" onClick={this.handleInputChange}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;

// import React, { Component } from 'react';
// import { Button, Input } from 'reactstrap';

// class Timer extends Component {
//   state = {
//     interval: 0,
//     workTime: 10,
//     restTime: 0,
//     rounds: 0,
//     current: 0,
//   }

//   countdown = () => {
//     setInterval(() => this.setState({
//       workTime: this.state.workTime - 1,
//     }), 1000);
//   }

//   render() {
//     const { workTime } = this.state;

//     return (
//       <>
//       {/* {this.countdown()} */}
//       <h1>Timer</h1>
//       <h3>{workTime}</h3>
//       <Input type="number" name="workTime" />
//       <Input type="number" name="restTime" />
//       <Input type="number" name="rounds" />
//       <Button>Start</Button>
//       <Button>Stop</Button>
//       <Button>Reset</Button>
//       </>
//     );
//   }
// }

// export default Timer;
