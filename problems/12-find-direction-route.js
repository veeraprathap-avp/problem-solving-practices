function FindDirectionRoute(graph, start, end) {
    //maintain a queue of paths to explore, starting with the initial position
    const visited = new Set([start]);
    const queue = [{ current: start, path: [start] }]; // [current position, path taken]

    while (queue.length > 0) {
        console.log('Queue:', queue.map(q => `${q.current} (${q.path.join('->')})`));
        const {current,path} = queue.shift();
        if(current === end) return path; //found the destination, return the path   
        console.log('Visiting: =', visited, 'Current:', current, 'Path:', path );
        for(let dir of graph[current] || []) {
            if (!visited.has(dir)) {
                visited.add(dir);
                queue.push({ current: dir, path: [...path, dir] });
            }
        }
    }
    return null; //no path found
}

const { runProblem, assert } = require('../utils');
runProblem('Find Direction Route', (assert) => {
    assert('simple case', FindDirectionRoute({
    'Warehouse': ['Hub A', 'Hub B'],
    'Hub A': ['Warehouse', 'House 1'],
    'Hub B': ['Warehouse', 'House 2'],
    'House 1': ['Hub A', 'House 2', 'Destination'],
    'House 2': ['Hub B', 'House 1', 'Destination'],
    'Destination': ['House 1', 'House 2']
}, 'Warehouse', 'Destination'), ['Warehouse', 'Hub A', 'House 1', 'Destination']);
    assert('no path', FindDirectionRoute({
        A: ['B'],
        B: ['C'],
        C: []
    }, 'A', 'D'), null);
    assert('multiple paths', FindDirectionRoute({
        A: ['B', 'C'],
        B: ['D'],
        C: ['D'],
        D: []
    }, 'A', 'D'), ['A', 'B', 'D']);
    assert('cycle in graph', FindDirectionRoute({
        A: ['B'],
        B: ['C'],
        C: ['A']
    }, 'A', 'C'), ['A', 'B', 'C']);
});