/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically or even diagonally. You may assume all four edges of the grid are all surrounded by water.
const islands = [
 [1,0,1,0,1],
 [1,1,1,0,1],
 [0,0,0,0,1],
 [1,0,1,0,1],
 [1,0,1,1,1]
]
*/

/*
Before we start a little pseudo code:

• We know that we need to look out for all 8 directions North, East, South, West, North-East, North-West, South-East and lastely South-West in search for our islands. Once we know there are no more connections of islands (1's) we know we have an island thus increment a counter of some sort to keep track.

*/

//Solution from a great friend
const grid = [
 [1,0,1,0,1],
 [1,1,1,0,1],
 [0,0,0,0,1],
 [1,0,1,0,1],
 [1,0,1,1,1]
]

function countIslands(grid) {
  let count = 0;
  const queue = [];
  const cache = {};

  //for each i we iterate through the row(i) with j as column
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      //coordinates for every center element, row and column
      const center = grid[i][j];
      //index of each i(row) and j(column) both [i,j] makes a center element
      const coordinates = [i, j];

      //if coordinates is not in cache obj and center element is 1
      if (!cache[JSON.stringify(coordinates)] && center === 1) {
        //we found an island
        count++;
        //store coordinates in a queue
        queue.push(coordinates);
        //and set cache with the actual coordinates as properties and set them to be true
        cache[JSON.stringify(coordinates)] = true;

        //while your queue has not empty, we want to shift the first out. (queue FIFO)
        while (queue.length > 0) {
          const island = queue.shift();
          console.log(island, 'this is island')
          //set v as row and h as column
          const v = island[0];
          const h = island[1];

          //declare variable cells and point out the 8 directions in grid, kind of like the queen in the game of Chess
          const cells = [grid[v - 1] && grid[v - 1][h], grid[v - 1] && grid[v - 1][h + 1], grid[v] && grid[v][h + 1], grid[v + 1] && grid[v + 1][h + 1], grid[v + 1] && grid[v + 1][h], grid[v + 1] && grid[v + 1][h - 1], grid[v] && grid[v][h - 1], grid[v - 1] && grid[v - 1][h - 1]];

          //set coordinates and store them in coords variable
          const coords = [[v - 1, h], [v - 1, h + 1], [v, h + 1], [v + 1, h + 1], [v + 1, h], [v + 1, h - 1], [v, h - 1], [v - 1, h - 1]];

          //last forLoop to go through all possible directions and check to see if they exist in catch if not store them in queue.
          for (let k = 0; k < 8; k++) {
            if (cells[k] === 1 && !cache[JSON.stringify(coords[k])]) {
              cache[JSON.stringify(coords[k])] = true;
              queue.push(coords[k]);
            }
          }
        }
      }
    }
  }

  return count;
}

countIslands(grid);

