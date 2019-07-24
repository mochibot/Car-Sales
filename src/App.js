import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './store/actions';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  const addToCar = (event, feature) => {
    event.preventDefault();
    props.addFeature(feature);
  }
  
  const removeFromCar = (event, feature) => {
    // dispatch an action here to remove an item
    event.preventDefault();
    props.removeFeature(feature)
  };
 
  /*
  const buyItem = item => {
    // dipsatch an action here to add an item
  };
  */

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFromCar={removeFromCar}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addToCar={addToCar}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  additionalPrice: state.additionalPrice,
  car: state.car,
  store: state.store
})

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
