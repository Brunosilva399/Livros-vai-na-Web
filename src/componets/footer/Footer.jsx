import s from './Footer.module.scss'
import facebook from '../../assets/facebook.png'
import x from '../../assets/x.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
export default function Footer(){
    return(
        <section>
            <footer>
                <section className={s.contact}>
                    <p className={s.telefone}>4002-8922</p>
                <section className={s.redesSociais}>
                    <a href="#"><img src={facebook} alt="" /></a>
                    <a href=""><img src={x} alt="" /></a>
                    <a href=""><img src={youtube} alt="" /></a>
                    <a href=""><img src={linkedin} alt="" /></a>
                    <a href=""><img src={instagram} alt="" /></a>
                </section>
                </section>
                <section className={s.final}>
                    <p>Layout desenvolvido pela Vai Na Web para fins de estudos - 2024</p>
                </section>
            </footer>
        </section>

    )
}