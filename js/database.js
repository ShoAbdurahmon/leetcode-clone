const problems = [
	{
        title: "1. Sum of Array",
		definition: 'make a function sum that finds the sum of numbers',
        beggining: 'function sum(array) {}',
        func: "sum",
		tests: [
			{
                test: [2,3,4],
                answer: 9
            },
            {
                test: [2,3,4, 5],
                answer: 14
            },
            {
                test: [1,2,3,4],
                answer: 10
            },
            {
                test: [2,3,4,1],
                answer: 10
            },
            {
                test: [2,3,4, 4],
                answer: 13
            },
            {
                test: [2,3,4, 5],
                answer: 14
            },
            {
                test: [2,3,4, 1, 1],
                answer: 11
            },
            {
                test: [2,3,4, 0],
                answer: 9
            },
            {
                test: [2,3,4, 10],
                answer: 19
            },
            {
                test: [2,3,4, 11],
                answer: 20
            }
    
		]
	},
    {
        title: "2. Faktorial",
        definition: 'Berilgan Sonning Faktorialini hisoblash!',
        beggining: 'function faktorial(number) {}',
        func: "faktorial",


        
        tests: [
            {
                test: 5,
                answer: 120
            },
            {
                test: 2,
                answer: 4
            },
            {
                test: 3,
                answer:  6
            },
            {
                test: 4,
                answer: 24
            },
            {
                test: 6,
                answer: 720
            },
            {
                test: 7,
                answer: 5040
            },
            {
                test: 8,
                answer: 40320
            },
            {
                test: 9,
                answer: 362880
            },
            {
                test: 10,
                answer: 3628800
            },
            {
                test: 11,
                answer: 39916800
            }
    
        ]
    },
    {
        title: "3. Kvadrat",
        definition: 'Berilgan sonning kvadratini hisoblash!',
        beggining: 'function kvadrat(number) {}',
        func: "kvadrat",


        tests: [
            {
                test: 2,
                answer: 4
            },
            {
                test: 3,
                answer: 9
            },
            {
                test: 4,
                answer: 16
            },
            {
                test: 5,
                answer: 25
            },
            {
                test: 6,
                answer: 36
            },
            {
                test: 7,
                answer: 49
            },
            {
                test: 8,
                answer: 64
            },
            {
                test: 9,
                answer: 81
            },
            {
                test: 10,
                answer: 100
            },
            {
                test: 11,
                answer: 121
            }
    
        ]
    },
    {
        title: "4. The Largest",
        definition: 'Array ichida eng katta Sonni topish',
        beggining: 'function largest(array) {}',
        func: "largest",


        tests: [
            {
                test: [1,2,3,4],
                answer: 4
            },
            {
                test: [1,3,46,7,7,8],
                answer: 46
            },
            {
                test: [123, 234, 345],
                answer: 345
            },
            {
                test: [2,3,4,1, 55, 77, 22, 88],
                answer: 88
            },
            {
                test: [2,3,4, 4, 11, 22, 33, 44, 500],
                answer: 500
            },
            {
                test: [2,3,4, 5, 1000,  3213, 9000],
                answer: 9000
            },
            {
                test: [2,3,4, 1, 1, 1000, 876, 5261, 6789],
                answer: 6789
            },
            {
                test: [2,3,4, 0, -1 , -99, 123],
                answer: 123
            },
            {
                test: [2,3,4, 10, 999],
                answer: 999
            },
            {
                test: [2,3,4, 11, 9009],
                answer: 9009
            }
        ]
    },
    {
        title: "5. The Smallest",
        definition: 'Array ichida eng kichik Sonni topish',
        beggining: 'function smallest(array) {}',
        func: "smallest",

        tests: [
            {
                test: [1,2,3,4],
                answer: 1
            },
            {
                test: [1,3,46,7,7,8],
                answer: 1
            },
            {
                test: [123, 234, 345],
                answer: 123
            },
            {
                test: [22,3,41, 55, 77, 22, 88],
                answer: 3
            },
            {
                test: [2,3,4, 4, 11, 22, 33, 44, 500],
                answer: 2
            },
            {
                test: [233,23,433, 54, 1000,  3213, 9000],
                answer: 23
            },
            {
                test: [2,3,4, 1, 1, 1000, 876, 5261, 6789],
                answer: 1
            },
            {
                test: [2,3,4, 0, -1 , -99, 123],
                answer: -99
            },
            {
                test: [2,3,4, -10, 999],
                answer: -10
            },
            {
                test: [2,3,4, 11, 9009],
                answer: 2
            }
    
        ]
    },
]


