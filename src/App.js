import React, { useReducer } from 'react';
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
//import { addFeature, removeFeature } from './store/actions/index';
import { ADD_FEATURE, REMOVE_FEATURE } from './store/actions/index';
import { carReducer, initialState } from './store/reducers/useReducer';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const [additionalPrice, car, store] = useSelector(state => [ state.additionalPrice, state.car, state.store ])
  const dispatch = useDispatch();
  
  // const [inventory, dispatch] = useReducer(carReducer, initialState)
  
  const addToCar = (event, feature) => {
    event.preventDefault();
    dispatch({
      type: ADD_FEATURE,
      payload: feature
    })
  }

  const removeFromCar = (event, feature) => {
    event.preventDefault();
    dispatch({
      type: REMOVE_FEATURE,
      payload: feature
    })
  }

  /* commenting out MVP Redux code
  const addToCar = (event, feature) => {
    event.preventDefault();
    props.addFeature(feature);
  }
  
  const removeFromCar = (event, feature) => {
    // dispatch an action here to remove an item
    event.preventDefault();
    props.removeFeature(feature)
  };
  */

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFromCar={removeFromCar}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={store} addToCar={addToCar}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

export default App;

/*
const mapStateToProps = (state) => ({
  additionalPrice: state.additionalPrice,
  car: state.car,
  store: state.store
})

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
*/