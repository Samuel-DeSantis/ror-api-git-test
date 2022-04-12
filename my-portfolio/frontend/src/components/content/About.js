import React from 'react'
import headshot from './sq_profile_picture.jpg'

export default function About() {
  return (
    <section id='about'>
      <div id='about-content'>
        <h3>[1] About Me</h3>
        <p>My name is Samuel DeSantis and I love building, creating, and learning new things! My education is Electrical & Computer Engineering and I recently graduated from <a className='link' href='https://flatironschool.com/courses/coding-bootcamp/' target='_blank' rel="noopener noreferrer">Flatiron School </a> Coding Bootcamp.</p>
        <p></p>
      </div>
      <img id='about-headshot' src={headshot} />
    </section>
  )
}
