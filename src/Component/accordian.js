// import { useState, useEffect } from 'react'
import './accordian.css'
const Accordian = (props) => {
    // const [expanded, setExpanded] = useState(false)

    return (
        <>
            {/* <div class="accordian" onClick={() => setExpanded(!expanded)}> */}
            <div class="accordian" onClick={() => props.setExpanded(!props.expanded)}>
                <h1>{props?.item ? props?.item?.name : props?.name}</h1>
                <p>{(props.item && props.expanded) ? props.item.description : ''}</p>
            </div>
        </>
    )
}

export default Accordian