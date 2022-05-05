import StoriesBox from "./StoriesBox"

export default function stories() {
    return (
        <div class="stories">
			<StoriesBox />
			<div class="posts border">
				<div class="post-header">
					<div>
						<img class="img-header" src="Imgs/meowed.png" />
						<h4 class="weight-500">meowed</h4>
					</div>
					<ion-icon name="ellipsis-horizontal-outline"></ion-icon>
				</div>
				<img src="Imgs/gato-telefone 1.png" />
				<div>
					<ion-icon name="heart-outline"></ion-icon>
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
			<div class="posts border">
				<div class="post-header">
					<div>
						<img class="img-header" src="Imgs/barked.png" />
						<h4 class="weight-500">barked</h4>
					</div>
					<ion-icon name="ellipsis-horizontal-outline"></ion-icon>
				</div>
					<img src="Imgs/dog 1.png" />
				<div>
					<ion-icon name="heart-outline"></ion-icon>
					<ion-icon name="chatbubble-outline"></ion-icon>
					<ion-icon name="paper-plane-outline"></ion-icon>
					<ion-icon class="post-bottom-right" name="bookmark-outline"></ion-icon>
				</div>
				<div class="post-bottom-like">
					<img src="Imgs/smallcutecats 1.png" />
					<p>Curtido por <b>smallcutecats</b> e <b>outras 99.523 pessoas</b></p>
				</div>
				<div class="coments">
					<div class="coment">
						<p><b>smallcutecats</b> que fofo</p>
						<ion-icon name="heart-outline"></ion-icon>
					</div>
					<p class="lightgray">12 de janeiro</p>
					<div class="add-coment">
						<div>
							<ion-icon name="happy-outline"></ion-icon>
							<input type="text" placeholder="Adicione um comentário..." />
						</div>
						<button>Publicar</button>
					</div>
				</div>
			</div><div class="posts border">
				<div class="post-header">
					<div>
						<img class="img-header" src="Imgs/barked.png" />
						<h4 class="weight-500">barked</h4>
					</div>
					<ion-icon name="ellipsis-horizontal-outline"></ion-icon>
				</div>
				{/* <video width="100%" height="100%" autoplay muted>
					<source src="Imgs/video.mp4" type="video/mp4">
					<source src="Imgs/video.ogg" type="video/ogg">
					Your browser does not support the video tag.
				</video> */}
				<div>
					<ion-icon name="heart-outline"></ion-icon>
					<ion-icon name="chatbubble-outline"></ion-icon>
					<ion-icon name="paper-plane-outline"></ion-icon>
					<ion-icon class="post-bottom-right" name="bookmark-outline"></ion-icon>
				</div>
				<div class="post-bottom-like">
					<img src="Imgs/9gag.png" />
					<p>Curtido por <b>9gag</b> e <b>outras 10.523 pessoas</b></p>
				</div>
				<div class="coments">
					<div class="coment">
						<p><b>9gag</b> very nice</p>
						<ion-icon name="heart-outline"></ion-icon>
					</div>
					<p class="lightgray">10 de fevereiro</p>
					<div class="add-coment">
						<div>
							<ion-icon name="happy-outline"></ion-icon>
							<input type="text" placeholder="Adicione um comentário..." />
						</div>
						<button>Publicar</button>
					</div>
				</div>
			</div>
		</div>
    )
}