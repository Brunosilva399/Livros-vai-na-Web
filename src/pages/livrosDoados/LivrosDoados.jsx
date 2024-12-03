import s from './livrosDoados.module.scss'
import livro from '../../assets/livro.png'
export default function LivrosDoados (){
    return(
        <section>
        <h2 className={s.title}>Livros Doados</h2>
        <section className={s.cardLivrosDoados}>
            <section className={s.cardLivro}>
                <img src={livro} alt="Imagem do Livro" />
                <div>
                  <h3>O protagonista</h3>
                  <p>Susanne Andrade</p>
                  <p>Ficção</p>
                </div>
            </section>
        </section>
        </section>
    )
} 