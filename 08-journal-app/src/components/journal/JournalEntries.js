import React from 'react'
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

    const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];

  return (
    <div className='journal__entries'>
        {
            entries.map(value => {
                return <JournalEntry
                    key={value}
                />
            })
        }
    </div>
  )
}
