import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import styled from 'styled-components';
import IndividualAnswer from './IndividualAnswer.jsx';
var axios = require('axios')

var IndividualQuestions = ({question, postAnswerfunc}) => {

  var [toggleModal, setToggleModal] = useState(false);
  var [helpful, setHelpful] = useState(question.question_helpfulness);
  var [truth, setTruth] = useState(false);
  var voted = false;

  // can refactor  to prevent multiple upvotes after page loads
  var upVote = (e) => {
    e.preventDefault();
    if (!voted) {
      axios.put('/snuggie/question/helpfulness', {question_id: question.question_id})
      .then((response) => {
        // still needs to be refactored
        if (!truth) {
          setHelpful(helpful + 1);
          setTruth(true);
        }
        voted = true;
      })
      .catch((error) => {
        console.log('Error within updating question helpfulness from Client Side')
      })
    }
  };

  var dummy = () => {
    console.log('clicked')
  }

  return (
    <QnAContainer>
      <QuestionHeaderContainer>
        <QuestionSpan> Q: {question.question_body} </QuestionSpan>
        <HelpfulAndAddAnswerContainer>
         <AddAnswerSpan onClick={() => setToggleModal(!toggleModal)}> Add Answer </AddAnswerSpan>
          {toggleModal && <AddAnswer postAnswer={postAnswerfunc} toggleModal={setToggleModal}q={question}/>}
          <HelpfulAnswerSpan> Helpful? </HelpfulAnswerSpan>
           <YesQuestionSpan onClick={upVote}> Yes </YesQuestionSpan>({helpful})
        </HelpfulAndAddAnswerContainer>
      </QuestionHeaderContainer>
      <AnswerListContainer>
        <AnswerList key={question.question_id} answerList={question.answers} />
      </AnswerListContainer>
    </QnAContainer>
  )
};

// styled components
var QnAContainer = styled.div`
  padding-top: 1rem;
  padding-bottom; 1rem;
  border-bottom: 2px solid grey;
`;

var YesQuestionSpan = styled.span`
  text-decoration: underline;
  :hover {
    cursor: pointer;
    color: blue;
  };
`;

var AddAnswerSpan = styled.span`
  text-decoration: underline;
  color: blue;
`;


var QuestionSpan = styled.span`
  display: flex;
  font-weight: bold;
  flex-wrap: wrap;
  width: 40%;
`;

var HelpfulAnswerSpan = styled.div`
  display: flex;
`;

var AnswerListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

var QuestionHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

var HelpfulAndAddAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 17%
`;
export default IndividualQuestions