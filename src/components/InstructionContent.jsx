import React from "react";

const InstructionContent = () => {
  return (
    <div className="panel-body">
      <div className="col-md-12" style={{ display: "block" }}>
        <h4 className="text-center">Please Read the Instructions Carefully</h4>

        <h4>
          <strong>
            <u>General Guidelines:</u>
          </strong>
        </h4>
        <ol>
          <li>
            The competition consists of multiple sections, including Aptitude,
            Logical Reasoning, and Technical Questions.
          </li>
          <li>
            Participants must ensure a stable internet connection while
            attempting the online rounds.
          </li>
          <li>
            The timer will be set at the server. The countdown on the screen
            will show the remaining time. Once the timer runs out, your answers
            will be automatically submitted.
          </li>
          <li>
            Once submitted, answers cannot be changed. Ensure you review them
            before final submission.
          </li>
        </ol>

        <h4>
          <strong>
            <u>Rules and Regulations:</u>
          </strong>
        </h4>
        <ol>
          <li>
            Participants should maintain integrity and avoid any form of unfair
            means. Any malpractice will lead to immediate disqualification.
          </li>
          <li>
            The questions are divided into different difficulty levels, and
            points will be awarded accordingly.
          </li>
          <li>
            The leaderboard will be updated in real-time based on participants'
            scores.
          </li>
          <li>
            The decision of the organizing committee will be final in case of
            any disputes.
          </li>
        </ol>

        <h4>
          <strong>
            <u>Navigation and Answering Questions:</u>
          </strong>
        </h4>
        <ol>
          <li>
            Click on the question number in the question palette on the right to
            navigate to that question directly.
          </li>
          <li>
            Click on <strong>Save & Next</strong> to confirm your answer and
            move to the next question.
          </li>
          <li>
            Click on <strong>Mark for Review</strong> if you want to revisit the
            question later.
          </li>
          <li>
            Unattempted questions will not be penalized unless mentioned
            otherwise in the instructions.
          </li>
        </ol>

        <h4>
          <strong>
            <u>Technical Requirements:</u>
          </strong>
        </h4>
        <ol>
          <li>
            Recommended browsers: Google Chrome, Mozilla Firefox, or Microsoft
            Edge (updated version).
          </li>
          <li>Do not refresh the page during the test.</li>
          <li>
            If any technical issues arise, contact the event coordinators
            immediately.
          </li>
        </ol>

        <hr />
        <span className="text-danger">
          Please note: Once the test starts, ensure you complete it within the
          given time. No re-attempts will be allowed.
        </span>
        <hr />
      </div>
    </div>
  );
};

export default InstructionContent;