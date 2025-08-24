import styles from'./App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { ProfileHeading } from './components/ProfileHeading/ProfileHeading'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'

function App() {
  
  return (
    <div className={styles.App}>
    {/* Hello World */}
    <Navbar />
    <ProfileHeading/>
    <About/>
    <Experience/>
    </div>
  )
}

export default App
