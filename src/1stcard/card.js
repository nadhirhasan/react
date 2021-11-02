import classes from "./card.module.css"
import image from "./image.png" 
import oven from "./microwave.png"

function Card () {
            
    return <div>
        <h1 className = {classes.head}>Shop by catergory</h1>
        <section className = {classes.card_continer}>
        <div className = {classes.card}>
            <img src={image} alt="im" className = {classes.image}/>
            <ul className = {classes.li_continer}>
                <li className = {classes.green}>70% OFF</li>
                <li>Electronics and <br /> Electricals</li>
            </ul>
        </div>


        <div className = {classes.card}>
            <img src={image} alt="im" className = {classes.image}/>
            <ul className = {classes.li_continer}>
                <li className = {classes.green}>70% OFF</li>
                <li>Electronics and <br /> Electricals</li>
            </ul>
        </div>



        <div className = {classes.card}>
            <img src={image} alt="im" className = {classes.image}/>
            <ul className = {classes.li_continer}>
                <li className = {classes.green}>70% OFF</li>
                <li>Electronics and <br /> Electricals</li>
            </ul>
        </div>




        <div className = {classes.card}>
            <img src={image} alt="im" className = {classes.image}/>
            <ul className = {classes.li_continer}>
                <li className = {classes.green}>70% OFF</li>
                <li>Electronics and <br /> Electricals</li>
            </ul>
        </div>




        <div className = {classes.card}>
            <img src={image} alt="im" className = {classes.image}/>
            <ul className = {classes.li_continer}>
                <li className = {classes.green}>70% OFF</li>
                <li>Electronics and <br /> Electricals</li>
            </ul>
        </div>




        <div className = {classes.card}>
            <img src={image} alt="im" className = {classes.image}/>
            <ul className = {classes.li_continer}>
                <li className = {classes.green}>70% OFF</li>
                <li>Electronics and <br /> Electricals</li>
            </ul>
        </div>
    </section>


    <h1 className = {classes.head}>Blockbuster offers!</h1>
        <section className = {classes.card2_continer}>
            <div className = {classes.card2}>
                <span className = {classes.off_tag}>10% OFF</span>
                <img src= {oven} alt="im" className = {classes.image2}/>
                <span className = {classes.dis}>Rs.10500</span>
                <span className = {classes.pri}>Rs.9000</span>
                <h4 className = {classes.name}>Microwave Oven 1000L</h4>
                <button className = {classes.btn}>View Details</button>
            </div>


            <div className = {classes.card2}>
                <span className = {classes.off_tag}>10% OFF</span>
                <img src= {oven} alt="im" className = {classes.image2}/>
                <span className = {classes.dis}>Rs.10500</span>
                <span className = {classes.pri}>Rs.9000</span>
                <h4 className = {classes.name}>Microwave Oven 1000L</h4>
                <button className = {classes.btn}>View Details</button>
            </div>



            <div className = {classes.card2}>
                <span className = {classes.off_tag}>10% OFF</span>
                <img src= {oven} alt="im" className = {classes.image2}/>
                <span className = {classes.dis}>Rs.10500</span>
                <span className = {classes.pri}>Rs.9000</span>
                <h4 className = {classes.name}>Microwave Oven 1000L</h4>
                <button className = {classes.btn}>View Details</button>
            </div>



            <div className = {classes.card2}>
                <span className = {classes.off_tag}>10% OFF</span>
                <img src= {oven} alt="im" className = {classes.image2}/>
                <span className = {classes.dis}>Rs.10500</span>
                <span className = {classes.pri}>Rs.9000</span>
                <h4 className = {classes.name}>Microwave Oven 1000L</h4>
                <button className = {classes.btn}>View Details</button>
            </div>
        </section>
    </div>
}


export default Card