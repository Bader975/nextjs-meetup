import { Card, GridItem, CardHeader, SimpleGrid, Box, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

export default function CardPage({ data }) {
    return (
        <Box w={'100%'} mt={10} mr={900}>

            <SimpleGrid spacing={50} w={"full"}  borderColor={"blackAlpha.200"}
                borderRadius={"2xl"}
                spacingY={100}
                spacingX={400}
                alignItems={"center"}
                columns={{ base: 1, md: 2, lg: 3 }}>

                {data.map((meetup) => (

                    <GridItem key={meetup.id}>
                        <Card w='sm' mx={"auto"} >
                            <CardBody>
                                <Image
                                    src={meetup.image}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{meetup.title}</Heading>
                                    <Text>
                                        {meetup.address}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        $450
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
                                        Buy now
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue'>
                                        Add to cart
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </GridItem>
                ))}
            </SimpleGrid>
        </Box>
    )
}
