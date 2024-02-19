import React, { useState } from "react";

import { Dropdown } from 'primereact/dropdown';

interface Weapon {
    name: string;
}

interface WeaponSelectionProps {
    selectedWeapon: Weapon | null;
    setSelectedWeapon: React.Dispatch<React.SetStateAction<null>>;
}

const WeaponSelection: React.FC<WeaponSelectionProps> = ({
    selectedWeapon,
    setSelectedWeapon,
}) => {
    const weapons = [
        { name: "Rock" },
        { name: "Paper" },
        { name: "Scissor" },
        { name: "Lizard" },
        { name: "Spock" },
    ];
  
    return (
        <div>
            <Dropdown
                value={selectedWeapon}
                onChange={(e) => setSelectedWeapon(e.value)}
                options={weapons}
                optionLabel="name"
                placeholder="Select your weapon"
            />
        </div>
    );
};

export default WeaponSelection;