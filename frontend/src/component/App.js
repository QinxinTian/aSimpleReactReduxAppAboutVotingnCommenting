import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  getCategories,
  getPosts,
  changeSortOrder,
  increasePostScore,
  decreasePostScore,
  ASCENDING_ORDER,
  DESCENDING_ORDER
} from '../actions'
import CategoryList from './CategoryList';
import PostList from './PostList';
import './App.css'
 class App extends Component {
   componentWillMount() {
     console.log("props", this.props);
     this.props.getAllCategories();
  }
  onSortFieldChanged = (event) => {
   const { sort } = this.props;
   const newSort = {
     field: event.target.value,
     order: sort.order
   };
   this.props.changeSortOrder(newSort);
 }
   render() {
    /*console.log("render...")
    const { categories } = this.props;
    */
    const { categories, posts, order } = this.props;
    return (
      <Router>
      <div>
      <div>
        <h2>Posts order</h2>
        <select value={sort.field} onChange={this.onSortFieldChanged}>
          <option value="voteScore">Votes</option>
          <option value="timestamp">Timestamp</option>
          </select>
          &nbsp;
          <select value={sort.order} onChange={this.onSortOrderChanged}>
            <option value={ASCENDING_ORDER}>Ascending</option>
            <option value={DESCENDING_ORDER}>Descending</option>
          </select>
          </div>
       </div>
       <div>
       <h2>Categories</h2>
            <CategoryList categories={categories} />
            </div>
            <Route exact path="/" render={ () => (
            <div>
              <h2>Posts</h2>
              <div>
                <PostList posts={posts} {...this.props} />
              </div>
            </div>
          )} />
        </div>
      </Router>
    );
  }
}
 const mapStateToProps = (state) => {
  /*console.log("mapStateToProps - state:", state);*/
  return { ...state }
  const mapDispatchToProps = (dispatch) => {
    return {
      getAllCategories(){
        dispatch(getCategories())
      },
      getPosts(sortBy){
        dispatch(getPosts(sortBy))
      },
      changeSortOrder(sort){
        dispatch(changeSortOrder(sort))
      },
  increasePostScore(id){
    dispatch(increasePostScore(id));
  },
  decreasePostScore(id){
    dispatch(decreasePostScore(id));
      }
    }
  }
