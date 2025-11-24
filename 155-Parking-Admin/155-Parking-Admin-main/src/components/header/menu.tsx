import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {
  AttachMoney,
  InsertCommentOutlined,
  MonetizationOn,
  NotificationAdd,
  NotificationsNoneOutlined,
  Paid,
  People,
  PeopleAltOutlined,
  Person,
  SettingsOutlined,
  ShoppingBag,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Fab, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { accessToken } from "@/constants/constants";
import { removeCookie } from "@/helpers/cookies";
import ApiManager from "@/helpers/api-manager";
import useAppSelector from "@/hooks/useAppSelector";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let { isLogged, user } = useAppSelector((state) => state.appReducer);
  const [logoutLoading, setLogoutLoading] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = async () => {
    try {
      setLogoutLoading(true);
      await removeCookie(accessToken);
      // dispatch(logout());
      router.push("/");
      // showToast({
      //   message: "Logged out successfully",
      // });
      await ApiManager("POST", "/auth/logout");
    } catch (error) {
      console.log(error);
      // showToast({
      //   message: error?.message,
      //   severity: "error",
      // });
    } finally {
      setLogoutLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Stack alignItems="center" flexDirection="row" gap={1}>
        <Stack
          flexDirection="row"
          gap={1}
          pr={1}
          display={{ xs: "none", md: "flex" }}
        >
          <Fab size="small" color="primary" sx={{ borderRadius: 2 }}>
            <InsertCommentOutlined fontSize="small" />
          </Fab>
          <Fab size="small" color="primary" sx={{ borderRadius: 2 }}>
            <NotificationsNoneOutlined fontSize="small" />
          </Fab>
          <Fab size="small" color="primary" sx={{ borderRadius: 2 }}>
            <SettingsOutlined fontSize="small" />
          </Fab>
        </Stack>

        <Stack
          sx={{ borderLeft: { xs: "none", md: "1px dashed gray" } }}
          px={2}
          flexDirection="row"
          gap={2}
        >
          <Avatar src="https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Stack>
            <Typography variant="body2">David Hudson</Typography>
            <Typography variant="caption" color="textDisabled">
              Admin
            </Typography>
          </Stack>
        </Stack>
        {/* <Tooltip title="Account settings">
          <Box
            onClick={handleClick}
            sx={{
              bgcolor: "secondary.main",
              display: "flex",
              alignItems: "center",
              gap: 0.6,
              px: 1.5,
              py: 0.5,
              borderRadius: 5,
            }}
          >
            <AttachMoney sx={{ color: "#00ff9d", fontSize: 16 }} />
            <Typography sx={{ color: "#00ff9d", fontSize: 16 }}>
              {Number(user?.wallet?.balance ?? 0).toFixed(2) ?? 0}
            </Typography>
            <Person sx={{ color: "#00ff9d", fontSize: 18 }} />
            <Typography
              sx={{ color: "#fff", fontSize: 12 }}
              textTransform="capitalize"
            >
              {user?.first_name ?? user?.role} ▾
            </Typography>
          </Box>
        </Tooltip> */}
      </Stack>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 20,
                height: 20,
                ml: -0.5,
                mr: 1,
              },
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "secondary.main",
                color: "primary.main",
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() =>
            router.push(
              user?.wallet && user?.role === "anonymous"
                ? "/register?edit=true"
                : "/profile"
            )
          }
        >
          <Stack gap={1} direction="row" alignItems="center" my={0.2}>
            <Person sx={{ fontSize: 20 }} />
            <Typography variant="body2">
              {user?.wallet && user?.role === "anonymous"
                ? "Edit Profile"
                : "My Profile"}
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => router.push("/history")}>
          <Stack gap={1} direction="row" alignItems="center" my={0.2}>
            <ShoppingBag sx={{ fontSize: 20 }} />
            <Typography variant="body2">My Purchase</Typography>
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => router.push("/wallet")}>
          <Stack gap={1} direction="row" alignItems="center" my={0.2}>
            <MonetizationOn sx={{ fontSize: 20 }} />
            <Typography variant="body2">Wallet</Typography>
          </Stack>
        </MenuItem>

        {user?.wallet && user?.role === "anonymous" ? null : (
          <>
            <MenuItem onClick={() => router.push("/transactions")}>
              <Stack gap={1} direction="row" alignItems="center" my={0.2}>
                <Paid sx={{ fontSize: 20 }} />
                <Typography variant="body2">My Transactions</Typography>
              </Stack>
            </MenuItem>
            <MenuItem onClick={onLogout} disabled={logoutLoading}>
              <Stack gap={1} direction="row" alignItems="center" my={0.2}>
                {logoutLoading ? (
                  <CircularProgress size={20} sx={{ color: "white" }} />
                ) : (
                  <Logout sx={{ fontSize: 20 }} />
                )}
                <Typography variant="body2">Logout</Typography>
              </Stack>
            </MenuItem>
          </>
        )}
      </Menu>
    </React.Fragment>
  );
}
