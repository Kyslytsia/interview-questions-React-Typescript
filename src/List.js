import React from "react";

function List({ toggle, question, reset }) {
  return (
    <ul className="list">
      <div className="reset-block">
        <button className="reset" onClick={reset}>
          сброс
        </button>
      </div>

      {question.map((item, i) => {
        let classes = ["list__item"];
        let classes2 = ["list__item-block"];

        if (item.status === true) {
          classes2.push("done");
          classes.push("done-2");
        }

        return (
          <li className={classes.join(" ")} key={i + 1}>
            <div className={classes2.join(" ")}>
              <div>
                <input
                  checked={item.status}
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
