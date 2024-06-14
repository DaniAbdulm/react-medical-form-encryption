import React, { useEffect, useState } from "react";
import Lottie from 'react-lottie'; 
import animationData from '../media/Animation - 1718360304957.json'
import { clear } from "@testing-library/user-event/dist/clear";

const Checkmark = () => {
    const [animationComplete, setAnimationComplete] = useState(false); 

    const defaultOptions = {
        loop: false, 
        autoplay: true, 
        animationData: animationData, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }; 

    return (
        <div>
            <Lottie options={defaultOptions}
                height={200}
                width={200}
            />
        </div>
    );
}

export default Checkmark;