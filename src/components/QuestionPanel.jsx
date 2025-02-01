import { useContext, useEffect, useState } from "react";
import { ExamContext } from "../store/myStore";
import "./question.css";

const QuestionPanel = ({index, setIndex}) => {
  const { Questions, SaveResponse, ClearResponse, response, examId } = useContext(ExamContext);
  const prevResponse = response.answers?response.answers.filter((ans)=>(ans.questionId===Questions[index - 1].id)):[];
  const [option, setOption] = useState(null);
  
  useEffect(()=>{
    if(prevResponse.length!==0){
      setOption(prevResponse[0].selectedOption);
    }
    else setOption(null);
  },[index]);

  const nextQuestion = () => {
    const len = Questions.length;
    if (index < len) {
      setIndex(index + 1);
      setOption(null);
    }
  };

  const prevQuestion = () => {
    if (index > 1) {
      setIndex(index - 1);
      setOption(null);
    }
  };

  const saveNext = () => {
    if (option) {
      const questionId = Questions[index - 1].id;
      const selectedOption = option;
      SaveResponse({ questionId, selectedOption, examId });
    }
    const len = Questions.length;
    if (index < len) {
      setIndex(index + 1);
      setOption(null);
    }
  };

  const clear = () => {
    const questionId = Questions[index - 1].id;
    ClearResponse({ questionId, examId});
    setOption(null);
  };

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  return (
    <>
      <div className="questionPanel">
        <p>Question {index}.</p>
        <div className="content">{Questions[index - 1].content}</div>
        {Questions[index - 1].url && (
          <img src={Questions[index - 1].url} alt="" />
        )}

        <div className="options">
          {Questions[index - 1].options.map((op) => (
            <div key={op.id}>
              <input
                type="radio"
                value={op.id}
                name={`option-${index}`}
                id={op.id}
                checked={option === op.id}
                onChange={handleOption}
              />
              <label htmlFor={op.id}>{op.value}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="panelButtons">
        <button onClick={prevQuestion}>Back</button>
        <button style={{background:"#f55442"}} onClick={clear}>Clear</button>
        <button style={{background:"#276e01"}} onClick={saveNext}>Save&Next</button>
        <button onClick={nextQuestion}>Next</button>
      </div>
    </>
  );
};

export default QuestionPanel;
