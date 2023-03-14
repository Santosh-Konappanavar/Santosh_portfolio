import { Box, Center, SimpleGrid, Image, Text, Link } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import "./DownArrow.css";
import "./ResumeButton.css";
import "./About.css";

export const AboutMe = ({ skillsRef, aboutRef }) => {
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

    return (
        <Center mt={60} ref={aboutRef}>

            {isLargerThan900 ? 
            <SimpleGrid columns={2} spacing={0}>
                <Box>
                    <Image 
                        boxSize='500px'
                        objectFit='cover'
                        borderRadius='20% 70% / 30% 50%'
                        ml={100}
                        src="santublack.jpeg" alt='santoshpic' />
                </Box>
                <Box color='white' mr={200} mt={150} minW={500}>
                    <Text fontFamily='helvetica' className='textStyle'>
                        {/* Hi I'm<strong style={{fontSize: "50px", color:"#6889FF"}}> Taher Ahmed</strong>  */}
                        Hi I'm Santosh Konappanavar
                    </Text>
                    
                    <Text fontSize='18px'>
                        A <strong style={{color:"#6889FF"}}>Full Stack Web Developer</strong> based in India. A creative coder who specializes in MERN stack. I make it my mission to design pixel-perfect websites with optimized code that run blazing fast.
                    </Text>

                    <Link margin="auto" className='link' href="https://drive.google.com/file/d/1vXyzeth2Vs7FxbZunCjqiYQsTF5z0nsg/view?usp=share_link" target='_blank'>
                        <span>Resume</span>
                        <div class="wave"></div>
                    </Link>
                </Box>
            </SimpleGrid> 
            :
            <SimpleGrid columns={1} spacing={0}>
            <Box>
                <Image 
                    boxSize='300px'
                    objectFit='cover'
                    borderRadius='80% 30% / 40% 50%'
                    src="santublack.jpeg" alt='Santosh Konappanavar' />
            </Box>
            <Box color='white' minW={300}>
                <Text fontFamily='helvetica' className='textStyle' fontSize={20}>
                    {/* Hi I'm<strong style={{fontSize: "40px", color:"#6889FF"}}> </strong> */}
                    Hi I'm Santosh Konappanavar
                </Text>
                
                <Text fontSize='14px' paddingLeft={15} paddingRight={15}>
                    A <strong style={{color:"#6889FF"}}>Full Stack Web Developer</strong> based in India. A creative coder who specializes in MERN stack. I make it my mission to design pixel-perfect websites or applications with optimized code that run blazing fast.
                </Text>

                <Link margin="auto" className='link' href="https://drive.google.com/file/d/1y0b1CVuJCEAo1_LbzYiIDZHK08GLjYbu/view?usp=sharing">
                    <span>Resume</span>
                    <div class="wave"></div>
                </Link>
            </Box>
        </SimpleGrid>
            }
            <Box mt={700} pos="absolute">
                <BsChevronDoubleDown 
                    color='#C668FF'    
                    size={40} 
                    cursor='pointer' 
                    className='bounce'
                    onClick={() => {
                        skillsRef.current.scrollIntoView(
                            {
                                behavior: "smooth",
                            }
                        )
                    }}
                />
            </Box>

        </Center>
    );
};