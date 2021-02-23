import React from 'react';
import Select from 'react-select';
const ReactSelect = (props) => {
  return (
    <Select
      isMulti
      isDisabled={props.disabled}
      placeholder={'Select...'}
      {...props}
    />
  );
};
export default ReactSelect;