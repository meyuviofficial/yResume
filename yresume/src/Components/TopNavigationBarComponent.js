import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const colors = [
  'black'
]

class NavigationBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { color } = this.props;
    const { activeItem } = this.state;

    return (
      <Menu color={color} inverted widths={6}>
        <Menu.Item
          name="HOME"
          active={activeItem === "HOME"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="ABOUT ME"
          active={activeItem === "ABOUT US"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="SKILLS"
          active={activeItem === "SKILLS"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="PROJECTS"
          active={activeItem === "PROJECTS"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="REWARDS"
          active={activeItem === "REWARDS"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="CONTACT ME"
          active={activeItem === "CONTACT ME"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

const TopNavigationBarComponent = () => {
  const menus = colors.map((color) => <NavigationBar color={color} key={color} />)

  return <div>{menus}</div>
}

export default TopNavigationBarComponent