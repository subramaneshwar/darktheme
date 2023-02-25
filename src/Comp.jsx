import "./comp.css"
function Comp({dark}){
    return(
        <div className="content" style={dark}>
            <div className="text" >
            <h1 style={dark.flag ? {color:"#d23368"} : {color: "#fba4c1"}}>The Wet Codbase</h1>
            <p>sunday 4th, 2020 11 min read</p>
            <p>Come waste your time wit me</p>
            </div>
            <div className="text2">
            <h1 style={dark.flag ? {color:"#d23368"} : {color: "#fba4c1"}}>Goodby, Clean Code</h1>
            <p>Friday 22nd,2019 5min read</p>
            <p>Let clean guide you. Then let it go</p>
            </div>
            <div className="text3">
                <h1 style={dark.flag ? {color:"#d23368"} : {color: "#fba4c1"}}>My Decade in Review</h1>
                <p>Saturday 11th,2018 5 min read</p>
                <p>A personal reflection</p>
            </div>
            <div className="text4">
                <h1 style={dark.flag ? {color:"#d23368"} : {color: "#fba4c1"}}>What are the React Team principles</h1>
                <p>Saturday 11th,2018 5 min read</p>
                <p>A personal reflection</p>
            </div>
        </div>
    )
}
export default Comp