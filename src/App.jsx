import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import GenerateButton from "./components/GenerateButton/GenerateButton";
import "./App.css";

function App() {
    // Поля для минимального и максимального значения
    const [minVal, setMinVal] = useState("");
    const [maxVal, setMaxVal] = useState("");
    const [result, setResult] = useState(null);

    const handleGenerate = () => {
        // Приводим данные к числовому типу
        const min = parseInt(minVal, 10);
        const max = parseInt(maxVal, 10);

        // Проверяем корректность ввода
        if (isNaN(min) || isNaN(max)) {
            alert("Пожалуйста, введите корректные числовые значения!");
            return;
        }
        if (min > max) {
            alert("Минимальное значение не может быть больше максимального!");
            return;
        }

        // Генерация случайного числа в диапазоне [min, max]
        // Так как min и max проверены и корректны, то все вычисления проходят без NaN-значений.
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setResult(randomNumber);
    };

    return (
        <div className="app-container">
            <InputField
                label="Минимальное значение"
                value={minVal}
                onChange={(e) => setMinVal(e.target.value)}
            />
            <InputField
                label="Максимальное значение"
                value={maxVal}
                onChange={(e) => setMaxVal(e.target.value)}
            />
            <GenerateButton onClick={handleGenerate} />
            {result !== null && (
                <div className="result">Случайное число: {result}</div>
            )}
        </div>
    );
}

export default App;
