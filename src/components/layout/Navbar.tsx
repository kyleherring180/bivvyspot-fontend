import React, { useState } from "react";
import { Box, Typography, Toolbar, IconButton, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
    isLoggedIn: boolean; // Prop to determine if the user is logged in
}

function Navbar({ isLoggedIn }: NavbarProps) {
    const navigate = useNavigate();
    const [searchActive, setSearchActive] = useState(false); // State to toggle search input
    const [searchText, setSearchText] = useState(""); // State to store search input text

    const handleSearchToggle = () => {
        setSearchActive(!searchActive);
        setSearchText(""); // Clear search input when toggled
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Searching for:", searchText);
        // Implement search logic, e.g., navigate to a search results page
        // navigate(`/search?query=${searchText}`);
    };

    return (
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
            {/* Left Section: Logo and Search */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {/* Logo */}
                <Box
                    component="img"
                    src="src/assets/images/bivvyspot_logo.jpg" // Replace with your actual logo path
                    alt="BivvySpot Logo"
                    sx={{
                        height: 50, // Adjust logo height
                        cursor: "pointer",
                    }}
                    onClick={() => navigate("/")} // Navigate to the home page on click
                />

                {/* Search Icon / Input Field */}
                {searchActive ? (
                    <form onSubmit={handleSearchSubmit} style={{ display: "flex", alignItems: "center" }}>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            sx={{
                                backgroundColor: "white",
                                borderRadius: 1,
                            }}
                        />
                        <IconButton onClick={handleSearchToggle} sx={{ color: "white", marginLeft: 1 }}>
                            ✕ {/* Close the search input */}
                        </IconButton>
                    </form>
                ) : (
                    <IconButton
                        color="inherit"
                        onClick={handleSearchToggle} // Open the search input
                        sx={{ color: "white" }}
                    >
                        <SearchIcon />
                    </IconButton>
                )}
            </Box>

            {/* Title */}
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    color: "white",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    textAlign: "center",
                    flexGrow: 1,
                }}
            >
                BivvySpot
            </Typography>

            {/* Right Section: Home and Profile Icons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {/* Home Icon */}
                <IconButton
                    color="inherit"
                    onClick={() => navigate("/")} // Navigate to the home page
                    sx={{ color: "white" }}
                >
                    <HomeIcon />
                </IconButton>

                {/* Profile Icon - Displayed only if logged in */}
                {isLoggedIn && (
                    <IconButton
                        color="inherit"
                        onClick={() => navigate("/profile")} // Navigate to the profile page
                        sx={{ color: "white" }}
                    >
                        <AccountCircleIcon />
                    </IconButton>
                )}
            </Box>
        </Toolbar>
    );
}

export default Navbar;