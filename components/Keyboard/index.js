import React from 'react';

const Keyboard = (props) => {
    const {click, verificar, del} = props;
    return (
        <div className="container">
            <div className="row">
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{click('1')}}>1</div>
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{click('2')}}>2</div>
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{click('2')}}>3</div>
            </div>
            <div className="row">
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{click('4')}}>4</div>
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{click('5')}}>5</div>
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{click('6')}}>6</div>
            </div>
            <div className="row">
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{click('7')}}>7</div>
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{click('8')}}>8</div>
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{click('9')}}>9</div>
            </div>
            <div className="row">
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{verificar()}}>✔️</div>
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{click('0')}}>0</div>
                <div className='col btn btn-outline-primary mt-2 me-2 ' onClick={()=>{del()}}>❌</div>
            </div>
            
        </div>
    );
}

export default Keyboard;
