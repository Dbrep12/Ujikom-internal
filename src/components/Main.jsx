import React from "react";
import './style.css'
import { useEffect } from "react";
import DepanResto from '../assets/front-restaurant.jpg'
import Sate from '../assets/sate.jpg'
import Nasi from '../assets/nasi-goreng.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Fade } from "react-slideshow-image";

const Main = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    const hero = [
        {
            url: 'https://1.bp.blogspot.com/-D8dl2xcfA2I/Xpl6_253NYI/AAAAAAAAAdM/Ws0bthLftV8gg3p2rWuGC8qKqbL4ESrYgCLcBGAsYHQ/s1600/ilmuperhotelan.my.id.jpg'

        },
        {
            url: 'https://th.bing.com/th/id/R.5bb0ffb3e944f17377c44f320361da2f?rik=yV91M6Dpyd49Og&riu=http%3a%2f%2fliveswrite.com%2fwp-content%2fuploads%2f2017%2f10%2fcasa-chic06-1024x768.jpg&ehk=ZaU77Yr7RzvY0zxfzK4QMPl5coou5nR8cDTUxjZ42kw%3d&risl=&pid=ImgRaw&r=0'

        },
        {
            url: 'https://cdn.archilovers.com/projects/b_730_7209d1f7-e9b9-4abf-8d01-2bd67664f7b8.jpg'

        },
    ];

    return (
        <main>
            <div className="slide-container">
                <Fade>
                    {hero.map((fadeImage, index) => (
                        <div key={index}>
                            <img style={{ width: '100%', height: '620px' }} src={fadeImage.url} />
                        </div>
                    ))}
                </Fade>
            </div>

            <dic className="about" data-aos="fade-up" data-aos-duration="3000">
                <p>Tentang Restoran Kami</p>
                <div className="about-main">
                    <img src={DepanResto} />
                    <p>Restoran kami berdiri pada tahun 2011, dan kami menggunakan tempat yang strategis untuk makan. harga yang kami pasang cukup terjangkau.
                        <br></br> <br></br>
                        Makanan yang populer di restoran kami adalah nasi goreng, sate, dan mie goreng.
                        <br></br> <br></br>
                        jangan ragu untuk berkunjung ke retoran kami.
                    </p>
                </div>
            </dic>

            <div className="promo-menu" data-aos="fade-up" data-aos-duration="3000">
                <h1>Promo </h1>
                <div className="promo-menu-content">
                    <div className="promo-image">
                        <img src={'https://katalogpromosi.com/wp-content/uploads/2022/05/Quali_10082022p2.jpg'} />
                        <img src={'https://blackgarlic.id/wp-content/uploads/2022/03/7-4.jpg'} />
                        <img src={'https://1.bp.blogspot.com/-EBwWzhgZPXs/X7VSAurNiRI/AAAAAAAEErA/k7pBMGEmlm0NtiJRyCNjrHDkMwauj5EuACNcBGAsYHQ/s1080/Promo-Sate-Khas-Senayan-Diskon-Rp-50.000-khusus-pemesanan-via-Gofood.jpg'} />
                    </div>
                </div>
            </div>

            <div className="main-menu" data-aos="fade-up" data-aos-duration="3000">
                <h1>Menu Populer Kami</h1>
                <div className="menu">
                    <img src={Sate}></img>
                    <img src={Nasi}></img>
                    <img src={'https://cms.bolong.id/img/artikel/hidangan-kwetiau-5u9ad1pi85.jpeg'}/>
                    <img src={'https://th.bing.com/th/id/OIP.X5yfSRD21gkOxIlQ9SMqWAAAAA?rs=1&pid=ImgDetMain'}></img>
                </div>
            </div>
        </main>
    )
}
export default Main