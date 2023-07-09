import styles from './Home.module.scss';
import { Container, Row } from 'react-bootstrap';
import Heading from '../../views/Heading/Heading';
import TableList from '../../features/TableList/TableList';
import TableForm from '../../features/TableForm/TableForm';

const Home = () => {
    return(
        <Container>
            <Row className="mb-3 mt-3 justify-content-md-center text-center" >
                <Heading>ALL TABLES</Heading>
            </Row>
            <Row className="justify-content-md-center text-left" >
                <TableList />
            </Row>
            <Row className='mb-3 mt-3 justify-content-md-end text-right'>
                <TableForm>
                    ADD TABLE
                </TableForm>
            </Row>
        </Container>
    )
}

export default Home;