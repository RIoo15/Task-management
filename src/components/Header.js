import '../App.css';
import CustomButton from './CustomButton';

function Header(props) {
    return ( 
        <>
        <h1 style={{ textAlign: 'center' }}>FRONTEND DEVELOPMENT ASSESMENT</h1>
        <div className='header' >
            <h1>Task Manager</h1>
            <div className='btnWrapper' >
                <CustomButton  click={props.handleInput}  name='Add' bg='#1877F2' color='white' />
            </div>

        </div>
        </>
     );
}

export default Header;