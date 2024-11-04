//calculate heuristic function h(x)
let h = (initial, goal) => {
  let falsePosition = 0;
  let zeroIndex = [];
  for (i = 0; i < 3; i++) {
    //double loop for 2D array
    for (j = 0; j < 3; j++) {
      if (initial[i][j] != goal[i][j]) {
        //finding heuristic function
        falsePosition++;
      }
    }
  }
  return falsePosition;
};
//finding the index of zero
function zero(initial) {
  let falsePosition = 0;
  let zeroIndex = [];
  for (i = 0; i < 3; i++) {
    //double loop for 2D array
    for (j = 0; j < 3; j++) {
      if (initial[i][j] === 0) {
        //finding the index of zero
        zeroIndex = [i, j];
      }
    }
  }
  return zeroIndex;
}
//array equal
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!arraysEqual(arr1[i], arr2[i])) return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
//possible moves
function Moves(initial, zeroIndex) {
  let initialMoves = possibleMoves(zeroIndex[0], zeroIndex[1]); //asigning possible moves
  //   console.log(initialMoves)
  let heuristicResult = initialMoves.map((item) => {
    let tempInitial = initial.map((item) => [...item]);
    let valueOfPossibleMoves = initial[item[0]][item[1]];
    tempInitial[zeroIndex[0]][zeroIndex[1]] = valueOfPossibleMoves;

    tempInitial[item[0]][item[1]] = 0;
    // console.log(tempInitial);
    let heuristicFunction = h(tempInitial, goalState);

    return { heuristicFunction, tempInitial };
  });
  return heuristicResult;
}
//possible moves calculator
const possibleMoves = (a, b) => {
  const possibleValues = {
    0: [1],
    1: [0, 2],
    2: [1],
  };

  //Map to store unique outcomes
  let outcomes = new Set();

  //add initial array for reference but it won't be added in the final outcome
  outcomes.add(JSON.stringify([a, b]));

  //changing the first index
  possibleValues[a].forEach((element) => {
    outcomes.add(JSON.stringify([element, b]));
  });

  //changing second index
  possibleValues[b].forEach((element) => {
    outcomes.add(JSON.stringify([a, element]));
  });

  //removing the initial array from the outcome set
  outcomes.delete(JSON.stringify([a, b]));

  //converting Set to array for map and parse JSON to array from strings
  const possibleMoves = Array.from(outcomes).map((item) => JSON.parse(item));

  return possibleMoves;
};
//To show the array row-wise
function show(state) {
  state.forEach(row => {
    console.log(row.join(' '));
  });
}
// Solver function with improvements
function Solver(initial, goal, visited = new Set(), depth = 0, maxDepth = 50) {
  // Base case: if the current state matches the goal state
  if (arraysEqual(initial, goal)) {
    console.log("Goal state reached:"); show(initial);
    return initial;
  }

  // Check for excessive recursion depth
  if (depth > maxDepth) {
    console.log("Max depth reached, stopping recursion.");
    return null;
  }

  // Convert the current state to a string to store in the visited set
  const stateString = JSON.stringify(initial);
  if (visited.has(stateString)) {
    console.log("State has been visited, skipping to avoid infinite loop:", show(initial));
    return null;
  }

  // Mark the current state as visited
  visited.add(stateString);

  // Get possible moves
  let results = Moves(initial, zero(initial));

  // Find the object with the minimum heuristicFunction value
  let { heuristicFunction: minHeuristic, tempInitial: bestTempInitial } = results.reduce((min, current) => {
    return current.heuristicFunction < min.heuristicFunction ? current : min;
  }, results[0]);

  // Log the best temporary initial state for debugging purposes
  console.log("Best temporary initial state", depth+1,':'); show(bestTempInitial);

  // Recursively call the Solver function with the best temporary initial state
  return Solver(bestTempInitial, goal, visited, depth + 1, maxDepth);
}
//do not change initialState ilogically then this will throw errors.
let initialState = [
  [0, 2, 3],
  [1, 4, 6],
  [7, 5, 8],
];
console.log("Initial State: "); show(initialState);

let goalState = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];

Solver(initialState, goalState);
