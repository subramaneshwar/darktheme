import './Header.css'
function Header({dark,setDark}) {

    function settheme(){
        if(dark.color==="white"){
            setDark({backgroundColor:"white",color:"black",flag:true})
        }
        else{
            setDark({backgroundColor:"black",color:"white",flag:false})
        }
    }

    return (
        <div className="header" style={dark} >

            <h1>Overreacted</h1>
            <button onClick={settheme} style={dark.flag ? {
                backgroundColor:"#d23368",
                color:"black"
                }:
                {backgroundColor:"#fba4c1",
                color:"white"}} className="button">Toggle</button>
        </div>

    )
}
export default Header