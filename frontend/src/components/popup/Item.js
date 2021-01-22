import React from 'react';


const Item = (props) => {
    const {
        nameInput,
        valInput,
        onNameChange
    } = props;

    return (
        <div style={{height: "25px", marginBottom: "2px"}} className="level-item">
            <input onChange={onNameChange}  id="name" name="name" class="input is-small" type="text" placeholder="Property name" ref={nameInput}/>
            <input id="value" name="value" class="input is-small" type="text" placeholder="Property value" ref={valInput}/>
        </div>
    )
}

export default Item;