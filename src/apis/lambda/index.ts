import { useContext } from '@midwayjs/hooks'
import { Context } from '@midwayjs/faas'

function useFaaSContext() {
  return useContext<Context>()
}

export default async () => {
  return {
    message: 'Hello World',
    method: useFaaSContext().method,
  }
}

export const get = async () => {
  return 'get'
}

export const post = async (name: string) => {
  return 'post' + name
}
