import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
    res.json({ msg: 'Это главная страница'})
};