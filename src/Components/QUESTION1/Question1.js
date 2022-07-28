
import React, { useEffect, useState } from "react";
// import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Table } from "react-bootstrap";

function App() {
  // const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState([]);

  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = data.slice(pagesVisited, pagesVisited + usersPerPage);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
    console.log(data);
  }, [data]);
  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}
      <Table bordered hover className="table">
        <thead>
          <tr>
            <th rowSpan={2}>Id</th>
            <th rowSpan={3}>Name</th>
            <th rowSpan={3}>Username</th>
            <th rowSpan={3}>Email</th>
            <th colSpan={6}>Address</th>
            <th rowSpan={3}>Phone</th>
            <th rowSpan={3}>Website</th>
            <th colSpan={3}>Company</th>
          </tr>
          <tr>
            <th rowSpan={2}>Street</th>
            <th rowSpan={2}>Suite</th>
            <th rowSpan={2}>City</th>
            <th rowSpan={2}>Zipcode</th>
            <th colSpan={2}>Geo</th>
            <th rowSpan={2}>Name</th>
            <th rowSpan={2}>CatchPhrase</th>
            <th rowSpan={2}>Bs</th>
          </tr>
          <tr>
            <th>lat</th>
            <th>lng</th>
          </tr>
        </thead>
        <tbody className="tablebody">
          {displayUsers.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.address.suite}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.address.geo.lat}</td>
              <td>{user.address.geo.lng}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>{user.company.catchPhrase}</td>
              <td>{user.company.bs}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;