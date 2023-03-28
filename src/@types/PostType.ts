export interface PostType {
  url?: string
  labels?: string[]
  state?: string
  body: string
  title: string
  html_url: string
  created_at: string
  updated_at?: string
  id: number | string
  user: {
    login: string
  }
}
