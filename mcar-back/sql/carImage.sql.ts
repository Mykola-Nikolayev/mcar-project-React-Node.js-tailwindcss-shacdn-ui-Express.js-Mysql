export const carImagesTableQuery = `
    CREATE TABLE IF NOT EXISTS car_images (
        id INT AUTO_INCREMENT PRIMARY KEY,
        url TEXT NOT NULL,
        carId INT NOT NULL,
        FOREIGN KEY (carId) REFERENCES cars(id) ON DELETE CASCADE
    );
`
