// import dependencies
import { Schema, model } from 'mongoose';

// define handler
const TodoSchema = new Schema( {
    id: {
       type: String 
    },

    title: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    },
    description:{
        type: String,
        required: false
   },
   
   
    date:{
        type: Date,
        default: Date.now
    }
    //TIME N DURATION
    //  

    //  THE RREALTIONSIP 


});

const Todo = model("Todo", TodoSchema);

// export handler
export default Todo;