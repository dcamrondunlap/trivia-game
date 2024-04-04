'use client'

import React, { useState, } from 'react'
import axios from 'axios'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function TriviaForm() {
  const [numberOfQuestions, setNumberOfQuestions] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('api/trivia/questions', {
        params: {
          amount: numberOfQuestions,
          category,
          difficulty,
          type
        }
      });

      console.log('Fetched trivia questions:', response.data)
    } catch (error) {
      console.error('Error fetching trivia questions', error)
    }
  }

  return (
    <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
  );
}

export default TriviaForm
