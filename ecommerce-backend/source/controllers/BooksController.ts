import { Request, Response } from "express";

export default {
    list(request: Request, response: Response) {
        const booklist = ['livro1', 'livro2', 'livro3']
        return response.json(booklist)
    }
};