import { useState } from "react";
import "./Categories.css";
import getCategories from "../API/getCategories";

function Categories() {
   
    const [data, setData] = useState(getCategories);

    return(
        <div className="container">
            <div className="content-wrapper my-3 ">
                <div className="d-inline-flex flex-column align-items-end w-100">
                <button className="my-3" style={{width:"200px"}}>Create category</button>
                <p classname="my-3">Search <input type="text"/></p>
                </div>

            <div className="app-container">
            <table>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                </thead>
                <tbody>
                    {data.map((someData) => (<tr>
                        <td>{someData.id}</td>
                        <td>{someData.title}</td>
                        <td>{someData.description}<button style={{width:"80px"}}>Edit</button><button style={{width:"80px"}}>Delete</button></td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
            </div>
            </div>
        </div>
    )
}

export default Categories