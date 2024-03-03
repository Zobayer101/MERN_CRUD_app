
import useCoustom from "../Hooks/useCoustom";
const Learn = () => {
    const screen = useCoustom(600);
    return (
        <div >
            
            <h1>you Browse a {screen?'Learge':'Small'} size screnn</h1>

        </div>
    )
}
export default Learn;