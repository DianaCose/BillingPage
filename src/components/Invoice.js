const { Container, Typography, Grid, Stack } = require('@mui/material');

function Invoice() {
  return (
    <div>
      <Typography variant="h6"> My invoices</Typography>
      <Container>
        <Grid container>
          <Grid item>
              <Stack>
                  <Typography>Invoice 00584758868</Typography>
                  <Typography>October</Typography>
                  <Typography>Due on 21/10/2020</Typography>     
              </Stack>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Invoice;