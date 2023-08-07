import Calc from "./Components/Userinput/Calc";
import Data from "./Components/Resulttable/Data";
import Heading from "./Components/Header/Heading";
import { useState } from "react";

function App() {
  const [userInput,setUserInput] = useState(null) // For Upcoming State from the Calc Components 

  const handleUpcomingData = (d) => {
    setUserInput(d) // Saving the State
    
}


  const yearlyData = []; // per-year results
  if(userInput){
  let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
  const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput['expected-return'] / 100;
  const duration = +userInput['duration'];

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
}

}


  
  return (
    <div>
        <Heading/> 
        <Calc onUpcoming={handleUpcomingData}/>
        {/* Conditional Rendering Concept including Lifting State Up and passing data as props */}
        {!userInput && <p style={{textAlign:"center"}}>There is No Investment</p>}
        {userInput && <Data data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
