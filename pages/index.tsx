import { Container,  Flex, Box, Grid, Heading, useColorModeValue } from "@chakra-ui/react"

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
                            Takuya Matsuyama
                        </Heading>
                        <p>Digital Craftsman ( Artist / Developer / Designer )</p>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};