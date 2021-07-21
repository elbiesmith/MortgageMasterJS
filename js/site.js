// Global Variables and data-set
let usersDefault = [{
    firstName: "John",
    lastName: "Doe",
    userNumber: 1,
    paymentsMade: 0,
    principal: 15000,
    currentBalance: 15000,
    term: 60,
    rate: 3.5,
    moneyDown: 0,
    monthlyPayment: 272.88,
    totalInterest: 1372.57,
    totalCost: (1372.57 + 15000),
    amSchedule: [{
            payment: "$272.88",
            principal: "$229.13",
            interest: "$43.75",
            totalInterest: "$43.75",
            balance: "$14,770.87"
        },
        {
            payment: "$272.88",
            principal: "$229.79",
            interest: "$43.08",
            totalInterest: "$86.83",
            balance: "$14,541.08"
        },
        {
            payment: "$272.88",
            principal: "$230.46",
            interest: "$42.41",
            totalInterest: "$129.24",
            balance: "$14,310.61"
        },
        {
            payment: "$272.88",
            principal: "$231.14",
            interest: "$41.74",
            totalInterest: "$170.98",
            balance: "$14,079.48"
        },
        {
            payment: "$272.88",
            principal: "$231.81",
            interest: "$41.07",
            totalInterest: "$212.05",
            balance: "$13,847.67"
        },
        {
            payment: "$272.88",
            principal: "$232.49",
            interest: "$40.39",
            totalInterest: "$252.44",
            balance: "$13,615.18"
        },
        {
            payment: "$272.88",
            principal: "$233.17",
            interest: "$39.71",
            totalInterest: "$292.15",
            balance: "$13,382.01"
        },
        {
            payment: "$272.88",
            principal: "$233.85",
            interest: "$39.03",
            totalInterest: "$331.18",
            balance: "$13,148.17"
        },
        {
            payment: "$272.88",
            principal: "$234.53",
            interest: "$38.35",
            totalInterest: "$369.53",
            balance: "$12,913.64"
        },
        {
            payment: "$272.88",
            principal: "$235.21",
            interest: "$37.66",
            totalInterest: "$407.19",
            balance: "$12,678.43"
        },
        {
            payment: "$272.88",
            principal: "$235.90",
            interest: "$36.98",
            totalInterest: "$444.17",
            balance: "$12,442.53"
        },
        {
            payment: "$272.88",
            principal: "$236.59",
            interest: "$36.29",
            totalInterest: "$480.46",
            balance: "$12,205.95"
        },
        {
            payment: "$272.88",
            principal: "$237.28",
            interest: "$35.60",
            totalInterest: "$516.06",
            balance: "$11,968.67"
        },
        {
            payment: "$272.88",
            principal: "$237.97",
            interest: "$34.91",
            totalInterest: "$550.97",
            balance: "$11,730.70"
        },
        {
            payment: "$272.88",
            principal: "$238.66",
            interest: "$34.21",
            totalInterest: "$585.19",
            balance: "$11,492.04"
        },
        {
            payment: "$272.88",
            principal: "$239.36",
            interest: "$33.52",
            totalInterest: "$618.70",
            balance: "$11,252.69"
        },
        {
            payment: "$272.88",
            principal: "$240.06",
            interest: "$32.82",
            totalInterest: "$651.52",
            balance: "$11,012.63"
        },
        {
            payment: "$272.88",
            principal: "$240.76",
            interest: "$32.12",
            totalInterest: "$683.64",
            balance: "$10,771.87"
        },
        {
            payment: "$272.88",
            principal: "$241.46",
            interest: "$31.42",
            totalInterest: "$715.06",
            balance: "$10,530.42"
        },
        {
            payment: "$272.88",
            principal: "$242.16",
            interest: "$30.71",
            totalInterest: "$745.78",
            balance: "$10,288.25"
        },
        {
            payment: "$272.88",
            principal: "$242.87",
            interest: "$30.01",
            totalInterest: "$775.78",
            balance: "$10,045.38"
        },
        {
            payment: "$272.88",
            principal: "$243.58",
            interest: "$29.30",
            totalInterest: "$805.08",
            balance: "$9,801.81"
        },
        {
            payment: "$272.88",
            principal: "$244.29",
            interest: "$28.59",
            totalInterest: "$833.67",
            balance: "$9,557.52"
        },
        {
            payment: "$272.88",
            principal: "$245.00",
            interest: "$27.88",
            totalInterest: "$861.55",
            balance: "$9,312.52"
        },
        {
            payment: "$272.88",
            principal: "$245.71",
            interest: "$27.16",
            totalInterest: "$888.71",
            balance: "$9,066.80"
        },
        {
            payment: "$272.88",
            principal: "$246.43",
            interest: "$26.44",
            totalInterest: "$915.15",
            balance: "$8,820.37"
        },
        {
            payment: "$272.88",
            principal: "$247.15",
            interest: "$25.73",
            totalInterest: "$940.88",
            balance: "$8,573.22"
        },
        {
            payment: "$272.88",
            principal: "$247.87",
            interest: "$25.01",
            totalInterest: "$965.88",
            balance: "$8,325.35"
        },
        {
            payment: "$272.88",
            principal: "$248.59",
            interest: "$24.28",
            totalInterest: "$990.17",
            balance: "$8,076.76"
        },
        {
            payment: "$272.88",
            principal: "$249.32",
            interest: "$23.56",
            totalInterest: "$1,013.72",
            balance: "$7,827.4"
        },
        {
            payment: "$272.88",
            principal: "$250.05",
            interest: "$22.83",
            totalInterest: "$1,036.55",
            balance: "$7,577.3"
        },
        {
            payment: "$272.88",
            principal: "$250.78",
            interest: "$22.10",
            totalInterest: "$1,058.66",
            balance: "$7,326.6"
        },
        {
            payment: "$272.88",
            principal: "$251.51",
            interest: "$21.37",
            totalInterest: "$1,080.02",
            balance: "$7,075.1"
        },
        {
            payment: "$272.88",
            principal: "$252.24",
            interest: "$20.64",
            totalInterest: "$1,100.66",
            balance: "$6,822.8"
        },
        {
            payment: "$272.88",
            principal: "$252.98",
            interest: "$19.90",
            totalInterest: "$1,120.56",
            balance: "$6,569.8"
        },
        {
            payment: "$272.88",
            principal: "$253.71",
            interest: "$19.16",
            totalInterest: "$1,139.72",
            balance: "$6,316.1"
        },
        {
            payment: "$272.88",
            principal: "$254.45",
            interest: "$18.42",
            totalInterest: "$1,158.14",
            balance: "$6,061.7"
        },
        {
            payment: "$272.88",
            principal: "$255.20",
            interest: "$17.68",
            totalInterest: "$1,175.82",
            balance: "$5,806.5"
        },
        {
            payment: "$272.88",
            principal: "$255.94",
            interest: "$16.94",
            totalInterest: "$1,192.76",
            balance: "$5,550.5"
        },
        {
            payment: "$272.88",
            principal: "$256.69",
            interest: "$16.19",
            totalInterest: "$1,208.95",
            balance: "$5,293.9"
        },
        {
            payment: "$272.88",
            principal: "$257.44",
            interest: "$15.44",
            totalInterest: "$1,224.39",
            balance: "$5,036.4"
        },
        {
            payment: "$272.88",
            principal: "$258.19",
            interest: "$14.69",
            totalInterest: "$1,239.08",
            balance: "$4,778.2"
        },
        {
            payment: "$272.88",
            principal: "$258.94",
            interest: "$13.94",
            totalInterest: "$1,253.02",
            balance: "$4,519.3"
        },
        {
            payment: "$272.88",
            principal: "$259.69",
            interest: "$13.18",
            totalInterest: "$1,266.20",
            balance: "$4,259.6"
        },
        {
            payment: "$272.88",
            principal: "$260.45",
            interest: "$12.42",
            totalInterest: "$1,278.62",
            balance: "$3,999.1"
        },
        {
            payment: "$272.88",
            principal: "$261.21",
            interest: "$11.66",
            totalInterest: "$1,290.29",
            balance: "$3,737.9"
        },
        {
            payment: "$272.88",
            principal: "$261.97",
            interest: "$10.90",
            totalInterest: "$1,301.19",
            balance: "$3,476.0"
        },
        {
            payment: "$272.88",
            principal: "$262.74",
            interest: "$10.14",
            totalInterest: "$1,311.33",
            balance: "$3,213.2"
        },
        {
            payment: "$272.88",
            principal: "$263.50",
            interest: "$9.37",
            totalInterest: "$1,320.70",
            balance: "$2,949.77"
        },
        {
            payment: "$272.88",
            principal: "$264.27",
            interest: "$8.60",
            totalInterest: "$1,329.30",
            balance: "$2,685.49"
        },
        {
            payment: "$272.88",
            principal: "$265.04",
            interest: "$7.83",
            totalInterest: "$1,337.14",
            balance: "$2,420.45"
        },
        {
            payment: "$272.88",
            principal: "$265.82",
            interest: "$7.06",
            totalInterest: "$1,344.19",
            balance: "$2,154.63"
        },
        {
            payment: "$272.88",
            principal: "$266.59",
            interest: "$6.28",
            totalInterest: "$1,350.48",
            balance: "$1,888.04"
        },
        {
            payment: "$272.88",
            principal: "$267.37",
            interest: "$5.51",
            totalInterest: "$1,355.99",
            balance: "$1,620.67"
        },
        {
            payment: "$272.88",
            principal: "$268.15",
            interest: "$4.73",
            totalInterest: "$1,360.71",
            balance: "$1,352.52"
        },
        {
            payment: "$272.88",
            principal: "$268.93",
            interest: "$3.94",
            totalInterest: "$1,364.66",
            balance: "$1,083.59"
        },
        {
            payment: "$272.88",
            principal: "$269.72",
            interest: "$3.16",
            totalInterest: "$1,367.82",
            balance: "$813.88"
        },
        {
            payment: "$272.88",
            principal: "$270.50",
            interest: "$2.37",
            totalInterest: "$1,370.19",
            balance: "$543.37"
        },
        {
            payment: "$272.88",
            principal: "$271.29",
            interest: "$1.58",
            totalInterest: "$1,371.78",
            balance: "$272.08"
        },
        {
            payment: "$272.88",
            principal: "$272.08",
            interest: "$0.79",
            totalInterest: "$1,372.57",
            balance: "$0.00"
        }

    ]
}, {
    firstName: "Steve",
    lastName: "Martin",
    userNumber: 2,
    paymentsMade: 0,
    principal: 15000,
    currentBalance: 15000,
    term: 60,
    rate: 3.5,
    moneyDown: 0,
    monthlyPayment: 272.88,
    totalInterest: 1372.57,
    totalCost: (1372.57 + 15000),
    amSchedule: [{
            payment: "$272.88",
            principal: "$229.13",
            interest: "$43.75",
            totalInterest: "$43.75",
            balance: "$14,770.87"
        },
        {
            payment: "$272.88",
            principal: "$229.79",
            interest: "$43.08",
            totalInterest: "$86.83",
            balance: "$14,541.08"
        },
        {
            payment: "$272.88",
            principal: "$230.46",
            interest: "$42.41",
            totalInterest: "$129.24",
            balance: "$14,310.61"
        },
        {
            payment: "$272.88",
            principal: "$231.14",
            interest: "$41.74",
            totalInterest: "$170.98",
            balance: "$14,079.48"
        },
        {
            payment: "$272.88",
            principal: "$231.81",
            interest: "$41.07",
            totalInterest: "$212.05",
            balance: "$13,847.67"
        },
        {
            payment: "$272.88",
            principal: "$232.49",
            interest: "$40.39",
            totalInterest: "$252.44",
            balance: "$13,615.18"
        },
        {
            payment: "$272.88",
            principal: "$233.17",
            interest: "$39.71",
            totalInterest: "$292.15",
            balance: "$13,382.01"
        },
        {
            payment: "$272.88",
            principal: "$233.85",
            interest: "$39.03",
            totalInterest: "$331.18",
            balance: "$13,148.17"
        },
        {
            payment: "$272.88",
            principal: "$234.53",
            interest: "$38.35",
            totalInterest: "$369.53",
            balance: "$12,913.64"
        },
        {
            payment: "$272.88",
            principal: "$235.21",
            interest: "$37.66",
            totalInterest: "$407.19",
            balance: "$12,678.43"
        },
        {
            payment: "$272.88",
            principal: "$235.90",
            interest: "$36.98",
            totalInterest: "$444.17",
            balance: "$12,442.53"
        },
        {
            payment: "$272.88",
            principal: "$236.59",
            interest: "$36.29",
            totalInterest: "$480.46",
            balance: "$12,205.95"
        },
        {
            payment: "$272.88",
            principal: "$237.28",
            interest: "$35.60",
            totalInterest: "$516.06",
            balance: "$11,968.67"
        },
        {
            payment: "$272.88",
            principal: "$237.97",
            interest: "$34.91",
            totalInterest: "$550.97",
            balance: "$11,730.70"
        },
        {
            payment: "$272.88",
            principal: "$238.66",
            interest: "$34.21",
            totalInterest: "$585.19",
            balance: "$11,492.04"
        },
        {
            payment: "$272.88",
            principal: "$239.36",
            interest: "$33.52",
            totalInterest: "$618.70",
            balance: "$11,252.69"
        },
        {
            payment: "$272.88",
            principal: "$240.06",
            interest: "$32.82",
            totalInterest: "$651.52",
            balance: "$11,012.63"
        },
        {
            payment: "$272.88",
            principal: "$240.76",
            interest: "$32.12",
            totalInterest: "$683.64",
            balance: "$10,771.87"
        },
        {
            payment: "$272.88",
            principal: "$241.46",
            interest: "$31.42",
            totalInterest: "$715.06",
            balance: "$10,530.42"
        },
        {
            payment: "$272.88",
            principal: "$242.16",
            interest: "$30.71",
            totalInterest: "$745.78",
            balance: "$10,288.25"
        },
        {
            payment: "$272.88",
            principal: "$242.87",
            interest: "$30.01",
            totalInterest: "$775.78",
            balance: "$10,045.38"
        },
        {
            payment: "$272.88",
            principal: "$243.58",
            interest: "$29.30",
            totalInterest: "$805.08",
            balance: "$9,801.81"
        },
        {
            payment: "$272.88",
            principal: "$244.29",
            interest: "$28.59",
            totalInterest: "$833.67",
            balance: "$9,557.52"
        },
        {
            payment: "$272.88",
            principal: "$245.00",
            interest: "$27.88",
            totalInterest: "$861.55",
            balance: "$9,312.52"
        },
        {
            payment: "$272.88",
            principal: "$245.71",
            interest: "$27.16",
            totalInterest: "$888.71",
            balance: "$9,066.80"
        },
        {
            payment: "$272.88",
            principal: "$246.43",
            interest: "$26.44",
            totalInterest: "$915.15",
            balance: "$8,820.37"
        },
        {
            payment: "$272.88",
            principal: "$247.15",
            interest: "$25.73",
            totalInterest: "$940.88",
            balance: "$8,573.22"
        },
        {
            payment: "$272.88",
            principal: "$247.87",
            interest: "$25.01",
            totalInterest: "$965.88",
            balance: "$8,325.35"
        },
        {
            payment: "$272.88",
            principal: "$248.59",
            interest: "$24.28",
            totalInterest: "$990.17",
            balance: "$8,076.76"
        },
        {
            payment: "$272.88",
            principal: "$249.32",
            interest: "$23.56",
            totalInterest: "$1,013.72",
            balance: "$7,827.4"
        },
        {
            payment: "$272.88",
            principal: "$250.05",
            interest: "$22.83",
            totalInterest: "$1,036.55",
            balance: "$7,577.3"
        },
        {
            payment: "$272.88",
            principal: "$250.78",
            interest: "$22.10",
            totalInterest: "$1,058.66",
            balance: "$7,326.6"
        },
        {
            payment: "$272.88",
            principal: "$251.51",
            interest: "$21.37",
            totalInterest: "$1,080.02",
            balance: "$7,075.1"
        },
        {
            payment: "$272.88",
            principal: "$252.24",
            interest: "$20.64",
            totalInterest: "$1,100.66",
            balance: "$6,822.8"
        },
        {
            payment: "$272.88",
            principal: "$252.98",
            interest: "$19.90",
            totalInterest: "$1,120.56",
            balance: "$6,569.8"
        },
        {
            payment: "$272.88",
            principal: "$253.71",
            interest: "$19.16",
            totalInterest: "$1,139.72",
            balance: "$6,316.1"
        },
        {
            payment: "$272.88",
            principal: "$254.45",
            interest: "$18.42",
            totalInterest: "$1,158.14",
            balance: "$6,061.7"
        },
        {
            payment: "$272.88",
            principal: "$255.20",
            interest: "$17.68",
            totalInterest: "$1,175.82",
            balance: "$5,806.5"
        },
        {
            payment: "$272.88",
            principal: "$255.94",
            interest: "$16.94",
            totalInterest: "$1,192.76",
            balance: "$5,550.5"
        },
        {
            payment: "$272.88",
            principal: "$256.69",
            interest: "$16.19",
            totalInterest: "$1,208.95",
            balance: "$5,293.9"
        },
        {
            payment: "$272.88",
            principal: "$257.44",
            interest: "$15.44",
            totalInterest: "$1,224.39",
            balance: "$5,036.4"
        },
        {
            payment: "$272.88",
            principal: "$258.19",
            interest: "$14.69",
            totalInterest: "$1,239.08",
            balance: "$4,778.2"
        },
        {
            payment: "$272.88",
            principal: "$258.94",
            interest: "$13.94",
            totalInterest: "$1,253.02",
            balance: "$4,519.3"
        },
        {
            payment: "$272.88",
            principal: "$259.69",
            interest: "$13.18",
            totalInterest: "$1,266.20",
            balance: "$4,259.6"
        },
        {
            payment: "$272.88",
            principal: "$260.45",
            interest: "$12.42",
            totalInterest: "$1,278.62",
            balance: "$3,999.1"
        },
        {
            payment: "$272.88",
            principal: "$261.21",
            interest: "$11.66",
            totalInterest: "$1,290.29",
            balance: "$3,737.9"
        },
        {
            payment: "$272.88",
            principal: "$261.97",
            interest: "$10.90",
            totalInterest: "$1,301.19",
            balance: "$3,476.0"
        },
        {
            payment: "$272.88",
            principal: "$262.74",
            interest: "$10.14",
            totalInterest: "$1,311.33",
            balance: "$3,213.2"
        },
        {
            payment: "$272.88",
            principal: "$263.50",
            interest: "$9.37",
            totalInterest: "$1,320.70",
            balance: "$2,949.77"
        },
        {
            payment: "$272.88",
            principal: "$264.27",
            interest: "$8.60",
            totalInterest: "$1,329.30",
            balance: "$2,685.49"
        },
        {
            payment: "$272.88",
            principal: "$265.04",
            interest: "$7.83",
            totalInterest: "$1,337.14",
            balance: "$2,420.45"
        },
        {
            payment: "$272.88",
            principal: "$265.82",
            interest: "$7.06",
            totalInterest: "$1,344.19",
            balance: "$2,154.63"
        },
        {
            payment: "$272.88",
            principal: "$266.59",
            interest: "$6.28",
            totalInterest: "$1,350.48",
            balance: "$1,888.04"
        },
        {
            payment: "$272.88",
            principal: "$267.37",
            interest: "$5.51",
            totalInterest: "$1,355.99",
            balance: "$1,620.67"
        },
        {
            payment: "$272.88",
            principal: "$268.15",
            interest: "$4.73",
            totalInterest: "$1,360.71",
            balance: "$1,352.52"
        },
        {
            payment: "$272.88",
            principal: "$268.93",
            interest: "$3.94",
            totalInterest: "$1,364.66",
            balance: "$1,083.59"
        },
        {
            payment: "$272.88",
            principal: "$269.72",
            interest: "$3.16",
            totalInterest: "$1,367.82",
            balance: "$813.88"
        },
        {
            payment: "$272.88",
            principal: "$270.50",
            interest: "$2.37",
            totalInterest: "$1,370.19",
            balance: "$543.37"
        },
        {
            payment: "$272.88",
            principal: "$271.29",
            interest: "$1.58",
            totalInterest: "$1,371.78",
            balance: "$272.08"
        },
        {
            payment: "$272.88",
            principal: "$272.08",
            interest: "$0.79",
            totalInterest: "$1,372.57",
            balance: "$0.00"
        }

    ]
}];
let users = JSON.parse(localStorage.getItem('loanArray')) || usersDefault;
let userNumber = users.length;
let totalInterest = 0;
let totalCost = 0;

