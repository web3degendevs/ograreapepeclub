import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Center,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from "./images/logo-min.png";

const Links = [



  <Link href="https://www.twitter.com" isExternal>
    Twitter
  </Link>,
  <Link href='https://www.discord.com' isExternal>
     Discord
   </Link>,
  <Link  href="https://www.opensea.io" isExternal>
     Opensea 
  </Link>
];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    color={'white'}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: ('green'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>

     
    
      <Box px={10}>
        <Flex  h={100} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
          
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box></Box>
            <Image src={logo} boxSize={{base:"50px",lg:"70px"}} margin="0 15px" 
            _hover={{
              transform: 'translateY(4px)',
              boxShadow: 'lg',
              bgColor: 'black',
            }}
            />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          {/* <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box color={'white'} pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={-50}> OLD APEPE</Box> */}
      
    </>
    
  );

}