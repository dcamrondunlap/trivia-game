import Image from "next/image";
import Trivia from "./pages/trivia";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-slate-200 via-gray-500 to-slate-900 min-h-screen flex flex-col py-8 px-4">
    <h1 className="text-center text-3xl font-bold mb-4">Welcome to the Trivia Game!</h1>
    <div className="flex-grow flex flex-col justify-center items-center">
      <div className="bg-gradient-to-tl from-slate-900 via-sky-900 to-slate-700 opacity-75 drop-shadow-md p-6 rounded-lg shadow-md w-[43rem] h-[43rem]">
        <Trivia />
      </div>
    </div>
  </div>
  );
}
