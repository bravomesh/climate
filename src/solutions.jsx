import { solutions } from "./constants"

function Solutions() {
  return (
    <div className="bg-zinc-800 text-white">
  {solutions.map((solution, index) => (
    <div className="p-4 border rounded-lg" key={index}>
      <h2 className="text-xl font-semibold">{solution.title}</h2>
      <div className="flex items-center mt-2">
        <img className="object-cover w-20 h-20 mr-2" src={solution.image} alt="soil" />
        <p className="text-left m-4">{solution.content}</p>
      </div>
      <a
        href={solution.link}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        {solution.linkContent}
      </a>
    </div>
  ))}
</div>
  )
}

export default Solutions