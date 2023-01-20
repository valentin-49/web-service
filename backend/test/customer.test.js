const {createPool} = require("mysql2/promise");

describe("Database Tests", () => {
    let connection;

    beforeEach(async () => {
        let createTableSQL =
            "CREATE TABLE `customersTest` (`id` INT(11) NOT NULL AUTO_INCREMENT,  'type' INT(11) NOT NULL, 'civility' INT(11) NOT NULL, `lastname` VARCHAR(100) NOT NULL, `firstname` VARCHAR(100) NOT NULL, `email` VARCHAR(100) NOT NULL, `phone` VARCHAR(100) NOT NULL, `moving_date` DATE() NOT NULL, `date_flexible` TINYINT(1) NOT NULL, `source` INT(11) NOT NULL, `intern_notes` VARCHAR(200) NOT NULL, `departure_adress` INT(11) NOT NULL, `arrival_adress` INT(11) NOT NULL, PRIMARY KEY (`id`)) ENGINE = InnoDB;";

        connection = await createPool({
            host: "localhost",
            user: "root",
            password: "",
            database: "dempartner"
        });
        console.log("Connected to database");

        await connection.query(createTableSQL);
    });

    it("Test CREATE and READ", async () => {
        try {
            const total_test_users = 3;
            let insertQueries = [];

            for (let i = 0; i < total_test_users; i++) {
                let insertSQL = `INSERT INTO customersTest (id, type, civility, lastname, firstname, email, phone, moving_date, date_flexible, source, intern_notes, departure_adress, arrival_adress) VALUES (NULL, 1, 2, 'Gardie', 'Kévin', 'gardie.kevin@gmail.com', '0781196619', 2022-9-12, 1, 2, 'Des notes internes pour ne rien dire', 1, 2);`;

                insertQueries.push(connection.query(insertSQL));
            }

            await Promise.all(insertQueries);

            const [rows, fields] = await connection.query("SELECT * FROM customersTest");

            expect(rows.length).toBe(total_test_users);
        } catch (error) {
            console.log(error);
            let dropTableSQL = "DROP TABLE IF EXISTS `customersTest`";
            await connection.query(dropTableSQL);
            await connection.end();
        }
    }, 60000);

    it("Test UPDATE and DELETE", async () => {
        try {
            let type = 1;
            let civility = 2;
            let lastname = "Test customer";
            let firstname = "Customer test";
            let email = "test@customer.com";
            let phone = "0123456789";
            let moving_date = 2022 - 9 - 12;
            let date_flexible = 1;
            let source = 3;
            let intern_notes = "Des notes internes pour le test";
            let departure_adress = "1";
            let arrival_adress = "2";

            let nameUpdate = "My Test Customer";

            let insertSQL = `INSERT INTO customersTest (id, type, civility, lastname, firstname, email, phone, moving_date, date_flexible, source, intern_notes, departure_adress, arrival_adress) VALUES (NULL, '${type}', '${civility}', '${lastname}', '${firstname}', '${email}', '${phone}', '${moving_date}', '${date_flexible}', '${source}', '${intern_notes}', '${departure_adress}', '${arrival_adress}');`;

            await connection.query(insertSQL);

            //Run and test update
            let updateSQL = `UPDATE customersTest SET lastname='${nameUpdate}' WHERE email='${email}'`;
            await connection.query(updateSQL);

            const [rows, fields] = await connection.query("SELECT * FROM customersTest");
            expect(rows[0].name).toBe(nameUpdate);

            //Run and test delete
            let deleteSQL = `DELETE FROM customersTest WHERE email='${email}'`;
            await connection.query(deleteSQL);

            const [allrows] = await connection.query("SELECT * FROM customersTest");
            expect(allrows.length).toBe(0);
        } catch (error) {
            console.log(error);
            let dropTableSQL = "DROP TABLE IF EXISTS `customersTest`";
            await connection.query(dropTableSQL);
            await connection.end();
        }
    }, 60000);

    afterEach(async () => {
        let dropTableSQL = "DROP TABLE IF EXISTS `customersTest`";
        await connection.query(dropTableSQL);
        await connection.end();
    });
});

// TODO voir pour l'erreur de syntaxe