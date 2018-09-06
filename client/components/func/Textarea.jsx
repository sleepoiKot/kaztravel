import React from 'react';

const textarea = ({context, stateName, ...rest}) => (
  <textarea
    {...rest}
    className="c-form-textarea"
    onChange={ e => {
      let value = e.currentTarget.value
      if(!context.state[stateName])
        value = e.currentTarget.value.trim()

      context.setState({ [stateName]: value})
    } }
    value={ context.state[stateName] }
  />
);

export default textarea;
