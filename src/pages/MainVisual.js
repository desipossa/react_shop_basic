import "slick-carousel/slick/slick.css";
import MainSlide from "react-slick";
import { BTN, Inner } from "./common";
import { Link } from "react-router-dom";

const MainVisual = ({ DEFAULT_CONTENTS }) => {
    const option = {
        arrows: false,
    }
    return (
        <MainSlide
            {...option}
            className="MainSlide"
        >
            {
                DEFAULT_CONTENTS.map((slideItm, slideIndx) => {
                    return (
                        <div className={`itm itm0${slideIndx + 1}`}>
                            <Inner className="inner">
                                <h2>{slideItm.title}</h2>
                                <p>{slideItm.description}</p>
                                <BTN color={slideItm.color}><Link to='/'>more</Link></BTN>
                            </Inner>
                        </div>
                    )
                })
            }
        </MainSlide>
    )
}

export default MainVisual;