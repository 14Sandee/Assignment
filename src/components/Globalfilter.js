import React from 'react'

function Globalfilter({ filter, setFilter }) {
    return (
        <span style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center", marginTop: "40px", marginBottom: "40px"}}> 
            Search: {" "}
            <input style={{outline: "none", padding: "8px 4px", borderRadius: "4px"}} placeholder="filter search" value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}

export default Globalfilter
