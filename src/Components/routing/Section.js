import React, { Component } from 'react';
import ListWisata from '../../Pages/ListWisata';
import Akomodasi from '../../Pages/Akomodasi';
import Dashboard from '../../Pages/Dashboard';
import {BrowserRouter as Route} from 'react-router-dom';

export class Section extends Component{
    render(){
        return(
            <section>
               <Route path="/list_wisata" Component={ListWisata}></Route>
               <Route path="/akomodasi" Component={Akomodasi}></Route>
               <Route path="/dashboard" Component={Dashboard}></Route>
            </section>
        )
    }
}

export default Section;