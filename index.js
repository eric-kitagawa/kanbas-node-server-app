import session from "express-session";
import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import "dotenv/config";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";

const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:3000",
    })
);

app.use(express.json());

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
        secure: process.env.NODE_ENV !== "development",
        httpOnly: true,
        domain: process.env.NODE_ENV === "production" ? process.env.NODE_SERVER_DOMAIN : undefined,
    },
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
}
app.use(session(sessionOptions));

app.use((req, res, next) => {
    console.log("Incoming Request:");
    console.log("URL:", req.url);
    console.log("Method:", req.method);
    console.log("Session ID:", req.sessionID);
    console.log("Session Data:", req.session);
    console.log("Cookies in Request:", req.headers.cookie);
    next();
});

Lab5(app);
UserRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Hello(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000);

