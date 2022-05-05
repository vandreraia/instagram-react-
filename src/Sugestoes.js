export default function Sugestoes(props) {
 
    return (
        <div class="sugestoes-box">
        <div class="sugestoes-box-inside">
            <img src={props.src} />
            <div class="sugestoes-box-inside-name">
                <p class="weight-500">{props.txt}</p>
                <p class="ppsmol lightgray">Segue você</p>
            </div>
        </div>
        <p class="weight-500 ppsmol blue">Seguir</p>
    </div>
    )
}