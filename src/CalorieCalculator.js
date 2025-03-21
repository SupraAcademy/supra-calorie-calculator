import React, { useState } from "react";

export default function CalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [calories, setCalories] = useState(null);

  const activityMultipliers = {
    "Low (1-3 hrs/week)": 1.4,
    "Moderate (4-10 hrs/week)": 1.6,
    "High (11-20 hrs/week)": 1.8,
    "Very High (20-25 hrs/week)": 2.0
  };

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    const multiplier = activityMultipliers[activityLevel];

    if (!w || !h || !a || !multiplier) {
      setCalories("Please fill out all fields correctly.");
      return;
    }

    const bmr = 10 * w + 6.25 * h - 5 * a + 5;
    const totalCalories = bmr * multiplier;
    setCalories(`${Math.round(totalCalories)} kcal/day`);
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", padding: "2rem", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "400px", margin: "0 auto", background: "#111", padding: "2rem", borderRadius: "10px" }}>
        <h2 style={{ color: "#87CEEB", textAlign: "center" }}>Supra Academy Calorie Calculator</h2>

        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={inputStyle}
        />

        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={inputStyle}
        />

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={inputStyle}
        />

        <label>Activity Level:</label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Activity Level</option>
          {Object.keys(activityMultipliers).map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>

        <button onClick={calculateCalories} style={buttonStyle}>
          Calculate
        </button>

        {calories && (
          <p style={{ marginTop: "1rem", textAlign: "center", color: "#87CEEB", fontWeight: "bold" }}>
            {calories}
          </p>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  margin: "0.5rem 0 1rem 0",
  borderRadius: "5px",
  border: "1px solid #444",
  backgroundColor: "#222",
  color: "#fff"
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#87CEEB",
  color: "#000",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};
