import ButtonTable from '../../common/ButtonTable/ButtonTable';
import { Row, Col } from 'react-bootstrap';
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