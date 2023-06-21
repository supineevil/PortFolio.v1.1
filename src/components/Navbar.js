import '../CSS/Navbar.css';
import React from 'react'
import { MenuData } from './MenuData';
import { Component } from 'react';
class Navbar extends Component {
  state={clicked:false};
  handleclick=()=>{
    this.setState({clicked:!this.state.clicked});
  }
  render() {
  return (
    <nav className="NavbarItems">
        <h1 className="logo"><i className="fa fa-spider"></i> &nbsp;Hash Bug</h1>
        <div className='menu-icons' onClick={this.handleclick}>
            <i className={this.state.clicked?"fa fa-times":"fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
            {MenuData.map((item,index)=>{
                return(<>
                <li key={index}><a href={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</a></li>
                </>
                );
            })}
        </ul>
    </nav>
  )
}
}
export default Navbar;
