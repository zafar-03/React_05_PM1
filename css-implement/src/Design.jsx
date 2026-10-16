import "./assets/Mystyle.css";
const myStyle = {
    myheading1 : {
        color : "navy",
        backgroundColor : "white",
        paddingLeft : "20px"
    },
    mypara1 : {
        color : "darkred"
    }
};
function Design(){
    return (
        <section style={{backgroundColor : "#cdcdcd",padding : "50px",fontFamily : "cursive"}}>
            <h2 style={myStyle.myheading1}>Hello Everyone</h2>
             <p style={myStyle["mypara1"]}>Welcome to React</p>
            <div>New Block</div>
        </section>
    )
}

export default Design;