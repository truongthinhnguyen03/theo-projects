var data = c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20)

svg
  .selectAll()
  .append('circle')
  .attr('cx', '50%')
  .attr('cy', '50%')
  .attr('r', 20)
  .style('fill', 'blue')