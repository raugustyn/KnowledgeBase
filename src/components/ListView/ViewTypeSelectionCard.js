import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ViewComfyIcon from '@mui/icons-material/ViewComfy'
import GridViewIcon from '@mui/icons-material/GridView'
import TableViewIcon from '@mui/icons-material/TableView'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ViewTypeSelectionCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card >
      <CardContent>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab fontSize="small" label=<ViewComfyIcon /> {...a11yProps(0)} />
          <Tab fontSize="small" label=<GridViewIcon /> {...a11yProps(1)} />
          <Tab fontSize="small" label=<TableViewIcon /> {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
      </CardContent>
    </Card>
  )
}
