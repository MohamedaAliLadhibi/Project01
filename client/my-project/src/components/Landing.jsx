import React from 'react';

function Landing() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-semibold text-blue-500 text-center mb-6">Welcome to Your Physic Platform</h1>
        <p className="text-2xl text-gray-700 leading-relaxed mb-6">
          Welcome to our platform dedicated to the fascinating world of physics! Let's delve into the intriguing realm of
          progressive waves. Progressive waves, also known as traveling waves, are a fundamental concept in physics.
          Unlike standing waves, which appear to oscillate in a fixed position, progressive waves propagate through a
          medium, transferring energy from one point to another.
        </p>
        <p className="text-2xl text-gray-700 leading-relaxed mb-6">
          Progressive waves exhibit several key characteristics. They have a wavelength, which is the distance between
          consecutive crests or troughs of the wave. The frequency of a progressive wave represents the number of wave
          cycles passing a fixed point per unit of time, typically measured in hertz (Hz). The speed of a progressive
          wave is determined by the product of its wavelength and frequency, according to the wave equation v = λf.
        </p>
        <p className="text-2xl text-gray-700 leading-relaxed mb-6">
          These waves play a vital role in various natural phenomena and technological applications. From the gentle
          ripples on a pond to the complex interactions of electromagnetic waves, progressive waves offer profound insights
          into the behavior of the universe.
        </p>
        <p className="text-2xl text-gray-700 leading-relaxed mb-6">
          Join us on our journey through the captivating world of physics, where we explore the intricacies of progressive
          waves and beyond.
        </p>
        <div className="flex justify-center">
          <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
  <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
  <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
  <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
  <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
  <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
  <p class="z-10">Discover More</p>
</button>



        </div>
      </div>
    </div>
  )
}

export default Landing;
