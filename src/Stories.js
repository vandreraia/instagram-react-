import StoriesBox from "./StoriesBox"
import Post from "./Post"

export default function stories() {
	const itens = [{	
			page: "Imgs/meowed.png",
			img: "Imgs/gato-telefone 1.png" 
		}, {	
			page: "Imgs/barked.png",
			img: "Imgs/dog 1.png" 
		}];
	//debugger
console.log(itens)
return (
	<div class="stories">
		<StoriesBox />
		{itens.map(item => <Post page={item.page} pagetxt={item.page.slice(5, -4)} img={item.img}/>)}
	</div>
)
}