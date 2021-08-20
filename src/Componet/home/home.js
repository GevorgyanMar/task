import {useEffect, useState} from "react";
import '../main.css'

const Home = () => {
    const [data, setData] = useState([]);
console.log(data)
    const getData = () => {
        fetch('homeData.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <section className="cart-section">
            {data.map((data)=>{
                return <div className="cart-box" >
                    <div className="cart-box-content">
                        <div className="cart-img-block">
                            <img src={data.images} alt=""/>
                        </div>
                        <div className="cart-info">
                            <h2>{data.title}</h2>
                            <p>{data.info}</p>
                        </div>
                    </div>
                </div>
            })}
        </section>
    )
}

export default  Home;