type User = {
    readonly id: number;
    username: string;
};

const markUser: User = {
    id: 2412,
    username: "Markello",
};

console.log(markUser.id);

markUser.id = 24;
