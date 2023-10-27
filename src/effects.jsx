
import { effects } from "./constants"
function Effects() {

  return (
    <div className="bg-zinc-800 text-white">
  {effects.map((effect, index) => (
    <div className="p-4 border rounded-lg" key={index}>
      <h2 className="text-xl font-semibold">{effect.title}</h2>
      <div className="flex items-center mt-2">
        <img className="object-cover w-20 h-20 mr-2" src={effect.image} alt="soil" />
        <p className="text-left m-4">{effect.content}</p>
      </div>
      <a
        href={effect.link}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        {effect.linkContent}
      </a>
    </div>
  ))}
</div>

    
)
}

export default Effects