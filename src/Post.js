import React from 'react';

export default function Post(props) {
    const [liked, setLiked] = React.useState("");
    const [outline, setOutline] = React.useState("heart-outline");
    function isLiked() {
        liked == "" ? setLiked("red") : setLiked("");
        outline == "heart-outline" ? setOutline("heart") : setOutline("heart-outline");
    }
    function isLikedImg() {
        setLiked("red");
        setOutline("heart");
    }
    return (
        <div class="posts border">
            <div class="post-header">
                <div>
                    <img class="img-header" src={props.page} />
                    <h4 class="weight-500">{props.pagetxt}</h4>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img onClick={() => isLikedImg()} src={props.img} />
            <div>
                <ion-icon onClick={() => isLiked()} class={liked} name={outline}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon class="post-bottom-right" name="bookmark-outline"></ion-icon>
            </div>
            <div class="post-bottom-like">
                <img src="Imgs/respondeai.png" />
                <p>Curtido por <b>respondeai</b> e <b>outras 101.523 pessoas</b></p>
            </div>
            <div class="coments">
                <div class="coment">
                    <p><b>filomoderna</b> muito bom</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div class="coment">
                    <p><b>barked</b> amei</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <p class="lightgray">22 de janeiro</p>
                <div class="add-coment">
                    <div>
                        <ion-icon name="happy-outline"></ion-icon>
                        <input type="text" placeholder="Adicione um comentário..." />
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
        </div>
    )
}