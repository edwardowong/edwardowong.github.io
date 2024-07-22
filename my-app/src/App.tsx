import React from 'react';
import { Box, createTheme, ThemeProvider} from "@mui/material";
import NavBar from "./components/NavBar";
import LandingCard from "./components/LandingCard";
import { useState } from 'react';

function App() {
    const [mode, setMode] = useState("light");

    const darkTheme = createTheme({
        palette:{
            mode: "dark"
        }
    })

  return (
      <ThemeProvider theme={darkTheme}>
          <Box bgcolor = {"background.default"} color = {'text.primary'}>
              <NavBar />
              <LandingCard />
          </Box>
      </ThemeProvider>
  );
}

export default App;
