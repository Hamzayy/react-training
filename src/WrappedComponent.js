import React from 'react';
import higherOrderComponent from './HOC';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretToLife}.
  </div>
);

const WrappedComponent = higherOrderComponent(DisplayTheSecret);

export default WrappedComponent;