import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions ){

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

}