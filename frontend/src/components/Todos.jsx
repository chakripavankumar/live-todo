export function Todos({todos}) {
    return <div>
        {todos.map(function (todo){
            return <div>
        <h1>{Go to gym}</h1>
        <h2>You need to go to the gym</h2>
            <button>Mark as completed</button>
            </div>
        })
        }
    </div>
}