// Components
import Container from "../components/Container"
import WeaponSelection from "../components/Dropdown"
        
// images
import versus from '../img/versus.jpg'
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'

export default function Home() {

    return (
        <>
        <div className="game">
            <Container>
                <img src={p1} className='img-player'/>
                <WeaponSelection/>
            </Container>

            <img src={versus} className='img-versus'/>

            <Container>
                <img src={p2} className='img-player'/>
                <WeaponSelection/>
            </Container>
        </div>
            <Container>
                <button type="submit">Play</button>
            </Container>
        </>
    )
}
