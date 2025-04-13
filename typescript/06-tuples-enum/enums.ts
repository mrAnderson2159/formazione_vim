enum OrderStatus {
    PENDING, // 0
    SHIPPED, // 1
    DELIVERED, // 2
    RETURNED, // 3
}

const orderStatus = OrderStatus.PENDING;

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED;
}

enum CustomStart {
    a = 34,
    b, // 35
    c, // 36
}

enum CustomInBetween {
    a, // 0
    b = 100, // 100
    c, // 101
    d, // 102
}

enum CustomString {
    apple = "apple",
    banana = "banana",
    cherry = "cherry",
}

enum CustomStringWithNumber { // Please, don't use this
    apple = "apple",
    banana = 2,
    cherry = "cherry",
}

// Enums are objects, if we want something more C-like, we can use const enums
const enum GameStatus {
    STARTED,
    PAUSED,
    STOPPED,
}
const gameStatus = GameStatus.STARTED; // 0
