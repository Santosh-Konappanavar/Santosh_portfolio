import { Box, Center, Container, Heading, SimpleGrid, Link, Text, Popover, 
    PopoverTrigger, Button, PopoverContent, PopoverArrow, PopoverHeader, PopoverBody } from "@chakra-ui/react";
import { BsChevronDoubleUp } from 'react-icons/bs';
import { useMediaQuery } from '@chakra-ui/react';
import "./ContactButton.css";

export const Contact = ({ aboutRef, contactRef }) => {
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

    return(
        <Container pt={50} mt={250} borderTop='1px solid gray' ref={contactRef}>

            <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Contact</Heading>
            </Center>
            
            <Center mt={10}>
                {isLargerThan700 ? 
                    <SimpleGrid columns={4} spacing={10}>
                        <Popover>
                            <PopoverTrigger>
                                <Button background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black'
                                 textDecoration='none' p={8} border='none' fontSize={16} cursor='pointer'>Gmail</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow border='1px solid white' background='white' />
                                <PopoverHeader background='white' fontSize={14} p={5} paddingBottom={0} borderRadius='10px 0 0 0' >Hey! Want to connect?</PopoverHeader>
                                <PopoverBody background='white' fontSize={15} p={5} borderRadius='0 0 10px 0'>ssk21m@gmail.com</PopoverBody>
                            </PopoverContent>
                        </Popover>
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
                    <SimpleGrid columns={2} spacing={10}>
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
                        <Popover>
                            <PopoverTrigger>
                                <Button background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black'
                                 textDecoration='none' p={8} border='none' fontSize={16} cursor='pointer'>Gmail</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow border='1px solid white' background='white' />
                                <PopoverHeader background='white' fontSize={14} p={5} paddingBottom={0} borderRadius='10px 0 0 0' >Hey! Want to connect?</PopoverHeader>
                                <PopoverBody background='white' fontSize={15} p={5} borderRadius='0 0 10px 0'>ssk21m@gmail.com</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </SimpleGrid>
                }

            </Center>
            
            {isLargerThan700 ? 
            <Box ml='49%' mt={-180} pos="absolute">
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
            <Box ml='46%' mt={-230} pos="absolute">
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
            
            <Text color='white' fontSize={12} mt={150}>Created by <strong color='#C668FF'>Santosh Konappanavar</strong></Text>

        </Container>
    )
};