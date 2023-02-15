import './App.css'
import './AboutMe.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


const AboutMe = props => {
    const [AboutMeData, setAboutMeData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        fetchAboutMeData()
    }, [])
    const fetchAboutMeData = () => {
        // setMessages([])
        // setLoaded(false)
        axios
            .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutme`)
            .then(response => {
                setAboutMeData(response.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoaded(true)
            })
    }

    return (
        <>
            <h1>About Me</h1>

            {AboutMeData.map(AboutMeData =>
                <img alt='meImg' src={AboutMeData.imageUrl} className="aboutMeImage"></img>
            )}

            <h2>{AboutMeData.map(AboutMeData => AboutMeData.name)}</h2>
            <p>{AboutMeData.map(AboutMeData => AboutMeData.desc)}</p>
            <p>{AboutMeData.map(AboutMeData => AboutMeData.desc2)}</p>
        </>
    )
}
export default AboutMe