import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';

function Invoice() {
  return (
    <Card sx={{ width: 661, height: 104}}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Invoice 00584758868
        </Typography>
        <Typography>October</Typography>
        <Typography>Due on 21/10/2020</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}

export default Invoice;
