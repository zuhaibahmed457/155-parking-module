"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import { Logo } from "@/src/assets";
import Link from "next/link";

export default function TemporaryDrawer({ toggleDrawer, open }: any) {
  // const [open, setOpen] = React.useState(false);

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      bgcolor={"white"}
      height={1}
    >
      <Box sx={{ bgcolor: "background.paper", py: 2, px: 2 }}>
        <Image src={Logo} alt="logo" width={120} />
      </Box>
      <List>
        {navLinks.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton LinkComponent={Link} href={text.value}>
              <ListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary={text.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

let navLinks = [
  {
    label: "Login",
    value: "/login",
  },
  {
    label: "How it Works",
    value: "/",
  },
  {
    label: "Help & Support",
    value: "/",
  },
  {
    label: "Contact Us",
    value: "/",
  },
];
