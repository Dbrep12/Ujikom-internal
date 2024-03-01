import React from "react";
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        Aos.init()
    })

    return (
        <>
            <div className="contact">
                <div className="contact-socials">
                    <a href=""><img style={{ height: "100px" }} src={'https://th.bing.com/th/id/OIP.gHiT6G3TizV73pByFBr_igAAAA?rs=1&pid=ImgDetMain'} /></a>
                    <a href=""><img style={{ height: "100px" }} src={'https://th.bing.com/th/id/OIP.aW-aOZNPCqeqI9Cp_tRB6wHaHa?w=800&h=800&rs=1&pid=ImgDetMain'} /></a>
                    <a href=""><img style={{ height: "100px" }} src={'https://th.bing.com/th/id/OIP.o3vAVqUwIBUMRXDOjXwP-QHaHa?rs=1&pid=ImgDetMain'} /></a>
                </div>

            </div>

            <div>
                <div className="map-main" data-aos="fade-up" data-aos-duration="2000">
                    <div className="map">
                        <p>Di tempat ini adalah tempat pertama retoran kami buka.
                            <br></br>
                        </p>
                        <iframe className="map-content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.382837785471!2d106.71337947418317!3d-6.3444419936453516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5826ce42495%3A0x789675f59627dd20!2sLetris%20Indonesia%20Smk%202%2C%20Pd.%20Benda%2C%20Kec.%20Pamulang%2C%20Kota%20Tangerang%20Selatan%2C%20Banten!5e0!3m2!1sid!2sid!4v1708418097769!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact