import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import {users, issues} from './data'
import UserCard from './components/Users/UserCard'
import TopicCard from './components/Topics/TopicCard'
import {ListView} from './components/ListView'
import {TopicView} from './components'
import TableView from './components/Story/Timeline/TableView'
import TimelineView from './components/Story/Timeline/TimelineView'
import ReactDiffViewer from 'react-diff-viewer'
import { ISSUES_ROUTE, TOPICS_ROUTE } from "./Routes";

const App = () => (
    <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/Topics">Topics</Link></li>
                <li><Link to="/Users">Users</Link></li>
                <li><Link to="/StoryItems">Story</Link></li>
                <li><Link to="/StoryAsTable">StoryAsTable</Link></li>
                <li><Link to="/StoryAsTimeline">StoryAsTimeline</Link></li>
                <li><Link to="/DiffViewer">DiffViewer</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element=<p/> />
            <Route path="/Users/:userName" element=<UserCard/> />
            <Route path="/Users" element={<ListView items={users.users}/>}/>

            <Route path={ TOPICS_ROUTE + ":id"} element={<TopicView/>}/>
            <Route path={ TOPICS_ROUTE } element={<ListView items={issues}/>}/>

            <Route path={ISSUES_ROUTE + ":id"} element={<TopicView/>}/>


            <Route path="/StoryItems" element={<ListView items={issues[0].story}/>}/>
            <Route path="/StoryAsTable" element={<TableView story={issues[0].story}/>}/>
            <Route path="/StoryAsTimeline" element={<TimelineView story={issues[0].story}/>}/>
            <Route path="/DiffViewer" element=<ReactDiffViewer
        oldValue={`
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`}
        newValue={`
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`}
        splitView={true} />
            />
        </Routes>
    </BrowserRouter>
)


export default App
