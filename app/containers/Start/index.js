/**
 *
 * Start
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStart, { makeSelectFName, makeSelectLName, makeSelectEmail, makeSelectStep, makeSelectOcc, makeSelectCity, makeSelectBio } from './selectors';
import reducer from './reducer';
import saga from './saga';
import FormUserDetails from './formUserDetails';

export function Start(props) {
  useInjectReducer({ key: 'start', reducer });
  useInjectSaga({ key: 'start', saga });

  const { step } = props;
  const { firstName, lastName, email, occupation, city, bio } = props;
  const values = { firstName, lastName, email, occupation, city, bio };
  
  console.log(step)
  
    switch ({step}) {
      case 1:
        return (
          <FormUserDetails
            nextStep={props.nextStep}
            handleChange={props.handleChange}
            values={values}
          />
        );
    }
    
}


const mapStateToProps = createStructuredSelector({
  start: makeSelectStart(),
  step:makeSelectStep(),
  firstName : makeSelectFName(),
  lastName : makeSelectLName(),
  email: makeSelectEmail(),
  occupation: makeSelectOcc(),
  city: makeSelectCity(),
  bio : makeSelectBio()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Start);
