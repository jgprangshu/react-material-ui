import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the start state domain
 */

const selectStartDomain = state => state.start || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Start
 */

const makeSelectStart = () =>
  createSelector(
    selectStartDomain,
    substate => substate,
  );

  const makeSelectStep = () =>
  createSelector(
    selectStartDomain,
    substate => substate.step,
  );

  const makeSelectFName= () =>
  createSelector(
    selectStartDomain,
    substate => substate.firstName,
  );

  const makeSelectLName = () =>
  createSelector(
    selectStartDomain,
    substate => substate.lastName,
  );

  const makeSelectEmail = () =>
  createSelector(
    selectStartDomain,
    substate => substate.email,
  );

  const makeSelectOcc = () =>
  createSelector(
    selectStartDomain,
    substate => substate.occupation,
  );


  const makeSelectCity = () =>
  createSelector(
    selectStartDomain,
    substate => substate.city,
  );


  const makeSelectBio = () =>
  createSelector(
    selectStartDomain,
    substate => substate.bio,
  );
export default makeSelectStart;
export { selectStartDomain,makeSelectStep,makeSelectFName,makeSelectLName
,makeSelectEmail,makeSelectOcc,makeSelectCity,makeSelectBio};