let shortTermLoan = {
    firstName: "",
    lastName: "",
    userNumber: users.length,
    paymentsMade: 0,
    principal: 15000,
    currentBalance: 0,
    term: 24,
    rate: 10.3,
    moneyDown: 0,
    monthlyPayment: 0,
    totalInterest: 0,
    totalCost: 0,
    amSchedule: []
};
let userTermLoan = {
    firstName: "",
    lastName: "",
    userNumber: users.length,
    paymentsMade: 0,
    principal: 15000,
    currentBalance: 0,
    term: 24,
    rate: 10.3,
    moneyDown: 0,
    monthlyPayment: 0,
    totalInterest: 0,
    totalCost: 0.00,
    amSchedule: []
};
let longTermLoan = {
    firstName: "",
    lastName: "",
    userNumber: users.length,
    paymentsMade: 0,
    principal: 15000,
    currentBalance: 0,
    term: 72,
    rate: 3.5,
    moneyDown: 0,
    monthlyPayment: 0,
    totalInterest: 0,
    totalCost: 0.00,
    amSchedule: []
};


// payment Calculation (amount * (rate / 1200)) / (1 - Math.pow(1 + rate / 1200, -term));
// interest Calculation balance * (rate / 1200);

function calcMonthlyPayment(loanAmount, loanRate, loanTerm) {
    return (loanAmount * (loanRate / 1200)) / (1 - Math.pow(1 + loanRate / 1200, -loanTerm));

}

