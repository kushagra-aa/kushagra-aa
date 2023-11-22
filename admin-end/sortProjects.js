const fs = require("fs");

// File system helpers

function readFile(path, callback) {
  fs.readFile(path, "utf8", (err, fileData) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    try {
      callback(fileData);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
    }
  });
}

function writeFile(path, data) {
  fs.writeFile(path, data, "utf8", (writeErr) => {
    if (writeErr) {
      console.error("Error writing file:", writeErr);
    } else {
      console.log("File successfully modified and saved.");
    }
  });
}

// Date Format '17-05-2022'
function getDatefromString(dateString) {
  const [day, month, year] = dateString.split(/[\s/:-]/).map(Number);
  return new Date(year, month - 1, day);
}

const sortProjectsAction = (projects) =>
  projects.sort((a, b) => {
    const dateA = getDatefromString(a.completed_at);
    const dateB = getDatefromString(b.completed_at);

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });

function sortProjects(filePath) {
  readFile(filePath, (fileData) => {
    const jsonData = JSON.parse(fileData);
    const modifiedData = JSON.stringify(sortProjectsAction(jsonData), null, 2);
    writeFile(filePath, modifiedData);
  });
}

sortProjects("./../front-end/src/dummyData/projects.json");
