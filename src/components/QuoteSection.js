import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const QuoteSection = () => {
  return (
    <div className='section quote'>
     <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>Food is everything we are. It's an extension og nationalist feeling, ethnic feeling, yur personal history, your province, your region, your tribe and your grandma. It's inseparable from those from the get-go.</p>
     <p className='quote-author'>-Anthony Bourdain</p>
    </div>
  )
}

export default QuoteSection
 