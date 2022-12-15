function images() { fetch('https://pixabay.com/api/?q=${name}&page=1&key=30566822-5dd8c7f8088312f63e039c329&image_type=photo&orientation=horizontal&per_page=12').then(res => res.json()).then(img => this.setState({img})) } 

 export default images
    
