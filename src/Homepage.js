import React from 'react'
import "./Homepage.css"
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'
import Explore from './explore/Explore'
import Suggestions from './Suggestions/Suggestions'
import Story from './story/Story'

function Homepage() {
  return (
    <div>

       <div className="homepage__nav">
         <Sidenav/>
       </div>

       <div className="homepage__story">
         <Story/>
       </div>

       <div className="homepage__timeline">
         <Timeline/>
       </div>

       <div className="homepage__suggestion">
         <Suggestions/>
       </div>
    
    </div>
  )
}

export default Homepage