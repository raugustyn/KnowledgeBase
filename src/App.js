import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import UsersView from './components/Users/UsersView'
import {TopicView} from './components'
import Topics from './components/Topics/Topics';
import UserCard from './components/Users/UserCard'

const App = () =>  (
    <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/Topics">Topics</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
          </ul>
        </nav>

      <Routes>
          <Route path="/" element=<p />  />
          <Route path="/Users/:userName" element=<UserCard />  />
          <Route path="/Users" element={<UsersView />} />

          <Route path="/Topics/:id" element={<TopicView />} />
          <Route path="/Topics" element={<Topics />} />
      </Routes>
    </BrowserRouter>
)

export default App
