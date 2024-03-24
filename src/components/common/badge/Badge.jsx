import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const BadgePrueba = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary"></Badge>
      <MailIcon color="action" />
    </div>
  );
};

export default BadgePrueba;
