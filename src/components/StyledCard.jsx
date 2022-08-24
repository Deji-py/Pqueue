import PropTypes from 'prop-types';
import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../icons/clock';
import { Download as DownloadIcon } from '../icons/download';
import { BiMessage } from 'react-icons/bi';
import { AvatarGenerator } from 'random-avatar-generator';

const randomavt = new AvatarGenerator()

export const StyledCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="Product"
          src={randomavt.generateRandomAvatar()}
          sx={{width:"100px",height:"100px"}}
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        Michael David
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        <h4>Department</h4> Computer Science
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        <h4>Adviser-in-charge</h4> Mr Ogundele
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        <CardActions>
        <Button variant="contained" disableElevation sx={{background:"var(--blue-dim)"}}>Profile</Button>
        <Button variant="contained" disableElevation sx={{background:"var(--blue)"}}>Courses</Button>
        <Button variant="contained" disableElevation endIcon={<BiMessage/>} sx={{background:"var(--primary-dim)", ":hover":{background:"var(--primary)"}}}>Message</Button>
        </CardActions>
      
      </Typography>
   
      </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <DownloadIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
          
            Downloads
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

StyledCard.propTypes = {
  product: PropTypes.object.isRequired
};
