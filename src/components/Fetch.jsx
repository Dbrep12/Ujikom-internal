import React, { useState, useEffect } from "react";
import './fetch.css';
import Aos from "aos";

const Fetch = () => {

    const [menu, setMenu] = useState([])
    

    useEffect(() => {
        fetch("http://localhost:3030/post")
            .then((res) => res.json())
            .then((json) => setMenu(json))
    }, [])

    const handleDelete = (id => {
        fetch(`http://localhost:3030/post/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setMenu(menu.filter(post => post.id !== id))
            })
            .catch(error => {
                alert("error deleting", error);
            })
    })

    return (

        <div className="main" data-aos="fade-up" data-aos-duration="3000">
                <div className="main-container">
                    <div className="menu-content">
                        {menu.map((post) => (
                            <div className="container">
                                <div className="box">
                                    <img className="img2" src={post.img} alt="makanan"/>
                                    <h1 className="box-content">{post.nama}</h1>
                                    <h3 className="box-price">{post.price}</h3>
                                    <button onClick={() => { handleDelete(post.id) }}>Hapus </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}
export default Fetch