import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Components/ProductOverview/Overview.jsx';
import QnaIndex from './Components/QuestionsAndAnswers/QnaIndex.jsx';
import RatingsAndReviewsIndex from './Components/RatingsAndReviews/RatingsAndReviewsIndex.jsx'
import RInC from './Components/RelatedItemsAndComparison/RInCIndex.jsx';

var App = () => {
  return(
    <div>
      <h1>Hi</h1>
      <Overview />
      <br/>
      <RInC/>
      <br/>
      <QnaIndex/>
      <br/>
      <RatingsAndReviewsIndex/>
    </div>
  )
}

export default App;