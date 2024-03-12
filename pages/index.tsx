import { Container,  Flex, Box, Grid, Heading, useColorModeValue, Image } from "@chakra-ui/react"

export default function Index() {
    return(
        <Container maxW="full" display="flex" justifyContent="center">
            <Box
            maxWidth={1500}
            >
                <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                >
                    Hello, I'm a CS Student based in New Zealand!
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Vitames404
                        </Heading>
                        <p>Digital Craftsman ( Artist / Developer / Designer )</p>
                    </Box>
                    <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                    >
                        <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                        >
                            <Image
                            src="pfp.jpg"
                            alt="Profile image"
                            width="100"
                            height="100"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};