function calcInterest(loanBalance, loanRate) {
    return (loanBalance * (loanRate / 1200));
}

function formatNumber(number) {
    let myCurrency = {
        currency: "USD",
        style: "currency"
    };
    return number.toLocaleString('en-US', myCurrency);
}

function displayAmSchedule() {
    let results = '';
    for (let i = 0; i < users[userNumber].amSchedule.length; i++) {
        results += `
        <tr>
            <td>${i+1}</td>
            <td>${users[userNumber].amSchedule[i].payment}</td>
            <td>${users[userNumber].amSchedule[i].principal}</td>
            <td>${users[userNumber].amSchedule[i].interest}</td>
            <td>${users[userNumber].amSchedule[i].totalInterest}</td>
            <td>${users[userNumber].amSchedule[i].balance}</td>
        </tr>`;
    }
    document.getElementById('resultTable').innerHTML = results;

}

function displaySummary() {
    let paymentsMade = document.getElementById('paymentsMade');
    let currentBalance = document.getElementById('currentBalance');
    let totalPrincipal = document.getElementById('totalPrincipal');
    let termLength = document.getElementById('termLength');
    let interestRate = document.getElementById('interestRate');
    let downPayment = document.getElementById('downPayment');
    let totalPrincipalCard = document.getElementById('totalPrincipalCard');
    let totalInterestCard = document.getElementById('totalInterestCard');
    let totalCostCard = document.getElementById('totalCostCard');
    let paymentCard = document.getElementById('paymentCard');
    let userName = document.getElementById('userName');

    userName.innerHTML = `${users[userNumber].lastName}, ${users[userNumber].firstName}`

    paymentsMade.innerHTML = users[userNumber].paymentsMade;
    currentBalance.innerHTML = users[userNumber].currentBalance;
    totalPrincipal.innerHTML = users[userNumber].principal;
    interestRate.innerHTML = users[userNumber].rate;
    termLength.innerHTML = users[userNumber].term;
    downPayment.innerHTML = users[userNumber].moneyDown;

    totalPrincipalCard.innerHTML = users[userNumber].principal;
    totalInterestCard.innerHTML = users[userNumber].totalInterest;
    totalCostCard.innerHTML = users[userNumber].totalCost;
    paymentCard.innerHTML = users[userNumber].monthlyPayment;
}

