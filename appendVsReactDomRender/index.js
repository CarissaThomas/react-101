const page = 
(<div>
    <h1>This is a header</h1>
    <p>This is a paragraph</p>
    <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
    </ul>
</div>)

//Results in a string representation of a JSON object
//Cant use append, need to use React built in functions

document.getElementById("root").append(JSON.stringify(page))

//Correct react way

ReactDOM.render(
    page,
    document.getElementById("root")
)

