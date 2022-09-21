import React from 'react';

const Title = () => {
    console.log("Title comp Rendered")
    return (
        <div>
            <h1>This is Title Component</h1>
        </div>
    );
};

export default React.memo(Title);