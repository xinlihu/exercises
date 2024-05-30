function putStr(s){
    process.stdout.write(s.toString());
}
function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
function showGraph(){
    for(var i=0;i<this.vertices;i++){
        putStr(i+'->');
        for(var j=0;j<this.vertices;j++){
            if(this.adj[i][j]!=undefined)
                putStr(this.adj[i][j]+' ');
        }
        putStr('\n')
    }
}
function dfs(v){
    this.marked[v]=true;
    if(this.adj[v]!=undefined){
        putStr("visit vertex: "+v+'\n');
    }
    this.adj[v]?.forEach(w => {
        if(!this.marked[w]){
            this.dfs(w);
        }
    })
}
function bfs(s){
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while(queue.length > 0){
        var v = queue.shift();
        putStr("visit vertex: "+v+'\n')
        this.adj[v].forEach(w=>{
            if(!this.marked[w]){     
                this.marked[w] = true;      
                queue.push(w);
                this.edgeTo[w]=v;
            }
        }); 
    }
}
function pathTo(v){
    let w=v;
    putStr(`0到${v}的逆向最短路径是`)
    while(true){
        putStr(w+'->');
        if(w==0){
            break;
        }
        w=this.edgeTo[w];
    }    
    putStr('\n');
}
function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    this.edgeTo = [];
    for(var i=0;i<this.vertices;i++){
        this.adj[i] = [];
        this.marked[i]= false;
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.pathTo = pathTo;
    this.dfs = dfs;
    this.bfs = bfs;
}

const g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.bfs(0);
g.pathTo(4);