const LinkedList = require("./linkedList");
describe("#insertAtHead", () => {
  test("It ads an element at the begenning of the list", () => {
    const ll = new LinkedList();

    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("With Index<0", () => {
    test("It returns null", () => {
      const ll = LinkedList.formValues(10, 20);
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });
  describe("With Index>=Length", () => {
    test("It returns null", () => {
      const ll = LinkedList.formValues(10, 20);
      expect(ll.getByIndex(2)).toBeNull();
    });
  });
});

describe("#insertAtIndex", () => {
  describe("With Index<0", () => {
    test("It returns null", () => {
      const ll = LinkedList.formValues(10, 20);
      ll.insertAtIndex(6, 80);
      expect(ll.length).toBe(2);
    });
  });
  describe("With Index>=Length", () => {
    test("It returns null", () => {
      const ll = LinkedList.formValues(10, 20);
      ll.insertAtIndex(-6, 80);
      expect(ll.length).toBe(2);
    });
  });
  describe("With Index>=Length", () => {
    test("It returns value", () => {
      const ll = LinkedList.formValues(10, 20);
      ll.insertAtIndex(1, 80);
      expect(ll.length).toBe(3);
    });
  });
  describe("With Index>=Length", () => {
    test("It returns value", () => {
      const ll = LinkedList.formValues(10, 20);
      ll.insertAtIndex(0, 80);
      expect(ll.length).toBe(3);
      expect(ll.head.value).toBe(80);
      expect(ll.head.next.value).toBe(10);
    });
  });
});

describe("#removeHead", () => {
  test("It removes an element from head of the list", () => {
    
    const ll = LinkedList.formValues(10, 20);
    ll.removeHead();
    
    expect(ll.length).toBe(1);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBeNull;
  });
});