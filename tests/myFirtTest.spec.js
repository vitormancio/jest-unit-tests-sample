const {sum, deleteUserId, findUserById} = require("../utils/helper")


beforeAll(() => {
    console.log("I'm run one time before all")
})

/* beforeEach(() => {
    console.log('running before each test')
}) */

/* afterEach(() => {
    console.log('running after each test')
})
 */

beforeAll(() => {
    console.log("running after all tests have run")
})


describe('Sum of numbers', () => {
    test("1 plus 1 is equal to 2", () => {
        let a = 1;
        let b = 1;
        expect(a+b).toBe(2)
    })
    
    test("5 plus 6 is not 10", () => {
        let a = 5
        let b = 6
        expect(a+b).not.toBe(10)
    })
})

describe('Testing other metchers methods', () => {
    
    test('Is number undefined', () => {
        var number = undefined;

        expect(number).not.toBeDefined();
        expect(number).toBeUndefined(); 
        expect(number).not.toBeNull(); 
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();

    })

    // You can also use it, example:
    /* it('Should expect zero to act like a zero', () => {

    }) */

    test('Shold expect zero to act like a zero', () => {
        let number = 0;

        expect(number).toBeDefined()
        expect(number).not.toBeUndefined()
        expect(number).not.toBeNull()
        expect(number).toBeFalsy()
        expect(number).not.toBeTruthy()

    })

    test('Number Comparison', () => {
        const a = 1;
        const b = 2;

        expect(a+b).toBeGreaterThan(2);
        expect(a+b).toBeGreaterThanOrEqual(3);
        expect(a+b).toBeLessThanOrEqual(5)
        expect(a+b).toBeLessThan(10)
    })

    test('there should be no I in team', () => {
        let string = 'team';

        // You can put in toMatch() one regular expression, example:
        expect(string).not.toMatch(/I/);
    })

    test("there is 'stop' is Cristoper", () => {
        let string = 'Cristoper'

        expect(string).toMatch(/stop/)
    })

    test("the shopping list doesn't have ps4", () => {
        const shoppingList = ["Milk", "Trash bags", "Paper towels", "Iphone"];

        expect(shoppingList).not.toContain('ps4')
        expect(shoppingList).toContain('Milk')
        
    })


})

// testing primitive and reference type equality

describe('Testing Reference equality',() => {
    const user = {
        name:'Clement',
        age:45
    };
     user.age = 45; 

    test('Should return a user object whit age as 45', () => {
        expect(user).toEqual({
            name:'Clement',
            age:45
        })
    })

    test('Shold return a user whit a name and age key', () => {
        expect(user).toEqual(
            expect.objectContaining({
                name:expect.any(String),
                age:expect.any(Number)
            })
        )
    })

    // Testing Array Equality 

    test('Array equality', () => {
        const users = [
            "Vitor",
            "Guilherme",
            "Anselmo"
        ]

        users.push("Édina")

        expect(users).toEqual(["Vitor","Guilherme","Anselmo","Édina"])
        expect(users).toEqual(expect.arrayContaining(['Vitor']))
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]))

        const objectInArray = [
            {
                name:"Vitor",
                age:22
            },
            {
                name:"Anselmo",
                age:60
            },
            {
                name:"Guilherme",
                age:31
            }
        ]

        objectInArray.push({
            name:"Édina",
            age:59
        })

        expect(objectInArray).toEqual
        (expect.arrayContaining(
            [expect.objectContaining({
            name:expect.any(String),
            age:expect.any(Number)
        }
            
        )]))
    })
})

describe('Test imported functions', () => {
    test('Sum function should add 2 numbers', () => {
        expect(sum(5,10)).toBe(15)
    })

    test('delete by id function should delete a user by their id', () => {
        let users = [
            {
                name:"Vitor",
                age:22,
                id:1
            },
            {
                name:"Guilherme",
                age:31,
                id:2
            },
            {
                name:"Anselmo",
                age:60,
                id:3
            },
            
        ]
        expect(deleteUserId(users,3)).toEqual([
            {
                name:"Vitor",
                age:22,
                id:1
            },
            {
                name:"Guilherme",
                age:31,
                id:2
            },
        ])
    })

    test("Finds a user by ID from a list of users", () => {
        let users = [
            {
                name:"Vitor",
                age:22,
                id:1
            },
            {
                name:"Guilherme",
                age:31,
                id:2
            },
            {
                name:"Anselmo",
                age:60,
                id:3
            },
            
        ]
        
        expect(findUserById(users,2)).toEqual({
                name:"Guilherme",
                age:31,
                id:2
        })

        expect(findUserById(users,10)).toBeUndefined()
        expect(users.length).toBe(3)
    })
    
})