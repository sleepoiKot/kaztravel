import React from 'react'

export default Checkbox = (props) => {
  const { context, stateName, ...rest } = props

  return (
          <input
            {...rest}
            onClick={(e) => context.setState({ [stateName]: e.target.checked})}
            checked={context.state[stateName]}
            type="checkbox" />
    )
}
