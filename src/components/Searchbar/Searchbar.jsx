import { toast } from 'react-toastify';
// import {BsSearch} from "react-icons/bs"
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css'

const { Component } = require("react");

class Searchbar extends Component{
    state={
        inputName:""
    }

    static propTypes = {
        onSub: PropTypes.func.isRequired,
      };

handleNameChange = event => {
    this.setState({inputName: event.currentTarget.value.toLowerCase()})
}

handleSubmit = event => {
    event.preventDefault()
    if (this.state.inputName.trim() === '') {
        return toast.error('Enter name'); 
       
    }
    this.props.onSub(this.state.inputName)
    this.setState({inputName:''})

}

    render() {
return (
<header className={css.searchbar}>
<form className={css.form} onSubmit={this.handleSubmit}>
  <button type="submit" className={css.button}>
    {/* <BsSearch size={30}/> */}
    <span className={css.button_label}></span>
  </button>

  <input
    className={css.input}
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    onChange={this.handleNameChange}
    value={this.state.inputName}
  />
</form>
</header>)
    }
}
export default Searchbar