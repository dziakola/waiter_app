import Header from '../../views/Header/Header'
import Heading from '../../views/Heading/Heading';
import styles from './Table.module.scss';
import { useParams } from 'react-router';
import TableForm from '../../features/TableForm/TableForm';
import { Col, Container, Row } from 'react-bootstrap';

const Table = () => {
    const { tableId } = useParams();
    return(
        <Container>
            <Row>
                <Heading>{`Table ${tableId}`}</Heading>
            </Row>
            <Row className='mb-3 mt-3'>
                <Col md={4}>
                    <TableForm TableId={tableId} />
                </Col>
            </Row>
        </Container>
    )
}

export default Table;