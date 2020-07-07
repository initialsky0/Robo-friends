import React from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, getRobots } from '../actions';
import './App.css';

const mapStateToProps = state => {
   return {
      searchField: state.searchRobots.searchField,
      robots: state.getRobots.robots,
      isPending: state.getRobots.isPending,
      error: state.getRobots.error
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onGetRobots: () => dispatch(getRobots())
   }
}

class App extends React.Component {

   componentDidMount() {
      this.props.onGetRobots()
   }

   /* Arrow function will make sure the function stays on the same scoop
      ex. the function below's 'this' refers to App class, but the function will
      be called inside searchBox, which will change 'this' to refer to object 
      inside searchBox. */

   render(){
      const {searchField, onSearchChange, robots, isPending} = this.props;
      const filteredRobots = robots.filter(robot => {
         return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });

      return (isPending) ? 
         (<h1 className='tc'>LOADING...</h1>) :
         (<div className = 'tc'>
            <h1 className = 'f1'>Robo Friends</h1>
            <SearchBox searchChange = {onSearchChange}/>
            <Scroll>
               <ErrorBoundary>
                  <CardList robots = {filteredRobots}/>
               </ErrorBoundary>
            </Scroll>
         </div>
         );
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);