import React, { useEffect, useState } from "react";
import "./GamePage.css";
import dice1 from "../images/dice_1.png";
import dice2 from "../images/dice_2.png";
import dice3 from "../images/dice_3.png";
import dice4 from "../images/dice_4.png";
import dice5 from "../images/dice_5.png";
import dice6 from "../images/dice_6.png";

const GamePage = () => {



    const [Rand, setRand] = useState(1)
    const [TotalScore, setTotalScore] = useState(0)
    const [UserBtn, setUserBtn] = useState(0);
    const [Pressed, setPressed] = useState(true)
    const [Rules, setRules] = useState(false)
  const [Alert, setAlert] = useState(true)
  const Numbers = [1, 2, 3, 4, 5, 6];
  const diceImg = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };
  const randomValue = () => {
    setRand( Math.floor(Math.random() * (7 - 1) + 1))
  };


  const CheckValue = () => {
    if (Rand === UserBtn) {
      console.log("Matched");
      
    } else {
      console.log("Didn't matched");
    }
  };
  useEffect(()=>
  {
    if(UserBtn != 0)
    {

      if(Rand === UserBtn)
      {
            setTotalScore(prev => prev + UserBtn)
          }
          else if (Rand !== UserBtn && UserBtn !==0)
            {
              setTotalScore(prev => Math.max(0, prev - 2))
            }
      
     }
  
  },[Rand]) 

  const ResetScore = () =>{
    setTotalScore(0)
  }
  return (
    <main>  
      <div className="upper_section">
        <div className="total_score">
          <h1>{TotalScore}</h1>
          <h2>Total Score</h2>
        </div>
        <div className="NumberSelections">
        {!Alert && !Pressed && (
          <div className="alert">You have not selected any number</div>

        )}
          <div className="numbers">
            {Numbers.map((number, index) => {
              return (
                <button
                  key={index}
                  className={UserBtn === number && Pressed ? "Number_Selected" : "Number_btn"}
                  onClick={() => {
                    setAlert(true)
                    setUserBtn(number);
                    setPressed(true)
                  }}
                >
                  {number}
                </button>
              );
            })}
          </div>
          <div className="text">
            <h1>Select Number</h1>
          </div>
        </div>
      </div>
      <div className="botton_section">
        <div className="diceImg">
          <img
            src= {diceImg[Rand]}
            alt="dice image" 
            className="dice_img_setting"
            onClick={()=>{
              if(Pressed)
                {
                setAlert(false)
                randomValue()
                CheckValue();
                setTimeout(() => {
                 setAlert(true);
                }, 3000);

              } 
              setPressed(false)
            }}
          />
        </div>
        <div className="diceText">Click on Dice to roll</div>
        <div className="Rest_btn">
          <button 
          className="Bottom_btn"
          onClick={()=>{
            ResetScore()
          }}
          >Rest Score</button>
        </div>
        <div className="ShowResult_btn">
          <button
          className="Bottom_btn"
          onClick={()=>{
              setRules(
                prev => !prev 
              )
          }}
          >Show Rules</button>
        </div>
        {Rules && (
          <div className="Rule_Text">
            <h1>
            How to play dice game
            </h1>
            <p>
            Select any number
            Click on dice image
            after click on  dice  if selected number is equal to dice number you will get same point as dice 
            if you get wrong guess then  2 point will be dedcuted 
            </p>
           
          </div>
        )}
      </div>
    </main>
  );
};

export default GamePage;
