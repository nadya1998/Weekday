const array = [
    {
        orderId: 554,
        creationDate: "2017-03-25T10:35:20", // Saturday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.00}
        ]
    },
    {
        orderId: 555,
        creationDate: "2017-03-25T11:24:20", // Saturday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 1, unitPrice: 3.00},
            {productId: 1746, name: 'Eraser', quantity: 1, unitPrice: 1.00}
        ]
    },
    {
        orderId: 453,
        creationDate: "2017-03-27T14:53:12", // Monday
        orderLines: [
            {productId: 5723, name: 'Pen', quantity: 4, unitPrice: 4.22},
            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.12},
            {productId: 3433, name: 'Erasers Set', quantity: 1, unitPrice: 6.15}
        ]
    },
    {
        orderId: 431,
        creationDate: "2017-03-20T12:15:02", // Monday
        orderLines: [
            {productId: 5723, name: 'Pen', quantity: 7, unitPrice: 4.22},
            {productId: 3433, name: 'Erasers Set', quantity: 2, unitPrice: 6.15}
        ]
    },
    {
        orderId: 690,
        creationDate: "2017-03-26T11:14:00", // Sunday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 4, unitPrice: 3.12},
            {productId: 4098, name: 'Marker', quantity: 5, unitPrice: 4.50}
        ]
    }
];

const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let resultMap = new Map([
    ['Monday', 0],
    ['Tuesday', 0],
    ['Wednesday', 0],
    ['Thursday', 0],
    ['Friday', 0],
    ['Saturday', 0],
    ['Sunday', 0]
]);

function amountOfProduct(id, elem) {
    for (let i = 0; i < elem.length; i++){
        if('orderId' in elem[i]){
            const date = new Date(elem[i].creationDate).getDay();
            const weekDay = week[date];
            const resultQuantity = amountOfProduct(id, elem[i].orderLines);
            const sum = resultMap.get(weekDay) + resultQuantity;
            resultMap.set(weekDay, sum);
        } else if(elem[i].productId === id){
            const quantity = elem[i].quantity;
            return quantity;
        } else if(i === elem.length - 1){
            return 0;
        }
    }
    console.log(resultMap);
    return resultMap;
}
            
amountOfProduct(9872, array);

