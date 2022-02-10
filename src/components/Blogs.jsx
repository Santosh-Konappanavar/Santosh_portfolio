import { Container, Center, SimpleGrid, Box, Image, Link, Heading, Text } from "@chakra-ui/react";
import "./DownArrow.css";
import { useMediaQuery } from '@chakra-ui/react';

export const Blogs = ({ blogRef }) => {
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

    return(
        <>
            {isLargerThan1200 ? 
                <Container mt={150} mb={150} ref={blogRef}>
                    <Center>
                        <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Blogs</Heading>
                    </Center>
    
                    <Center mt={60}>
                        <SimpleGrid columns={3} spacing={50}>
                            <Link minW={300} borderBottom='1px solid gray' cursor='pointer' textDecoration='none' target='_blank'
                                href="https://medium.com/@ssk21m/masai-individual-project-freshly-com-clone-637fd1503e16"
                                _hover={{ opacity: '0.5' }}>
                                <Box>
                                    <Image borderRadius='20px 20px 0px 0px' minW={300} height={150} src="freshly.comblog.png" alt="freshly-project" />
                                </Box>
                            
                                <Box color='white' minW={300}
                                    mt={-2} p={0} borderRadius='0px 0px 20px 20px'>
                                    <Text width='300px' fontSize='20px' textAlign='left' ml={10}>
                                        First step towards the big goal.
                                    </Text>
                                    
                                    <Text width='250px' fontSize='12px' color='gray' textAlign='left' ml={10}>
                                        Oct, 12 2021
                                    </Text>
                                </Box>
                            </Link>
        
                            <Link minW={300} borderBottom='1px solid gray' cursor='pointer' textDecoration='none' target='_blank'
                                href="https://medium.com/@arpitshrivastava764/clone-of-healthkart-com-by-using-html-css-and-javascript-7d5d31a08143"
                                    _hover={{ opacity: '0.5' }}>
                                <Box>
                                    <Image borderRadius='20px 20px 0px 0px' minW={350} height={150} src="healthcartblog.png" alt="healthcart-project" />
                                </Box>
                                
                                <Box color='white' minW={300}
                                    mt={-2} p={0} borderRadius='0px 0px 20px 20px'>
                                    <Text width='350px' fontSize='20px' textAlign='left' ml={10}>
                                        Another month, another experience.
                                    </Text>
                                
                                <Text width='250px' fontSize='12px' color='gray' textAlign='left' ml={10}>
                                    Nov, 28 2021
                                </Text>
                            </Box>
                        </Link>
 
                        <Link minW={300} borderBottom='1px solid gray' cursor='pointer' textDecoration='none' target='_blank'
                            href="https://medium.com/@yogeshbogar099/clone-of-meesho-com-7175631ebaaa"
                                _hover={{ opacity: '0.5' }}>
                            <Box>
                                <Image borderRadius='20px 20px 0px 0px' minW={350} height={150} src="meeshoblog.png" alt="meesho-project" />
                            </Box>
                            
                            <Box color='white' minW={300}
                                mt={-2} p={0} borderRadius='0px 0px 20px 20px'>
                                <Text width='350px' fontSize='20px' textAlign='left' ml={10}>
                                    Hi Node Js, I have added you in my project.
                                </Text>
                                
                                <Text width='250px' fontSize='12px' color='gray' textAlign='left' ml={10}>
                                    Dec, 18 2021
                                </Text>
                            </Box>
                        </Link>
                        </SimpleGrid> 
                    </Center>
                </Container>
                :
                <Container mt={80} ref={blogRef}>
                <Center>
                    <Heading color='#C668FF' borderBottom='2px solid #6889FF' width={100} alignContent='center'>Blogs</Heading>
                </Center>
    
                <Center mt={60}>
                <SimpleGrid columns={1} spacing={30}>
                    <Link minW={300} borderBottom='1px solid gray' cursor='pointer' textDecoration='none' target='_blank'
                        href="https://medium.com/@ssk21m/masai-individual-project-freshly-com-clone-637fd1503e16"
                        _hover={{ opacity: '0.5' }}>
                        <Box>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={150} src="freshly.comblog.png" alt="freshly-project" />
                        </Box>
                        
                        <Box color='white' minW={300}
                            mt={-2} p={0} borderRadius='0px 0px 20px 20px'>
                            <Text width='300px' fontSize='20px' textAlign='left' ml={10}>
                                First step towards the big goal.
                            </Text>
                            
                            <Text width='250px' fontSize='12px' color='gray' textAlign='left' ml={10}>
                                Oct, 12 2021
                            </Text>
                        </Box>
                    </Link>

                    <Link minW={300} borderBottom='1px solid gray' cursor='pointer' textDecoration='none' target='_blank'
                        href="https://medium.com/@arpitshrivastava764/clone-of-healthkart-com-by-using-html-css-and-javascript-7d5d31a08143"
                        _hover={{ opacity: '0.5' }}>
                        <Box>
                            <Image borderRadius='20px 20px 0px 0px' minW={350} height={150} src="healthcartblog.png" alt="healthcart-project" />
                        </Box>
                        
                        <Box color='white' minW={300}
                            mt={-2} p={0} borderRadius='0px 0px 20px 20px'>
                            <Text width='300px' fontSize='20px' textAlign='left' ml={10}>
                                Another month another project.
                            </Text>
                            
                            <Text width='250px' fontSize='12px' color='gray' textAlign='left' ml={10}>
                                Nov, 28 2021
                            </Text>
                        </Box>
                    </Link>

                    <Link minW={300} borderBottom='1px solid gray' cursor='pointer' textDecoration='none' target='_blank'
                        href="https://medium.com/@yogeshbogar099/clone-of-meesho-com-7175631ebaaa"
                            _hover={{ opacity: '0.5' }}>
                        <Box>
                            <Image borderRadius='20px 20px 0px 0px' minW={350} height={150} src="meeshoblog.png" alt="meesho-project" />
                        </Box>
                        
                        <Box color='white' minW={300}
                            mt={-2} p={0} borderRadius='0px 0px 20px 20px'>
                            <Text width='350px' fontSize='20px' textAlign='left' ml={10}>
                                Hi Node Js, I have added you in my project.
                            </Text>
                            
                            <Text width='250px' fontSize='12px' color='gray' textAlign='left' ml={10}>
                                Dec, 18 2021
                            </Text>
                        </Box>
                    </Link>
                </SimpleGrid>
                </Center>

                </Container>
            }
        </>
    );
};
