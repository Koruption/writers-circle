import { Types } from "./types";
import { PrismaClient } from '@prisma/client'
import { DB } from './db'
export namespace Resources {

    const { instance } = DB;

    const ifNull = (data: any, msg: string) => {
        if (!data) throw new Error(msg)
    }

    export namespace Users {

        export namespace Prompts {

            export const get = async (id: string): Promise<Types.Prompt[]> => {
                const prompts = await instance.prompt.findMany({
                    where: { id: id }
                })
                return prompts;
            }

        }

        export namespace Circles {

            export const get = (id: string): Promise<Types.Circle[]> => {
                throw new Error("Method not implemented.");
            }

        }

        export namespace Posts {

            export const get = (id: string): Promise<Types.Post[]> => {
                throw new Error("Method not implemented.");
            }

        }

        export namespace WorkspaceSettings {

            export const get = (id: string): Promise<Types.WorkspaceSettings> => {
                throw new Error("Method not implemented.");
            }

        }

        export const getOne = async (id: string): Promise<Types.User> => {
            const user = await instance.user.findUnique({
                where: { id: id }
            })
            if (!user) throw new Error('User could not be found')
            return user
        }

        export const create = async (user: Partial<Types.User>): Promise<Types.User> => {
            return await instance.user.create({
                data: user as any
            })
        }

        export const update = (id: string, change: Partial<Types.User>): Promise<Types.User> => {
            throw new Error("Method not implemented.");
        }

        export const del = (id: string): Promise<void> => {
            throw new Error("Method not implemented.");
        }

    }

    export namespace Circles {

        export namespace Prompts {

            export const getOne = (id: string): Promise<Types.Prompt> => {
                throw new Error("Method not implemented.");
            }

        }

        export namespace Members {

            export const get = (id: string): Promise<Types.User[]> => {
                throw new Error("Method not implemented.");
            }

        }

        export const create = (circle: Partial<Types.Circle>): Promise<Types.Circle> => {
            throw new Error("Method not implemented.");
        }

        export const update = (id: string, changes: Partial<Types.Circle>): Promise<Types.Circle> => {
            throw new Error("Method not implemented.");
        }

        export const del = (id: string): Promise<void> => {
            throw new Error("Method not implemented.");
        }

    }

    export namespace Prompts {

        export namespace Posts {

            export const get = (id: string): Promise<Types.Post[]> => {
                throw new Error("Method not implemented.");
            }

        }

        export namespace Comments {

            export const get = (id: string): Promise<Types.Comment[]> => {
                throw new Error("Method not implemented.");
            }

        }

        export namespace Badges {

            export const get = (id: string): Promise<Types.Badge[]> => {
                throw new Error("Method not implemented.");
            }

        }

        export const create = (prompt: Partial<Types.Prompt>): Promise<Types.Prompt> => {
            throw new Error("Method not implemented.");
        }

        export const update = (id: string, changes: Partial<Types.Prompt>): Promise<Types.Prompt> => {
            throw new Error("Method not implemented.");
        }

        export const del = (id: string): Promise<void> => {
            throw new Error("Method not implemented.");
        }

    }

    export namespace Comments {

        export const update = (id: string, changes: Partial<Types.Comment>): Promise<Types.Comment> => {
            throw new Error("Method not implemented.");
        }

        export const del = (id: string): Promise<void> => {
            throw new Error("Method not implemented.");
        }

        export const create = (comment: Partial<Types.Comment>): Promise<Types.Comment> => {
            throw new Error("Method not implemented.");
        }

    }

    export namespace WorspaceSettings {

        export const create = (settings: Partial<Types.WorkspaceSettings>): Promise<Types.WorkspaceSettings> => {
            throw new Error("Method not implemented.");
        }

        export const update = (id: String, changes: Partial<Types.WorkspaceSettings>): Promise<Types.WorkspaceSettings> => {
            throw new Error("Method not implemented.");
        }

    }

    export namespace Badges {

        export const create = (badge: Partial<Types.Badge>): Promise<Types.Badge> => {
            throw new Error("Method not implemented.");
        }

        export const del = (id: string): Promise<void> => {
            throw new Error("Method not implemented.");
        }

    }
}