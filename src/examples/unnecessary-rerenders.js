// http://localhost:3000/isolated/examples/unnecessary-rerenders.js

import * as React from 'react'

function CountButton({count, onClick}) {
  console.log('CountButton')
  return <button onClick={onClick}>{count}</button>
}

function NameInput({name, onNameChange}) {
  console.log('NameInput')
  return (
    <label>
      Name: <input value={name} onChange={e => onNameChange(e.target.value)} />
    </label>
  )
}
NameInput = React.memo(NameInput)
CountButton = React.memo(CountButton)
function Example() {
  const [name, setName] = React.useState('')
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return (
    <div>
      <div>
        <CountButton count={count} onClick={increment} />
      </div>
      <div>
        <NameInput name={name} onNameChange={setName} />
      </div>
      {name ? <div>{`${name}'s favorite number is ${count}`}</div> : null}
    </div>
  )
}

export default Example

/*
eslint
  no-func-assign: 0,
*/
