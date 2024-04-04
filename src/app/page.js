import React from 'react';
import TriviaForm from './TriviaForm'; // Note the file extension

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Trivia Game</h1>
      <TriviaForm />
    </div>
  );
}
