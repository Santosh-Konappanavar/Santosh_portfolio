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
            <Container mt={130} mb={150} ref={projectRef}>
            <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF'  alignContent='center'>My Statistics</Heading>
            </Center>

            <Center mt={60} mb={50}>
                    <Container className="projectCard">
                    <Box borderRadius='20px'>
                            <Image borderRadius='20px 0px 0px 0px' minW={150} height={150} src="stats.png" alt="stats" alignContent='center' className="skincarwidth" />
                        </Box>
                    </Container>
            </Center>
            <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF'  alignContent='center'>My Github Calender</Heading>
            </Center>

            <Center mt={60}>
                <SimpleGrid>
                    <Container className="projectCard">
                    <Box borderRadius='20px'>
                            <Image borderRadius='20px 0px 0px 0px' minW={150} height={150} src="calender2.png" alt="calender" alignContent='center' className="skincarwidth" />
                    </Box>
                    </Container>
                    <Container className="projectCard">
                    <Box borderRadius='20px'>
                            <Image borderRadius='20px 0px 0px 0px' minW={150} height={150} src="calender.png" alt="calender" alignContent='center' className="skincarwidth" />
                    </Box>
                    </Container>
                </SimpleGrid>
            </Center>

            <Center mt={30}>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Projects</Heading>
            </Center>
           
            <Center mt={60}>
                <SimpleGrid columns={2} spacing={30}>
                    <Container className="projectCard">
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="smallcaseproject.png" alt="smallcaseproject" className="skincarwidth" />
                        </Box>
                        <Text className="projectDescText projectcenter">Smallcase</Text>
                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">Cloned smallcase website using CSS, EJS and JavaScipt for client side & MongoDB and ExpressJS for sever side.
It provides the portfolios of stocks. User can visit, invest and buy stocks.
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
                                <Link href="https://github.com/Santosh-Konappanavar/smallcases_project" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://smallcase.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
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

                    <Container className="projectCard">
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="healthkart.png" alt="smallcaseproject" className="skincarwidth" />
                        </Box>
                        <Text className="projectDescText projectcenter">HealthCart</Text>
                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">Cloned smallcase website using CSS, EJS and JavaScipt for client side & MongoDB and ExpressJS for sever side.
It provides the portfolios of stocks. User can visit, invest and buy stocks.
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
                                <Link href="https://github.com/Santosh-Konappanavar/healthcart" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://hemantjayas.github.io/HealthKart/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
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

                    <Container className="projectCard">
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="conferencepage.png" alt="smallcaseproject" className="skincarwidth" />
                        </Box>
                        <Text className="projectDescText projectcenter">Conference Page</Text>
                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">Cloned smallcase website using CSS, EJS and JavaScipt for client side & MongoDB and ExpressJS for sever side.
It provides the portfolios of stocks. User can visit, invest and buy stocks.
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/Santosh-Konappanavar/capstone-project-Conference-page" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://santosh-konappanavar.github.io/capstone-project-Conference-page/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
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

                    

                    <Container className="projectCard">
                        <Box borderRadius='20px'> 
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="theskincareproject.png" alt="theskincatre-project" className="skincarwidth" />
                        </Box>
                        <Text className="projectDescText projectcenter">TheskinCare</Text>
                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">Build this website individually with use of UI/UX design for the people who wants to use dermatological skin care expertise .
