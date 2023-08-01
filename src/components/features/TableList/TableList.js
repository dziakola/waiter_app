/* import { Spinner, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllTables } from '../../../redux/tablesRedux';
import { removeTableRequest } from '../../../redux/tablesRedux';


const TableList = () => {
    const tables = useSelector(getAllTables);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if(!tables)
    return (
      <div>
        <Spinner animation='border' variant='primary' />
        <p>Loading</p>
      </div>
    );
        const handleSubmit = (id) => {
        console.log(id);
        dispatch(removeTableRequest(id));
        navigate("/");
    }
    return(
        <Container>
            {tables.map(table => (
                <Row key={table.id} className="text-left" >
                    <Col md={6}>
                        <h3>{`Table ${table.id}`}</h3>
                    </Col>
                    <Col md={2}>
                        <p>{`Status: ${table.status}`}</p>
                    </Col>
                    <Col md={2}>                        
                        <Link to={`/table/${table.id}`}>
                            <Button>SHOW MORE</Button>
                        </Link>
                    </Col>
                    <Col md={2}>
                        <Button onClick={()=>handleSubmit(table.id)}>REMOVE</Button>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default TableList; */
import { Button, ListGroup, Stack, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllTables, removeTableRequest } from "../../../redux/tablesRedux";
import { Link, useNavigate } from "react-router-dom";

const TableList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tables = useSelector(getAllTables);

  const handleClick = (id) => {
    dispatch(removeTableRequest(id));
    navigate("/");
  };

  if (!tables) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div>
      <h1 className="my-4">All tables</h1>
      <ListGroup variant="flush">
        {tables.map((table) => (
          <ListGroup.Item key={table.id} status={table.status} className="px-0">
            <Stack direction="horizontal" gap={4}>
              <h2 className="my-2">Table {table.id}</h2>
              <p className="mb-0">
                <strong>Status: </strong>
                {table.status}
              </p>
              <Link className="ms-auto" to={`/table/${table.id}`}>
                <Button variant="primary">Show more</Button>
              </Link>
              <Button
                variant="primary"
                onClick={() => handleClick(table.id)}
              >
                Remove table
              </Button>
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TableList;