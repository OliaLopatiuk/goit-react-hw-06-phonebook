import { useState } from 'react';
import { Form, Label, Input } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/phonebookSlice';
import PropTypes from 'prop-types';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('Not proper name type');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form action="submit" onSubmit={handleSubmit}>
        <div>
          <Label>
            Name
            <Input
              onChange={handleChange}
              type="text"
              value={name}
              name="name"
              required
            />
          </Label>
        </div>
        <div>
          <Label>
            Number
            <Input
              onChange={handleChange}
              type="tel"
              value={number}
              name="number"
            />
          </Label>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
// export class ContactForm extends Component {
//     static propTypes = {
//         onSubmit: PropTypes.func,
//     }

//     state = {
//         name: '',
//         number: '',
//     }

//     handleChange = (e) => {
//     this.setState({[e.target.name]: e.currentTarget.value})
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state.name, this.state.number);
//         this.setState({ name: '',
//         number: '',});
//     }

//     render() {
//         return <div><Form action="submit" onSubmit={this.handleSubmit}>
//             <div><Label>Name<Input onChange={this.handleChange} type="text" value = {this.state.name} name="name" required /></Label></div>
//             <div><Label>Number<Input onChange={this.handleChange} type="tel" value = {this.state.number} name="number"/></Label></div>
//             <button type="submit">Add contact</button></Form>
//         </div>;
//       }
// }
