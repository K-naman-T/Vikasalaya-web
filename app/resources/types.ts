export interface Resource {
  title: string
  description: string
  url?: string
  date?: string
  type?: 'video' | 'article' | 'report' | 'publication' | 'facebook' | 'gallery' | 'newsletter' | 'policy'
  category?: string
  folders?: string[]
} 