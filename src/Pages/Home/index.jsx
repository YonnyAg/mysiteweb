import React, { useEffect } from 'react';
import FrontPage from '../../Components/Frontpage';
import Card from '../../Components/Coverletter'

function home() {
    return (
        <div style={{ backgroundColor: '#051650' }}>
            <FrontPage />
            <Card />
        </div>
    )
}

export default home