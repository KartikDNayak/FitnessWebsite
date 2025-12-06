import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='content'>
        <div className='title'>
            <h1>LET'S</h1>
            <h1>GET</h1>
            <h1>MOVING</h1>
        </div>
        <div className='sub-title'>
        <p>Your Journy to Fitness Starts here</p>
        <p>Unleash Your Potential</p>
      </div>
      <div className='buttons'>
        <button>Start Your Journy</button>
        <button>Discover Your plan</button>
      </div>
      </div>  
    </section>
  )
}

export default Hero

// import React from 'react';

// const Hero = () => {
//   return (
//     <section className='hero' aria-label="Hero: Fitness intro">
//       <div className='content'>
//         <div className='title' aria-hidden="true">
//           <h1>LET'S</h1>
//           <h1>GET</h1>
//           {/* gradient class to highlight the last word */}
//           <h1 className='gradient'>MOVING</h1>
//         </div>

//         <div className='sub-title' role="region" aria-label="Hero subtitle">
//           <p>Your Journey to Fitness Starts here</p>
//           <p>Unleash Your Potential</p>
//         </div>

//         <div className='buttons' role="group" aria-label="Hero call to action">
//           <button className='btn btn--primary' aria-label="Start your journey">
//             Start Your Journey
//           </button>
//           <button className='btn btn--outline' aria-label="Discover your plan">
//             Discover Your Plan
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

