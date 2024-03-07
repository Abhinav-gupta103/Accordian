import React from 'react'

const AccordionItem = (props) => {
    return (
        <>
            <div class="accordian" onClick={() => props.setExpanded(!props.expanded)}>
                <h1>{props?.item ? props?.item?.name : props?.name}</h1>
                <p>{(props.item && props.expanded) ? props.item.description : ''}</p>
            </div>
        </>
    )
}

export default AccordionItem