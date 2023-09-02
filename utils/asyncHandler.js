const { toast } = require("react-toastify");

const asyncHandler = promise =>{
    promise
    .then(data => data)
    .catch(error => {
        console.log(error);
        toast.error(error.message)
    })
}

export default asyncHandler;