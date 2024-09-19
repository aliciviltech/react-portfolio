import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({text, color}) => {
    const word1 = text.split(' ')[0];
    const word2 = text.split(' ')[1];
    console.log(word1)
    console.log(word2)
  return (
    <div className='SectionTitle'>
        <h1 className={`displayText-Regular ${color==='white' && 'whiteColor'}`} >{word1} <span className='displayText-ExtraBold'>{word2}</span></h1>
    </div>
  )
}

export default SectionTitle