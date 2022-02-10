import { Center, Container, Heading, Box, SimpleGrid, Image, Link, Text } from "@chakra-ui/react";
import "./DownArrow.css";
import { useMediaQuery } from '@chakra-ui/react';
import "./Video.css";
import { useState } from "react";
import { DemoVideoOne, DemoVideoThree } from "./DemoVideo";
import "./Projects.css";

export const Projects = ({ projectRef }) => {
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
    const [showVideoOne, setShowVideoOne] = useState(false);
    // const [showVideoTwo, setShowVideoTwo] = useState(false);
    const [showVideoThree, setShowVideoThree] = useState(false);

    const closeDemoVideoOne = () => {
        setShowVideoOne(false);
    }

    // const closeDemoVideoTwo = () => {
    //     setShowVideoTwo(false);
    // }

    const closeDemoVideoThree = () => {
        setShowVideoThree(false);
    }

    return(
        <> 
            {isLargerThan1200 ? 
            <Container mt={150} mb={150} ref={projectRef}>
            <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Projects</Heading>
            </Center>
            {/* minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }} */}
            <Center mt={60}>
                <SimpleGrid columns={2} spacing={30}>
                    <Container className="projectCard">
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="groww-project.png" alt="groww-project" />
                        </Box>
                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">A full-stack clone of groww application developed by 6 members in time span of 5 days.
                                    We have added features like filter products, view product graph, set SIP amount, OTP mail validation etc. 
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                                <Text className="techStack">Node</Text>
                                <Text className="techStack">MongoDb</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://groww-project.herokuapp.com/home" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    onClick={() => setShowVideoOne(true)}>
                                    Demo
                                </Link>
                            </Box>
                        </Box>
                        {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null}
                    </Container>

                    {/* <Container className="projectCard">
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="groww-project.png" alt="adidas-project" />
                        </Box>

                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">A full-stack clone of groww application developed by 6 members in time span of 5 days.
                                    We have added features like filter products, view product graph, set SIP amount, OTP mail validation etc. 
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                                <Text className="techStack">Node</Text>
                                <Text className="techStack">MongoDb</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://groww-project.herokuapp.com/home" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    onClick={() => setShowVideoTwo(true)}>
                                    Demo
                                </Link>
                            </Box>
                        </Box>
                        {showVideoTwo ? <DemoVideoTwo closeDemoVideoTwo={closeDemoVideoTwo} /> : null}
                    </Container> */}

                    <Container className="projectCard">
                        <Box borderRadius='20px'> 
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="adidas-project.png" alt="adidas-project" />
                        </Box>

                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">A front-end clone of adidas webpage developed by 4 members in time span of 6 days.
                                    We have added features like filter products, toggle product images, delete a product from cart, payment validation etc. 
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/taherahmed14/adidas-Front-end-project" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://taherahmed14.github.io/adidas-Front-end-project/Project%20Files/adidas_home_page.html" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    onClick={() => setShowVideoThree(true)}>
                                    Demo
                                </Link>
                            </Box>
                        </Box>
                        {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null}
                    </Container>
            
                </SimpleGrid>
                </Center>
                </Container>

                :

                <Container mt={150} mb={150} ref={projectRef}>
                <Center>
                    <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Projects</Heading>
                </Center>
                {/* minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }} */}
                <Center mt={60}>
                    <SimpleGrid columns={1} spacing={30}>
                        <Container className="projectCard">
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="groww-project.png" alt="groww-project" />
                            </Box>
                            <Box mt={-4} p={10} className="projectButton">
                                <Box className="projectDescBox">
                                    <Text className="projectDescText">A full-stack clone of groww application developed by 6 members in time span of 5 days.
                                        We have added features like filter products, view product graph, set SIP amount, OTP mail validation etc. 
                                    </Text>
                                </Box>

                                <Box display='flex' className="techStackBox" justifyContent='center'>
                                    <Text className="techStack">HTML</Text>
                                    <Text className="techStack">CSS</Text>
                                    <Text className="techStack">JS</Text>
                                    <Text className="techStack">Node</Text>
                                    <Text className="techStack">MongoDb</Text>
                                </Box>

                                <Box className="buttonBox">
                                    <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Code
                                    </Link>
                                    <Link href="https://groww-project.herokuapp.com/home" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Website
                                    </Link>    
                                    {/* <Link textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        onClick={() => setShowVideoOne(true)}>
                                        Demo
                                    </Link> */}
                                </Box>
                            </Box>
                            {/* {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null} */}
                        </Container>

                        {/* <Container className="projectCard">
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="groww-project.png" alt="adidas-project" />
                            </Box>

                            <Box mt={-4} p={10} className="projectButton">
                                <Box className="projectDescBox">
                                    <Text className="projectDescText">A full-stack clone of groww application developed by 6 members in time span of 5 days.
                                        We have added features like filter products, view product graph, set SIP amount, OTP mail validation etc. 
                                    </Text>
                                </Box>

                                <Box display='flex' className="techStackBox" justifyContent='center'>
                                    <Text className="techStack">HTML</Text>
                                    <Text className="techStack">CSS</Text>
                                    <Text className="techStack">JS</Text>
                                    <Text className="techStack">Node</Text>
                                    <Text className="techStack">MongoDb</Text>
                                </Box>

                                <Box className="buttonBox">
                                    <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Code
                                    </Link>
                                    <Link href="https://groww-project.herokuapp.com/home" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Website
                                    </Link>     */}
                                    {/* <Link textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        onClick={() => setShowVideoTwo(true)}>
                                        Demo
                                    </Link> */}
                                {/* </Box>
                            </Box>
                            {/* {showVideoTwo ? <DemoVideoTwo closeDemoVideoTwo={closeDemoVideoTwo} /> : null} */}
                        {/* </Container> */}

                        <Container className="projectCard">
                            <Box borderRadius='20px'> 
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="adidas-project.png" alt="adidas-project" />
                            </Box>

                            <Box mt={-4} p={10} className="projectButton">
                                <Box className="projectDescBox">
                                    <Text className="projectDescText">A front-end clone of adidas webpage developed by 4 members in time span of 6 days.
                                        We have added features like filter products, toggle product images, delete a product from cart, payment validation etc. 
                                    </Text>
                                </Box>

                                <Box display='flex' className="techStackBox" justifyContent='center'>
                                    <Text className="techStack">HTML</Text>
                                    <Text className="techStack">CSS</Text>
                                    <Text className="techStack">JS</Text>
                                </Box>

                                <Box className="buttonBox">
                                    <Link href="https://github.com/taherahmed14/adidas-Front-end-project" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Code
                                    </Link>
                                    <Link href="https://taherahmed14.github.io/adidas-Front-end-project/Project%20Files/adidas_home_page.html" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Website
                                    </Link>    
                                    {/* <Link textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        onClick={() => setShowVideoThree(true)}>
                                        Demo
                                    </Link> */}
                                </Box>
                            </Box>
                            {/* {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null} */}
                        </Container>
                
                    </SimpleGrid>
                    </Center>
                </Container>
                }
        </>
    )
};