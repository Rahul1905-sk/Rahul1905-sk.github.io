import { Flex, Text, Title } from '@mantine/core'
import React from 'react'

const Card = ({ icon, title, des}) => {
  return (
    <Flex direction={'column'} align={'center'} p={'5px 15px'} sx={{border: '1px solid grey', borderRadius:'.2rem'}} >
        {icon}
        <Title order={5} >{title} </Title>
        <Text fz={'14px'}> {des}</Text>
        
    </Flex>
  )
}

export default Card