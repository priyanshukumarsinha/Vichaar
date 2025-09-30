
import {pool} from '../tests/setupTestDB'

describe("User Table", () => {

    beforeAll(() => {
        // Code to set up database connection
        pool.connect();
        console.log("Connected to the database");
    });

    beforeEach(()=>{
        // Code to start transaction during this test
        pool.query('BEGIN');
    });

    afterEach(()=>{
        // Rollback, reset to initial state
        pool.query('ROLLBACK')
    });

    afterAll(()=>{
        pool.end();
    });


    // TEST 1: Check if user table exists
    test("SELECT * FROM user", async() =>{
        const result = await pool.query('SELECT * FROM "user";');
        expect(result).toBeDefined();
    })
});