import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
    const { userId } = await auth(); // Usa await para resolver la promesa
    if (!userId) throw new Error("Unauthorized");
    return { userId };
};

export const ourFileRouter = {
    photo: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(async () => await handleAuth()) // Asegúrate de usar async
        .onUploadComplete(({ file }) => {
            console.log("File uploaded:", file);
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
