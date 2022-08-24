import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    Typography
  } from '@mui/material';
import { FaDownload, FaSearch, FaUpload } from 'react-icons/fa';
  


  
  export const Students = (props) => (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Products
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            startIcon={(<FaUpload fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Import
          </Button>
          <Button
            startIcon={(<FaDownload fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Export
          </Button>
          <Button
            color="primary"
            variant="contained"
          >
            Add products
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <FaSearch />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
  