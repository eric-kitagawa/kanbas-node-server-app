import assignments from "../Database/assignments.js";

export const createAssignment = (assignment) => {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    assignments.push(newAssignment);
    return newAssignment;
};

export const findAssignmentById = (assignmentId) => {
    return assignments.find((assignment) => assignment._id === assignmentId);
};

export const findAssignmentsForCourse = (course) => {
    console.log("Assignments data:", assignments);
    console.log("findAssignmentsForCourse called with courseId:", course);
    return assignments.filter((assignment) => assignment.course === course);
};

export const updateAssignment = (assignmentId, updates) => {
    const index = assignments.findIndex((assignment) => assignment._id === assignmentId);
    if (index === -1) return null;
    assignments[index] = { ...assignments[index], ...updates };
    return assignments[index];
};

export const deleteAssignment = (assignmentId) => {
    const index = assignments.findIndex((assignment) => assignment._id === assignmentId);
    if (index === -1) return { success: false, message: "Assignment not found" };
    assignments.splice(index, 1);
    return { success: true };
};
