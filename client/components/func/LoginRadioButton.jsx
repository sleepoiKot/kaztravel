import React from 'react';

const radioButton = ({context, stateName, ...rest}) => (
  <input
    {...rest}
    type="radio"
    onChange={() => {
      let state = {
        ...context.state,
        signUp: {
          ...context.state.signUp,
          checked: !context.state.signUp.checked
        },
        signIn: {
          ...context.state.signIn,
          checked: !context.state.signIn.checked
        }
      }
      console.log()
      context.setState(state)
    }}
    checked={context.state[stateName].checked}/>
);

export default radioButton;
