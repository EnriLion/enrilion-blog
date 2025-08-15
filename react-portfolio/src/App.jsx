import styles from'./App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { ProfileHeading } from './components/Navbar/ProfileHeading/ProfileHeading'

function App() {
  
  return (
    <div className={styles.App}>
    {/* Hello World */}
    <Navbar />
    <ProfileHeading/>
    </div>
  )
}

export default App
