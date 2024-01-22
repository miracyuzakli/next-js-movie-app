'use client';

import React from 'react';
import Link from 'next/link';
function Error(props) {
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
                
            Error

            <Link href={'/'} style={{ fontSize: "16px", color: "orange" }}>GO HOME</Link>

        </div>

    );
}

export default Error;