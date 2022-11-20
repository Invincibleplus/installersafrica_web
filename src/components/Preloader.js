import React from 'react'

const Preloader = () => {
  return (
    <>
    <div className="preloader">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>
            {`
            .preloader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 99999;
                background: #1954df;
            }
            .spinner {
                width: 40px;
                height: 40px;
                position: relative;
                margin: 100px auto;
            }
            .double-bounce1 {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #fff;
                opacity: 0.6;
                position: absolute;
                top: 0;
                left: 0;
                -webkit-animation: sk-bounce 2s infinite ease-in-out;
                animation: sk-bounce 2s infinite ease-in-out;
            }
            .double-bounce2 {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #fff;
                opacity: 0.6;
                position: absolute;
                top: 0;
                left: 0;
                -webkit-animation: sk-bounce 2s infinite ease-in-out;
                animation: sk-bounce 2s infinite ease-in-out;
                -webkit-animation-delay: -1s;
                animation-delay: -1s;
            }
            
            `}
        </style>
    
    </>
  )
}

export default Preloader