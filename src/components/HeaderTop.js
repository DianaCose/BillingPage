import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContactSupportOutlined from '@mui/icons-material/ContactSupportOutlined';

function HeaderTop() {
  return (
    <Toolbar
      sx={{
        position: 'sticky',
        height: '100%',
        maxHeight:"80px",
        background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        color: '#ffff',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <IconButton
        edge="start"
        sx={{ color: '#ffff', display: { sm: 'none', xs: 'inline' } }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography
        variant="h1"
        sx={{
          color: '#ffff',
          display: {
            xs: 'none',
            sm: 'block',
            fontWeight: 'bold',
            fontSize: '26px',
          },
        }}
      >
        Billing
      </Typography>
      <IconButton
        edge="end"
        sx={{ color: '#ffff', display: { sm: 'none', xs: 'inline' } }}
      >
        <ContactSupportOutlined />
      </IconButton>
    </Toolbar>
  );
}
export default HeaderTop;
