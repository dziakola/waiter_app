import styles from './TableForm.module.scss';
import Form from 'react-bootstrap/Form';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ButtonTable from '../../common/ButtonTable/ButtonTable';
import changeTableRequest from '../../../redux/tablesRedux';


const TableForm =() => {
    const { tableId } = useParams();
    const tables = useSelector(getAllTables);
    const dispatch = useDispatch();
    
    const handleSubmit = event =>{
      event.preventDefault();
      const {id, status, people, maxPeople, bill} = event.target;
      dispatch(changeTableRequest({[id]:tableId, [status]: 'Free', [people]: 0, [maxPeople]: 4, [bill]:0 }))
    }
    return (
    <Container>
        {tables.filter(table=>table.id==tableId).map(table=>
        <Form key={table.id}>
          <Form.Group>
            <p>
            Status:
            <Form.Select key={table.id} aria-label="Select status" value={table.status} name="status">
              <option defaultValue={table.status}>{`${table.status}`}</option>
              <option value="2">Busy</option>
              <option value="3">Cleaning</option>
              <option value="4">Reserved</option>
            </Form.Select>
            </p>
            <p>
            People:
            <Form.Control type="text" className={styles.input} value={table.people}></Form.Control> / <Form.Control value={table.maxPeople} ></Form.Control>
            </p>
            <p>
            Bill ($): 
            <Form.Control type="text" className={styles.input} value={table.bill}></Form.Control>
            </p>
            <p>
            <ButtonTable onClick={handleSubmit}>SAVE</ButtonTable>
            </p>
          </Form.Group>
        </Form>
        )}
    </Container>
    );
}

export default TableForm;