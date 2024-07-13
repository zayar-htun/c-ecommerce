import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { themeContext } from "../../ThemedApp";
import { useNavigate, useParams } from "react-router-dom";

export default function Products() {
    const { items } = useContext(themeContext);
    const navigate = useNavigate();
    console.log(items);
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        Products
                    </Typography>
                </Box>
                <Box>
                    <Button>View All</Button>
                </Box>
            </Box>
            <Box sx={{ px: 3, my: 1 }}>
                <Divider />
            </Box>
            <Box>
                <Grid container spacing={2}>
                    {items?.map(item => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <Card
                                    sx={{
                                        cursor: "pointer",
                                        "&:hover": {
                                            boxShadow: 4,
                                        },
                                    }}
                                    onClick={() => {
                                        navigate(`/product-detail/${item.id}`);
                                    }}
                                >
                                    <CardMedia
                                        sx={{ height: 240 }}
                                        image={item.image}
                                        title={item.name}
                                    />
                                    <Divider sx={{ my: 1 }} />
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            style={{ fontWeight: "bold" }}
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {item.price} $
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
}
