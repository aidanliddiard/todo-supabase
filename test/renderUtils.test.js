// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderTodo } from '../render-utils.js';

const test = QUnit.test;

test('time to test renderTodo incomplete', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="incomplete todo">Laundry</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTodo ({
        todo: 'Laundry',
        complete: false,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('time to test renderTodo complete', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="complete todo">Laundry</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTodo ({
        todo: 'Laundry',
        complete: true,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
