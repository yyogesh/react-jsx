import './App.css';


// Wrong! This is a component and should have been capitalized:
function Hello(props) {
  console.log(props);
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat + ' ' + props.toWho}</div>;
}


function HelloWorld() {
  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
  return <Hello toWhat="World" toWho="JavaScript" />;
}


function App() {
  let count = 0;
  const user = {
    name: 'ravi',
    age: 26,
    location: 'delhi'
  }
  var badString = <script>alert('your site has been hacked')</script> // XSS 
  const getLocation = (location) => {
    return location || 'Unknown';
    // return location ? location : 'Unknown';
  }
  const getLocation1 = (location) => {
    if (location) {
      return <li>User Location : {location}</li>
    } else {
      return <li>Location does not exist.</li>
    }

    // return location ? location : 'Unknown';
  }
  const addOne = () => {
    count++;
    console.log("addOne");
    template();
  };
  const minusOne = () => {
    count--;
    console.log("addOne");
    template()
  };
  const reset = () => {
    count = 0;
    console.log("addOne");
    template()
  };

  const template = () => {
    return (<div>
      <h1>Count : {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>)
  }




  return (
    <div className="App">
      <header className="App-header">
        <ul className="custom-class">
          <li>User Name : {user.name}</li>
          <li tabIndex={user.age}>User Age : {user.age}</li>
          <li>User Location : {'New ' + user.location}</li>
          <li>User Location : {['India', 'UK', 'USA'][2]}</li>
          {getLocation1(user.location)}
          {getLocation1('')}
          {badString}
          <li>{
            user.age && user.age >= 18 && <span>You are eligible for vote. Your age is {user.age}</span>
          }</li>
        </ul>
        {template()}
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
