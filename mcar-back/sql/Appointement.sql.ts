
export const AppointementTableQuery = `
    CREATE TABLE IF NOT EXISTS appointments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        contact VARCHAR(50) NOT NULL,
        address1 VARCHAR(255) NOT NULL,
        address2 VARCHAR(255),
        city VARCHAR(100) NOT NULL,
        postalCode VARCHAR(20) NOT NULL,
        province VARCHAR(100) NOT NULL,
        interest VARCHAR(255) NOT NULL,
        receiveNotifState VARCHAR(50) NOT NULL,
        selectedTimer VARCHAR(50) NOT NULL,
        specifiedTime VARCHAR(50) NOT NULL,
        dateFrom DATE NOT NULL,
        dateTo DATE NOT NULL
    );
`