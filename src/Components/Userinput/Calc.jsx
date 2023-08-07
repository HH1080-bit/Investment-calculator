import React, { useState } from 'react';

const Calc = (props) => {


  // Initial Data
    const [userInput, setUserInput] = useState({
      'current-savings': 1000,
      'yearly-contribution': 500,
      'expected-return':7,
      'duration':5
    })
    


    // Handling all Inputs in on function
    const handleUserInput = (identifier, value) => {
      
        setUserInput( (prevState) => {
          return (
            {...prevState,
            [identifier]: +value
            }
          )
        })
          };

    // Reseting Data

    const handleReset = () => {
      setUserInput({
      'current-savings': 1000,
      'yearly-contribution': 500,
      'expected-return':7,
      'duration':5
      })
    }

    // Lifting the state up using this function 
    
    const handleSubmit = (e) => {
      e.preventDefault()
      
      props.onUpcoming(userInput)

    }
    
    return (
        <form className="form" onSubmit={handleSubmit} >
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings"
                  onChange={(event) => handleUserInput("current-savings",event.target.value)}
                  value={userInput["current-savings"]}
                
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" 
                   id="yearly-contribution" 
                   onChange={(event) => handleUserInput("yearly-contribution",event.target.value)}
                   value={userInput["yearly-contribution"]}

                   />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" 
                   id="expected-return"
                   onChange={(event) => handleUserInput("expected-return",event.target.value)}
                   value={userInput["expected-return"]}


            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" 
                   id="duration" 
                   onChange={(event) => handleUserInput("duration",event.target.value)}
                   value={userInput["duration"]}


                   />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    );
}

export default Calc;
