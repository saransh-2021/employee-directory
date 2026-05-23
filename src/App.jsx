import { useState, useEffect } from "react"
import "./App.css";

function Employees() {
    const [emps, setEmps] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((employeeData) => {
                setEmps(employeeData)
                console.log(employeeData);
            })
    }, [])

    const filteredList = emps.filter((emp) =>
        emp.name.
            toLowerCase().
            includes(searchTerm.toLowerCase())
    )

    return (
        <div className="content-wrapper">
            <div className="sidebar">
            <input type="text"
                placeholder="Search employees..."
                onChange={(event) => setSearchTerm(event.target.value)} />
                <p>{searchTerm}</p>
            </div>
            <div className="component-box table-container">
                <h2> Employee Data</h2>
                <RenderEmployess emps={filteredList} />
            </div>
        </div>
    )
}

function RenderEmployess({ emps }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>WEBSITE</th>
                </tr>
            </thead>
            <tbody>
                {
                    emps.map((emp, index) => (
                        <tr key={index}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.username}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>
                            <td>{emp.website}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

function App() {
    return (
        <div className="app-container">
            <h1>Saransh React App</h1>
            <p>I am learning React</p>
            <div className="component-box">
                <Employees />
            </div>
        </div>
    )
}

export default App