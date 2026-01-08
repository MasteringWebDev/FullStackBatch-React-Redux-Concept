import './App.css'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

const containerStyle= {
  border: '1px solid black',
  textAlign: 'center',
  padding: '1em',
  margin: '1em'
}

function App() {
  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex' }}>
        <Child1 />
        <Child2 />
      </div>
    </div>
  )
}

export default App

/*
# Redux: Architecture + Flow
  - ARCHITECTURE
    - Redux Store: Contains multiple reducer functions
    - Reducer function: State, Logic to update the state
    - Action object: type (name), payload (data)
      - "Dispatch action": Perform that specific state update as mentioned in the reducer function

  - FLOW
    1. Components which need access to central state "SUBSCRIBE to that state"
    2. Event handlers "DISPATCH the ACTION objects" to cause state updates as per the logic in reducer function

  - Illustrations:
    - src/assets
    - https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif

  - Setup
    0. Install redux and react-redux [DONE]
    1. React app [DONE]
    2. Setup redux store (w/ reducer functions) [DONE]
    3. Connecting react with redux
      - Subscribe
      - Dispatch action
*/