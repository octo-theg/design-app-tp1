import sub from './infrastructure/user-side/ChambresService'

export const greet = (name: string): string => `Hello, ${sub.exaggerate(name, 8)}`

