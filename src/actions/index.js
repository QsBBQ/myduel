
export function addTodo(text){
   return {
     type : "ADD_TODO",
     payload : {
       text,
       label : "PENDING"
     }
   };
}

export function removeTodo(id){
   return {
     type : "REMOVE_TODO",
     payload : {
       id
     }
   };
}
