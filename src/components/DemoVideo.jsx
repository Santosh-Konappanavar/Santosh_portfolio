import { Box } from "@chakra-ui/react";
import GrowwProjectPresentation from "./GrowwProjectPresentation.mp4";
import AdidasProjectPresentation from "./AdidasProjectPresentation.mp4";
import "./Video.css";
import { useState } from "react";
import "./CloseButton.css";

export const DemoVideoOne = ({ closeDemoVideoOne }) => {
    const [closeVideoOne, setCloseVideoOne] = useState(true);

    const handleCloseVideoOne = () => {
        setCloseVideoOne(false);
        closeDemoVideoOne();
    }

    return (
        <>
            {closeVideoOne ? 
                <Box border='1px solid #C668FF' width={800} height={500} position='absolute' marginTop='-33.5%' marginLeft='-0.5%' zIndex={10000}> 
                <Box className="button" ml='46.5%' mt='-29.5%' zIndex={100000} onClick={ handleCloseVideoOne }>
                    Close
                </Box>
                 <video controls>
                     <source src={GrowwProjectPresentation} type="video/mp4" />
                 </video>
             </Box>
            :
            <Box></Box>}
        </>
       
    )
};

export const DemoVideoTwo = ({ closeDemoVideoTwo }) => {
    const [closeVideoTwo, setCloseVideoTwo] = useState(true);

    const handleCloseVideoTwo = () => {
        setCloseVideoTwo(false);
        closeDemoVideoTwo();
    }

    return (
        <>
            {closeVideoTwo ? 
                <Box border='1px solid #C668FF' width={800} height={500} position='absolute' marginTop='-33.5%' marginLeft='-13.3%' zIndex={10000}> 
                <Box className="button" ml='46.5%' mt='-29.5%' zIndex={100000} onClick={ handleCloseVideoTwo }>
                    Close
                </Box>
                 <video controls>
                     <source src={GrowwProjectPresentation} type="video/mp4" />
                 </video>
             </Box>
            :
            <Box></Box>}
        </>
       
    )
};

export const DemoVideoThree = ({ closeDemoVideoThree }) => {
    const [closeVideoThree, setCloseVideoThree] = useState(true);

    const handleCloseVideoThree = () => {
        setCloseVideoThree(false);
        closeDemoVideoThree();
    }

    return (
        <>
            {closeVideoThree ? 
                <Box border='1px solid #C668FF' width={800} height={500} position='absolute' marginTop='-33.5%' marginLeft='-27%' zIndex={10000}> 
                <Box className="button" ml='46.5%' mt='-29.5%' zIndex={100000} onClick={ handleCloseVideoThree }>
                    Close
                </Box>
                 <video controls>
                     <source src={AdidasProjectPresentation} type="video/mp4" />
                 </video>
             </Box>
            :
            <Box></Box>}
        </>
       
    )
};