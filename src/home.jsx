import "./App.css"
import soil from "./assets/soil.jpg"
function Home() {
  return (
    <div>
        <section className="mx-auto mt-3 pt-3 px-10">
          <h1 className="font-bold text-4xl font-mono text-center">Welcome to Climate Change Awareness</h1>
          <img className="object-fit w-full" src={soil} alt="soil" />
          <p className="font-normal text-xl font-serif text-left p-4">The effects of global warming are already bringing harm to human communities and the natural world.
            Further temperature rises will have a devastating impact and more action on greenhouse gas emissions is urgently required. 
            Multiple factors contribute to climate change, and multiple actions are needed to address it. 
            The number of people on our planet is one of those factors. Every additional person increases carbon emissions — the rich far more than the 
            poor — and increases the number of climate change victims – the poor far more than the rich</p>
          <p className="py-4 font-serif text-lg">Learn about the causes, effects, and solutions to climate change.</p>
      </section>
  
      <section className="bg-gray-100 p-8 rounded-lg shadow-md text-gray-900">
  <h2 className="text-3xl font-semibold mb-4">About Climate Change</h2>
  <ul className="list-disc ml-6 mb-4">
    <li className="mb-2">
      Definition: Climate change refers to long-term alterations in Earth's average weather patterns, including changes in temperature, precipitation, and extreme weather events.
    </li>
    <li className="mb-2">
      Global Warming: Global warming is a component of climate change. It's the gradual increase in Earth's average surface temperature due to the greenhouse effect, where heat-trapping gases retain heat in the atmosphere.
    </li>
    <li className="mb-2">
      Scientific Consensus: There is a strong scientific consensus that climate change is real and primarily caused by human activities. This consensus is supported by organizations like the IPCC (Intergovernmental Panel on Climate Change).
    </li>
  </ul>
  <p className="text-lg text-gray-700">
    Understanding and addressing climate change is a critical global challenge, with profound implications for the environment, society, and the economy. It requires a collective effort from individuals, businesses, governments, and international cooperation to mitigate its effects and adapt to the changes already underway.
  </p>
</section>


      <section className="cta">
        <h2>Calculate Your Carbon Footprint</h2>
        <p>Use our calculator to estimate your carbon footprint and discover ways to reduce it.</p>
        <a href="#carbon-footprint-calculator" className="cta-button">Calculate Now</a>
      </section>
    </div>
  )
}

export default Home