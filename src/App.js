import React, { useReducer } from 'react';
//import { connect } from 'react-redux';
//import { addFeature, removeFeature } from './store/actions';
import { carReducer, initialState } from './store/reducers/useReducer';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const [inventory, dispatch] = useReducer(carReducer, initialState)
  
  const addToCar = (event, feature) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_FEATURE',
      payload: feature
    })
  }

  const removeFromCar = (event, feature) => {
    event.preventDefault();
    dispatch({
      type: 'REMOVE_FEATURE',
      payload: feature
    })
  }

  /*
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
        <Header car={inventory.car} />
        <AddedFeatures car={inventory.car} removeFromCar={removeFromCar}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={inventory.store} addToCar={addToCar}/>
        <Total car={inventory.car} additionalPrice={inventory.additionalPrice} />
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