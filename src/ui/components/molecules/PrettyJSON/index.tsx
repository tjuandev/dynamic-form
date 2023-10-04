import { Flex } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { type PrettyJSONProps } from './types'

export const PrettyJson = ({ data }: PrettyJSONProps) => {
  const formattedJson = JSON.stringify(data, null, 2)

  return (
    <AnimatePresence>
      <Flex
        alignItems="center"
        bg="gray.800"
        borderRadius="md"
        color="white"
        fontFamily="monospace"
        fontSize="sm"
        height="100%"
        padding="4"
        whiteSpace="pre-wrap"
      >
        {formattedJson}
      </Flex>
    </AnimatePresence>
  )
}
