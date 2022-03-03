import { useState } from "react";
import getCategories from "../API/getCategories";
import Header from "../Components/Header";

function Categories() {

    const categories = getCategories();
    const [keyWord, setKeyWord] = useState('')
    const categoriesList = categories
    .filter(categories => keyWord === '' ||
        categories.title.toLowerCase().includes(keyWord.toLowerCase())||
        categories.description.toLowerCase().includes(keyWord.toLowerCase())
        )
    .map((categories, index) => {

        return (
            <tr key={index} >
                <td className="align-middle" style={{ height: '6rem' }}>{index}</td>
                <td className="align-middle">{categories.title}</td>
                <td className="align-middle">{categories.description}</td>
                <td className="align-middle">
                    <div className="d-flex">
                        <button type="button" className="btn btn-light" style={{ margin: '5px' }}>Edit</button><button type="button" className="btn btn-light" style={{ margin: '5px' }}>Delete</button>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <div className="container-fluid d-inline-flex flex-wrap " style={{ minHeight: '93.8vh' }}>
            <div className="col-md-2 border-end border-secondary" style={{ minHeight: '45rem', maxWidth: '12rem' }}>
                <Header />
            </div>
            <div className="col-md-10">
                <div className="d-inline-flex flex-column align-items-end w-100">
                    <button className="my-3" style={{ width: "200px" }}>Create category</button>
                    <p className="my-3">Search <input
                        type="text"
                        value={keyWord}
                        onChange={(event) => setKeyWord(event.target.value)}
                    /></p>
                </div>

                <table className="table table-striped ">
                    <thead >
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoriesList}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Categories