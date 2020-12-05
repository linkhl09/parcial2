import React, { Component } from "react";
import * as d3 from "d3";

class Graphic extends Component {
  componentDidMount() {
    this.drawChart(this.props.pokemon);
  }

  drawChart(data) {
    const width = 800;
    const height = 800;
    const margin = { top: 10, left: 100, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const canvas = d3.select(this.refs.canvas);
    const svg = canvas
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    let g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // escala en y
    const y = d3
      .scaleLinear()
      .domain([
        0,
        Math.max.apply(
          Math,
          data.map((d) => d.height)
        ),
      ])
      .range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    const bars = g.selectAll("rect").data(data);

    bars
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("fill", "steelblue")
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.height))
      .attr("height", (d) => iheight - y(d.height))
      .attr("width", (d) => x.bandwidth());

    // x axis
    g.append("g")
      .classed("x--axis", true)
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${iheight})`);

    // y axis
    g.append("g").classed("y--axis", true).call(d3.axisLeft(y));
  }

  render() {
    return <div ref="canvas"></div>;
  }
}

export default Graphic;
