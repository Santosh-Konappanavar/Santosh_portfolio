import { Box, Center, Container, Heading, SimpleGrid, Link, Text} from "@chakra-ui/react";
import { BsChevronDoubleUp } from 'react-icons/bs';
import { useMediaQuery } from '@chakra-ui/react';
import "./ContactButton.css";

export const Contact = ({ aboutRef, contactRef }) => {
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

    return(
        <Container pt={50} mt={240} borderTop='1px solid gray' ref={contactRef}>

            <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Contact</Heading>
            </Center>
            <Center>
            <Text color='white' fontSize={15} mt={10}><strong>Contact Number - <br/> </strong><strong color='#C668FF'>8217771352</strong></Text>
            </Center>
            <Center>
            <Text color='white' fontSize={15} mt={10} _hover = {{ cursor: 'pointer', color:'#C668FF' }} ><strong>Email Address - <br/> </strong><strong color='#C668FF'>ssk21m@gmail.com</strong></Text>
            </Center>
            <Center>
            <Text color='white' fontSize={15} mt={10}><strong>Address - <br/> </strong><strong color='#C668FF'>Bagalkot,Karnataka</strong></Text>
            </Center>
            
            <Center mt={10}>
                {isLargerThan700 ? 
                    <SimpleGrid columns={3} spacing={10}>
                        <Link href="https://www.linkedin.com/in/santosh-konappanavar/"
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' target='_blank'
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="LinkedIn" data-front="LinkedIn">
                                </Link>
                        <Link href="https://github.com/Santosh-Konappanavar"
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' target='_blank'
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Github" data-front="Github"></Link>
                        <Link href='https://medium.com/@ssk21m'
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' target='_blank'
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Medium" data-front="Medium"></Link>
                    </SimpleGrid>
                    :
                    <SimpleGrid columns={1} spacing={10}>
                        <Link href="https://www.linkedin.com/in/santosh-konappanavar/"
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' target='_blank'
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="LinkedIn" data-front="LinkedIn">
                                </Link>
                        <Link href="https://github.com/Santosh-Konappanavar"
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' target='_blank'
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Github" data-front="Github"></Link>
                        <Link href='https://medium.com/@ssk21m'
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' target='_blank'
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Medium" data-front="Medium"></Link>
                    </SimpleGrid>
                }

            </Center>
            
            {isLargerThan700 ? 
            <Box ml='49%' mt={-360} pos="absolute">
                <BsChevronDoubleUp 
                    color='#C668FF'    
                    size={40} 
                    cursor='pointer' 
                    className='bounce'
                    onClick={() => {
                        aboutRef.current.scrollIntoView(
                            {
                                behavior: "smooth",
                            }
                        )
                    }}
                />
            </Box>
            :
            <Box ml='46%' mt={-480} pos="absolute">
                <BsChevronDoubleUp 
                    color='#C668FF'    
                    size={40} 
                    cursor='pointer' 
                    className='bounce'
                    onClick={() => {
                        aboutRef.current.scrollIntoView(
                            {
                                behavior: "smooth",
                            }
                        )
                    }}
                />
            </Box>
            }
            
            <Text color='white' fontSize={12} mt={130}>Created by <strong color='#C668FF'>Santosh Konappanavar</strong></Text>

        </Container>
    )
};