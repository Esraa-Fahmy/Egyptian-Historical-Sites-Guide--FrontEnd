import FindInData from '../data/FindInData'
import './FindIn.css';
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from 'react';

function FindIn() {
    useEffect(() => {
        Aos.init({ duration: 2000 }); 
      }, []); 
    return (
        <>
            <h4 className="FindIn-title text-center mb-3">DESTINATIONS</h4>
            {/* <hr className="FindIn-hr" /> */}
            <div>
                <ul className="FindIn-list list-group mb-5" data-aos="zoom-in">
                    {FindInData.map((item) => (
                        <li key={item.id}> 
                            <h6 className="place-title text-center">{item.place}</h6>
                            <img className="FindInImage" src={item.imageURL} alt={item.AlternativeText} />
                        </li>
                    ))}
                </ul>
            </div> 
        </>
    );
}

export default FindIn;
