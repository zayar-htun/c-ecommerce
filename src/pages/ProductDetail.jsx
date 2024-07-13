import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    IconButton,
    Snackbar,
    Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { themeContext } from "../ThemedApp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function ProductDetail() {
    const { items, setCount } = useContext(themeContext);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    return (
        <Box>
            <Container>
                <Box sx={{ mb: 4 }}>
                    <IconButton
                        aria-label="delete"
                        onClick={() => {
                            navigate(-1);
                        }}
                        sx={{ my: 1 }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        Product Detail
                    </Typography>
                </Box>

                {items && id ? (
                    <Box>
                        {items
                            .filter(item => item.id === Number(id))
                            .map(item => (
                                <Grid container spacing={4} key={item.id}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <img
                                            src={item.image}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                            alt=""
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <Button
                                            variant="contained"
                                            startIcon={
                                                <CheckCircleOutlineIcon />
                                            }
                                            sx={{
                                                color: "green[800]",
                                                bgcolor: "green[100]",
                                                borderRadius: "3px",
                                                boxShadow: "none",
                                                pointerEvents: "none",
                                            }}
                                        >
                                            In Stock.
                                        </Button>
                                        <Typography
                                            variant="h5"
                                            sx={{ color: "red", mt: 2 }}
                                        >
                                            {item.qty} items left.
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mt: 4,
                                            }}
                                        >
                                            <Typography variant="h5">
                                                Product Name - &nbsp;
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 4,
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="h5">
                                                Product Price - &nbsp;
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {item.price} $
                                            </Typography>
                                        </Box>
                                        <Box sx={{ paddingY: "10px" }}>
                                            <Box
                                                sx={{
                                                    display: "inline-block",
                                                    pr: 3,
                                                }}
                                            >
                                                <Typography>QTY : </Typography>
                                            </Box>
                                            <Box
                                                sx={{ display: "inline-block" }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                        padding:
                                                            "0 90px 10px 0",
                                                        gap: "16px",
                                                    }}
                                                >
                                                    <Box>
                                                        <Button
                                                            variant="outlined"
                                                            onClick={
                                                                handleDecrement
                                                            }
                                                            disabled={
                                                                quantity <= 1
                                                            }
                                                        >
                                                            <RemoveIcon />
                                                        </Button>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="body2">
                                                            {quantity}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Button
                                                            variant="outlined"
                                                            onClick={
                                                                handleIncrement
                                                            }
                                                            disabled={
                                                                quantity >=
                                                                item.qty
                                                            }
                                                        >
                                                            <AddIcon />
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                my: 2,
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="h5">
                                                Total Price - &nbsp;
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {item.price * quantity} $
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Button
                                                sx={{ width: "47%" }}
                                                variant="contained"
                                                color="success"
                                                onClick={() => {
                                                    localStorage.setItem(
                                                        "product",
                                                        JSON.stringify(item)
                                                    );
                                                    localStorage.setItem(
                                                        "quantity",
                                                        quantity
                                                    );
                                                    setCount(quantity);

                                                    handleClick();
                                                    navigate("/add-to-cart");
                                                }}
                                            >
                                                Add To Cart
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            ))}
                    </Box>
                ) : (
                    <Typography>No Product Found</Typography>
                )}
                <Divider sx={{ my: 4 }} />

                <Box sx={{ mt: 4 }}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: "bold", mb: 2 }}
                        >
                            Related Product
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        {items
                            .filter(item => item.id !== Number(id))
                            .map(item => (
                                <Grid item xs={12} sm={6} md={4} key={item.id}>
                                    <Card
                                        sx={{
                                            cursor: "pointer",
                                            "&:hover": {
                                                boxShadow: 4,
                                            },
                                        }}
                                        onClick={() => {
                                            navigate(
                                                `/product-detail/${item.id}`
                                            );
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
                            ))}
                    </Grid>
                </Box>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Product added to cart"
                />
            </Container>
        </Box>
    );
}
