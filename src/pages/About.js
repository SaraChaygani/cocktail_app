import React from 'react'
import '../styling/about-style.css';

const About = ({ navigateBack }) => {
  return (
    <main className='about-main'>
      <section className='about-section main-display'>
        <button aria-label='Go Back' onClick={() => navigateBack(-1)}>Go Back</button>
        <h1>About</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facere consequuntur atque, accusamus blanditiis hic. Laudantium praesentium, nesciunt doloremque libero fuga ut voluptas vero cumque autem mollitia, voluptate distinctio delectus quo a impedit accusamus ex quaerat unde laboriosam quos fugit qui animi magni! Iste dignissimos sapiente unde sed aut aspernatur incidunt nihil suscipit vel ex architecto vitae nemo perferendis iure dicta sint officiis temporibus veniam magni ipsa, ullam accusantium aperiam impedit. Nihil at consectetur nemo iusto sunt consequatur ut tempore.</p>
      </section>
    </main>
  )
}

export default About