import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
 Fonts,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  Input,
  ListItem,
} from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { ethers, BigNumber } from 'ethers';
import { useState } from 'react';
import box from "./images/finalGif.gif";



const CONTRACTAddress = "";

const Simple = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  // const isConnected = Boolean(accounts[0]);
  const isConnected = false;

  async function handleMint() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
             CONTRACTAddress,
            // CONTRACT.abi,
            signer
        );
        try {
            const response = await contract.mint(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.01 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log("error: ", err)
        }
    }
}

const handleDecrement = () => {
  if (mintAmount <= 1) return;
  setMintAmount(mintAmount - 1);
};

const handleIncrement = () => {
  if (mintAmount >= 3 ) return;
  setMintAmount(mintAmount + 1);
};

async function connectAccount() {
    if(window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        setAccounts(accounts);
    }
}

  return (


    <Container maxW={'9xl'}  marginTop={{lg:-45 }}    
    >
         
         <SimpleGrid
  
        marginX={{lg:60}}
           columns={{ base: 1, lg: 2 }}
           spacing={{ base: 8, md: 10 }}
           py={{ base: 18, md: 24 }}>
           <Flex >
             
             <Image
                 marginTop={{lg:-65 }}
             // maxWidth={'100%'}
            //  height={'1vh'}
             objectFit={'contain'}
             overflow={'hidden'}
             aspect-ratio={'auto'}
            
            //  borderStartStyle={'dotted'}
              // borderWidth={'30px'}
               rounded={'md'}
               alt={'product image'}
               src={box} 
              
           
               fit={'cover'}
               align={'center'}
               position={'none'}
         
               w={'700%'}
               h={{ base: '100%', sm: '500px', lg: '750px' }}
             />
           </Flex>
           <Stack marginY={{lg:70}} spacing={{ base: 6, md: 10 }}>
             <Box  as={'header'}>
               <Heading 
          
                 lineHeight={1.1}
                 fontWeight={900}
                 color={useColorModeValue('green', 'green')}
                 objectFit={"fill"}
                 align={'center'}
                 fontFamily={{ base: '1xl', sm: '4xl', lg: '4xl' }}>
               OLD GRANDMA RARE APEPE CLUB
               </Heading>
               <Text
                 color={useColorModeValue('white', 'white')}
                 fontWeight={300}
                 fontSize={'1xl'}>
                 {/* 10000 original grandma rareapepe’s  spreading ancestral knowledge and wisdom while exploring the web3 to find their lost og grandpas who they have found out are captured and being held in deep in web3 where they are being experimented and their genes are being used to make collection after collection of NFTS . */}
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
               <VStack spacing={{ base: 4, sm: 6 }}>
                 <Text
                   color={useColorModeValue('green.500', 'green')}
                   fontSize={'20'}
                   textAlign={'justify'}
                   marginBottom={{sm:'-6px',lg:'60px'}}
                  //  height={{sm:'12vh 12vh 12vh 12vh ', lg:'0vh 0vh 0vh 0vh'}}
                   fontWeight={'200'}>
                   
                   10k OGrandma Rarepepes exploring the blockchain to share their ancestral, wisdom, knowledge and memes while looking  for their long lost OGrandpa apepepe’s who are held captive deep in web3 and are being experimented on for their genes and traits using solidity & rust to generate collection after collection of NFTS.

                 </Text>
                 <Text  color={useColorModeValue('white', 'white')} fontSize={'lg'}>
                 
                
                 </Text>
               </VStack>
               
             
             </Stack>
        

        <Stack>
             {isConnected ? 
                (            
                <Text 
                 justify="center" 
                 fontSize={'2xl'}
                 align="center"
                 height="5vh"
                fontWeight={'bold'}
                 padding="20px"
                  color={'Green'}>
                   0.01 ETH
                   </Text>
                )
               : (
             <Button
             marginTop={{sm:'1',lg:'0'}}
               rounded={'none'}
               color='black'
                 bgColor='White'
               w={'full'}
               mt={8}
               size={'lg'}
               py={'5'}
               // bg={useColorModeValue('green.900', 'green.50')}
               // color={useColorModeValue('white', 'white.900')}
               textTransform={'uppercase'}
               _hover={{
                //  transform: 'translateY(4px)',
                 boxShadow: 'lg',
                 bgColor:'green',
               color: 'white',
                
            
               }}
               onClick={connectAccount}>
               MINT SOON
             </Button>
               )}
   
               <div>
               {isConnected ? (
                   <div>
                       <Flex align="center" justify="center">
                           <Button 
                               backgroundColor="white"
                               borderRadius="5px"
                               boxShadow="0px 2px 2px 1px green"
                               color="black"
                               cursor="pointer"
                               fontFamily="inherit"
                               padding="25px"
                               marginTop="10px"
                               _hover={{
                                 textDecoration: 'none',
                                 bg: ('green'),
                               }}
                               onClick={handleDecrement}
                           >
                               -
                           </Button>
                           <Input
                               readOnly
                               fontFamily="inherit"
                               width="100px"
                               color="white"
                               height="40px"
                               textAlign="center"
                               padding="25px"
                               paddingLeft="19px"
                               marginTop="10px"
                               type="number"                        
                               value={mintAmount} 
                           />
                           <Button 
                               backgroundColor="white"
                               borderRadius="5px"
                               boxShadow="0px 2px 2px 1px #0F0F0F"
                               color="black"
                               cursor="pointer"
                               fontFamily="inherit"
                               padding="25px"
                               marginTop="10px"
                               _hover={{
                                 textDecoration: 'none',
                                 bg: ('green'),
                               }}
                               onClick={handleIncrement}
                           >
                               +
                           </Button>
                       </Flex>
                       <Flex align="center" justify="center">
                       <Button 
                      
                           backgroundColor="white"
                           borderRadius="5px"
                           boxShadow="0px 2px 2px 1px #0F0F0F"
                           color="black"
                           cursor="pointer"
                           fontFamily="inherit"
                           padding="25px"
                           marginTop="10px"    
                           _hover={{
                             textDecoration: 'none',
                             bg: ('green'),
                           }}           
                           onClick={handleMint}
                       >
                           MINT NOW
                       </Button>
                       </Flex>
                   </div>
               ) : (
                   <Text 
                   align='center'
                       marginTop="20px"
                       marginBottom="100px"
                       fontSize="18px"
                       letterSpacing="-5.5%"
                       fontFamily="VT323"
                       textShadow="0 3px #000000"
                       color="green"
                   >
                       {/* You must be connected to Mint. */}
                   </Text>
               )}
               </div>
               </Stack>
   
             <Stack direction="row" alignItems="center" justifyContent={'center'}>
              
               {/* <Text color={useColorModeValue('white', 'white')}>Mint Now</Text> */}
             </Stack>
           </Stack>
         </SimpleGrid>
       </Container>

   
  );
}
export default Simple;