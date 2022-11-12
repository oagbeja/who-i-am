import { ReactNode } from "react";

interface PropsT {
  header: string;
  body: ReactNode;
}

export default function Jumbotron({ header, body }: PropsT) {
  return (
    <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
      <h2 className="font-semibold text-3xl mb-5">{header}</h2>
      {body}
      <div className="flex justify-center items-center w-screen h-screen space-x-2">
        <div className="w-10 h-10 bg-black animate-fade-in-down"></div>
        <div className="w-10 h-10 bg-black animate-fade-out-down"></div>
        <div className="w-10 h-10 bg-black animate-fade-in-up"></div>
        <div className="w-10 h-10 bg-black animate-fade-out-up"></div>
      </div>
      <button
        type="button"
        className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Learn more
      </button>
    </div>
  );
}
