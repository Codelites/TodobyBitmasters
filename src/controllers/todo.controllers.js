// import dependencies
import Todo from '../models/todo.model.js'

// define handlers
const getTodos = async function ( req, res, next )
{
    try {
        const todos = await Todo.find();

        return res.status(200).json({
          success: true,
          message: "Todos retrieved successfully",
          data: {
            todos: todos,
          },
        });
    } catch (e) {
        return res.status(400).json({
          success: false,
          error: {
            message: e.message,
            code: e.code,
          },
        });
    }
 }

const getTodo = async function ( req, res, next )
{ 
    try {
        const { id } = req.params
       
        const todo = await Todo.findById( id );
        
        if ( !todo ) throw new Error( 'Todo not found' );
        
        return res.status(200).json({
          success: true,
          message: "Todo retrieved successfully",
          data: {
            todo: todo,
          },
        });
    } catch (e) {
        return res.status( 404 ).json( {
            success: false,
            error: {
                message: e.message,
                code: 404
            }
        })
    }
}

const createTodo = async function ( req, res, next )
{
  try {
    const { title } = req.body;

    const todo = await Todo.create( { title } )
    
    await todo.save();

    return res.status( 201 ).json( {
      success: true,
      message: 'Todo created successfully',
      data: {
        todo: todo
      }
    })
  } catch (e) {
    return res.status( 422 ).json( {
      success: false,
      error: {
        message: e.message,
        code: e.code,
      }
    })
  }
 }

const updateTodo = function ( req, res, next ) { }

const deleteTodo = function ( req, res, next ) { }

// export handlers
export
{
    getTodos, getTodo, createTodo, updateTodo, deleteTodo
}