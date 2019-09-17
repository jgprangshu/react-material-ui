/*
 *
 * Start reducer
 *
 */
import { NEXT_STEP, PREV_STEP } from './constants';

export const initialState = {
  step :1 ,
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  city: '',
  bio: ''
};

/* eslint-disable default-case, no-param-reassign */
const startReducer = (state = initialState, action) =>{
    switch (action.type) {
      case NEXT_STEP:
      return{
        ...state,
        step : step + action.payload
      }
       
      case PREV_STEP:
      return{
        ...state,
        step : step - action.payload
      }

      default:
      return state
    }
  };

export default startReducer;
