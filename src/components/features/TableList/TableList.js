import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ButtonTable from '../../common/ButtonTable/ButtonTable';
import styles from './TableList.module.scss';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import TableDelete from '../TableDelete/TableDelete';
import shortid from 'shortid';

const TableList = () => {
    const tables = useSelector(getAllTables);
    if(tables.length === 0)
    return (
      <div>
        <Spinner animation='border' variant='primary' />
        <p>Loading</p>
      </div>
    );
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
                            <ButtonTable>SHOW MORE</ButtonTable>
                        </Link>
                    </Col>
                    <Col md={2}>
                        <TableDelete TableId={table.id}>REMOVE</TableDelete>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default TableList;