import React, { useState } from "react";

import { Dropdown } from 'primereact/dropdown';

export default function WeaponSelection() {
    const [selectedWeapon, setSelectedWeapon] = useState(null);
    const weapons = [
        { name: 'Rock'},
        { name: 'Paper'},
        { name: 'Scissor'},
        { name: 'Lizard'},
        { name: 'Spock'}
    ];

    return (
        <div >
            <Dropdown value={selectedWeapon} onChange={(e) => setSelectedWeapon(e.value)} 
            options={weapons} optionLabel="name" placeholder="Select your weapon" className="w-full md:w-14rem" />
        </div>
    )
}