import {createAction} from 'redux-actions';

const setFormValue = createAction(
  'SET_FORM_VALUE',
  ({name, value}) => ({name, value})
)

export {
  setFormValue
};
