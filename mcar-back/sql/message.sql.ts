export const messageTableQuery = `
    CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        firstname VARCHAR(255) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        address TEXT,
        carId INT NOT NULL,
        FOREIGN KEY (carId) REFERENCES cars(id) ON DELETE CASCADE
    );
`