import React, {useEffect, useState} from "react";
import facade from "../apiFacade.js";

function UserPage() {
    const [dataFromServer, setDataFromServer] = useState("Loading...")

    useEffect(() => { facade.fetchData("info/user", data=> setDataFromServer(data.msg), "");
    }, [])

    return (
        <div>
            <h2>Data Received from server</h2>
            <h3>{dataFromServer}</h3>
        </div>
    )

}

export default UserPage;