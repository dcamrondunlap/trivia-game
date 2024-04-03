'use client'

import React, {useState} from "react"


function SelectionPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] = useState("");

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  }

  const handleDifficultyChange = (value) => {

  }

  const handleTypeChange = (value) => {

  }

  const handleNumberOfQuestionsChange = (event) => {
    setSelectedNumberOfQuestions(event.target.value)
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.get("http://localhost:9002/api/trivia/questions", {
        params: {
          category: selectedCategory,
          difficulty: selectedDifficulty,
          type: selectedType,
          amount: selectedNumberOfQuestions
        }
      });
      console.log(response.data); // Handle the response data
    } catch (error) {
      console.error("Error fetching trivia questions", error);
      // Handle errors
    }
  }

  return (
    <div className="bg-blue-900 flex flex-col items-center justify-center space-y-1">
      <h1 className="text-center font-bold">Select Options</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md mt-3">
          <label htmlFor="numberOfQuestions">Number of Questions:</label>
          <select
            id="numberOfQuestions"
            value={selectedNumberOfQuestions}
            onChange={handleNumberOfQuestionsChange}
            className="w-full text-black"
          >
            <option value="">Select number of questions</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="w-full max-w-md mt-3">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full text-black"
          >
            <option value="">Select category</option>
            {/* Add options for different categories */}
          </select>
        </div>
        <div className="w-full max-w-md mt-3">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            value={selectedDifficulty}
            onChange={handleDifficultyChange}
            className="w-full text-black"
          >
            <option value="">Select difficulty</option>
            {/* Add options for different difficulty levels */}
          </select>
        </div>
        <div className="w-full max-w-md mt-3">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            value={selectedType}
            onChange={handleTypeChange}
            className="w-full text-black"
          >
            <option value="">Select type</option>
            {/* Add options for different question types */}
          </select>
        </div>
        <button onClick={handleSubmit} className="w-full max-w-md mt-8">
          Start!
        </button>
      </div>
    </div>
  );
};

export default SelectionPage;
