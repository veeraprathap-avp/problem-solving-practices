/**
 * Convert path array to string format
 * @param {number[][]} path - Array of [row, col] coordinates
 * @returns {string} - String representation like "0,0 -> 1,0 -> 1,1"
 */
function pathToString(path) {
    if (!path) return null;
    return path.map(coord => coord.join(',')).join(' -> ');
}

/**
 * Find the shortest path in a grid from start to end coordinates
 * @param {number[][]} grid - 2D array where 0 = passable, 1 = blocked
 * @param {number[]} start - [row, col] starting coordinates
 * @param {number[]} end - [row, col] ending coordinates
 * @returns {string | null} - String representation of path like "0,0 -> 1,0 -> 2,2", or null if no path exists
 */
function findGridRoute(grid, start, end) {
    if (!grid || grid.length === 0) return null;
    
    const rows = grid.length;
    const cols = grid[0].length;
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    
    // Check if start or end is blocked
    if (grid[startRow][startCol] === 1 || grid[endRow][endCol] === 1) {
        return null;
    }
    
    // BFS to find shortest path
    const visited = new Set();
    const queue = [{ row: startRow, col: startCol, path: `${startRow},${startCol}` }];
    visited.add(`${startRow},${startCol}`);
    
    // 4 directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    while (queue.length > 0) {
        const { row, col, path } = queue.shift();
        
        // Check if we reached the destination
        if (row === endRow && col === endCol) {
            return path;
        }
        
        // Explore all 4 directions
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            const key = `${newRow},${newCol}`;
            
            // Check bounds, not blocked, and not visited
            if (newRow >= 0 && newRow < rows && 
                newCol >= 0 && newCol < cols && 
                grid[newRow][newCol] === 0 && 
                !visited.has(key)) {
                
                visited.add(key);
                queue.push({
                    row: newRow,
                    col: newCol,
                    path: `${path} -> ${newRow},${newCol}`
                });
            }
        }
    }
    
    return null; // No path found
}

const { runProblem, assert } = require('../utils');

runProblem('Grid Route', (assert) => {
    // Test case 1: Simple 4x4 grid
    const cityGrid1 = [
        [0, 1, 0, 0],
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 1, 0]
    ];
    assert('simple 4x4 grid', 
        findGridRoute(cityGrid1, [0, 0], [3, 3]), 
        '0,0 -> 1,0 -> 1,1 -> 2,1 -> 2,2 -> 2,3 -> 3,3'
    );
    
    // Test case 2: No path (blocked)
    const cityGrid2 = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ];
    assert('no path - vertical wall', 
        findGridRoute(cityGrid2, [0, 0], [0, 2]), 
        null
    );
    
    // Test case 3: Direct path
    const cityGrid3 = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    assert('direct path - 3x3 open grid', 
        findGridRoute(cityGrid3, [0, 0], [2, 2]), 
        '0,0 -> 1,0 -> 2,0 -> 2,1 -> 2,2'
    );
    
    // Test case 4: Start equals end
    assert('start equals end', 
        findGridRoute(cityGrid3, [1, 1], [1, 1]), 
        '1,1'
    );
    
    // Test case 5: Blocked start
    const cityGrid5 = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    assert('blocked start position', 
        findGridRoute(cityGrid5, [0, 0], [2, 2]), 
        null
    );
});

// Demo: String path format
if (require.main === module) {
    const demoGrid = [
        [0, 1, 0, 0],
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 1, 0]
    ];
    
    const pathString = findGridRoute(demoGrid, [0, 0], [3, 3]);
    
    console.log('\n--- Path in String Format ---');
    console.log('From [0,0] to [3,3]:', pathString);
}
