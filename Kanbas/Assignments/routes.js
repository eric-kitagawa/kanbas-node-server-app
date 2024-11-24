import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.post("/api/assignments", (req, res) => {
        const assignment = dao.createAssignment(req.body);
        res.json(assignment);
    });

    app.get("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignment = dao.findAssignmentById(assignmentId);
        if (!assignment) {
            res.status(404).send({ error: "Assignment not found" });
        } else {
            res.json(assignment);
        }
    });

    app.get("/api/assignments/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignments = dao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    });

    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignment = dao.updateAssignment(assignmentId, req.body);
        if (!assignment) {
            res.status(404).send({ error: "Assignment not found" });
        } else {
            res.json(assignment);
        }
    });

    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const result = dao.deleteAssignment(assignmentId);
        res.json(result);
    });
}
