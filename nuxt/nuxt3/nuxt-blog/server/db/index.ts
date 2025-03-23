import mysql from 'mysql2/promise'

interface Options {
  query: string
  values?: any[]
}

// 创建连接池，设置连接池的参数
const pool = mysql.createPool({
  host: 'vfanlee.local',
  user: 'root',
  database: 'nuxt3_blog',
  password: 'vfanlee',
})

export const sql = async ({ query, values }: Options) => {
  const [rows] = await pool.query(query, values)
  return rows
}
