// const h1 = document.createElement("h1");
// h1.textContent = "I'm learning React!";
// h1.className = "header";
// // document.getElementById("div1").append(h1);

// const element = <h1 className ="header">This is JSX</h1>

// ReactDOM.render(element,document.getElementById("div1"));


// Using js function

function page1()
{
    return (
        <nav>
            <ol>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ol>
        </nav>
    )
}

// Using JSX

const page2 = (
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

// ReactDOM.render(page1(),document.getElementById("div1"));
// ReactDOM.render(<page1 />,document.getElementById("div1"));
ReactDOM.render(page2,document.getElementById("div1"));