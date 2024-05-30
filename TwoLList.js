function Node(element){
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList(){
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}

function find(item){
    let currNode = this.head;
    while(currNode && currNode.element !== item){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement,item){
    const newNode = new Node(newElement);
    const currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode; 
    newNode.previous = currNode;
    if(newNode.next !==null){
        newNode.next.previous = newNode;
    }
}

function remove(item){
    const currNode = this.find(item);
    if(currNode.next !==null){
        currNode.next.previous = currNode.previous;
    }
    if(currNode.previous !== null){
        currNode.previous.next = currNode.next;
    }
    currNode.previous = null;
    currNode.next = null;
}

function display(){
    let currNode = this.head;
    while(currNode.next !== null){
        console.log(currNode.next.element+'->');
        currNode = currNode.next;
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

