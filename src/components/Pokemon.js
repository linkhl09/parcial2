import React from "react";

export default class Pokemon extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.pokemon.id}</td>
        <td>
          <img
            src={this.props.pokemon.ThumbnailImage}
            alt={this.props.pokemon.name}
          />
        </td>
        <td>{this.props.pokemon.name}</td>
        <td>{this.props.pokemon.description}</td>
        <td>{this.props.pokemon.height}</td>
        <td>{this.props.pokemon.weight}</td>
        <td>
          {this.props.pokemon.type.map((x) => {
            return (
              <div>
                <span className="badge badge-secondary">{x}</span>
                <br />
              </div>
            );
          })}
        </td>
      </tr>
    );
  }
}