Tech stack used - HTML,CSS,Javascript.
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/Santosh-Konappanavar/Theskincare" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://santosh-konappanavar.github.io/Theskincare/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
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

                :

                <Container mt={150} mb={150} ref={projectRef}>

             <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF'  alignContent='center'>My Statistics</Heading>
            </Center>

            <Center mt={60} mb={50}>
                <SimpleGrid>
                    <Container className="projectCard">
                    <Box borderRadius='20px'>
                            <Image borderRadius='20px 0px 0px 0px' minW={100} height={100} src="stats.png" alt="stats" className="skincarwidth" />
                        </Box>
                    </Container>
                </SimpleGrid>
            </Center>
            <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF'  alignContent='center'>My Github Calender</Heading>
            </Center>

            <Center mt={60}>
                <SimpleGrid>
                    <Container className="projectCard">
                    <Box borderRadius='20px'>
                            <Image borderRadius='20px 0px 0px 0px' minW={100} height={100} src="calender2.png" alt="calender" className="skincarwidth" />
                    </Box>
                    </Container>
                    <Container className="projectCard">
                    <Box borderRadius='20px'>
                            <Image borderRadius='20px 0px 0px 0px' minW={100} height={100} src="calender.png" alt="calender" className="skincarwidth" />
                    </Box>
                    </Container>
                </SimpleGrid>
            </Center>

                <Center>
                    <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Projects</Heading>
                </Center>
                
                <Center mt={60}>
                    <SimpleGrid columns={1} spacing={30}>
                        <Container className="projectCard">
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={200} height={300} src="smallcaseproject.png" alt="smallcase-project" className="skincarwidth" />
                            </Box>
                            <Text className="projectDescText projectcenter">SmallCase</Text>
                            <Box mt={-4} p={10} className="projectButton">
                                <Box className="projectDescBox">
                                    <Text className="projectDescText">Cloned smallcase website using CSS, EJS and JavaScipt for client side & MongoDB and ExpressJS for sever side.
It provides the portfolios of stocks. User can visit, invest and buy stocks. 
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
                                    <Link href="https://github.com/Santosh-Konappanavar/smallcases_project/tree/main/smallcase-clone" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Code
                                    </Link>
                                    <Link href="https://smallcase.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Website
                                    </Link>    
                                   
                                </Box>
                            </Box>
                            
                        </Container>

                        <Container className="projectCard">
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' minW={200} height={300} src="healthkart.png" alt="smallcaseproject" className="skincarwidth" />
                        </Box>
                        <Text className="projectDescText projectcenter">HealthCart</Text>
                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">Cloned smallcase website using CSS, EJS and JavaScipt for client side & MongoDB and ExpressJS for sever side.
It provides the portfolios of stocks. User can visit, invest and buy stocks.
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
                                <Link href="https://github.com/Santosh-Konappanavar/healthcart" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://hemantjayas.github.io/HealthKart/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
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

                    <Container className="projectCard">
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' minW={200} height={300} src="conferencepage.png" alt="smallcaseproject" className="skincarwidth" />
                        </Box>
                        <Text className="projectDescText projectcenter">Conference Page</Text>
                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">Cloned smallcase website using CSS, EJS and JavaScipt for client side & MongoDB and ExpressJS for sever side.
It provides the portfolios of stocks. User can visit, invest and buy stocks.
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/Santosh-Konappanavar/capstone-project-Conference-page" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://santosh-konappanavar.github.io/capstone-project-Conference-page/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
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


                      
                        <Container className="projectCard">
                            <Box borderRadius='20px'> 
                                <Image borderRadius='20px 20px 0px 0px' minW={200}  height={300} src="theskincareproject.png" alt="theskincare-project" className="skincarwidth" />
                            </Box>
                            <Text className="projectDescText projectcenter">TheSkinCare</Text>

                            <Box mt={-4} p={10} className="projectButton">
                                <Box className="projectDescBox">
                                    <Text className="projectDescText">Build this website individually with use of UI/UX design for the people who wants to use dermatological skin care expertise .
Tech stack used - HTML,CSS,Javascript. 
                                    </Text>
                                </Box>

                                <Box display='flex' className="techStackBox" justifyContent='center'>
                                    <Text className="techStack">HTML</Text>
                                    <Text className="techStack">CSS</Text>
                                    <Text className="techStack">JS</Text>
                                </Box>

                                <Box className="buttonBox" justifyContent='center'>
                                    <Link href="https://github.com/Santosh-Konappanavar/Theskincare" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Code
                                    </Link>
                                    <Link href="https://santosh-konappanavar.github.io/Theskincare/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank' fontWeight={"bold"}
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Website
                                    </Link>    
                                   
                                </Box>
                            </Box>
                            
                        </Container>
                
                    </SimpleGrid>
                    </Center>
                </Container>
                }
        </>
    )
};