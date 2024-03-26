import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const BadgeCart = () => {
  return (
    <div>
      <Badge badgeContent={4} color="success"></Badge>
      <MailIcon color="action" />
    </div>
  );
};

export default BadgeCart;