function displayUserModal() {
    let modalBtn = document.getElementById('btnModal');
    let userList = document.getElementById('userList');
    userList.innerHTML = '';

    for (let i = 0; i < users.length; i++) {
        userList.innerHTML += `<li><a onclick="displayUser(${parseInt(users[i].userNumber)})">${users[i].lastName}, ${users[i].firstName}</a></li>`
    }
    modalBtn.click();

}

function displayUser(number) {
    let modalCloseBtn = document.getElementById('btnClose1');
    let amTable = document.getElementById('resultTable');
    amTable.innerHTML = '';
    userNumber = number - 1;
    modalCloseBtn.click();

    displaySummary();

}

function calculate() {
    // get input from user
    let firstName = document.getElementById('firstNameForm').value;
    let lastName = document.getElementById('lastNameForm').value;
    let loanAmount = validate(parseInt(document.getElementById('loanAmount').value));
    let loanTerm = validate(parseInt(document.getElementById('loanTerm').value));
    let downPayment = validate(parseInt(document.getElementById('downPaymentForm').value));
    let loanRate = validate(parseFloat(document.getElementById('loanRate').value));

    // build longTermLoan, shortTermLoan, userTermLoan
    buildLongTerm(firstName, lastName, loanAmount, loanTerm, downPayment, loanRate);
    buildShortTerm(firstName, lastName, loanAmount, loanTerm, downPayment, loanRate);
    buildUserTerm(firstName, lastName, loanAmount, loanTerm, downPayment, loanRate);

    // update options form    
    // get handle on page
    let shortAmountField = document.getElementById('shortAmount');
    let shortRateField = document.getElementById('shortRate');
    let shortTermField = document.getElementById('shortTerm');
    let shortCostField = document.getElementById('shortCost');

    let userAmountField = document.getElementById('userAmount');
    let userRateField = document.getElementById('userRate');
    let userTermField = document.getElementById('userTerm');
    let userCostField = document.getElementById('userCost');
    
    let longAmountField = document.getElementById('longAmount');
    let longRateField = document.getElementById('longRate');
    let longTermField = document.getElementById('longTerm');
    let longCostField = document.getElementById('longCost');

    shortAmountField.innerHTML = formatNumber(shortTermLoan.principal);
    shortRateField.innerHTML = `${shortTermLoan.rate}%`;
    shortTermField.innerHTML = `${shortTermLoan.term} months`;
    shortCostField.innerHTML = formatNumber(shortTermLoan.totalCost);

    userAmountField.innerHTML = formatNumber(userTermLoan.principal);
    userRateField.innerHTML = `${userTermLoan.rate}%`;
    userTermField.innerHTML = `${userTermLoan.term} months`;
    userCostField.innerHTML = formatNumber(userTermLoan.totalCost);

    longAmountField.innerHTML = formatNumber(longTermLoan.principal);
    longRateField.innerHTML = `${longTermLoan.rate}%`;
    longTermField.innerHTML = `${longTermLoan.term} months`;
    longCostField.innerHTML = formatNumber(longTermLoan.totalCost);
}

