import { Component } from "react"
import PropTypes from 'prop-types';
import css from "../Modal/Modal.module.css"

class Modal extends Component{
    static propTypes = {
        src: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
      };
    componentDidMount()
    {
        document.addEventListener("keydown", this.onModal)
    }
    componentWillUnmount()
    {
        document.removeEventListener("keydown", this.onModal)
    }
    onModal=(event)=>{
    if(event.code==="Escape")
    {
        this.props.onClose();
    }
    }
    onBackdrop=(event)=>{
        if(event.target===event.currentTarget)
        {
            this.props.onClose();
        }
    }
    render()
    {
        return(
            <div className={css.overlay} onClick={this.onBackdrop}>
                <div className={css.modal}>
                    <img src={this.props.src} alt="largeImage" />
                </div>
            </div>
        )
    }
}
export default Modal
