const Mother = ({children,...props}) => {
    return ( 
        <div props={props} className="mother">
            {children}
        </div>
     );
}
 
export default Mother;