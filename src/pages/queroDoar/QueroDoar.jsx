import livroIcon from '../../assets/livroIcon.png'
import s from './queroDoar.module.scss'
export default function QueroDoar (){
    return(
        <main className={s.main}>
            <p className={s.texto}>Por favor, preencha o formulário com  suas informações e as informações do Livro</p>
            <section className={s.container}>
                <section className={s.title}>
                    <img src={livroIcon} alt="" />
                    <p>Informações do livro</p>
                </section>

                <form className={s.formulario}>
                    <input  className={s.info} type="text" placeholder='Titulo' />
                    <input  className={s.info} type="text" placeholder='Categoria' />
                    <input className={s.info} type="text" placeholder='Autor' />
                    <input className={s.info} type="text" placeholder='Link da Imagem' />
                </form>
                <button className={s.btn}>Doar</button>
            </section>
        </main>
    )
}