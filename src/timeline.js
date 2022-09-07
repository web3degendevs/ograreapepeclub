import React from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';

const milestones = [
  {
    id: 1,
    // date: 'MARCH 30, 2022',
    title: 'Little OGRAPC',
    description: ` OG grandmas will release their service dogs to sniff out the codes to find any clues about the missing ograndpapepe’s.`
  },
  {
    id: 2,
    // date: 'July 30, 2021',
    title: 'Husband Meme PFP',
    description: `Grandma works on secret code?`
  },
  {
    id: 3,
    // date: 'July 30, 2018',
    title: 'Retired',
    description:
      'What it does is a mystery to be revealed , as the road is long it will be revealed as we approach it'
  }
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container 
    marginTop={{sm:'40px',lg:'2px'}}
    maxWidth="5xl" p={{ base: 2, sm: 10 }} >
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center"                 color={useColorModeValue('white', 'white')}
         marginBottom={'100'}
     >
        Milestones
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};



const Card = ({ id, title, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
 
  
    <HStack
  
      flex={1}
      p={{ base: 3, sm: 6 }}
      // color={useColorModeValue('green.600', 'green')}
      color="rgb(20, 160, 43)"
      bg={useColorModeValue('gray.100', 'gray.800')}
      background={"rgba(252, 252, 252, 0.093)"}
  


      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
       borderColor: `transparent ${useColorModeValue('#14A02B', '#14A02B')} transparent`,
  
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.400'}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Milestones;