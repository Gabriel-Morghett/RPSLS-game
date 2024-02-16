
export default function Home() {

    return (
        <div>
            <form>
                <input 
                    type="text" 
                    placeholder="Player 1" 
                    onChange={(e) => console.log("1")} 
                />
                <input 
                    type="text" 
                    placeholder="Prayer 2" 
                    onChange={(e) => console.log("2")} 
                />
                <button type="submit">Play</button>
            </form>
        </div>
    )
}
