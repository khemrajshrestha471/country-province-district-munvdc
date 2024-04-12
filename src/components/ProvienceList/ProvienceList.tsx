// import React from "react"

// const ProvinceList = () => {
//     return (
//         <>
//         <h1>This is ProvinceList</h1>
//         </>
//     )
// }

// export default ProvinceList


"use client";
import React, { useState, useEffect } from 'react';

interface Props {
    countryName: string;
}

const ProvinceList: React.FC<Props> = ({ countryName }) => {
    const [selectedProvince, setSelectedProvince] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(countryName !== "Nepal");

    useEffect(() => {
        setSelectedProvince("");
        setDisabled(countryName !== "Nepal");
    }, [countryName]);

    const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProvince(event.target.value);
    };

    return (
        <>
            <select value={selectedProvince} disabled={disabled} onChange={handleProvinceChange}>
                <option value="">Province</option>
                <option value="Koshi">Koshi</option>
                <option value="Provience 2">Province 2</option>
                <option value="Bagmati">Bagmati</option>
            </select>
        </>
    );
};

export default ProvinceList;