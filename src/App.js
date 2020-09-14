import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponent from './components/FunctionComponent'
import ClassComponent from './components/ClassComponent'
import WithoutJSX from './components/WithoutJSX';
import PropsUsage from './components/PropsUsage'
import StateUsage from './components/StateUsage';
import SetStateUsage from './components/SetStatesUsage';
import Destructuring from './components/Destructuring'
import EvenHandelling from './components/EventHandelling';
import BindEvent from './components/BindEvent'
import Parent from './components/data-transfer/Parent'
import ConditionalRendring from './components/ConditionalRendring';
import ListRendering from './components/ListRendering';
import Stylesheet from './components/Stylesheet';
import InlineCss from './components/InlineCss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionComponent />
        <ClassComponent />
        <WithoutJSX />
        
        <PropsUsage name="vinay">
          <button>passing html</button>
        </PropsUsage>

        <StateUsage />
        <SetStateUsage />
        <Destructuring name="Tony stark" hereoname="Iron Man" />
        <EvenHandelling />
        <BindEvent />
        <Parent />
        <ConditionalRendring />
        <ListRendering />
        <Stylesheet primary={true}/>
        <InlineCss />

      </header>
    </div>
  );
}

export default App;
