import '../App.css';

function CustomInput(props) {
    return (
        <div className='inputWrapper'>
          <label>{props.name}</label>
          {props.type === 'date' ? (
            <input
              type='date'
              value={props.value}
              className='inputForm'
              onChange={props.change}
            />
          ) : (
            <input
              type='text'
              value={props.value}
              className='inputForm'
              placeholder={props.placeHolder}
              onChange={props.change}
            />
          )}
        </div>
      );
    }
    
    export default CustomInput;