import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css'

const ImageGallery = ({imageObject, onClick}) => {
    return (
        <ul className={css.list_image}>
        {imageObject.map(item=>
<ImageGalleryItem item={item} key={item.id} onClick={onClick}/>)}
    </ul>
    )
}

ImageGallery.propTypes= {
    images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          webformatURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
          largeImageURL: PropTypes.string.isRequired,
        })
      ),
      onClick: PropTypes.func.isRequired,
}


// import { Component } from "react";
// import images from "services/gallery-api";

// class ImageGallery extends Component {
//     state ={
//         imageObject: null,
//         loading: false
//     }

//    componentDidUpdate(prevProps, prevState){
// if (prevProps.inputName !== this.props.inputName) {
//     console.log('Изменилось имя')
//      this.setState({loading: true});

//     //  const callback = await images
//     console.log(this.props.inputName)
//     fetch(`https://pixabay.com/api/?q=${this.props.inputName}&page=1&key=30566822-5dd8c7f8088312f63e039c329&image_type=photo&orientation=horizontal&per_page=12`)
//     .then(res => res.json())
//     .then(imageObject => {
//         this.setState({imageObject: imageObject.hits})
//         console.log(imageObject)
//     })
//     .finally(()=>this.setState({loading: false}))
// }
//     }

//     render(){
//         const {imageObject, loading} = this.state
//         const {inputName} = this.props
//         return(
//             <div>
//                 {loading && <div>Загружаем</div>}
//                 {!inputName && <div>Введите имя изображения</div>}
//             <ul>
//                 {imageObject && imageObject.map(item=>
//         <ImageGalleryItem item={item} key={item.id} onClick={onClick}/>)}
//             </ul>
//             </div>
//         )
//     }
// }
export default ImageGallery