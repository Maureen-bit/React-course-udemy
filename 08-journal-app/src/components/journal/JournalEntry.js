import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
        className='journal__entry-picture'
        style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://i.pinimg.com/originals/54/38/c4/5438c45e30372987b4da076a1caafdf2.jpg)'
        }}
        >
        </div>
        <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo dias
                </p>
                <p className='journal__entry-content'>
                    text texto texto texto
                </p>
            </div>
        <div className='journal__entry-date-box'>
            <span>monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
