import React from 'react';
import { withTheme } from 'styled-components';

function Colors(props) {
  return (
    <div>
      {props.theme.backgroundColor}
      {' '}
      {props.theme.color}
    </div>
  );
}

export default withTheme(Colors);
