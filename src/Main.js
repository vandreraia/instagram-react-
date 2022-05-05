import Stories from "./Stories"
import Sugestoes from "./Sugestoes"
import User from "./User"

export default function Main() {
    const itens = ["Imgs/badvibesmemes 1.png", "Imgs/chibirdart 1.png", "Imgs/razoesparaacreditar 1.png", "Imgs/adorableanimals 1.png", "Imgs/smallcutecats 1.png"]
    const user = ["Imgs/catanacomics 1.png"]
    return (
        <main>
            <Stories />
            <div>
                <div class="sidebar">
                    <User src={user} txt={user.slice(5,-6)} nick={user.slice(5,-8)} />
                    <div class="sugestoes">
                        <div class="sugestoes-box">
                            <p class="weight-500 ppsmol lightgray">Sugestões para você</p>
                            <p class="weight-500 ppsmol">Ver tudo</p>
                        </div>
                        {itens.map(item => <Sugestoes src={item} txt={item.slice(5, -6)}/>)}
                    </div>
                    <div>
                        <p class="fontsize-11 lightergray">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                            Termos • Localizações • Contas mais relevantes • Hashtags •
                            Idioma</p>
                        <p class="fontsize-11 lightergray">© 2021 INSTAGRAM DO FACEBOOK</p>
                    </div>
                </div>
            </div>
        </main>
    )
}