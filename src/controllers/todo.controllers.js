// import config from "../config/main.config.js";
// import { date } from "joi";
import Todo from "../models/todo.model.js";

export const getTodos =  async function ( req, res, next )
{
    try {
        const todos =  await Todo.find();
        //if await(wait till u get d todos or error) is not used...mongooose gives a long explaination(promise)...
        // we doont want that we want either an empty array or th object we seek

        return res.status(200).json( {
            success : true,
            message : "Todos gotten successfully",
           
            data: {
                todo: todos,
            }
            
            });
        /*
        {
        success : true,
        message : Todos gotten successfully
        data:{
            todo: todos,
        }
        
        } */
    }catch(e){

        return res.status(400).json({
            success : false,

            error: {
                message: e.message,

                code: 404
            }

        })
        
    }
    
};

export const getTodo = async function (req, res, next) {
    
      
      
    try {
        const {id} = req.params
        
        const todo = await Todo.findById(id);
       
       if (todo)
        return res.status(200).json({
            success : true,
            message : "Todo gotten successfully",
           
            data: {
                todo: todo,
            }

        })

    }catch(e){

        return res.status(400).json({
            success : false,
            message: e.message,

            code: e.code
        })

    }
};

export const createTodo = async function ( req, res, next )
{
    const {title,completed,description} = req.body //
     const {id} =   req.params  
    

    

    try{
       const newtodo = await Todo.create(title,completed,description);
       res.send(newtodo)
       res.status(201).json({
        success : true,
        data : newtodo

       })
    }catch(err){
        res.status(400).send(err);

    }
}  

export const updateTodo = async function (req, res, next) {
   
    const {title, completed} = req.body
    // const  id = req.body.id
    const {id} =   req.params  
   const  existingT =  await Todo.findById(id)
   if (existingT){
    existingT.title = title,
    existingT.completed = completed
    const updatedTodo =  await existingT.save();
    res.status(200).json({
        success : true,
        data: updatedTodo,
        message: "Update complete"
    })

   }else{
    res.status(422).json({
        success : false,
        data : null,
        message : "Task not found"
    })
   }



};

export const deleteTodo =  async function (req, res, next) {
 const {id} = req.params
 try {
    
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    
    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
   
};


// export {

//     getTodos, getTodo, createTodo,  updateTodo,deleteTodo
    
// }