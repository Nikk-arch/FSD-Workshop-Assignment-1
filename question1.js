const fs = require("fs");

const filePath = "example.txt";

// Method 1: Using fs.existsSync()
if (fs.existsSync(filePath)) {
    console.log("File exists.");
} else {
    console.log("File does not exist.");
}

// Method 2: Using fs.readFile() and handling its error
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log("Error while reading the file:", err.message);
        return;
    }

    console.log("File content:", data);
});
