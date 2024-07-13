import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useState } from "react";
import { themeContext } from "../ThemedApp";
import { useNavigate } from "react-router-dom";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

export default function AddToCart() {
    const item = JSON.parse(localStorage.getItem("product"));
    const quantity = Number(localStorage.getItem("quantity"));
    const { discount } = useContext(themeContext);
    const [coupon, setCoupon] = useState("");
    const [discountObject, setDiscountObject] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const handleCouponChange = event => {
        const value = event.target.value;
        setCoupon(value);
        const filteredDiscount = discount.filter(dis => dis.code === value);
        setDiscountObject(filteredDiscount);
    };

    const [count, setCount] = useState(quantity);

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        if (count < item.qty) {
            setCount(count + 1);
        }
    };

    const totalPrice = () => {
        const discountAmount =
            discountObject.length > 0 ? discountObject[0].discount : 0;
        return item?.price * count - discountAmount;
    };

    return (
        <Box>
            <Container sx={{ mt: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Checkout
                </Typography>
                <Box sx={{ my: 4 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <img
                                src={item?.image}
                                style={{ width: "100%" }}
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
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
                                    {item?.name}
                                </Typography>
                            </Box>
                            <Box sx={{ paddingY: "10px" }}>
                                <Box sx={{ display: "inline-block", pr: 3 }}>
                                    <Typography>QTY : </Typography>
                                </Box>
                                <Box sx={{ display: "inline-block" }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            padding: "0 90px 10px 0",
                                            gap: "16px",
                                        }}
                                    >
                                        <Button
                                            variant="outlined"
                                            onClick={handleDecrement}
                                            disabled={count <= 1}
                                        >
                                            <RemoveIcon />
                                        </Button>
                                        <Typography variant="body2">
                                            {count}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            onClick={handleIncrement}
                                            disabled={count >= item?.qty}
                                        >
                                            <AddIcon />
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <TextField
                                    id="filled-basic"
                                    label="Coupon Code"
                                    variant="filled"
                                    value={coupon}
                                    onChange={handleCouponChange}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mt: 4,
                                }}
                            >
                                <Typography variant="h5">
                                    Total Price - &nbsp;
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    {totalPrice()}
                                </Typography>
                            </Box>
                            <Box>
                                <Button
                                    sx={{ width: "47%", mt: 4 }}
                                    variant="contained"
                                    color="success"
                                    onClick={handleOpen}
                                >
                                    Checkout
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ fontWeight: "bold" }}
                        >
                            Total Price - {totalPrice()}
                        </Typography>
                        <Typography>Please Fill Visa For Purchasing</Typography>
                        <TextField
                            sx={{ my: 2 }}
                            id="outlined-basic"
                            label="Card Number"
                            variant="outlined"
                            required
                            fullWidth
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="Exp Date"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="CVV"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "16px",
                                mt: 2,
                                color: "white",
                                borderRadius: "10px",
                            }}
                            onClick={() => {
                                localStorage.clear();
                                navigate("/");
                            }}
                        >
                            Purchase
                        </Button>
                    </Box>
                </Modal>
            </Container>
        </Box>
    );
}
