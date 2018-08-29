import React from 'react'
import InputMask from 'react-input-mask'

export default Input = (props) => {
  const { context, validation, stateName, ...rest } = props

  return props['data-mask'] ? (
    <InputMask
      ref={i => context.i = i}
      mask={ props['data-mask'] }
      onChange={ e => {
        let value = e.currentTarget.value
        if(validation && !context.state[stateName])
          value = e.currentTarget.value.trim()

        context.setState({ [stateName]: value})
      }}
      value={ context.state[stateName] }
      { ...rest }
    />
  ) : (
    <input
      {...rest}
      onChange={ e => {
        let value = e.currentTarget.value
        if(validation && !context.state[stateName])
          value = e.currentTarget.value.trim()

        if({...rest}.type === "number" && value < 0) value = 0

        context.setState({ [stateName]: value})
      } }
      value={ context.state[stateName] }
    />
  )
}
