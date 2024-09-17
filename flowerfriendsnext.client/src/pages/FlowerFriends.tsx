import { Box, Container, Flex, Link, Separator } from "@radix-ui/themes";
import banner from "/banner-1.webp";
import AsideNav from "../components/asidenav/asidenav";

function FlowerFriends() {
    return (
        <Container size="4">
            <Flex>
                <AsideNav></AsideNav>
                <Box flexGrow="1">
                    <img src={banner} style={{ width: "100%", maxHeight: "400px", objectFit: "cover"}}></img>
                </Box>
            </Flex>
        </Container>
    );
}

export default FlowerFriends;