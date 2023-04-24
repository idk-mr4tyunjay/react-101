import { useState } from "react"; // Importing the useState hook from React
import data from "./data"; // Importing the data array from a separate file
import "./style.css"; // Importing a CSS file for styling

export default function Accordian() {
  // Defining the Accordian component
  const [selected, setSelected] = useState(null); // Using the useState hook to create a state variable 'selected'

  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const [multiple, setMultiple] = useState([]);

  // Function to handle the selection of an item
  function handleSingleSelection(getCurrentId) {
    // Toggles the 'selected' state between the current item's id and null
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  console.log(selected); // Logging the 'selected' state value to the console

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map(
            (
              dataItem,
              index // Mapping over each item in 'data'
            ) => (
              <div className="item" key={index}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  } // Click handler to select an item
                  className="title"
                >
                  <h3>{dataItem.question}</h3> {/* Displaying the question */}
                  <span>+</span>{" "}
                  {/* Plus sign for indicating expand/collapse */}
                </div>
                {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
              </div>
            )
          )
        ) : (
          <div>No data found </div> // Displaying a message if no data is available
        )}
      </div>
    </div>
  );
}
