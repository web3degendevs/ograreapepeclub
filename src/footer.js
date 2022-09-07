import { Stack, HStack, Link, Divider, Image, IconButton, LinkProps } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React, { Component }  from 'react';

const links = ['All Copyright Reserved by OGRAPC Community',];
const accounts = [
  // {
  //   url: '',
  //   label: 'Github Account',
  //   type: 'gray',
  //   icon: <FaGithub />
  // },
  {
    url: 'https://www.twitter.com',
    label: 'Twitter Account',
    type: 'twitter',
    icon: <FaTwitter />
  },
  // {
  //   url: '',
  //   label: 'LinkedIn Account',
  //   type: 'linkedin',
  //   icon: <FaLinkedin />
  // }
];

const Footer = () => {
  return (
    <Stack
      maxW="9xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      fontStyle={'Italic'}
      direction={{ base: 'column', md: 'row' }}
      // bgColor={'black'}
        color={('white', 'white')}

    >
    

      {/* Desktop Screen */}
      <HStack spacing={4} alignItems="center" d={{ base: 'none', md: 'flex' }}>
        {links.map((link, index) => (
          <CustomLink key={index}>{link}</CustomLink>
        ))}
      </HStack>

    
      <Stack direction="row" spacing={5} pt={{ base: 4, md: 0 }} alignItems="center">
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

const CustomLink = ({ children, ...props }) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
};

export default Footer;