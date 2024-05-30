function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.count = 1;
}

function show(){
    return this.data+'count='+this.count;
}

function BST(){
    this.root = null;
    this.insert = insert;
    this.remove = remove;
    this.find = find;
    this.update = update;
}

function insert(data){
    var n = new Node(data, null, null);
    if(this.root == null){
        this.root = n;
    }else{
        let current = this.root;
        let parent;
        while(true){
            parent = current;
            if(data < parent.data){
                current = current.left;
                if(current === null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current === null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node){
    if(node !== null){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}
function preOrder(node){
    if(node!==null){
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}
function postOrder(node){
    if(node!==null){
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.show())
    }
}

function remove(data){
    this.root = removeNode(this.root,data);
}
function removeNode(node,data){
    if(node === null){
        return null;
    }
    if(node.data ===data){
        // 找到了节点
        if(node.left === null && node.right === null){
            return null;
        }
        // 只有右节点
        if(node.left === null){
            return node.right;
        }
        // 只有左节点
        if(node.right === null){
            return node.left;
        }
        // 有两个子节点的节点
        const tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right,tempNode.data);
        return node;
    }else if(data < node.data){
        node.left = removeNode(node.left,data);
        return node;
    }else{
        node.right = removeNode(node.right,data);
        return node;
    }
}
function find(data){
    let currNode = this.root;
    while(true){
        if(currNode === null){
            return null;
        }
        if(currNode.data === data){
            return currNode;
        }else if(currNode.data > data){
            currNode = currNode.left;
        }else{
            currNode = currNode.right;
        }
    }
}
function getSmallest(node){
    while(node!==null){
        node = node.left;
    }
    return node;
}
function update(data){
    var grade = this.find(data);
    grade.count ++;
    return grade;
}

const tree = new BST();
const scores = [100,96,98,97,95,93,80,95,80,85,86,96,79,95,95,88,81,69,93,61,59,60,79]
scores.forEach(i=>{
    if(tree.find(i)){
        tree.update(i);
    }else{
        tree.insert(i);
    }
});
preOrder(tree.root);
