import * as React from 'react'
import {styled} from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import ShortTextIcon from '@mui/icons-material/ShortText'
import SubjectIcon from '@mui/icons-material/Subject'
import InfoIcon from '@mui/icons-material/Info'

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function LoDParam(caption, icon) {
    return {
        caption: caption,
        icon: icon
    }
}

const LoDParams = [
    LoDParam('Caption'),
    LoDParam('Brief', <ShortTextIcon/>),
    LoDParam('Enhanced'),
    LoDParam('Detailed', <SubjectIcon/>)
]

export default function LoDCard() {

    const [expanded, setExpanded] = React.useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    const LoDCaptions = LoDParams.map(param => param.caption)
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value)
    }

    return (
        <Card sx={{minWidth: 400}}>
            <CardHeader
                avatar=<InfoIcon/>
            action=<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded}
                               aria-label="show more"><ExpandMoreIcon/></ExpandMore>
            title={expanded ?
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Basic"/>
                    <FormControlLabel control={<Checkbox/>} label=<ShortTextIcon/> />
                    <FormControlLabel control={<Checkbox/>} label="Enhanced"/>
                    <FormControlLabel control={<Checkbox/>} label=<SubjectIcon/> />
                </FormGroup>
            </Collapse>
            :
            null
        }
            />

        </Card>
    )
}
