import React from "react";
import questions from "./questions";

function List({ toggle }) {
  return (
    <ul className="list">
      {questions.map((item, i) => {
        let classes = ["list__item-block"];

        if (item.status === true) {
          classes.push("done");
        }

        return (
          <li className="list__item" key={i + 1}>
            <div className={classes.join(" ")}>
              <div>
                <input
                  className="input"
                  type="checkbox"
                  onChange={() => toggle(i + 1)}
                />
              </div>

              {item.question}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
