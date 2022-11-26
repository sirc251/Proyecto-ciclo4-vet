//import React, { useContext } from "react"; 
//import { Dataprovider } from "../../context/Dataprovider" 
import IMG1 from "../../images/img01.jpg"
import IMG2 from "../../images/img02.jpg"
import IMG3 from "../../images/img03.jpg"
import IMG4 from "../../images/img04.jpg"
import IMG5 from "../../images/img05.jpg"
import IMG6 from "../../images/img06.jpg"
import IMG7 from "../../images/img07.jpg"
import IMG8 from "../../images/img08.jpg"
import IMG9 from "../../images/img09.jpg"



export const ProductosListas = () => {

    //const value = useContext(Dataprovider)
    //const [productos] = value.productos
    //console.log(productos)

    return (
        <>
            <h1 className="title">Productos</h1>
            <div className="productos">
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG1} alt="producto" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Concentrado</h1>
                        <p>Comida</p>
                        <p className="price">$15.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG2} alt="producto" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Cama</h1>
                        <p>Accesorios</p>
                        <p className="price">$30.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG3} alt="producto" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Collar</h1>
                        <p>Accesorios</p>
                        <p className="price">$7.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG4} alt="producto" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Shampoo</h1>
                        <p>Aseo</p>
                        <p className="price">$12.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG5} alt="producto" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Juguete</h1>
                        <p>Accesorio</p>
                        <p className="price">$10.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG6} alt="producto" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Hueso</h1>
                        <p>Accesorio</p>
                        <p className="price">$8.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG7} alt="producto" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Casa para gatos</h1>
                        <p>Accesorio</p>
                        <p className="price">$45.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG8} alt="producto" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Juguete</h1>
                        <p>Accesorio</p>
                        <p className="price">$4.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG9} alt="producto" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Vitaminas</h1>
                        <p>Salud</p>
                        <p className="price">$13.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}