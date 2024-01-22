import Link from 'next/link';
import React from 'react';

function MovieNotFound(props) {
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: "40px"
            }}>
                
            404 Not Found

            <Link href={'/'} style={{ fontSize: "16px", color: "orange" }}>GO HOME</Link>

        </div>

    );
}

export default MovieNotFound;