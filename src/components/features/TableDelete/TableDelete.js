import styles from './TableDelete.module.scss';
import ButtonTable from '../../common/ButtonTable/ButtonTable';
import { Row, Col } from 'react-bootstrap';
import { removeTableRequest } from '../../../redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

const TableDelete = props => {
    return(
        <Row>
            <Col md={4}>
                <ButtonTable>{props.children}</ButtonTable>
            </Col>
        </Row>
    )
}

export default TableDelete;