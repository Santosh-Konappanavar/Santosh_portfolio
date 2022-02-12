import { Box, Center, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react';
import "./DownArrow.css";
import "./Skills.css";

export const Skills = ({ skillsRef }) => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

    return(
        <Container mt={250} ref={skillsRef}>
            
            <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Skills</Heading>
            </Center>

            <Center>
                <Heading color='White'>Front End</Heading>
            </Center>
            
            {isLargerThan600 ? 
                <Center>
                    <SimpleGrid columns={4} spacing={10} minW={600}>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="html-5.svg" alt="html" />
                            <Text background='none' marginLeft='5px'>HTML 5</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="css-3.svg" alt="css" />
                            <Text background='none' marginLeft='5px'>CSS 3</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="javascript.svg" alt="js" />
                            <Text background='none' marginLeft='5px'>Javascript</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="react.svg" alt="react" />
                            <Text background='none' marginLeft='5px'>React</Text>
                        </Box>
                        {/* <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="redux.svg" alt="redux" />
                            <Text background='none' marginLeft='5px'>Redux</Text>
                        </Box> */}
                        {/* <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="npm-icon.svg" alt="npm" />
                            <Text background='none' marginLeft='5px'>Npm</Text>
                        </Box> */}
                        {/* <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="tailwindcss-icon.svg" alt="tailwind" />
                            <Text background='none' marginLeft='5px'>Tailwind</Text>
                        </Box> */}
                        {/* <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="highcharts.svg" alt="chart" />
                            <Text background='none' marginLeft='5px'>Chart js</Text>
                        </Box> */}
                    </SimpleGrid>
                </Center> :
                <Center>
                    <SimpleGrid columns={1} spacing={10} minW={120}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="html-5.svg" alt="html" />
                            <Text background='none' marginLeft='5px'>HTML 5</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="css-3.svg" alt="css" />
                            <Text background='none' marginLeft='5px'>CSS 3</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="javascript.svg" alt="js" />
                            <Text background='none' marginLeft='5px'>Javascript</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="react.svg" alt="react" />
                            <Text background='none' marginLeft='5px'>React</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="redux.svg" alt="redux" />
                            <Text background='none' marginLeft='5px'>Redux</Text>
                        </Box>
                        {/* <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="npm-icon.svg" alt="npm" />
                            <Text background='none' marginLeft='5px'>Npm</Text>
                        </Box> */}
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="tailwindcss-icon.svg" alt="tailwind" />
                            <Text background='none' marginLeft='5px'>Tailwind</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src="highcharts.svg" alt="chart" />
                            <Text background='none' marginLeft='5px'>Chart js</Text>
                        </Box>
                    </SimpleGrid>
                </Center> }
            

            <Center mt={20}>
                <Heading color='White'>Back End</Heading>
            </Center>
            
            {isLargerThan600 ? 
            <Center>
                <SimpleGrid columns={4} spacing={10} minW={600}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="nodejs-icon.svg" alt="node" />
                        <Text background='none' marginLeft='5px'>Node js</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="express.svg" alt="express" />
                        <Text background='none' marginLeft='5px'>Express js</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="mongodb.svg" alt="mongodb" />
                        <Text background='none' marginLeft='5px'>MongoDb</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="postman-icon.svg" alt="postman" />
                        <Text background='none' marginLeft='5px'>Postman</Text>
                    </Box>
                </SimpleGrid>
            </Center> :
            <Center>
                <SimpleGrid columns={1} spacing={10} minW={120}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="nodejs-icon.svg" alt="node" />
                        <Text background='none' marginLeft='5px'>Node js</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="express.svg" alt="express" />
                        <Text background='none' marginLeft='5px'>Express js</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="mongodb.svg" alt="mongodb" />
                        <Text background='none' marginLeft='5px'>MongoDb</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="postman-icon.svg" alt="postman" />
                        <Text background='none' marginLeft='5px'>Postman</Text>
                    </Box>
                </SimpleGrid>
            </Center> }

            <Center mt={20}>
                <Heading color='White'>Hosting Platform</Heading>
            </Center>

            {isLargerThan600 ? 
            <Center>
                <SimpleGrid columns={2} spacing={10} minW={300}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="heroku-icon.svg" alt="heroku" />
                        <Text background='none' marginLeft='5px'>Heroku</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="github-icon.svg" alt="heroku" />
                        <Text background='none' marginLeft='5px'>Github Pages</Text>
                    </Box>
                </SimpleGrid>
            </Center> :
            <Center>
                <SimpleGrid columns={1} spacing={10} minW={150}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="heroku-icon.svg" alt="heroku" />
                        <Text background='none' marginLeft='5px'>Heroku</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="github-icon.svg" alt="heroku" />
                        <Text background='none' marginLeft='5px'>Github Pages</Text>
                    </Box>
                </SimpleGrid>
            </Center> }

            <Center mt={20}>
                <Heading color='White'>Version Control</Heading>
            </Center>

            {isLargerThan600 ? 
            <Center>
                <SimpleGrid columns={1} spacing={0} minW={150}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="git-icon.svg" alt="git" />
                        <Text background='none' marginLeft='5px'>GIT</Text>
                    </Box>
                </SimpleGrid>
            </Center>
            :
            <Center>
                <SimpleGrid columns={1} spacing={0} minW={120}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src="git-icon.svg" alt="git" />
                        <Text background='none' marginLeft='5px'>GIT</Text>
                    </Box>
                </SimpleGrid>
            </Center>
            }
            
        </Container>
    )
};