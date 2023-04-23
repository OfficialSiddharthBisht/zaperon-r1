import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const theme = createTheme();
export default function SignIn() {
  const history = useNavigate();
  const [email, setEmail] = React.useState(""); 
  const [password, setPassword] = React.useState(""); 


  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get("email"))
    setPassword(data.get("password"))
    console.log(email, password);

    try{
      await axios.post("https://tender-ruby-eagle.cyclic.app/api/v1/login",{
        payload :{
          email,
          password
        }
      }).then((res)=>{
        console.log(res);
      })
    }
    catch(e){
      console.log(e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            margin:"10%",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
            <AccountCircleOutlinedIcon color="primary" sx={{bgcolor:"whitesmoke",borderRadius:"50%",}}/>
          <Typography component="h1" variant="h2">
            Welcome!
          </Typography>
          <Typography component="p" variant="p">
            Let's connect to your workspace.
          </Typography>
          <Typography component="p" variant="p">
            Please enter your email to continue
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
