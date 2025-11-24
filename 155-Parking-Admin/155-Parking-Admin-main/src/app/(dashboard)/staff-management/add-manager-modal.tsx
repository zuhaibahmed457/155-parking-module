import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { InputField } from "@/components";
import { useForm } from "react-hook-form";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    px: 2,
    py: 2,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

export default function AddManagerModal() {
  const [open, setOpen] = React.useState(true);
  const { control } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        fullWidth
        sx={{ borderRadius: 10 }}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          fontWeight={600}
          id="customized-dialog-title"
        >
          Add New Manager
          <Typography color="textDisabled">
            Create a new manager profile with basic information.
          </Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid mt={2} container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <InputField
                label={"Full Name"}
                name="name"
                control={control}
                placeholder="Search By name or ID"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <InputField
                label={"Email"}
                name="reports"
                control={control}
                placeholder="50 Reports Found"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <InputField
                label={"Phone"}
                name="phone"
                control={control}
                placeholder="(000) 123-4567"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <InputField
                label={"Emergency Contat"}
                name="phone"
                control={control}
                placeholder="(000) 123-4567"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <InputField
                label={"Assigned Parking Space"}
                name="phone"
                control={control}
                placeholder="(000) 123-4567"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <InputField
                label={"Manager ID"}
                name="phone"
                control={control}
                placeholder="(000) 123-4567"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ bgcolor: "#ededed", color: "black" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Add Staff Manager
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
