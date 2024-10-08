import { useEffect, useRef,useState } from 'react'

export interface ITab{
    title:string,
    component:()=>JSX.Element,
}


function Tabs({tabs}:{tabs:ITab[]}) {

  const [selectedTab, setSelectedTab] = useState<number>(0)

  const renderTabHeader = ()=>{
    return <div className={`tabs-header `}>
        {tabs.map((item,index)=>{
            return <div 
            className={`tab-title ${selectedTab==index? 'tab-title-active':''}` } 
            key={index} 
            id={index.toString()}
            onClick={()=>setSelectedTab(index)}
            >
                {item.title}
            </div>
        })}
    </div>
  }

  const renderTabComponents = ()=>{
    return <div className={`tabs-content`}>
        {tabs.map((item,index)=>{
            return <div 
            className={`${selectedTab==index? 'relative':'hidden'} p-0 m-0` } 
            key={index} 
            id={index.toString()}
            >
                {item.component()}
            </div>
        })}
    </div>
  }

  return (
    <div className='tabs-container'> {renderTabHeader()} {renderTabComponents()} </div>
  )
}

export default Tabs
