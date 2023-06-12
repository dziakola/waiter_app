import styles from './Home.module.scss';
import { Container, Row } from 'react-bootstrap';
import Heading from '../../views/Heading/Heading';
import TableList from '../../features/TableList/TableList';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';

const Home = () => {
    const tables = useSelector(getAllTables);
    console.log("Home:" + tables);
    return(
        <Container>
            <Row className="justify-content-md-center text-center" >
                <Heading>All tables</Heading>
            </Row>
            <Row className="justify-content-md-center text-left" >
                <TableList />
            </Row>
        </Container>
    )
}

export default Home;