import livroIcon from '../../assets/livroIcon.png'
import s from './queroDoar.module.scss'
import axios from 'axios'
import { useState } from 'react'

export default function QueroDoar (){
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) =>{setTitulo(e.target.value)
    }
    const capturaCategoria = (e) =>{setCategoria(e.target.value)
    }
    const capturaAutor = (e) =>{setAutor(e.target.value)
    }
    const capturaImg = (e) =>{setImage_url(e.target.value)
    }

    const envioDados = async () => {
        try {
            const dadosParaEnviar = { titulo, categoria, autor, image_url };
            await axios.post("https://api-livros-1-fksg.onrender.com/doar", dadosParaEnviar);
            alert("Livro doado com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Erro ao doar o livro.");
        }
    }

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