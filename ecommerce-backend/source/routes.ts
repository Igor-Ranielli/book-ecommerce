import { Request, Response, Router } from "express";

import booksController from "./controllers/BooksController";

const routes = Router();

routes.get("/books", booksController.list) 

export default routes