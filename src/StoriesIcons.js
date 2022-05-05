export default function StoriesIcons(props) {
    return (
        <div class="stories-icons">
            <img class="stories-background" src="Imgs/stories_background.jpg" />
            <img class="stories-logo" src={props.src} />
            <p class="ppsmol">{props.text}</p>
        </div>
    )
}