# 8-Puzzle Solver Using A* Search Algorithm

This project is a JavaScript implementation of the A* Search Algorithm to solve the classic 8-puzzle problem. The 8-puzzle is a sliding puzzle that consists of a 3x3 grid with 8 numbered tiles and an empty space. The objective is to arrange the tiles in a specific goal configuration.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Algorithm Explanation](#algorithm-explanation)
- [Contributing](#contributing)

## Overview
This project uses a simplified version of the A* algorithm to solve the 8-puzzle, where the cost function \( g(n) \) is not included, as it remains constant across all possibilities. The algorithm still applies a heuristic function to guide the search toward the solution.

## Features
- Solves any solvable 8-puzzle configuration
- Displays solution steps in sequence 
- Uses the A* search algorithm with a heuristic function (e.g., Manhattan Distance or Misplaced Tiles)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Shafiuddin05868/8-puzzle-A_Star-Search-Algorithm.git
   cd 8-puzzle-AStar-Search-Algorithm
   node script.js
2. node must be installed
## Usage

    Define the initial and goal states of the 8-puzzle.
    Run the code to see the solution steps produced by the A* algorithm.
    You'll see the steps to solve the problem with each steps

## Algorithm Explanation

The algorithm uses the A* search strategy with a heuristic function but omits the g(n) component as it is constant across all nodes in this particular problem setup. This approach simplifies the implementation while still prioritizing moves that minimize the estimated distance to the goal:

    Heuristic Options:
        Manhattan Distance: Sum of distances of each tile from its target position.
        Misplaced Tiles: Count of tiles not in their goal positions.

The algorithm selects moves based on the heuristic, aiming to find the shortest path to the solution efficiently.
Example

Sample input and output:
 
    Initial State: 
    0 2 3
    1 4 6
    7 5 8
    
    Best temporary initial state 1 :
    1 2 3
    0 4 6
    7 5 8
    
    Best temporary initial state 2 :
    1 2 3
    4 0 6
    7 5 8
    
    Best temporary initial state 3 :
    1 2 3
    4 5 6
    7 0 8
    
    Best temporary initial state 4 :
    1 2 3
    4 5 6
    7 8 0
  
    Goal state reached:
    1 2 3
    4 5 6
    7 8 0

    Solution: The solution sequence leads from the initial state to the goal state.

## Contributing

Contributions are welcome! If you have ideas or improvements, please open an issue to discuss your changes.
