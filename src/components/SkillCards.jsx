import { Box, Flex, Text, Title } from '@mantine/core'
import React from 'react'

const SkillCards = ({id,image, title, color}) => {
   

  return (
    <Flex className="skills-card skill-card"  direction={'column'}
 
     p={'35px 100px'}
      w={'100%'}    bg={'#d5d4d997'} justify={'center'} align={'center'}  style={{boxShadow: "0 0 10px rgba(118, 79, 226, 0.567)",borderRadius:"0.3rem"}} pos={"relative"}
 
    >
        <img  className= {id == 3 || id == 7 ? 'animateR skills-card-img': 'animateF skills-card-img'} style={{width:'60px',  mixBlendMode:'darken' }}   src={image} alt={title} />
        <Text className="skills-card-name" c={'black'} mt={'10px'} >{title}</Text>
        
    </Flex>
  )
}

export default SkillCards