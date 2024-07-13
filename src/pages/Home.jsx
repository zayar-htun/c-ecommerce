import { Box, Container } from "@mui/material";
import Coupon from "../components/Home/Coupon";
import Products from "../components/Home/Products";

export default function Home() {
    return (
        <Box>
            <Container>
                <Box sx={{ my: 6 }}>
                    <Coupon />
                </Box>
                <Box sx={{ my: 6 }}>
                    <Products />
                </Box>
            </Container>
        </Box>
    );
}
