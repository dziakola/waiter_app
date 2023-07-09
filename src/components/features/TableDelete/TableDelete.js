import styles from './TableDelete.module.scss';
import ButtonTable from '../../common/ButtonTable/ButtonTable';
import { Row, Col } from 'react-bootstrap';
import { removeTableRequest } from '../../../redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';

const TableDelete = props => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(removeTableRequest(props.TableId));
    }
    
    return(
        <Row className='justify-content-end'>
            <Col md={4} ><ButtonTable onClick={handleSubmit}>{props.children}</ButtonTable></Col>
        </Row>
    )
}

export default TableDelete;