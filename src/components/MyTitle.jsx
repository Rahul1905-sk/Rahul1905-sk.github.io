import React from 'react'
import { Box, Flex, Text, Title, useMantineTheme } from '@mantine/core'


const MyTitle = ({title, des}) => {
  const {primaryColor} = useMantineTheme()
  return (
    <Flex w={'100%'} mb={'50px'} pt={'100px'} justify={'center'} align={'flex-start'} p={'10px'}> 
  
    <Flex justify={'center'} align={'center'} direction={'column'}> 
        <Title order={1}> {`< ${title} />`}</Title>
 
        <Box className="heading-desc">
        {des}
        </Box>


    </Flex>

        
    </Flex>
  )
}

export default MyTitle