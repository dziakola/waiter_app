import Header from '../../views/Header/Header'
import Heading from '../../views/Heading/Heading';
import styles from './Table.module.scss';
import { useParams } from 'react-router';

const Table = () => {
    const { tableId } = useParams();
    return(
        <>
            <Header></Header>
            <Heading>`Table ${tableId}`</Heading>
        </>
    )
}

export default Table;