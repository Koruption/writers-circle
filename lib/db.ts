import { PrismaClient } from '@prisma/client'

export namespace DB {

    export let instance: PrismaClient;

    export const create = async () => {
        if (instance) throw new Error('A DB instance has already been initialized');
        instance = new PrismaClient()
        return instance;
    }
}