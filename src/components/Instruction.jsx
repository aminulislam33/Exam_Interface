import { useContext, useEffect, useState } from "react";
import InstructionContent from "./InstructionContent";
import { useNavigate } from "react-router-dom";
import { ExamContext } from "../store/myStore";
import "./instruction.css";


const Instruction = () => {
  const { checkProceed, setCheckProceed, ExamTime, setToken, setExamId } = useContext(ExamContext);
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const handleCheck = (event) => {
    setCheckProceed(event.target.value);
  };

  const handleProceed = () => {
    if (checkProceed) {
      navigate("/exam");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const currToken = searchParams.get("token");
    const currExamId = searchParams.get("examId");
    setToken(currToken);
    setExamId(currExamId);

  }, [window.location.search]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currTime = new Date();

      const examStartTime = new Date(ExamTime.start);

      if (currTime >= examStartTime) {
        setIsDisabled(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [ExamTime.start]);

  return (
    <div className="instructionForm">
      <div className="instructionTitle">
        <h2>Instructions</h2>
        <p>Please read carefully all instructions</p>
      </div>
      <div className="instructionBody">
        <InstructionContent />
      </div>
      <div className="instructionCheckBox">
        <input
          type="checkbox"
          name="instructionCheck"
          id="instructionCheck"
          onChange={handleCheck}
        />
        <label htmlFor="instructionCheck">
          If you have read and understood all instructions clearly then check
          this box on your own responsibility
        </label>
      </div>
      <div className="instructionProceed">
        <button id="instructionProceed" onClick={handleProceed} disabled={isDisabled}>
          Proceed
        </button>
      </div>
      {error && (
        <div className="errorMessage">
          <p>Please tick the checkbox</p>
        </div>
      )}
      {isDisabled && (
        <div className="errorMessage">
          <p>Exam has not started yet</p>
        </div>
      )}
    </div>
  );
};

export default Instruction;
