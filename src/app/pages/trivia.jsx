/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, {useState, useEffect} from "react";
import { Select, SelectItem, Button } from "@nextui-org/react";
import axios from "axios";
import {Bars3Icon} from '@heroicons/react/24/solid';

const triviaCategories = [
  {label: "Art & Literature", value: "artliterature"},
  {label: "Language", value: "language"},
  {label: "Science & Nature", value: "sciencenature"},
  {label: "General", value: "general"},
  {label: "Food & Drink", value: "fooddrink"},
  {label: "People & Places", value: "peopleplaces"},
  {label: "Geography", value: "geography"},
  {label: "History & Holidays", value: "historyholidays"},
  {label: "Entertainment", value: "entertainment"},
  {label: "Toys & Games", value: "toysgames"},
  {label: "Music", value: "music"},
  {label: "Mathematics", value: "mathematics"},
  {label: "Religion & Mythology", value: "religionmythology"},
  {label: "Sports & Leisure", value: "sportsleisure"},
]

function trivia () {
  const [triviaData, setTriviaData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const fetchQuestions = async () => {
    try {
      const category = selectedCategories.join(",")
      const response = await axios.get(`http://localhost:9002/api/trivia?category=${category}`);
      setTriviaData(response.data);
    } catch (error) {
      console.error('Error fetching trivia questions on frontend: ', error);
    }
  }

  const handleCategoryChanges = (values) => {
    const selectedValues = Array.isArray(values) ? values : [values]
    setSelectedCategories(selectedValues);
  }

  return (
    <div className="bg-blue-900 flex flex-col items-center justify-center space-y-1">
  <h1 className="text-center font-bold">Test Your Knowledge</h1>
  <div className="flex flex-col items-center justify-center">
    <div className="w-full max-w-md mt-3">
      <Select
        label="Select one or more Categories"
        placeholder=""
        selectionMode="multiple"
        onChange={handleCategoryChanges}
        value={selectedCategories}
        icon={<Bars3Icon />}
        className="w-full text-black"
      >
        {triviaCategories.map((category) => (
          <SelectItem key={category.value} value={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </Select>
    </div>
    <Button onClick={fetchQuestions} className="w-full max-w-md mt-8">Start!</Button>
  </div>
  <div>
    <h2></h2>
    <ul>
      {triviaData.map((question, index) => (
        <li key={index}>{question.text}</li>
      ))}
    </ul>
  </div>
</div>
  )
}

export default trivia
