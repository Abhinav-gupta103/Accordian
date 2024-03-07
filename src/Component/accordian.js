import './accordian.css'

const Accordian = ({ item, isOpen, onToggle }) => {
    const handleClick = () => {
        onToggle(item.id)
    }
    return (
        <>
            <div className="accordian" onClick={!item.items ? handleClick : null} style={{ cursor: !item.items ? 'pointer' : 'default' }}>
                <h1 className='text'>{item?.name}</h1>
                {!item.items && isOpen && <p className='text'>{item.description}</p>}
            </div>
        </>
    )
}

export default Accordian