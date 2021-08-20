import React, {useEffect, useState} from "react";
import '../main.css'

import { Link} from "react-router-dom";

const Header = () =>{
    const [data, setData] = useState([]);
    const [toggleState, setToggleState] = useState(false);


    const getData = () => {
        fetch('headerData.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return(

<>
      <header>
              <div className='header-content'>
                  {data.map((data)=>{
                      return  <ul className="header-menu" >
                          <li>
                              <Link>{data}</Link></li>
                      </ul>  })}
              </div>
        </header>
</>
    )
}

export default Header;