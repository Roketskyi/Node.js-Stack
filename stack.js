class Stack {
  constructor() {
    this.items = [];
  }

  // Додавання елемента на вершину стеку
  push(item) {
    this.items.push(item);
  }

  // Видалення та повернення елемента з вершини стеку
  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
  }

  // Повернення елемента з вершини стеку без видалення
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
  }

  // Видалення всіх елементів зі стеку
  clear() {
    this.items = [];
  }

  // Повернення кількості елементів у стеку
  count() {
    return this.items.length;
  }

  // Повернення кількості елементів у стеку
  size() {
    return this.items.length;
  }

  // Повернення всіх елементів у стеку у вигляді рядка
  toString() {
    return this.items.toString();
  }

  // Перевірка, чи стек порожній
  isEmpty() {
    return this.items.length === 0;
  }
}

// Приклад використання:
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log("peek():", myStack.peek()); // 3
console.log("pop():", myStack.pop()); // 3
console.log("count():", myStack.count()); // 2
console.log("toString():", myStack.toString()); // "1,2"
console.log("size():", myStack.size()); // 2

myStack.clear();
console.log("count() після clear():", myStack.count()); // 0
