import React from 'react'

const About = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-cover bg-center text-black px-10' style={{backgroundImage: "url('/about-bgpic.webp')"}}>
      <div className='bg-emerald-500 bg-opacity-60 p-8 rounded-md max-w-lg'>
          <h2 className='text-4xl font-bold mb-4' data-aos='fade-up'>About Us</h2>
          <p>Ladies handbags are more than just accessories; they are a perfect blend of style, functionality, and personal expression. These versatile companions come in various designs, sizes, and materials, catering to every occasion and personality. From elegant clutches for formal events to spacious totes and crossbody bags for everyday use, handbags offer a seamless balance of convenience and fashion. They not only carry essentials like wallets, makeup, and gadgets but also complement outfits, adding a touch of sophistication and flair. With a keen focus on quality and design, our collection ensures that every handbag becomes a statement piece, reflecting your unique style.</p>
      </div>
    </section>
  )
}
export default About
