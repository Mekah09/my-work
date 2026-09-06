const Data = [{
  id: 1,
  taskName: "Going to the market", 
  completed: "true", 
  date: new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}]

module.exports = Data;