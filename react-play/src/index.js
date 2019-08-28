import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// }

// const element = (
//   <h1>
//     {getGreeting()}
//   </h1>
// );

const element = React.createElement( 
  'h1',
  {className: 'greeting'},
  'Hello!'
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>hey</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Warren" />
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {(props.date)}
      </div>
    </div>
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarurl}
      alt={props.user.name}
    />
  );
}

// function tick(props) {
//   const name = 'Warren';
//   const element = (
//     <div>
//       <h1>Hello {this.name}</h1>
//       <h1>It is {new Date().toLocaleString()} now.</h1>
//     </div>
//   );

//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: "Warren"};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <div>
        <div>Hello, {this.state.name}</div>
        <div>It is {this.state.date.toLocaleString()}</div>
      </div>
    );
  }
}

// function tick() {
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
// }




ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);