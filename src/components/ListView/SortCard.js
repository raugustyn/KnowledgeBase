import * as React from 'react'
import {styled} from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SortIcon from '@mui/icons-material/Sort'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'


const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function sortParam(caption) {
    return {caption: caption}
}

const sortParams = [
    sortParam('id'),
    sortParam('Caption'),
    sortParam('Date'),
    sortParam('User')
]


export default function SortCard() {
    const [expanded, setExpanded] = React.useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    const sortCaptions = sortParams.map(param => param.caption)
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value)
    }

    return (
        <Card sx={{minWidth: 400}}>
            <CardHeader
                avatar=<SortIcon/>
            action=<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded}
                               aria-label="show more"><ExpandMoreIcon/></ExpandMore>
            title={expanded ?
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                {sortCaptions.map((caption, index) => <FormControlLabel key={index} value={caption} control={<Radio/>} label={caption}/>)}
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                </Collapse>
            :
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Sort by"
                        onChange={handleChange}
                    >
                        {sortCaptions.map((caption, index) => <MenuItem key={index} value={caption}>{caption}</MenuItem>)}
                    </Select>
                </FormControl>
            }
            />

        </Card>
    )
}
