import { makeStyles } from '@material-ui/core';
import { Typography, Box } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const drawerWidth = 240;

const useStyles = makeStyles({
  header: {
    backgroundColor: 'red',
    height: '280px',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.header}>
      <Box component="div">
        <Typography variant="h3">Billing</Typography>
      </Box>

      <Box>Invoices</Box>
    </Box>
  );
};

export default Header;
