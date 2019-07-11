const xValue = d => d.magnitude;
const xLabel = 'Magnitude (Richter)';
const yValue = d => d.cost;
const yLabel = 'Property Cost';
const margin = { left: 180, right: 30, top: 20, bottom: 120 };

const colorValue = d => d.continent;
const colorLabel = 'Continent';

const svg = d3.select('svg');
const width = svg.attr('width');
const height = svg.attr('height');
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);
const xAxisG = g.append('g')
    .attr('transform', `translate(0, ${innerHeight})`);
const yAxisG = g.append('g');

const colorLegendG = g.append('g')
    .attr('transform', `translate(${innerWidth - 179}, 243)`);

colorLegendG.append('text')
    .attr('class', 'legend-label')
    .attr('x', -30)
    .attr('y', -25)
    .text(colorLabel);

xAxisG.append('text')
    .attr('class', 'axis-label')
    .attr('x', innerWidth / 2)
    .attr('y', 70)
    .text(xLabel);

yAxisG.append('text')
    .attr('class', 'axis-label')
    .attr('x', -innerHeight / 2)
    .attr('y', -120)
    .attr('transform', `rotate(-90)`)
    .style('text-anchor', 'middle')
    .text(yLabel);


const xScale = d3.scaleLinear();
const yScale = d3.scaleLog();
const colorScale = d3.scaleOrdinal(d3.schemeDark2);

const colorLegend = d3.legendColor()
  .scale(colorScale)
  .shape('rect');

// customize appearance of axis
function customAxis(g, axis) {
  g.call(axis);
  g.select(".domain").remove();
  g.selectAll(".tick:not(:first-of-type) line").attr("class", "tickline")
}
     
const xAxis = d3.axisBottom()
  .scale(xScale)
  .tickPadding(15)
  .tickSize(-innerHeight);

const yAxis = d3.axisLeft()
  .scale(yScale)
  .ticks(3)
  .tickFormat(d => d3.format("$,.1f")(d) + " B")
  .tickPadding(15)
  .tickSize(-innerWidth);

const row = d => {
  d.rank = +d.rank;
  d.magnitude = +d.magnitude;
  d.cost = +d.cost;
  return d;
};

d3.csv('earthquakes.csv', row, data => {
  xScale
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  yScale
    .domain(d3.extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

  g.selectAll('circle').data(data)
    .enter().append('circle')
      .attr('cx', d => xScale(xValue(d)))
      .attr('cy', d => yScale(yValue(d)))
      .attr('r', 8)
      .attr('fill', d => colorScale(colorValue(d)))
      .attr('class', 'dotmarker');

  xAxisG.call(g => customAxis(g, xAxis));
  yAxisG.call(g => customAxis(g, yAxis));

  colorLegendG.call(colorLegend)
    .selectAll('.cell text')
      .attr('dy', '0.1em');
          
});