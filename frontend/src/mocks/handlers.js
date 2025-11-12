import { rest } from "msw";

const baseURL = "api/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/)`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 24,
                username: "faith",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 24,
                profile_image:
                 "https://res.cloudinary.com/dibjhrwcc/image/upload/v1/media/../default_profile_aacphz",
            })
        )
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];