import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import {FaHome, FaSistrix, FaBars} from 'react-icons/fa';
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className='sidebar'>
        <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt = ""/>
        <SidebarOption  title = "Home" Icon = {FaHome}/>
        <SidebarOption  title = "Search" Icon = {FaSistrix}/>
        <SidebarOption  title = "Your Library" Icon = {FaBars}/>
        <br/>
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr/>
        <SidebarOption  title = "Chill" />
        <SidebarOption  title = ":)" />
        <SidebarOption  title = "Workout" />
        <SidebarOption  title = "Rap" />
        <SidebarOption  title = "POP" />
        <SidebarOption  title = "Christmas Playlist" />
        <SidebarOption  title = "Lofi " />

    </div>
  )
}

export default Sidebar
