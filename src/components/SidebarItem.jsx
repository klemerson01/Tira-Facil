import './SidebarItem.css'

    const SidebarItem = ({ Icon, Text}) => {
        return (
            <div className='containerSDI'>
                <Icon/>
                <div style={{padding:'0px 10px 0px 10px'}}>{Text}</div>
            </div >
        )
    }

export default SidebarItem