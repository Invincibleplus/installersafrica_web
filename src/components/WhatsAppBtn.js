import React from 'react'

const WhatsAppBtn = () => {
  return (
    <>
    <div className='whatsapp-btn'>
        
        <a href='https://api.whatsapp.com/send/?phone=27763034744&text&app_absent=0'> <i className='bx bx-lg bxl-whatsapp '></i> </a> 
        
        </div>

    <style jsx>
        {`
        .whatsapp-btn {
            position: fixed;
            top: 80%;
            right: 3%;
            // opacity: 0;
            cursor: pointer;
            text-decoration: none;
            color: #fff;
            font-size: 24px;
            font-weight: 700;
            text-align: center;
            background: #1954df;
            border-radius: 50%;
            width: 55px;
            height: 55px;
            line-height: 45px;
            z-index: 100;
            -webkit-transition: 0.5s;
            transition: 0.5s;
        }
     
        .whatsapp-btn i {
            color: white;
            -webkit-transition: 0.5s;
            transition: 0.5s;
            vertical-align: middle;
        }
        .whatsapp-btn:hover {
            background-color: #47C756;
        }
        .whatsapp-btn:hover i {
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
        }
        .whatsapp-btn.active {
            top: 95%;
            -webkit-transform: translateY(-95%);
            transform: translateY(-95%);
            opacity: 1;
            visibility: visible;
        }
        
        
        `}
    </style>
    </>
  )
}

export default WhatsAppBtn