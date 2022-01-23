import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import UserLink from "../../Users/UserLink"

export default function TableView(props) {

    const story = props.story
    return (
         <div className="TableView">
            <h2>Story</h2>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Originator</TableCell>
                            <TableCell>Content</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {story.timeline.map((storyItem, index) =>  (
                                <TableRow
                                    key={index}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell>{storyItem.itemType.caption}</TableCell>
                                    <TableCell component="th" scope="row">{storyItem.timestamp}</TableCell>
                                    <TableCell><UserLink userName={storyItem.originator} /></TableCell>
                                    <TableCell>{storyItem.value.length > 25 ? storyItem.value.substr(0, 25) + '...' : storyItem.value}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}
