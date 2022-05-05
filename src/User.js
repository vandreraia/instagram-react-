export default function User(props) {
    return (
        <div class="sidebar-topo">
        <img class="img-sidebar-topo" src={props.src} />
        <div class="sidebar-span">
            <span class="weight-500">{props.user}</span>
            <span class="weight-300 lightgray">{props.nick}</span>
        </div>
    </div>
    )
}