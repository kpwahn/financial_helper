import {createAction} from 'redux-actions';

const setFormValue = createAction(
  'SET_FORM_VALUE_EXISTING_MORTGAGE',
  ({name, value}) => ({name, value})
)

export {
  setFormValue
};
