import React, { useState } from "react";

const MyCheckBoxList = [
  {
    order: 0,
    name: "Angular",
  },
  {
    order: 1,
    name: "React",
  },
  {
    order: 2,
    name: "Java",
  },
];

const MultipleCheckBoxComponent = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h3>Multiple checbox </h3> <br />
      <ul>
        {MyCheckBoxList.map(({ name, order }, index) => {
          return (
            <li key={index}>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button type="submit">Save</button>
    </div>
  );
};

export default MultipleCheckBoxComponent;
