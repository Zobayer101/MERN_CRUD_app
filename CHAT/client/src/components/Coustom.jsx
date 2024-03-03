import useCoustom from "../Hooks/useCoustom";

const Coustom = () => {
  const classx=useCoustom(800)
    return (
        <div className={classx?'green': 'yellow'}>
            <h1>Thsi is a another compnents</h1>
        </div>
    )
}

export default Coustom;
