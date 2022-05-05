import StoriesIcons from "./StoriesIcons"

export default function StoriesBox() {
	const itens = ["Imgs/9gag.png", "Imgs/meowed.png", "Imgs/barked.png", "Imgs/nathanwpylestrangeplanet.png", "Imgs/wawawiwacomicsa.png", "Imgs/respondeai.png", "Imgs/filomoderna.png", "Imgs/memeriagourmet.png"];
	
	return (
		<div class="stories-box border">
			{itens.map(item => <StoriesIcons src={item} text={item.slice(5, -4)} />)}
			<img class="arrow" src="Imgs/Vector.png" />
		</div>
	)
}