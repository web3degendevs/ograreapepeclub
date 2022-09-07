import {
    Box,
    chakra,
    Container,
    Stack,
    Center,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    Title,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    Input,
    ListItem,
  } from '@chakra-ui/react';
 

  export default function Lore(){
    return(
        // <chakra.h fontSize="4xl" fontWeight="bold" mb={18} textAlign="center" 
        // bgColor={'black'}  
        
        // color={useColorModeValue('white', 'black')}
        // >
        //  The lore

        <Heading
        // bgColor={'black'}
        color='white'
        align='center'
        fontWeight={'BOLD'}
        marginTop={{base:'100px',sm:'100px',lg:'200px'}}
        >
            The Lore
        
<Center>
        <Container 
    marginTop={{lg:'-250px'}}
        maxW={{sm:'5xl',lg:'9xl'}}
        // bgColor={'black'}
       >
            
          <SimpleGrid
        
            columns={{ base: 1, sm:1, lg: 1 }}
            spacing={{ base: 8, md: 10 }}
            spacingX={-100}
            py={{ base: 18, md: 24 }}
            >
          
            <Stack
            width={{lg:'100%'}}
                //  marginY={'2px'}
            spacing={{ base: 6, md: 10 }}>
              <Box
            
              Width={{ lg:'700px'}}
            //   marginX={{lg:50}}
              padding={{base:'1',sm:'l00',lg:'300px 100px 100px 100px'}}
            // padding={{'300px 100px 100px 100px'}}
            //   marginY={'2px'}
               align={"center"} justify={"space-between"} as={'header'}>
                <Text
                //  border={'1px'}
                 borderColor='white'
                  textAlign={'justify'}
                  color="rgb(20, 160, 43)"
                  fontWeight={300}
                  fontSize={{base:'16px', sm:'2xl',lg:'2xl'}}>


                    
 On one sunny afternoon while Grandma was enjoying her meal and watching tv, she saw something about NFT’S on the news , what she witnessed made her plate drop on the floor, In disbelief she couldn't believe her eyes ,all Ape NFT’s they showed  on the tv looked like her long lost  OGrandpa rareapepe but just a lot younger,Grandma immediately turned her computer on went online and searched on opensea about BAYC to her disbelief she found collections after collections of apes with traits and genes of her long lost og rareapepe, she immediately contacted OG missing  rarepepe’s headquarters to her surprise there were 10k OGrandma rareapepe’s just like her who had lost their OGrandpa Raareapepe’s,when she revealed what she found in web3 they all found traits and genes of all missing OGrandpa rareapepe’s in different nft collections , that day OGrandma rareapepe club was born and their mission to find the missing OGrandpa Rareapepe’s for that they were ready to go deep in web3, study every .contract, every code and follow the traits that will lead them to long lost OGrandpa Rareapepe’s.



                  
                </Text>
              </Box>
    
    
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                }>
                
              
              </Stack>
            </Stack>
         
         
            </SimpleGrid>
        </Container>
        </Center>
        </Heading>
        // </chakra.h>
         
    )
  }