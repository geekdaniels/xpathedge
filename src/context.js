import React, { Component } from "react";

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
  state = { showMenu: false };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });

    console.log(this.state.showMenu);
  };

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          toggleMenu: this.toggleMenu,
        }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer };
