import React, { useState } from "react";

function AddCategoryButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [options, setOptions] = useState(["Option1", "Option2", "Option3"]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const addCategory = () => {
    if (newCategory.trim() !== "") {
      setOptions([...options, newCategory]);
      setNewCategory("");
    }
  };

  return (
    <div id="add-category-btn">
      <div className="accordion-header" onClick={toggleDropdown}>
        {selectedOption}
        <i
          className={`fa-solid ${isOpen ? "fa-caret-up" : "fa-caret-down"}`}
        ></i>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
          <div className="input-with-button">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button onClick={addCategory}>Create</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCategoryButton;
