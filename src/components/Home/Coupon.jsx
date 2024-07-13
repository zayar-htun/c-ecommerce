import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Modal,
    Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { themeContext } from "../../ThemedApp";

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
};

export default function Coupon() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { discount } = useContext(themeContext);
    return (
        <Box>
            <Card>
                <CardMedia
                    sx={{ height: 240 }}
                    image="/img/coupon.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                    >
                        Coupons
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Unlock exclusive savings with our limited-time coupon,
                        offering you a fantastic discount on your next purchase!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        sx={{ fontWeight: "bold" }}
                        onClick={handleOpen}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
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
                        Types of Discounts
                    </Typography>
                    {discount.map(dis => {
                        return (
                            <Box key={dis.id}>
                                <Typography
                                    id="modal-modal-description"
                                    sx={{ mt: 2 }}
                                >
                                    {dis.name} - <b>{dis.discount} $</b>
                                </Typography>
                                <Typography
                                    id="modal-modal-description"
                                    sx={{ mt: 2 }}
                                >
                                    Coupon Code - <b>{dis.code} $</b>
                                </Typography>
                                <Divider sx={{my:1}}/>
                            </Box>
                        );
                    })}
                </Box>
            </Modal>
        </Box>
    );
}
