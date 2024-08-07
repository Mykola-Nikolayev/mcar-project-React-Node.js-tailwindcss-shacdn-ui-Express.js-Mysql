export const categoryTableQuery = `
        CREATE TABLE IF NOT EXISTS categorys (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            image TEXT;
        )
`