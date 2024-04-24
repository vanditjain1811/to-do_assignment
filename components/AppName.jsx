
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function AppName() {
  return (
    // Container Box component to set width, height, and margin
    <Box sx={{ flexGrow: 1, width: "380px", height: "50px", mb: "30px" }}>
      {/* AppBar component for the application header */}
      <AppBar position="static" sx={{ backgroundColor: "#F4AFAB" }}>
        {/* Toolbar for the AppBar */}
        <Toolbar>
          {/* Typography component for the application title */}
          <Typography variant="h5" component="div" fontSize={"2rem"}>
            To-do list
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppName;
