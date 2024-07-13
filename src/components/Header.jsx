import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { themeContext } from "../ThemedApp";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const { count } = React.useContext(themeContext);
    const [qty, setQty] = React.useState(localStorage.getItem("quantity") || 0);

    // Effect to update qty when localStorage changes
    React.useEffect(() => {
        const handleStorageChange = () => {
            setQty(localStorage.getItem("quantity") || 0);
        };

        // Add event listener for storage changes
        window.addEventListener("storage", handleStorageChange);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    // Effect to update qty when component mounts
    React.useEffect(() => {
        setQty(localStorage.getItem("quantity") || 0);
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        onClick={() => {
                            navigate("/");
                        }}
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, cursor: "pointer" }}
                    >
                        V E-commerce
                    </Typography>
                    <IconButton
                        onClick={() => {
                            navigate(`/add-to-cart`);
                        }}
                    >
                        <Badge
                            badgeContent={count === 0 ? qty : count}
                            color="error"
                        >
                            <ShoppingCartIcon
                                sx={{
                                    color: "white",
                                    width: "32px",
                                    height: "32px",
                                }}
                            />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
