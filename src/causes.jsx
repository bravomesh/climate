import { causes } from "./constants"

function Causes() {
  return (
    <div className="bg-zinc-800 text-white">
  {causes.map((causes, index) => (
    
    <div className="p-4 border rounded-lg" key={index}>
      <h2 className="text-xl font-semibold">{causes.title}</h2>
      <div className="flex items-center mt-2">
        <img className="object-cover w-20 h-20 mr-2" src={causes.image} alt="soil" />
        <p className="text-left m-4">{causes.content}</p>
        
      </div>
      <a
        href={causes.link}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        {causes.linkContent}
      </a>
    </div>
  ))}
</div>
)
}
export default Causes