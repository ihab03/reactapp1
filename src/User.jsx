import CustomButton from "./shared/CustomButton"
import CustomInput from "./shared/CustomInput"

function User (props){

return (
    <div  >
    <p>name is: {props.name} </p>
    <p>email is: {props.email} </p>
    <CustomButton text="Details" ></CustomButton>
    <CustomButton text="add" ></CustomButton>
    <CustomInput></CustomInput>
   
    </div>
)


}
export default User