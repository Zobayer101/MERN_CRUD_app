import '../css/Showdata.css';

const Alluserdata=()=>{
    return(
        <div>
            <div className="contuner">
                <div className="InnerBox">
                    <table>
                        <thead>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Gender</td>
                            <td>Status</td>
                        </thead>
                        <tr>
                            <td>1</td>
                            <td>Md Habib</td>
                            <td>mdzobayer@gmail.com</td>
                            <td>Male</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr>
                         <tr>
                            <td>1</td>
                            <td>Md Habib</td>
                            <td>mdzobayer@gmail.com</td>
                            <td>Male</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr>
                         <tr>
                            <td>1</td>
                            <td>Md Habib</td>
                            <td>mdzobayer@gmail.com</td>
                            <td>Male</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Alluserdata;