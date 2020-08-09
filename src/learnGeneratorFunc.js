// Phần 1:
function* testGeneratorPart1() {
    yield 123;
    // throw error và return là 2 cách để kết thúc generator func
    return 'testGeneratorPart1'; // return sẽ kết thúc generator func và k chạy tiếp nữa => undefined
}

//true way
const iterator1 = testGeneratorPart1();

console.log('1:', iterator1.next()); // => 1: {value: 123, done: false} (lần 1 return ra : `value: 123` ,`done: false` tức là hàm này chưa return và có thể vẫn còn giá trị trả về nữa )
console.log('2:', iterator1.next()); // => 2: {value: "testGenerator", done: true}  (lần 2 return ra : `testGenerator` ,`done: true` tức là hàm này đã chạy hết
console.log('3:', iterator1.next()); // => 2: {value: undefined, done: true}  (lần 3 return ra : undefined ,`done: true` tức là hàm này đã chạy hết

//wrong way
console.log(testGeneratorPart1().next()); // luôn ra kết quả là  {value: 123, done: false} nên phải khai báo biến để nó cùng là 1 generator func
console.log(testGeneratorPart1().next()); // luôn ra kết quả là  {value: 123, done: false} nên phải khai báo biến để nó cùng là 1 generator func

// Phần 2:
function* printName() {
    yield 'printName1';

    yield 'printName2';
}

function* hello() {
    yield 'hello';

    yield* printName(); // yield* là nhường quyền cho 1 generator function khác khi generator function được nhường chạy xong hết thì mới chạy tiếp

    yield 'end';
}

const iteratorHello = hello();

console.log('1:', iteratorHello.next()); // => hello
console.log('2:', iteratorHello.next()); // => printName1
console.log('3:', iteratorHello.next()); // => printName2
console.log('4:', iteratorHello.next()); // => end
