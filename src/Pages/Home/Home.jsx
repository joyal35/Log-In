import React from 'react'
import './Home.css'
import no_jobs from '../../assets/no_content.png'

const Home = () => {
  return (
    <div className='nojobs'>
      <img src={no_jobs} alt="" />
      <p>No Jobs Available</p>
    </div>
  )
}

export default Home
