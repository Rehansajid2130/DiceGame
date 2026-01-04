import React from 'react'
import "./Start_Page.css"
import diceImg from "../images/dices.png"

const Start_Page = ({StartGame}) => {
  return (
    <div className='Start_container'>
        <div className='dice_img'>
            <img src={diceImg} alt=""
            className='diceImg_setting'
            />
        </div>
        <div className='start_content'>
            <div>
            <h1>
                Dice Game
            </h1>
            </div>
            <div className='btn_setting'>
                <button
                onClick={StartGame}
                >Play Now</button>
            </div>
        </div>
    </div>
  )
}

export default Start_Page