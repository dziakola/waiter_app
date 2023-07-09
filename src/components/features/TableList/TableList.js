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
    console.log("TableList:" + tables);
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
                <Row key={table.id} className='p-3'>
                    <Col md={6}>
                        <h3>{`Table ${table.id}`}</h3>
                    </Col>
                    <Col md={2}>
                        <p>{`Status: ${table.status}`}</p>
                    </Col>
                    <Col md={4}>                        
                        <Link to={`/table/${table.id}`} className={styles.listLink}><ButtonTable>SHOW MORE</ButtonTable></Link>
                        <TableDelete TableId={table.id}>REMOVE</TableDelete>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default TableList;