var mysql = require('mysql');
var inquirer = require('inquirer');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "sales_db"
});

// con.connect();

// con.query("SELECT * FROM sales", function (err, result) {
//     if (err) throw err;
//     console.log('Query Success!');
//     console.log(result)
// });

// con.end();

inquirer.prompt([
    {
        type: "input",
        message: "Whos info would you like to see?",
        name: "name"
    }
])
    .then(function (inquirerResponse) {
        con.connect();
        var { name } = inquirerResponse;
        console.log(name);
        con.query(`SELECT sales_employee, sale,SUM(sale) OVER(PARTITION BY sales_employee) total_sales
        FROM sales
        WHERE sales_employee = "${name}"`, function (err, result) {
                if (err) throw err;
                console.log('Query Success!');
                console.log(result)
            });
        con.end();
    });