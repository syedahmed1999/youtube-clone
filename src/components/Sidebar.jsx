import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const selectedCategory = "New";
const Sidebar = () => (
  <Stack
    direction={"row"}
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((cat) => (
      <button
        className="category-btn"
        style={{
          background: cat.name === selectedCategory && "#fc1503",
          color: "white",
        }}
        key={cat.name}
      >
        <span
          style={{
            color: cat.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {cat.icon}
        </span>
        <span style={{ opacity: cat.name === selectedCategory ? "1" : "0.8" }}>
          {cat.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
