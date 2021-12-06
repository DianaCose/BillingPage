import { Box, makeStyles, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    backgroundColor: '#FBFCFD',
    color: '#465967',
    
    // boxShadow: 3,
  },
});
const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth className={classes.footer}>
      <Box style={{ display: 'flex', justifyContent:'space-between'}}>
        <Typography variant="subtitle1">Blog</Typography>
        <Typography variant="subtitle1">About us</Typography>
        <Typography variant="subtitle1">T&C</Typography>
        <Typography variant="subtitle1">Privacy Policy</Typography>
      </Box>
      <Box>
        <Typography>
          Viasat Internet is a service provided by Viasat Europe
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
