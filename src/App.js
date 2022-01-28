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

const App = () => (
    <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/Topics">Topics</Link></li>
                <li><Link to="/Users">Users</Link></li>
                <li><Link to="/StoryItems">Story</Link></li>
                <li><Link to="/StoryAsTable">StoryAsTable</Link></li>
                <li><Link to="/StoryAsTimeline">StoryAsTimeline</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element=<p/> />
            <Route path="/Users/:userName" element=<UserCard/> />
            <Route path="/Users" element={<ListView items={users.users}/>}/>

            <Route path="/Topics/:id" element={<TopicView/>}/>
            <Route path="/Topics" element={<ListView items={issues}/>}/>

            <Route path="/StoryItems" element={<ListView items={issues[0].story.timeline}/>}/>
            <Route path="/StoryAsTable" element={<TableView story={issues[0].story}/>}/>
            <Route path="/StoryAsTimeline" element={<TimelineView story={issues[0].story}/>}/>
        </Routes>
    </BrowserRouter>
)

export default App
