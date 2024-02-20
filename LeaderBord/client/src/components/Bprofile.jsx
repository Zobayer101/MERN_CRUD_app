import avatar from "../assets/img/profile.png";

// eslint-disable-next-line react/prop-types
const Bprofile = ({data}) => {
   
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        data.map((value, index) => {
       return <div className="leaderMember" key={index}>
          <div className="leaderprofile">
            <div className="imgs">
              <img src={value.photo||avatar} alt="" />
            </div>
            <div className="texts">
              <h4>{value.name}</h4>
             <p>{value.city }</p>
            </div>
          </div>
          <div className="lederScure">
            <h5>{value.date}</h5>
          </div>
        </div>
      })
      }
    </div>
  );
}
// const Item = (datax) => {
//     return (
//         <div>
//             {
//                 datax.map((value, index) => {
//                     <h2 key={index}>{ value}</h2>
//                 })
//             }
//         </div>
//     )
// }

export default Bprofile;
