function Node(element){
    this.element = element;
    this.next = null;
}

function LList(){
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.display = display;
}

function find(item){
    let currNode = this.head;
    while(currNode && currNode.element !== item){
        currNode = currNode.next;
    }
    return currNode;
}
function findPrevious(item){
    let currNode = this.head;
    while(currNode?.next?.element !== item){
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement,item){
    const preNode = this.find(item);
    newNode = new Node(newElement);
    newNode.next = preNode.next;
    preNode.next = newNode;
}

function display(){
    let currNode = this.head.next;
    while(currNode){
        console.log(currNode.element+'->');
        currNode = currNode.next;
    }
}
function remove(item){
    const preNode = this.findPrevious(item);
    if(preNode?.next!==null){
        preNode.next = preNode.next.next;
    }
}


const myPlanList = new LList();
myPlanList.insert('转移手续','head');
myPlanList.insert('离职手续','转移手续');
myPlanList.insert('面试刷题','离职手续');
myPlanList.insert('项目经验','转移手续');
myPlanList.insert('回老家','离职手续');
myPlanList.insert('投递面试','面试刷题');
myPlanList.insert('顺利入职','投递面试');
myPlanList.insert('摆烂几天','离职手续');
myPlanList.insert('治牙齿','投递面试');
myPlanList.insert('交社保','摆烂几天');
myPlanList.remove('摆烂几天');
myPlanList.display();