import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    position: 'absolute',
    zIndex: 1300,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FBFCFD',
    color: '#465967',
    height: 44,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sx">
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Box>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Typography variant="subtitle1">Blog</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">About us</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">T&C</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">Privacy Policy</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography>
                Viasat Internet is a service provided by Viasat Europe
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
