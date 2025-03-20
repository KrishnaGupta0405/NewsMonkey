import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                {/* <li className="nav-item ">
                    <Link className="nav-link" to="/News">News <span className="sr-only">(current)</span></Link>
                </li> */}
                <li className="nav-item ">
                    <Link className="nav-link" to="/Business">Business <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="/Entertainment">Entertainment <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="/Health">Health <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="/Science">Science<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="/Sports">Sports<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="/Technology">Technology<span className="sr-only">(current)</span></Link>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
    )
  }
}

export default Navbar


// ---------------------------------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import {Link} from "react-router-dom"
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Divider} from "@nextui-org/react";
// import { AcmeLogo } from "./Logo.jsx";
// import {SearchIcon} from "./SearchIcon.js";
// import "./style.css"; // Import the CSS file

// export default function App() {
//   return (
//     <Navbar className="h-20">
//       <NavbarBrand>
//         <AcmeLogo />
//         <p className="font-bold text-inherit">NewsMonkey</p>
//       </NavbarBrand>
//       <NavbarContent className="sm:flex gap-4" justify="center">
//       <div className="flex h-5 gap-3">
//         <NavbarItem><Link className="navbar-item-link" color="foreground" to="/"> Home</Link></NavbarItem>
//         <Divider orientation="vertical" />
//         <NavbarItem><Link className="navbar-item-link" color="foreground" to="/Business"> Business</Link></NavbarItem>
//         <Divider orientation="vertical" />
//         <NavbarItem><Link className="navbar-item-link" color="foreground" to="/Entertainment"> Entertainment</Link></NavbarItem>
//         <Divider orientation="vertical" />
//         <NavbarItem><Link className="navbar-item-link" color="foreground" to="/Health"> Health</Link></NavbarItem>
//         <Divider orientation="vertical" />
//         <NavbarItem><Link className="navbar-item-link" color="foreground" to="/Science"> Science</Link></NavbarItem>
//         <Divider orientation="vertical" />
//         <NavbarItem><Link className="navbar-item-link" color="foreground" to="/Sports"> Sports</Link></NavbarItem>
//         <Divider orientation="vertical" />
//         <NavbarItem><Link className="navbar-item-link mr-4" color="foreground" to="/Technology"> Technology</Link></NavbarItem>
//         </div>
//       </NavbarContent>
//       <NavbarContent as="div" className="items-center " justify="end">
//         <Input
//           classNames={{base: "max-w-full sm:max-w-[10rem] h-10",mainWrapper: "h-full",input: "text-small",inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",}}
//           placeholder="Search..."
//           size="sm"
//           startContent={<SearchIcon size={18} />}
//           type="search"
//         />
//         <Dropdown placement="bottom-end">
//           {/* <DropdownTrigger> */}
//           <Avatar className="w-10 h-8 rounded" isBordered  color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
//           {/* </DropdownTrigger> */}
//           {/* <DropdownMenu aria-label="Profile Actions" variant="flat">
//             <DropdownItem key="profile" className="h-14 gap-2">
//               <p className="font-semibold">Signed in as</p>
//               <p className="font-semibold">zoey@example.com</p>
//             </DropdownItem>
//             <DropdownItem key="settings">My Settings</DropdownItem>
//             <DropdownItem key="team_settings">Team Settings</DropdownItem>
//             <DropdownItem key="analytics">Analytics</DropdownItem>
//             <DropdownItem key="system">System</DropdownItem>
//             <DropdownItem key="configurations">Configurations</DropdownItem>
//             <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//             <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
//           </DropdownMenu> */}
//         </Dropdown>
//       </NavbarContent>
//     </Navbar>
//   );
// }
