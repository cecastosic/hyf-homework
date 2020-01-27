import React from 'react';
import './App.css';

function Header () {
   return (
    <header className="App-header">
      <h1>Todo List</h1>
    </header>
   );
}

function List (props) {

  const items = props.items.map(item => {
    return <li>{item.description}, {item.deadline}</li>
  });

  return (<ul>{items}</ul>);
}

function ListSection (props) {
  return (
      <section className="List">
          <List items={props.items}/>
      </section>
  );
}
function App() {
  // as future items from DB
  const arrListItems = [
    {description: "Get out of bed" , deadline: "Wed Sep 13 2017"},
    {description: "Brush teeth" , deadline: "Thu Sep 14 2017"},
    {description: "Eat breakfast" , deadline: "Fri Sep 15 2017"},
  ];

  // hooks
  const [state, setState] = React.useState(null);

  setTimeout(() => setState(arrListItems), 3000);

  return (
    // Render a basic static todo list with three items:
    <div className="App">
      <Header />
      {state ? <ListSection items={state}/> : <p>Loading...</p>}
    </div>
  );
}

export default App;
