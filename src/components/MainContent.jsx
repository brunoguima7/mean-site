import "../styles/global.css"
import "../styles/main-content.css"
import Button from "./Button.jsx"

export default function MainText() {
    return (
        <div id="main-text">

            <h2 className="title" >SOBRE A NOSSA FESTA</h2>
            <h3 className="sub" >Vocês pediram, e nós voltamos!!</h3>

            <p className="text">
                É com muito prazer que anuncio pra vocês a nossa última festa do ano, com uma proposta totalmente
                diferente daquilo que estamos acostumadas... 
            </p>
            <p className="text">
                Em novembro, dia 11, iremos realizar a última do ano, pra fechar com chave de ouro! Concluir esse ano com essa
                festa é graças a todos vocês que foram em todas as nossas edições e nos apoiaram a crescer e melhorar,
                novembro que nos aguarde, porque essa festa vai ser FODA!!! 
            </p>
            <p className="text">
                Nossa festa contará dessa vez com Open Bar, Jogos com bebida, Piscina e muito mais, então não fique de fora 
                e adquira já seu ingresso aqui mesmo pelo nosso novíssimo site. 
            </p> <br/>
            
            <Button/> <br/>
           
            <h2 id="space-top" className="title">MEAN GIRLS PARTY OPEN BAR</h2>

            <div id="div-listas">
                <h3 className="sub-listas">Destilados:</h3>
                <ul>
                    <li>Gin</li>
                    <li>Vodka</li>
                    <li>Askov de sabores</li>
                    <li>Chanceler</li>
                </ul>

                <h3 className="sub-listas">Sem Álcool:</h3>
                <ul>
                    <li>Energético Tradicional</li>
                    <li>Energético de sabores</li>
                    <li>Água</li>
                </ul>

                <h3 className="sub-listas">Especiais:</h3>
                <ul>
                    <li>Jurupinga e Vodka (Para os jogos)</li>
                    <li>Sucão de Limão</li>
                    <li>Sucão de Maracujá</li>
                </ul>
            </div>
            
            <h2 className="title" >NOVO LOCAL</h2>
            <h3 className="sub" >Agora de casa nova!</h3>

            <p className="text">
                Dessa vez alugamos um local diferente, uma casa com direito até a piscina! Além disso é bem espaçosa e perfeita
                para uma festa como a nossa. Vejam por si mesmos!
            </p>

            <div id="house-div" className="center-div">
                <img src="casa1.jpeg" alt="" className="house-img" /><img src="casa2.jpeg" alt="" className="house-img" /><img src="casa3.jpeg" alt="" className="house-img" />
            </div>

            <h2 id="last-title" className="gran-title" >EAI, VAI FICAR DE FORA ? ADQUIRA JÁ SEU INGRESSO !!!</h2>
            <Button/>
        </div>
    )
}

