import { Bars } from 'react-loader-spinner';
const Spinner=()=>{
    return(
        <div className="centered"> <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        wrapperClass=""
        visible={true}
      /></div>
    )
}
export default Spinner