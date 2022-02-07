import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {users} from './data'
import {ListView} from './components/ListView'
import {TopicView} from './components'
import TableView from './components/Story/TableView'
import TimelineView from './components/Story/TimelineView'
import ReactDiffViewer from 'react-diff-viewer'
import UserCard from './components/Users/UserCard'
import {getTopics} from "./data/Issue"
import { ISSUES_ROUTE, TOPICS_ROUTE, USERS_ROUTE } from "./Routes"
import './App.css'

const issues = getTopics()
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
            <Route path={USERS_ROUTE + ":userName"} element=<UserCard/> />
            <Route path={USERS_ROUTE} element={<ListView items={users.users}/>}/>

            <Route path={ TOPICS_ROUTE + ":id"} element={<TopicView/>}/>
            <Route path={ TOPICS_ROUTE } element={<ListView items={getTopics()}/>}/>

            <Route path={ISSUES_ROUTE + ":id"} element={<TopicView/>}/>

            <Route path="/StoryItems" element={<ListView items={issues[0].story}/>}/>
            <Route path="/StoryAsTable" element={<TableView story={issues[0].story}/>}/>
            <Route path="/StoryAsTimeline" element={<TimelineView story={issues[0].story}/>}/>
            <Route path="/DiffViewer" element=<ReactDiffViewer
        oldValue={`
const value="V části průběhu liniového prvku kategorie "Komunikace" dochází k souběžnému, nesymetrickému průběhu dvou celých liniových objektů různých typů téže kategorie Terénní reliéf. Prostým vyjádřením průběhů kartografickými znaky, při čemž prioritní objekt komunikací nebude modifikován, by došlo ke kolizím: - čárky smluvené značky zářezu by se dotýkaly nebo překrývaly se značkou lesní cesty a hrana náspu by byla ke značce lesní cesty blíže, než je povolený limit. Pozn.: Vyjádření situace kartografickými znaky po odstranění kolize ovlivní také kresbu liniových objektů terénního reliéfu - vrstevnice."        
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`}
        newValue={`
const value="V části průběhu liniového ADDED prvku kategorie "Komunikace" DELETED k souběžnému, nesymetrickému průběhu dvou celých liniových objektů různých typů téže kategorie Terénní reliéf. Prostým vyjádřením průběhů kartografickými znaky, při čemž prioritní objekt komunikací nebude modifikován, by došlo ke kolizím: - čárky smluvené značky zářezu by se dotýkaly nebo překrývaly se značkou lesní cesty a hrana náspu by byla ke značce lesní cesty blíže, než je povolený limit. Pozn.: Vyjádření situace kartografickými znaky po odstranění kolize ovlivní také kresbu liniových objektů terénního reliéfu - vrstevnice."
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
