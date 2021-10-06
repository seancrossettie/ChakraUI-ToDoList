import { Avatar } from '@chakra-ui/avatar';
import { IconButton } from '@chakra-ui/button';
import {
  Divider, Flex, Heading, Text
} from '@chakra-ui/layout';
import {
  FiMenu,
  FiHome
} from 'react-icons/fi';
import React, { useState } from 'react';
import NavItem from './NavItem';

export default function Sidebar() {
  const [navSize, setNavSize] = useState('large');
  return (
    <Flex
        pos='sticky'
        left='5'
        h='95vh'
        marginTop='2.5vh'
        boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
        borderRadius={navSize === 'small' ? '15px' : '30px'}
        w={navSize === 'small' ? '75px' : '200px'}
        flexDir='column'
        justifyContent='space-between'
    >
      <Flex
          p='5%'
          flexDir='column'
          alignItems={navSize === 'small' ? 'center' : 'flex-start'}
          as='nav'
      >
        <IconButton
            background='none'
            mt={5}
            _hover={{ background: 'none' }}
            icon={<FiMenu />}
            onClick={() => (navSize === 'small' ? setNavSize('large') : setNavSize('small'))}
        />

        <NavItem navSize={navSize} icon={FiHome} title='Dashboard'/>
        <NavItem navSize={navSize} icon={FiHome} title='Dashboard'/>

      </Flex>
      <Flex
          p='5%'
          flexDir='column'
          w='100%'
          alignItems={navSize === 'small' ? 'center' : 'flex-start'}
          mb={4}
      >
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align='center'>
          <Avatar size='sm' src='https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=' />
          <Flex flexDir='column' ml={4} display={navSize === 'small' ? 'none' : 'flex'}>
            <Heading as='h3' size='sm'>Sean Rossettie</Heading>
            <Text color='grey'>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
