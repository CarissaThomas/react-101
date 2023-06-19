const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// Spits out the property as HTML string

// JSX (nested elements only, no sibling elements)
const header = <div><h1 className="header">This is JSX</h1></div>

const body = (
    <div>
        <h1>This is JSX 2</h1>
        <p>This is a paragraph</p>
    </div>
)

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    header,
    body,
    document.getElementById("root")
)

console.log(page) //Javascript object that describes the HTML property
