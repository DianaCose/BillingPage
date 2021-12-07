import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Grid
      container
      height='44px'
      position="absolute"
      bottom="0"
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: '#FBFCFD', color: '#465967' }}
    >
      <Grid item xs={8}>
        <Stack direction="row" spacing={3}>
          <Typography sx={{ml: '2px'}}> Blog</Typography>

          <Typography sx={{p: '2'}}>About us</Typography>

          <Typography sx={{p: '2'}}>T&C</Typography>

          <Typography sx={{p: '2'}}>Privacy Policy</Typography>
        </Stack>
      </Grid>
      <Grid item xs={4}>
      
          <Typography>
            Viasat Internet is a service provided by Viasat Europe
          </Typography>

      </Grid>
    </Grid>
  );
}

export default Footer;
