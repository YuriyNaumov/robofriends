import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY:'scroll',border:'1px solid black',height:'800px' }}>
            {props.children}
            {/* children is what between scroll */}
        </div>

    )
}

export default Scroll