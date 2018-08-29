import React from 'react'
import InputMask from 'react-input-mask'

export default Input = (props) => {
  const { context, parentState, stateName, name, validation, ...rest } = props
  let errorMessage

  if(validation && context.state[parentState].submitted && !context.state[parentState][stateName]) {
    errorMessage = (
      <div>
        <span className="error">Укажите {name}</span>
      </div>
    )
  }

  return (
    <div>
      {
        props['data-mask'] ? (
          <InputMask
            ref={i => context.i = i}
            mask={ props['data-mask'] }
            onChange={ e => {
              let value = e.currentTarget.value
              if(validation && !context.state[parentState][stateName])
                value = e.currentTarget.value.trim()

              let state = {
                ...context.state[parentState],
                [stateName]: value
              }
              context.setState({ [parentState]: state})
            }}
            value={ context.state[parentState][stateName] }
            { ...rest }
          />
        ) : (
          <input
            ref={i => context.input = i}
            onChange={ e => {
              let value = e.currentTarget.value
              if(validation && !context.state[parentState][stateName])
                value = e.currentTarget.value.trim()

              let state = {
                ...context.state[parentState],
                [stateName]: value
              }
              context.setState({ [parentState]: state})
            }}
            value={ context.state[parentState][stateName] }
            { ...rest }
          />
        )
      }
      {errorMessage}
    </div>
  )
}
