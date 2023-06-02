import sub from 'src/use-cases/ChambresService'

export const greet = (name: string): string => `Hello, ${sub.exaggerate(name, 8)}`

