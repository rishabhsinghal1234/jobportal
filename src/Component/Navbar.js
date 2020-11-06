import React, { Component } from "react";
 
import Navbar from "reactjs-navbar";
//import logo from "./logo.png";
import "reactjs-navbar/dist/index.css";
import "./style.css";
import Loader from "react-loader-spinner";
import {
  faUsers,
  faBookOpen,
  faGlobe,
  faChartPie,
  faCogs /*...*/,
} from "@fortawesome/free-solid-svg-icons";
 
import "reactjs-navbar/dist/index.css";
 
class NavBar extends Component {
  state = {
    isLoading: false,
  };
 
  render() {
    return (
      <Navbar
        //logo={logo}
        loader={<Loader type="Puff" color="#ffffff" height={25} width={25} />}
        isLoading={this.state.isLoading}
        helpCallback={() => {
          alert("I need help... ");
        }}
        menuItems={[
          {
            title: "Tab A",
            icon: faUsers,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
            },
          },
          {
            title: "Tab B",
            icon: faBookOpen,
            isAuth: () => {
              // Claim authorization logic...
              return true;
            },
          },
          {
            title: "Tab C",
            icon: faGlobe,
            isAuth: true,
          },
          {
            title: "Tab D",
            icon: faCogs,
            isAuth: true,
            subItems: [
              {
                title: "Subitem 1",
                icon: faBookOpen,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Subitem 2",
                icon: faBookOpen,
                isAuth: true,
                subItems: [
                  { title: "Subitem 2-1", icon: faBookOpen, isAuth: true },
                  {
                    title: "Subitem 2-2",
                    icon: faBookOpen,
                    isAuth: true
                  },
                  {
                    title: "Make request",
                    icon: faBookOpen,
                    isAuth: true,
                    onClick: () => {
                      // What you want to do...
                      this.setState({ isLoading: true }, () =>
                        setTimeout(() => {
                          this.setState({ isLoading: false });
                        }, 3000)
                      );
                    },
                  },
                ],
              }
            ],
          },
          {
            title: "Tab E",
            icon: faChartPie,
            isAuth: true,
          },
        ]}
      />
    );
  }
}


export default NavBar
