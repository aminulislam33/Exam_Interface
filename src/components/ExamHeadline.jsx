import { useContext, useEffect, useState } from "react";
import "./headline.css";
import { ExamContext } from "../store/myStore";

const ExamHeadline = () => {
  const { ExamTime, User, response, ExamTitle } = useContext(ExamContext);
  const timeLeft = (new Date(ExamTime.end) - Date.now()) / 1000;

  const [time, setTime] = useState(timeLeft);
  const [isActive, setActive] = useState(true);

  const submitResponse = ()=>{
    localStorage.removeItem("response");
  }

  useEffect(() => {
    let timer;
    if (isActive && time > 0) {
      timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      setActive(false);
      setTime(0);
    }

    return () => clearInterval(timer);
  }, [time, isActive]);

  return (
    <>
      <div className="headline">
        <img src="./public/profile.png" alt="" />
        <div className="headlineContent">
          <p>Candidate Name : {User.name}</p>
          <p>Exam Name : {ExamTitle.title}</p>
          <p>
            Time :{" "}
            {`0${Math.floor((time % (3600 * 60)) / 3600)}:${Math.floor(
              (time % 3600) / 60
            )}:${Math.floor(time % 60)}`}
          </p>
        </div>
        <div className="submitButton">
          <button onClick={submitResponse}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default ExamHeadline;
