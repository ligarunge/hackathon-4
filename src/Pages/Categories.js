import getCategories from "../API/getCategories";

function Categories() {
   
    const categories = getCategories();
    const categoriesList = categories.map((categories, index) => {

        return (
            <tr key={index}>
            <td className="align-middle">{index}</td>
            <td className="align-middle">{categories.title}</td>
            <td className="align-middle">{categories.description}</td>
            <td className="align-middle">
                <div className="d-flex">
                <button type="button" className="btn btn-light"style={{margin:'5px'}}>Edit</button><button type="button" className="btn btn-light" style={{margin:'5px'}}>Delete</button>
                </div>
                </td>
            </tr>
    )
})

return (
    <div className="container">
        
        <div className="d-inline-flex flex-column align-items-end w-100">
                <button className="my-3" style={{width:"200px"}}>Create category</button>
                <p className="my-3">Search <input type="text"/></p>
        </div>

        <table className="table table-striped">
            <thead>
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
    )
}

export default Categories