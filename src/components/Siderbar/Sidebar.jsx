import React from 'react'
import style from './Sidebar.module.css'
import SidebarItem from './SidebarItem'

function Sidebar() {

    return (
        <div className={style.sidebar}>
            <ul className={style.stepList}>
                <SidebarItem index={1} stepInfo='YOUR INFO'/>
                <SidebarItem index={2} stepInfo='SELECT PLAN'/>
                <SidebarItem index={3} stepInfo='ADD-ONS'/>
                <SidebarItem index={4} stepInfo='SUMMARY'/>
            </ul>
        </div>
    )
}

export default Sidebar
