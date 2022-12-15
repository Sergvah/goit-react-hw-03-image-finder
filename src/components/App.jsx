import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button/Button'
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal'



class App extends React.Component {
  state={
   
    loading: false,
    inputName:'',
    images: [],
    largeImage:"",
    totalImages: null,
    page: 1,
    totalPages: 0,
    showModal:"",
  } 
  
   componentDidUpdate(prevProps, prevState){
 if (this.state.inputName !== prevState.inputName || this.state.page !== prevState.page){
  console.log('Изменилось имя')
  this.setState({loading: true});
 


 fetch(`https://pixabay.com/api/?q=${this.state.inputName}&page=${this.state.page}&key=30566822-5dd8c7f8088312f63e039c329&image_type=photo&orientation=horizontal&per_page=12`)
 .then(res => res.json())
 .then(data => {data.hits.forEach(({ id, webformatURL, largeImageURL, tags }) => {
  return this.setState(prev=>({
    images:[...prev.images,{ id, webformatURL, largeImageURL, tags }],
    totalPages: Math.ceil(data.totalHits/12)
  })) 
  
});
  
     console.log(data)
 })
 .finally(()=>this.setState({loading: false}))

 }
 }
 


handleSubmitForm = inputName => {
this.setState({inputName, images:[], page: 1})
}

onClick=(photo)=>{
  this.setState({ largeImage:photo, showModal:true })
}


loadMoreHandler = () => {
  this.setState(prevState => ({ page: prevState.page + 1 }))

};
onModalClose=()=>{
  this.setState(prevState=>({ showModal: !prevState.showModal }))
  console.log("modalka")
}

render (){
  const{images, totalPages, page, showModal, largeImage}=this.state;
  return( <div>
    <Searchbar onSub={this.handleSubmitForm}/>
    {showModal && <Modal src={largeImage} onClose={this.onModalClose}/>  }
    <ToastContainer autoclose={3000}/>
    <ImageGallery imageObject={images} onClick={this.onClick}/>
    {images.length !== 0 && totalPages>page && <Button onLoadMore={this.loadMoreHandler} />}
   
  </div>)
};
}
export default App
