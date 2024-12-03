import imagem1 from '../../assets/imagem1.png'
import imagem2 from '../../assets/imagem2.png'
import imagem3 from '../../assets/imagem3.png'
import imagem4 from '../../assets/imagem4.png'
import s from './inicio.module.scss'
export default function Inicio()
{
    return(
        <main>
            <section className={s.BackgroundInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <section className={s.caixa}>

                <p className={s.paragrafo}>Por que devo doar?</p>

                <section className={s.cards}>
                    <section className={s.card}>
                        <img src={imagem1} alt="img1" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section className={s.card}>
                        <img src={imagem2} alt="img1" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section className={s.card}>
                        <img src={imagem3} alt="img1" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section className={s.card}>
                        <img src={imagem4} alt="img1" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </section>
            </section>

            </section>
        </main>
    )   
}