function setUserData(data) {
    // get user object from type of loan
    // add user object to local storage
    localStorage.setItem('loanArray', JSON.stringify(data))

    // update the screen

}


// validate numbers
function validate(input) {
    // validate inputs
    if (isNaN(input)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    } else {
        return input;
    }

}
// add validation for names


function makePayment(){
    // get user payment
    // update current balance
    // change style of table row for month payed.
}

function payOffLoan() {
    // get localStorage
    // remove record
    // update userNumbers
    // save to localStorage

}

function generateAmSchedule(loan) {
    let amSchedule = [];
    let interest = 0;

    let monthlyPayment = calcMonthlyPayment(loan.currentBalance, loan.rate, loan.term);
    totalCost = 0;
    totalInterest = 0
    for (let i = 1; i <= loan.term; i++) {
        interest = calcInterest(loan.currentBalance, loan.rate);
        loan.currentBalance -= monthlyPayment - interest;
        totalInterest += interest;
        totalCost += monthlyPayment;
        loan.totalInterest += interest;
        amSchedule.push({
            payment: formatNumber(monthlyPayment),
            principal: formatNumber(monthlyPayment - interest),
            interest: formatNumber(interest),
            totalInterest: formatNumber(loan.totalInterest),
            balance: formatNumber(Math.abs(loan.currentBalance))
        })

    }
    return amSchedule;


}

