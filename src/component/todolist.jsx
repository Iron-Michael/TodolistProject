import React, { useState } from "react";

const Todolist = () => {
  const [todolist, setTolist] = useState([]);
  const [text, setText] = useState("");

  function handleInputChange(event) {
    setText(event.target.value);
  }

  function Addtodo(event) {
    event.preventDefault();
    const newlist = [...todolist];
    newlist.push(text);
    setTolist(newlist);
    setText("");
  }

  function removefromlist(itemremove) {
    const newlist = todolist.filter((item, index) => index !== itemremove);
    setTolist(newlist);
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-blue-300">
      <div className="flex flex-col justify-start items-center w-4/5 px-8 h-96 bg-gray-200 rounded-lg">
        <div className="text-2xl font-semibold my-6">Todolist</div>
        <div className="w-full h-60 bg-gray-300 overflow-y-auto p-4 rounded-lg">
          <ul>
            {todolist.map((item, index) => (
              <li key={index} className="my-2 flex items-center">
                <div className="flex-grow">{item}</div>
                <button
                  onClick={() => removefromlist(index)}
                  className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 bg-red-500 p-2 mt-4 rounded-lg">
          <input
            type="text"
            placeholder="Add a new todo"
            className="w-full py-2 px-4 rounded-lg"
            value={text}
            onChange={handleInputChange}
          />
        </div>
        <div className="bg-gray-300 mt-4 p-2 hover:bg-gray-400 rounded-lg">
          <button
            onClick={Addtodo}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
