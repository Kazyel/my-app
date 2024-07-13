import { Context } from "hono";

export const validLimit = (
    value: Record<string, string> | Record<string, string | undefined>,
    c: Context
) => {
    const limit = value["limit"];

    if (!limit || isNaN(Number(limit))) {
        return c.json(
            { message: "Limit must be a number and at most 50 or less." },
            400
        );
    }

    return limit;
};