function buildLongTerm(first, last, amount, term, downPayment, rate) {
    longTermLoan.firstName = first;
    longTermLoan.lastName = last;
    longTermLoan.userNumber = userNumber + 1;
    longTermLoan.moneyDown = downPayment;
    longTermLoan.paymentsMade = 0;
    longTermLoan.principal = amount - longTermLoan.moneyDown;
    longTermLoan.term = 84;
    longTermLoan.rate = 3.5;
    longTermLoan.monthlyPayment = calcMonthlyPayment(longTermLoan.principal, longTermLoan.rate, longTermLoan.term);
    longTermLoan.amSchedule = generateAmSchedule(longTermLoan);
    longTermLoan.currentBalance = longTermLoan.principal - (longTermLoan.monthlyPayment * longTermLoan.paymentsMade);
    longTermLoan.totalCost = totalCost;
    longTermLoan.totalInterest = totalInterest;

    // longTermLoan.totalInterest = totalInterest;
    // longTermLoan.totalCost = totalCost;
}

function buildUserTerm(first, last, amount, term, downPayment, rate) {
    userTermLoan.firstName = first;
    userTermLoan.lastName = last;
    userTermLoan.userNumber = userNumber + 1;
    userTermLoan.moneyDown = downPayment;
    userTermLoan.paymentsMade = 0;
    userTermLoan.principal = amount - userTermLoan.moneyDown;
    userTermLoan.term = term;
    userTermLoan.rate = rate;
    userTermLoan.monthlyPayment = calcMonthlyPayment(userTermLoan.principal, userTermLoan.rate, userTermLoan.term);
    userTermLoan.amSchedule = generateAmSchedule(userTermLoan);
    userTermLoan.currentBalance = userTermLoan.principal - (userTermLoan.monthlyPayment * userTermLoan.paymentsMade);
    userTermLoan.totalCost = totalCost;
    userTermLoan.totalInterest = totalInterest;
    // userTermLoan.totalInterest = totalInterest;
    // userTermLoan.totalCost = totalCost;
}

function buildShortTerm(first, last, amount, term, downPayment, rate) {
    shortTermLoan.firstName = first;
    shortTermLoan.lastName = last;
    shortTermLoan.userNumber = userNumber + 1;
    shortTermLoan.moneyDown = downPayment;
    shortTermLoan.paymentsMade = 0;
    shortTermLoan.principal = amount - shortTermLoan.moneyDown;
    shortTermLoan.term = 24;
    shortTermLoan.rate = 10.3;
    shortTermLoan.monthlyPayment = calcMonthlyPayment(shortTermLoan.principal, shortTermLoan.rate, shortTermLoan.term);
    shortTermLoan.amSchedule = generateAmSchedule(shortTermLoan);
    shortTermLoan.currentBalance = shortTermLoan.principal - (shortTermLoan.monthlyPayment * shortTermLoan.paymentsMade);
    shortTermLoan.totalCost = totalCost;
    shortTermLoan.totalInterest = totalInterest;

    // shortTermLoan.totalInterest = totalInterest;
    // shortTermLoan.totalCost = totalCost;
}