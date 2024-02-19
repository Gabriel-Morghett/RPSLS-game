import React, { useState } from "react";
import axios from "axios";

// Components
import Container from "../components/Container"
import WeaponSelection from "../components/WeaponSelection"
        
// images
import versus from '../img/versus.jpg'
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'

interface Weapon {
    name: string;
}

export default function Home() {
    const [player1Weapon, setPlayer1Weapon] = useState<Weapon | null>(null);
    const [player2Weapon, setPlayer2Weapon] = useState<Weapon | null>(null);

    const handlePlay = async () => {

        try {
            console.log("selected weapon 1: ", player1Weapon);
            console.log("selected weapon 2: ", player2Weapon);

            const response = await axios.post(
                "https://klaxpd7f1k.execute-api.us-east-1.amazonaws.com/default/result",
                {
                    player1: player1Weapon?.name,
                    player2: player2Weapon?.name,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("API response:", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <>
        <div className="game">
            <Container>
                <img src={p1} className='img-player'/>
                <WeaponSelection
                    selectedWeapon={player1Weapon}
                    setSelectedWeapon={setPlayer1Weapon}
                />
            </Container>

            <img src={versus} className='img-versus'/>

            <Container>
                <img src={p2} className='img-player'/>
                <WeaponSelection
                    selectedWeapon={player2Weapon}
                    setSelectedWeapon={setPlayer2Weapon}
                />
            </Container>
        </div>
            <Container>
            <button type="button" onClick={handlePlay} disabled={!player1Weapon || !player2Weapon}>
                Play
            </button>
            </Container>
        </>
    )
}
