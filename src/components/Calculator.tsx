import React, { useState } from 'react';
import { add } from '../utils/add';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const sum = add(input.replace(/\\n/g, '\n'));
            setResult(`Sum: ${sum}`);
        } catch (error) {
            setResult(error instanceof Error ? error.message : "An error occurred");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">String Calculator</h1>
            <form 
                onSubmit={handleSubmit} 
                className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
            >
                <label 
                    htmlFor="numbers" 
                    className="block text-lg font-medium text-gray-700 mb-2"
                >
                    Enter your numbers (without quotes):
                </label>
                <textarea
                    id="numbers"
                    name="numbers"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., 1,2,3 or //;\n1;2"
                    rows={5}
                    cols={30}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="submit" 
                    className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                    Calculate
                </button>
            </form>
            <p className="mt-4 text-xl text-gray-800">{result}</p>
        </div>
    );
};

export default Calculator;