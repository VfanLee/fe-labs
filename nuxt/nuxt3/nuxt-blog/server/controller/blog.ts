import type { H3Event } from 'h3'
import * as BlogModel from '@/server/model/blog'

export const read = async () => {
  try {
    const result = await BlogModel.read()

    return {
      data: result,
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '出了些问题',
    })
  }
}

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt)
    const result = await BlogModel.create({
      title: body.title,
      content: body.content,
    })

    return {
      data: result,
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '出了些问题',
    })
  }
}

export const detail = async (evt: H3Event) => {
  try {
    const result = await BlogModel.detail(evt.context.params?.id as string)

    return {
      data: result,
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '出了些问题',
    })
  }
}

export const update = async (evt: H3Event) => {
  try {
    const body = await readBody(evt)
    const result = await BlogModel.update(evt.context.params?.id as string, {
      title: body.title,
      content: body.content,
    })

    return {
      data: result,
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '出了些问题',
    })
  }
}

export const remove = async (evt: H3Event) => {
  try {
    const result = await BlogModel.remove(evt.context.params?.id as string)

    return {
      data: result,
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '出了些问题',
    })
  }
}
