import s from './livrosDoados.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function LivrosDoados() {
    const [livros, setLivros] = useState([])

    const puxarLivros = async() => {
      
            const resposta = await axios.get("https://api-livros-1-fksg.onrender.com/livros")
            setLivros(resposta.data)
            console.log(resposta)
       
    }

    useEffect(() => {
        puxarLivros()
    }, [])

    return (
        <section>
            <h2 className={s.title}>Livros Doados</h2>
            <section className={s.cardLivrosDoados}>
                {livros.map((item) => (
                    <section className={s.cardLivro}>
                        <img src={item.image_url} alt={item.titulo} />
                        <div>
                            <h3>{item.titulo}</h3>
                            <p>Susanne Andrade</p>
                            <p>{item.categoria}</p>
                        </div>
                    </section>
                ))}
            </section>
        </section>
    )
} 