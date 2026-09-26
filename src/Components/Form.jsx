import React,{useState} from 'react';
function Form() {
    const [content, setContent] = useState("notDone");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    function Click(props) {
        // if (props === "Done") {
        //     if (name === "" || email === "" || text === "") {
        //         alert("please fill your details");
        //         return;
        //     }
        // }
        setContent(props);
    }
   
    
    return (
        (content==="notDone")?
        <div className="App">
            <div className="nav">
                <nav><img src="/image/Frame 2 1.png" width="72px" height="72px" alt="Logo" /></nav>
            </div>
            <h1>CONTACT US</h1>
            <div className="main-pragraph"><p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p></div>
            <div className="section">
                <div className="info-collection">
                    <div className="help">
                        <button className="btn1"><div><img src="/image/ic_outline-message.png" alt="Message" /></div><div><p>VIA SUPPORT CHAT</p></div></button>
                        <button className="btn2"><div><img src="/image/ic_baseline-phone.png" alt="Phone" /></div><div><p>VIA CALL</p></div></button>
                        <button className="btn3"><div><img src="/image/ic_outline-message (1).png" alt="Email" /></div><div><p>VIA EMAIL</p></div></button>
                    </div>
                    <div className="form">
                        <fieldset>
                            <legend>Name</legend>
                                <input onChange={(event) => setName(event.target.value)} type="text" value={name} />
                        </fieldset>
                        <fieldset>
                            <legend>E-Mail</legend>
                                <input onChange={(event) => setEmail(event.target.value)} type="email" value={email} />
                        </fieldset>
                        <fieldset className="text">
                            <legend>TEXT</legend>
                                <textarea onChange={ (event) => setText(event.target.value)} value={text}></textarea>
                        </fieldset>
                        <button className="btn4"  onClick={() => Click("Done")}>SUBMIT</button>
                    </div>
                </div>
                <div className="attractive-img">
                    <img src="/image/Service 24_7-pana 1.svg" alt="Attractive" />
                </div>
     
            </div>
            </div> :
            <div className="done" >
                <h1>THANKS</h1>
                <p>YOUR FORM IS SUMBITED</p>
                <button  onClick={() => Click("notDone")}>Go Back</button>
                </div>
    ); 
}
export default Form;