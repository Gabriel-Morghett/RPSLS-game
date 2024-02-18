import Container from "../components/Container"
import versus from '../img/versus.jpg'

export default function Home() {

    return (
        <>
        <div className="game">
            <Container>
                <form>
                    <input 
                        type="text" 
                        placeholder="Player 1" 
                        onChange={(e) => console.log("1")} 
                    />
                </form>
            </Container>

            <img src={versus} className='img-versus'/>

            <Container>
                <form>      
                    <input 
                        type="text" 
                        placeholder="Prayer 2" 
                        onChange={(e) => console.log("2")} 
                    />
                </form>
            </Container>
        </div>
            <Container>
                <button type="submit">Play</button>
            </Container>
        </>
        
    )
}
